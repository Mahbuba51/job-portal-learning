import { useEffect, useState } from "react";

function JobList({ onSelectJob }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

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
