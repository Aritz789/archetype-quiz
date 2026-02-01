import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('quiz-progress')
export class QuizProgress extends LitElement {
  @property({ type: Number }) progress = 0;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="progress" role="progressbar" aria-valuenow=${this.progress} aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: ${this.progress}%"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'quiz-progress': QuizProgress;
  }
}
