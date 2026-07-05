import { ArrowRight, Mail, Sparkles } from "lucide-react";

export default function Hero({ content }) {
  return (
    <section id="home" className="hero-stage relative min-h-screen overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:pt-24">
      <div className="hero-scanline" aria-hidden="true" />
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="hero-shell grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="hero-copy-panel glass-card animate-reveal">
            <div className="hero-availability">
              <span />
              {content.available}
            </div>

            <div className="hero-kicker">
              <Sparkles size={16} />
              {content.eyebrow}
            </div>

            <p className="hero-name">{content.name}</p>
            <h1>{content.headline}</h1>
            <p className="hero-tagline">{content.tagline}</p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                {content.primaryCta} <ArrowRight size={18} />
              </a>
              <a href="#contact" className="secondary-button">
                {content.secondaryCta} <Mail size={18} />
              </a>
            </div>

            <div className="hero-stat-row" aria-label="Portfolio highlights">
              {content.stats.map(([value, label]) => (
                <div key={label} className="hero-stat-card">
                  <span>{value}</span>
                  <small>{label}</small>
                </div>
              ))}
            </div>

            <div className="hero-focus-strip">
              <span>{content.focusLabel}</span>
              <strong>{content.focus}</strong>
            </div>
          </div>

          <div className="hero-visual-column">
            <div className="hero-avatar-shell animate-float">
              <div className="hero-orbit" aria-hidden="true" />
              <img
                src="/hero-tech-visual.png"
                alt="Futuristic developer avatar visual for Nguyen Ngoc Thien portfolio"
                className="hero-avatar-image"
                loading="eager"
                decoding="async"
                width="960"
                height="960"
              />
              <div className="hero-chip hero-chip-left">{content.techBadge}</div>
              <div className="hero-chip hero-chip-right">{content.statusBadge}</div>
            </div>

            <div className="hero-gallery">
              <figure className="hero-gallery-card hero-gallery-card-wide">
                <img src="/visual-code.svg" alt="Code workspace illustration" loading="lazy" decoding="async" />
                <figcaption>Code</figcaption>
              </figure>
              <figure className="hero-gallery-card">
                <img src="/visual-data.svg" alt="Database illustration" loading="lazy" decoding="async" />
                <figcaption>Data</figcaption>
              </figure>
              <figure className="hero-gallery-card">
                <img src="/visual-ui.svg" alt="Interface illustration" loading="lazy" decoding="async" />
                <figcaption>UI</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
