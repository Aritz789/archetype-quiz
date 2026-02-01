import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { AppView, QuizState, QuizResult } from '../types/index.js';
import { questions } from '../data/questions.js';
import { calculateResults } from '../utils/scoring.js';
import {
  saveQuizState,
  loadQuizState,
  clearQuizState,
  saveQuizResult,
  loadQuizResult,
  clearQuizResult
} from '../utils/storage.js';
import './landing-page.js';
import './quiz-container.js';
import './results-page.js';

@customElement('archetype-app')
export class ArchetypeApp extends LitElement {
  @state() private view: AppView = 'landing';
  @state() private quizState: QuizState | null = null;
  @state() private results: QuizResult | null = null;

  // Use light DOM for global CSS
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadSavedState();
  }

  private loadSavedState() {
    // Check for saved results first
    const savedResult = loadQuizResult();
    if (savedResult) {
      this.results = savedResult;
      this.view = 'results';
      return;
    }

    // Check for in-progress quiz
    const savedState = loadQuizState();
    if (savedState) {
      this.quizState = savedState;
      this.view = 'quiz';
    }
  }

  private handleStartQuiz() {
    this.quizState = {
      currentQuestionIndex: 0,
      answers: {},
      startedAt: Date.now()
    };
    this.view = 'quiz';
    saveQuizState(this.quizState);
  }

  private handleAnswerSelected(e: CustomEvent<{ questionId: string; answerId: string }>) {
    if (!this.quizState) return;

    const { questionId, answerId } = e.detail;

    this.quizState = {
      ...this.quizState,
      answers: {
        ...this.quizState.answers,
        [questionId]: answerId
      }
    };

    saveQuizState(this.quizState);

    // Auto-advance after a short delay
    setTimeout(() => {
      this.handleNextQuestion();
    }, 300);
  }

  private handleNextQuestion() {
    if (!this.quizState) return;

    if (this.quizState.currentQuestionIndex < questions.length - 1) {
      this.quizState = {
        ...this.quizState,
        currentQuestionIndex: this.quizState.currentQuestionIndex + 1
      };
      saveQuizState(this.quizState);
    } else {
      // Quiz complete
      this.handleQuizComplete();
    }
  }

  private handlePreviousQuestion() {
    if (!this.quizState || this.quizState.currentQuestionIndex === 0) return;

    this.quizState = {
      ...this.quizState,
      currentQuestionIndex: this.quizState.currentQuestionIndex - 1
    };
    saveQuizState(this.quizState);
  }

  private handleQuizComplete() {
    if (!this.quizState) return;

    const results = calculateResults(this.quizState.answers, questions);
    this.results = results;
    this.view = 'results';

    clearQuizState();
    saveQuizResult(results);
  }

  private handleRetakeQuiz() {
    clearQuizResult();
    clearQuizState();
    this.results = null;
    this.quizState = null;
    this.view = 'landing';
  }

  render() {
    switch (this.view) {
      case 'landing':
        return html`
          <landing-page @start-quiz=${this.handleStartQuiz}></landing-page>
        `;

      case 'quiz':
        return html`
          <quiz-container
            .state=${this.quizState}
            .questions=${questions}
            @answer-selected=${this.handleAnswerSelected}
            @previous-question=${this.handlePreviousQuestion}
          ></quiz-container>
        `;

      case 'results':
        return html`
          <results-page
            .results=${this.results}
            @retake-quiz=${this.handleRetakeQuiz}
          ></results-page>
        `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'archetype-app': ArchetypeApp;
  }
}
