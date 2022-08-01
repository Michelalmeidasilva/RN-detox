import api from 'src/providers/fetchClient';

export const register = (user: {
  username: string;
  email: string;
  password: string;
}): Promise<void> => api.post('/register/', user);

export const postLogin = (credentials: {
  email: string;
  password: string;
}): Promise<{ token: string }> => api.post('/login/', credentials);
