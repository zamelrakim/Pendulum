import api from './pendulum-api'

export const getProfile = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
}

export const updateUser = async (id, userData) => {
  const resp = await api.put(`/user/${id}`, { food: userData });
  return resp.data;
}