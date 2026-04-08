import { useState } from "react";
import "./components.css";

function EducationInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    studyDate: "",
  });
  const [submittedEducation, setSubmittedEducation] = useState({
    school: "",
    studyTitle: "",
    studyDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setEducation({
      ...education,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedEducation(education);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  const displayFields = [
    {
      label: "School",
      value: submittedEducation.school,
      fallback: "Add the school or institution where you studied.",
    },
    {
      label: "Title of study",
      value: submittedEducation.studyTitle,
      fallback: "Your degree, course, or certification will show here.",
    },
    {
      label: "Study date",
      value: submittedEducation.studyDate,
      fallback: "You can use a year, range, or graduation date.",
    },
  ];

  return (
    <section
      className="editor-card"
      style={{
        "--accent": "#7e8d59",
        "--accent-soft": "rgba(126, 141, 89, 0.16)",
        "--delay": "160ms",
      }}
    >
      <div className="card-header">
        <div className="card-topline">
          <span className="card-step">Step 02</span>
          <span className={`state-pill ${isEditing ? "is-editing" : "is-saved"}`}>
            {isEditing ? "Currently Editing" : "Section Saved"}
          </span>
        </div>

        <h2>Education</h2>
        <p>
          Highlight the academic background that supports your professional story.
        </p>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="form">
          <label className="field">
            <span>School name</span>
            <input
              type="text"
              name="school"
              placeholder="e.g. University of the Philippines"
              value={education.school}
              onChange={handleChange}
            />
          </label>

          <label className="field">
            <span>Title of study</span>
            <input
              type="text"
              name="studyTitle"
              placeholder="e.g. BS in Information Technology"
              value={education.studyTitle}
              onChange={handleChange}
            />
          </label>

          <label className="field">
            <span>Date of study</span>
            <input
              type="text"
              name="studyDate"
              placeholder="e.g. 2020 - 2024"
              value={education.studyDate}
              onChange={handleChange}
            />
          </label>

          <p className="form-note">
            Keep this short and clean so the timeline remains easy to scan.
          </p>

          <div className="card-actions">
            <button type="submit" className="action-btn primary-btn">
              Save education
            </button>
          </div>
        </form>
      ) : (
        <div className="display-box">
          <div className="display-grid">
            {displayFields.map((field) => {
              const isEmpty = !field.value;

              return (
                <article key={field.label} className="display-item">
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
              Edit education
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default EducationInfo;
