import { useEffect, useState } from "react";
import { getJobs } from "../api/jobApi";

function JobList({ onSelectJob }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs()
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
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
