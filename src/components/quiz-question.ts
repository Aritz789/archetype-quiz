import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { QuizQuestion as QuizQuestionType, QuizAnswer } from '../types/index.js';

@customElement('quiz-question')
export class QuizQuestionComponent extends LitElement {
  @property({ type: Object }) question!: QuizQuestionType;
  @property({ type: String }) selectedAnswerId: string | null = null;

  createRenderRoot() {
    return this;
  }

  private handleAnswerClick(answer: QuizAnswer) {
    this.dispatchEvent(new CustomEvent('answer-selected', {
      detail: { questionId: this.question.id, answerId: answer.id },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    if (!this.question) return null;

    return html`
      <article class="quiz-question">
        <h2 class="quiz-question__text">${this.question.text}</h2>
        ${this.question.subtext
          ? html`<p class="quiz-question__subtext">${this.question.subtext}</p>`
          : null}
        <div class="quiz-question__answers" role="listbox">
          ${this.question.answers.map(answer => html`
            <button
              class="quiz-answer ${this.selectedAnswerId === answer.id ? 'selected' : ''}"
              role="option"
              aria-selected=${this.selectedAnswerId === answer.id}
              @click=${() => this.handleAnswerClick(answer)}
            >
              ${answer.text}
            </button>
          `)}
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'quiz-question': QuizQuestionComponent;
  }
}
