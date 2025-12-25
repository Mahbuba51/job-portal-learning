import { useEffect, useState } from "react";
import { getApplications } from "../api/jobApi";

function JobApplications({ jobId }) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getApplications(jobId)
      .then(res => setApplications(res.data))
      .catch(() => setError("Failed to load applications"))
      .finally(() => setLoading(false));
  }, [jobId]);

  if (loading) return <p>Loading applications...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  console.log("Applications:", applications);

  return (
    <div>
      <h3>Applications</h3>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.applicantName} – {app.applicantEmail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobApplications;
