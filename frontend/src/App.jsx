import { useState } from "react";
import JobList from "./components/JobList";
import JobApplications from "./components/JobApplications";
import ApplyForm from "./components/ApplyForm";

function App() {
  const [selectedJobId, setSelectedJobId] = useState(null);

  return (
    <div className="container">
      <h1>Mini Job Portal</h1>

      <JobList onSelectJob={setSelectedJobId} />

      {selectedJobId && (
        <>
          <ApplyForm jobId={selectedJobId} />
          <JobApplications jobId={selectedJobId} />
        </>
      )}
    </div>
  );
}

export default App;
