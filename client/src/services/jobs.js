import api from './pendulum-api'

export const getJobs = async () => {
  const resp = await api.get('/jobs');
  return resp.data;
}

export const getJob = async (id) => {
  const resp = await api.get(`/jobs/${id}`);
  return resp.data;
}

export const createJob = async (jobData) => {
  const resp = await api.post('/jobs', { job: jobData });
  return resp.data;
}

export const updateJob = async (id, jobData) => {
  const resp = await api.put(`/jobs/${id}`, { job: jobData });
  return resp.data;
}

export const employUser = async (id) => {
  const resp = await api.get(`/jobs/${id}/employ`);
  return resp;
}

export const latestJob = async () => {
  const resp = await api.get('/jobs/latest');
  return resp.data
}