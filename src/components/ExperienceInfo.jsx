import { useState } from "react";
import "./components.css";

function ExperienceInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });
  const [submittedExperience, setSubmittedExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setExperience({
      ...experience,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedExperience(experience);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  const displayFields = [
    {
      label: "Company",
      value: submittedExperience.company,
      fallback: "Your company or organization name will appear here.",
    },
    {
      label: "Position",
      value: submittedExperience.position,
      fallback: "Add your role title to complete this experience block.",
    },
    {
      label: "Date from",
      value: submittedExperience.dateFrom,
      fallback: "Start date",
    },
    {
      label: "Date to",
      value: submittedExperience.dateTo,
      fallback: "End date",
    },
    {
      label: "Main responsibilities",
      value: submittedExperience.responsibilities,
      fallback:
        "Use this area to describe the work, impact, or responsibilities you handled.",
      wide: true,
    },
  ];

  return (
    <section
      className="editor-card"
      style={{
        "--accent": "#245d5a",
        "--accent-soft": "rgba(36, 93, 90, 0.16)",
        "--delay": "240ms",
      }}
    >
      <div className="card-header">
        <div className="card-topline">
          <span className="card-step">Step 03</span>
          <span className={`state-pill ${isEditing ? "is-editing" : "is-saved"}`}>
            {isEditing ? "Currently Editing" : "Section Saved"}
          </span>
        </div>

        <h2>Experience</h2>
        <p>
          Capture the work you have done and the responsibilities that define your
          value.
        </p>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="form">
          <label className="field">
            <span>Company name</span>
            <input
              type="text"
              name="company"
              placeholder="e.g. Studio North"
              value={experience.company}
              onChange={handleChange}
            />
          </label>

          <label className="field">
            <span>Position title</span>
            <input
              type="text"
              name="position"
              placeholder="e.g. Frontend Developer"
              value={experience.position}
              onChange={handleChange}
            />
          </label>

          <div className="field-row">
            <label className="field">
              <span>Date from</span>
              <input
                type="text"
                name="dateFrom"
                placeholder="e.g. Jan 2023"
                value={experience.dateFrom}
                onChange={handleChange}
              />
            </label>

            <label className="field">
              <span>Date to</span>
              <input
                type="text"
                name="dateTo"
                placeholder="e.g. Present"
                value={experience.dateTo}
                onChange={handleChange}
              />
            </label>
          </div>

          <label className="field-wide">
            <span>Main responsibilities</span>
            <textarea
              name="responsibilities"
              placeholder="Describe key tasks, impact, tools used, or wins from this role."
              value={experience.responsibilities}
              onChange={handleChange}
            />
          </label>

          <p className="form-note">
            Short, specific responsibilities usually feel stronger than long generic
            paragraphs.
          </p>

          <div className="card-actions">
            <button type="submit" className="action-btn primary-btn">
              Save experience
            </button>
          </div>
        </form>
      ) : (
        <div className="display-box">
          <div className="display-grid">
            {displayFields.map((field) => {
              const isEmpty = !field.value;

              return (
                <article
                  key={field.label}
                  className={`display-item ${field.wide ? "display-item--wide" : ""}`}
                >
                  <p className="display-label">{field.label}</p>
                  <p className={`display-value ${isEmpty ? "is-empty" : ""}`}>
                    {field.value || field.fallback}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="card-actions">
            <button
              type="button"
              onClick={handleEdit}
              className="action-btn secondary-btn"
            >
              Edit experience
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ExperienceInfo;
