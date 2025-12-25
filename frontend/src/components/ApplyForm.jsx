import { useState } from "react";
import { applyToJob } from "../api/jobApi";

function ApplyForm({ jobId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    applyToJob(jobId, { applicantName: name, email })
      .then(() => {
        setMessage("Applied successfully!");
        setName("");
        setEmail("");
      })
      .catch(() => {
        setError("Application failed. Try again.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <h3>Apply to Job</h3>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <br />
        <input
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <br />
        <button disabled={loading}>
          {loading ? "Submitting..." : "Apply"}
        </button>
      </form>
    </div>
  );
}

export default ApplyForm;
