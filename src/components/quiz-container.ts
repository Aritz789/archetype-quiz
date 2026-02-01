import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { QuizState, QuizQuestion } from '../types/index.js';
import './quiz-progress.js';
import './quiz-question.js';

@customElement('quiz-container')
export class QuizContainer extends LitElement {
  @property({ type: Object }) state: QuizState | null = null;
  @property({ type: Array }) questions: QuizQuestion[] = [];

  createRenderRoot() {
    return this;
  }

  private get currentQuestion(): QuizQuestion | undefined {
    if (!this.state) return undefined;
    return this.questions[this.state.currentQuestionIndex];
  }

  private get selectedAnswerId(): string | null {
    if (!this.state || !this.currentQuestion) return null;
    return this.state.answers[this.currentQuestion.id] ?? null;
  }

  private handleBack() {
    this.dispatchEvent(new CustomEvent('previous-question', { bubbles: true, composed: true }));
  }

  render() {
    if (!this.state || !this.currentQuestion) {
      return html`<div>Loading...</div>`;
    }

    const { currentQuestionIndex } = this.state;
    const totalQuestions = this.questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    return html`
      <main class="quiz">
        <header class="quiz-header">
          <div class="quiz-progress-info">
            <span class="quiz-progress-count">
              Question ${currentQuestionIndex + 1} of ${totalQuestions}
            </span>
          </div>
          <quiz-progress .progress=${progress}></quiz-progress>
        </header>

        <quiz-question
          .question=${this.currentQuestion}
          .selectedAnswerId=${this.selectedAnswerId}
        ></quiz-question>

        <nav class="quiz-nav">
          <button
            class="quiz-nav-back"
            @click=${this.handleBack}
            ?disabled=${currentQuestionIndex === 0}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 2L5 8l6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back
          </button>
          <span></span>
        </nav>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'quiz-container': QuizContainer;
  }
}
