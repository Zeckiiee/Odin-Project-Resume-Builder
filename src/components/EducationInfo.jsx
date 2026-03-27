import { useState } from "react";

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

  return (
    <div>
      <section className="section">
        <h2>Educational Experience</h2>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="school"
              placeholder="School Name"
              value={education.school}
              onChange={handleChange}
            />

            <input
              type="text"
              name="studyTitle"
              placeholder="Title of Study"
              value={education.studyTitle}
              onChange={handleChange}
            />

            <input
              type="text"
              name="studyDate"
              placeholder="Date of Study"
              value={education.studyDate}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="display-box">
            <p>
              <strong>School:</strong> {submittedEducation.school}
            </p>
            <p>
              <strong>Title of Study:</strong> {submittedEducation.studyTitle}
            </p>
            <p>
              <strong>Date:</strong> {submittedEducation.studyDate}
            </p>

            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default EducationInfo;
