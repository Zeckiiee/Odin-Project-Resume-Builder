import { useState } from "react";

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

console.log(info, submittedInfo)

  return (
    <div>
      <section className="section">
        <h2>General Information</h2>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={info.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={info.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={info.phone}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="display-box">
            <p>
              <strong>Name:</strong> {submittedInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {submittedInfo.phone}
            </p>

            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default GeneralInfo;
