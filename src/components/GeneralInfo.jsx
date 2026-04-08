import { useState } from "react";
import "./components.css";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submittedInfo, setSubmittedInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedInfo(info);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  const displayFields = [
    {
      label: "Full name",
      value: submittedInfo.name,
      fallback: "Your name will appear here once you save this section.",
    },
    {
      label: "Email address",
      value: submittedInfo.email,
      fallback: "A recruiter-friendly email keeps this section complete.",
    },
    {
      label: "Phone number",
      value: submittedInfo.phone,
      fallback: "Add a phone number so your contact block feels finished.",
    },
  ];

  return (
    <section
      className="editor-card"
      style={{
        "--accent": "#d67952",
        "--accent-soft": "rgba(214, 121, 82, 0.16)",
        "--delay": "80ms",
      }}
    >
      <div className="card-header">
        <div className="card-topline">
          <span className="card-step">Step 01</span>
          <span className={`state-pill ${isEditing ? "is-editing" : "is-saved"}`}>
            {isEditing ? "Currently Editing" : "Section Saved"}
          </span>
        </div>

        <h2>General Details</h2>
        <p>
          Start with the basics that shape the first impression of your resume.
        </p>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="form">
          <label className="field">
            <span>Full name</span>
            <input
              type="text"
              name="name"
              placeholder="e.g. Maria Santos"
              value={info.name}
              onChange={handleChange}
            />
          </label>

          <label className="field">
            <span>Email address</span>
            <input
              type="email"
              name="email"
              placeholder="e.g. maria@email.com"
              value={info.email}
              onChange={handleChange}
            />
          </label>

          <label className="field">
            <span>Phone number</span>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. +63 912 345 6789"
              value={info.phone}
              onChange={handleChange}
            />
          </label>

          <p className="form-note">
            These details usually sit at the very top of the final resume.
          </p>

          <div className="card-actions">
            <button type="submit" className="action-btn primary-btn">
              Save details
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
              Edit details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;
