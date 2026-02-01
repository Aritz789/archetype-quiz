import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { QuizResult } from '../types/index.js';
import { getArchetype } from '../data/archetypes.js';

@customElement('results-page')
export class ResultsPage extends LitElement {
  @property({ type: Object }) results: QuizResult | null = null;

  createRenderRoot() {
    return this;
  }

  private handleRetake() {
    this.dispatchEvent(new CustomEvent('retake-quiz', { bubbles: true, composed: true }));
  }

  private async handleShare() {
    const archetype = this.results ? getArchetype(this.results.primary.archetypeId) : null;
    if (!archetype) return;

    const text = `I discovered my archetype: ${archetype.name} - ${archetype.tagline}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Archetype Result',
          text: text,
          url: window.location.href
        });
      } catch {
        // User cancelled or share failed
        this.copyToClipboard(text);
      }
    } else {
      this.copyToClipboard(text);
    }
  }

  private copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Result copied to clipboard!');
    }).catch(() => {
      alert('Could not copy to clipboard');
    });
  }

  render() {
    if (!this.results) {
      return html`<div>Loading results...</div>`;
    }

    const primaryArchetype = getArchetype(this.results.primary.archetypeId);
    const secondaryArchetype = this.results.secondary
      ? getArchetype(this.results.secondary.archetypeId)
      : null;

    if (!primaryArchetype) {
      return html`<div>Error loading archetype data</div>`;
    }

    return html`
      <main class="results">
        <header class="results-header">
          <p class="results-label">Your Primary Archetype</p>
        </header>

        <div class="archetype-card">
          <div
            class="archetype-card__icon"
            style="background: ${primaryArchetype.color}20; color: ${primaryArchetype.color}"
          >
            ${this.getArchetypeIcon(primaryArchetype.id)}
          </div>

          <h1 class="archetype-card__name" style="color: ${primaryArchetype.color}">
            ${primaryArchetype.name}
          </h1>

          <p class="archetype-card__tagline">${primaryArchetype.tagline}</p>

          <div class="archetype-card__traits">
            ${primaryArchetype.traits.map(trait => html`
              <span class="trait">${trait}</span>
            `)}
          </div>

          <p class="archetype-card__description">${primaryArchetype.description}</p>
        </div>

        <div class="divider"></div>

        <section class="archetype-section">
          <h3 class="archetype-section__title">
            <span style="color: #22c55e">+</span> Strengths
          </h3>
          <ul class="archetype-section__list">
            ${primaryArchetype.strengths.map(strength => html`
              <li>${strength}</li>
            `)}
          </ul>
        </section>

        <section class="archetype-section">
          <h3 class="archetype-section__title">
            <span style="color: #f59e0b">!</span> Challenges
          </h3>
          <ul class="archetype-section__list">
            ${primaryArchetype.challenges.map(challenge => html`
              <li>${challenge}</li>
            `)}
          </ul>
        </section>

        <section class="archetype-section">
          <h3 class="archetype-section__title">
            <span style="color: #8b5cf6">*</span> Advice
          </h3>
          <div class="archetype-advice">
            <p class="archetype-advice__text">"${primaryArchetype.advice}"</p>
          </div>
        </section>

        ${secondaryArchetype ? html`
          <div class="secondary-archetype">
            <p class="secondary-archetype__label">Secondary Archetype</p>
            <h2 class="secondary-archetype__name" style="color: ${secondaryArchetype.color}">
              ${secondaryArchetype.name}
            </h2>
            <p class="secondary-archetype__tagline">${secondaryArchetype.tagline}</p>
            <p style="color: var(--muted); margin-top: var(--space-md); font-size: 0.875rem;">
              You also show strong traits of the ${secondaryArchetype.name}, which means you may
              blend characteristics from both archetypes.
            </p>
          </div>
        ` : nothing}

        <div class="results-actions">
          <button class="btn btn-primary" @click=${this.handleShare}>
            Share Result
          </button>
          <button class="btn btn-secondary" @click=${this.handleRetake}>
            Retake Quiz
          </button>
        </div>
      </main>
    `;
  }

  private getArchetypeIcon(id: string): string {
    const icons: Record<string, string> = {
      'commander': '👑',
      'imitator': '🎭',
      'explorer': '🔍',
      'rebel': '⚡',
      'jester': '🎪',
      'provocateur': '🔥',
      'artist': '🎨',
      'everyman': '👤',
      'visionary': '🔮',
      'chosen-one': '✨',
      'twenty-seven-club': '💫',
      'munchausen-hero': '🦸',
      'deviant': '🖤',
      'mother': '💗'
    };
    return icons[id] ?? '●';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'results-page': ResultsPage;
  }
}
