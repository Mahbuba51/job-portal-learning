import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" }
});

export const getJobs = () => api.get("/jobs");
export const getApplications = (jobId) => api.get(`/jobs/${jobId}/applications`);
export const applyToJob = (jobId, data) => api.post(`/jobs/${jobId}/apply`, data);
