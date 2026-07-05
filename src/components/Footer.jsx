import { Github, Linkedin, Mail, Zap } from "lucide-react";

export default function Footer({ content }) {
  const currentYear = new Date().getFullYear();
  const { contact, nav, footer } = content;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="Go to top">
            <span className="footer-logo-mark">NT</span>
            <span className="footer-logo-name">{footer.copyright}</span>
          </a>
          <p className="footer-tagline">{footer.tagline}</p>
          <div className="footer-available-badge">
            <span className="footer-dot" aria-hidden="true" />
            {footer.available}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <nav className="footer-links" aria-label="Footer navigation">
          <p className="footer-col-title">{footer.quickLinksTitle}</p>
          <ul className="footer-link-list">
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Connect */}
        <div className="footer-connect">
          <p className="footer-col-title">{footer.connectTitle}</p>
          <div className="footer-social-row">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-link social-github"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="social-icon-link social-linkedin"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="social-icon-link social-email"
              aria-label={`Email ${contact.email}`}
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
          <div className="footer-contact-details">
            <p className="footer-contact-item">
              <Mail size={13} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="footer-contact-item">
              <Zap size={13} />
              <span>{contact.phone}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {currentYear} {footer.copyright}. All rights reserved.
        </p>
        <p className="footer-built">
          {footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
