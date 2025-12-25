import { useState } from "react";

function ApplyForm({ jobId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:8080/api/jobs/${jobId}/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        applicantName: name,
        email: email
      })
    }).then(() => {
      setName("");
      setEmail("");
      alert("Applied successfully!");
    });
  }

  return (
    <div>
      <h3>Apply to Job</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default ApplyForm;
