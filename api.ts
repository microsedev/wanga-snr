const API_URL = 'https://your-api-endpoint.com/api';

export const getJobs = async (page = 1, limit = 10) => {
  const response = await fetch(`${API_URL}/jobs?page=${page}&limit=${limit}`);
  return await response.json();
};

export const getJobById = async (id) => {
  const response = await fetch(`${API_URL}/jobs/${id}`);
  return await response.json();
};

export const createJob = async (jobData) => {
  const response = await fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  });
  return await response.json();
};