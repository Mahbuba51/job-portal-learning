import { useEffect, useState } from "react";
import { getApplications } from "../api/jobApi";

function JobApplications({ jobId }) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications(jobId)
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  }, [jobId]);

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
