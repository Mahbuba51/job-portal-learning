import api from "./axios";

export const getJobs = () => {
  return api.get("/jobs");
};

export const applyToJob = (jobId, application) => {
  return api.post(`/jobs/${jobId}/apply`, application);
};

export const getApplications = (jobId) => {
  return api.get(`/jobs/${jobId}/applications`);
};
