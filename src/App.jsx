import GeneralInfo from "./components/GeneralInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import EducationInfo from "./components/EducationInfo";

const workflowHighlights = [
  {
    title: "Cleaner editing flow",
    detail: "Section-by-section saving keeps the builder easy to manage.",
  },
  {
    title: "Editorial-inspired styling",
    detail: "Warmer colors and stronger typography give the UI more personality.",
  },
  {
    title: "Subtle motion",
    detail: "Hover, focus, and reveal transitions make the interface feel smoother.",
  },
];

const designNotes = [
  "Personal details stay upfront so the top of the resume feels intentional.",
  "Education and experience cards now read like premium form panels, not plain fields.",
  "Saved states look more presentable, so reviewing your entries feels rewarding.",
];

function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <main className="page-shell">
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">Resume Atelier</span>
            <h1>Build a resume that already looks composed while you edit it.</h1>
            <p className="hero-text">
              Your builder now feels more polished, more readable, and a lot more
              presentable while you fill in each section.
            </p>

            <div className="hero-highlights">
              {workflowHighlights.map((item) => (
                <article key={item.title} className="highlight-card">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-panel">
              <p className="preview-label">Visual Preview</p>
              <div className="preview-sheet">
                <div className="preview-accent" />

                <div className="preview-header">
                  <div>
                    <p className="preview-name">Ezeckiel Bongala</p>
                    <p className="preview-role">Front-End Developer</p>
                  </div>
                  <span className="preview-badge">Ready to Share</span>
                </div>

                <div className="preview-meta">
                  <span>266ezeckielbongala@email.com</span>
                  <span>09940904336</span>
                  <span>Manila, PH</span>
                </div>

                <div className="preview-section">
                  <p className="preview-section-title">Experience</p>
                  <div className="preview-line preview-line--strong" />
                  <div className="preview-line" />
                  <div className="preview-line preview-line--short" />
                </div>

                <div className="preview-columns">
                  <div className="preview-section">
                    <p className="preview-section-title">Education</p>
                    <div className="preview-line preview-line--strong" />
                    <div className="preview-line preview-line--short" />
                  </div>

                  <div className="preview-section">
                    <p className="preview-section-title">Profile</p>
                    <div className="preview-line" />
                    <div className="preview-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="workspace">
          <aside className="workspace-note">
            <span className="note-label">Design Notes</span>
            <h2>Simple flow, stronger presence.</h2>
            <p>
              Same resume-building logic, but with a more aesthetic layout and a
              calmer editing experience.
            </p>

            <ul className="note-list">
              {designNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>

          <div className="editor-stack">
            <GeneralInfo />
            <EducationInfo />
            <ExperienceInfo />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
