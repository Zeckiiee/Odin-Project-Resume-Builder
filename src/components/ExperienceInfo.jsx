import { useState } from "react";

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

  return (
    <div>
      <section className="section">
        <h2>Practical Experience</h2>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={experience.company}
              onChange={handleChange}
            />

            <input
              type="text"
              name="position"
              placeholder="Position Title"
              value={experience.position}
              onChange={handleChange}
            />

            <textarea
              name="responsibilities"
              placeholder="Main Responsibilities"
              value={experience.responsibilities}
              onChange={handleChange}
            />

            <input
              type="text"
              name="dateFrom"
              placeholder="Date From"
              value={experience.dateFrom}
              onChange={handleChange}
            />

            <input
              type="text"
              name="dateTo"
              placeholder="Date To"
              value={experience.dateTo}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="display-box">
            <p>
              <strong>Company:</strong> {submittedExperience.company}
            </p>
            <p>
              <strong>Position:</strong> {submittedExperience.position}
            </p>
            <p>
              <strong>Responsibilities:</strong>{" "}
              {submittedExperience.responsibilities}
            </p>
            <p>
              <strong>From:</strong> {submittedExperience.dateFrom}
            </p>
            <p>
              <strong>To:</strong> {submittedExperience.dateTo}
            </p>

            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default ExperienceInfo;
