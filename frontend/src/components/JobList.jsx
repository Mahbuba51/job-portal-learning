import { useEffect, useState } from "react";
import { getJobs } from "../api/jobApi";
console.log("API URL Name:", import.meta.env.VITE_API_URL);

function JobList({ onSelectJob }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs()
      .then(res => setJobs(res.data))
      .catch(() => setError("Failed to load jobs"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <b>{job.title}</b> – {job.company}
            <button onClick={() => onSelectJob(job.id)}>
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
