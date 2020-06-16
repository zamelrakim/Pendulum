import api from './pendulum-api'

export const getTools = async () => {
  const resp = await api.get('/tools');
  return resp.data;
}

export const getTool = async (id) => {
  const resp = await api.get(`/tools/${id}`);
  return resp.data;
}

export const createTool = async (toolData) => {
  const resp = await api.post('/tools', { tool: toolData });
  return resp.data;
}

export const deleteTool = async (id) => {
  const resp = await api.delete(`/tools/${id}`);
  return resp.data.destroyed
}

export const latestTool = async () => {
  const resp = await api.get('/tools/latest');
  return resp.data
}