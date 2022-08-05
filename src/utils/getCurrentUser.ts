import axios from 'axios';

export const getCurentUser = async (token: string) => {
  const { data } = await axios.get('http://localhost:8000/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!data.user) return null;
  return data;
};
