import { useEffect, useState } from "react";

function JobApplications({ jobId }) {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/jobs/${jobId}/applications`)
      .then(res => res.json())
      .then(data => setApplications(data));
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
