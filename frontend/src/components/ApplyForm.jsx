import { useState } from "react";
import { applyToJob } from "../api/jobApi";

function ApplyForm({ jobId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    applyToJob(jobId, {
      applicantName: name,
      email: email
    })
      .then(() => {
        alert("Applied successfully!");
        setName("");
        setEmail("");
      })
      .catch(err => {
        console.error(err);
        alert("Failed to apply");
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
