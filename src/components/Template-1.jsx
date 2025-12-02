import React from "react";
import templates from "../data/Template-1";
import "./Template-1.css";

export default function Templates01Page() {
  return (
    <div id="templates-01-root" className="templates-01-root">
      {/* NAVBAR */}
      <header id="templates-01-navbar" className="templates-01-navbar">
        <div id="templates-01-navbar-inner" className="templates-01-navbar-inner">
          <a id="templates-01-brand" className="templates-01-brand" href="/">
            My Figma Templates
          </a>
          <nav id="templates-01-nav" className="templates-01-nav">
            <ul id="templates-01-nav-list" className="templates-01-nav-list">
              <li id="templates-01-nav-item-home" className="templates-01-nav-item">
                <a id="templates-01-nav-link-home" className="templates-01-nav-link" href="/Catogories">
                  Categories
                </a>
              </li>
              <li id="templates-01-nav-item-about" className="templates-01-nav-item">
                <a id="templates-01-nav-link-about" className="templates-01-nav-link" href="#templates-01-about">
                  About
                </a>
              </li>
              <li id="templates-01-nav-item-contact" className="templates-01-nav-item">
                <a id="templates-01-nav-link-contact" className="templates-01-nav-link" href="#templates-01-contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="templates-01-main" className="templates-01-main">
        <section id="templates-01-list" className="templates-01-list">
          {/* Map over templates array from the data file */}
          {templates.map((t) => (
            <article
              key={t.id}
              id={`templates-01-card-${t.id}`}
              className="templates-01-card templates-01-card--item"
              data-template-id={t.id}
            >
              <header id={`templates-01-card-header-${t.id}`} className="templates-01-card-header">
                <h2 id={`templates-01-card-title-${t.id}`} className="templates-01-card-title">
                  {t.name}
                </h2>
                <div id={`templates-01-card-meta-${t.id}`} className="templates-01-card-meta">
                  <span id={`templates-01-card-rating-${t.id}`} className="templates-01-card-rating">
                    Rating: {t.rating}
                  </span>
                  <span id={`templates-01-card-date-${t.id}`} className="templates-01-card-date">
                    Added: {t.dateAdded}
                  </span>
                </div>
              </header>

              <section id={`templates-01-card-body-${t.id}`} className="templates-01-card-body">
                <p id={`templates-01-card-expl-${t.id}`} className="templates-01-card-expl">
                  {t.explanation}
                </p>

                <ul id={`templates-01-card-tags-${t.id}`} className="templates-01-card-tags">
                  {t.tags && t.tags.map((tag, i) => (
                    <li
                      key={i}
                      id={`templates-01-card-tag-${t.id}-${i}`}
                      className="templates-01-card-tag"
                      data-tag-index={i}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div id={`templates-01-card-recommended-${t.id}`} className="templates-01-card-recommended">
                  <strong id={`templates-01-card-rec-title-${t.id}`} className="templates-01-card-rec-title">Recommended for:</strong>
                  <ul id={`templates-01-card-rec-list-${t.id}`} className="templates-01-card-rec-list">
                    {t.recommendedFor && t.recommendedFor.map((r, idx) => (
                      <li
                        key={idx}
                        id={`templates-01-card-rec-item-${t.id}-${idx}`}
                        className="templates-01-card-rec-item"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <footer id={`templates-01-card-footer-${t.id}`} className="templates-01-card-footer">
                <a
                  id={`templates-01-card-link-${t.id}`}
                  className="templates-01-card-link"
                  href={t.figmaLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Figma
                </a>

                <button
                  id={`templates-01-card-copy-${t.id}`}
                  className="templates-01-card-copy-btn"
                  onClick={() => {
                    // simple copy-to-clipboard for the Figma link
                    if (typeof navigator !== "undefined" && navigator.clipboard) {
                      navigator.clipboard.writeText(t.figmaLink);
                    } else {
                      // fallback (won't work in SSR)
                      const input = document.createElement("input");
                      input.value = t.figmaLink;
                      document.body.appendChild(input);
                      input.select();
                      document.execCommand("copy");
                      document.body.removeChild(input);
                    }
                    // optional: provide a tiny visual feedback by toggling an attribute
                    const el = document.getElementById(`templates-01-card-copy-${t.id}`);
                    if (el) el.setAttribute("data-copied", "true");
                    setTimeout(() => { if (el) el.removeAttribute("data-copied"); }, 1200);
                  }}
                >
                  Copy link
                </button>
              </footer>
            </article>
          ))}
        </section>

        {/* ABOUT SECTION */}
        <aside id="templates-01-about" className="templates-01-about">
          <h3 id="templates-01-about-title" className="templates-01-about-title">About this collection</h3>
          <p id="templates-01-about-text" className="templates-01-about-text">
            This page loads templates from a JS data file (imported as "templates") and renders them as cards.
            No CSS is included; you can target the plentiful id and class hooks to style the page the way you like.
          </p>
        </aside>

        {/* CONTACT / FOOTER */}
        <section id="templates-01-contact" className="templates-01-contact">
          <h4 id="templates-01-contact-title" className="templates-01-contact-title">Contact</h4>
          <p id="templates-01-contact-text" className="templates-01-contact-text">Email: hello@example.com</p>
        </section>
      </main>
    </div>
  );
}
