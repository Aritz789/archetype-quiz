import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('landing-page')
export class LandingPage extends LitElement {
  createRenderRoot() {
    return this;
  }

  private handleStart() {
    this.dispatchEvent(new CustomEvent('start-quiz', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <main class="landing">
        <div class="landing-hero">
          <div class="landing-badge">
            <span class="badge badge-accent">Self-Discovery</span>
          </div>

          <h1 class="landing-title">Discover Your Archetype</h1>

          <p class="landing-description">
            Understanding your archetypal personality allows you to identify your strengths,
            weaknesses, and natural inclinations. Your archetype determines your source of
            motivation in the absence of external pressures.
          </p>

          <p class="landing-description">
            This quiz is based on a taxonomy of 14 archetypal personalities observed across
            people from all walks of life—from those facing serious challenges to the most
            successful leaders and visionaries.
          </p>

          <div class="landing-cta">
            <button class="btn btn-primary btn-large" @click=${this.handleStart}>
              Start the Quiz
            </button>
            <span class="landing-time">Takes about 5-7 minutes</span>
          </div>
        </div>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'landing-page': LandingPage;
  }
}
