// const BASE_URL = 'https://golf-app-backend-production.up.railway.app/api/auth';
const BASE_URL = 'http://192.168.0.107:3000/api/auth';

export default {
  BASE_URL,
  SIGNUP: `${BASE_URL}/signup`,
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  FORGOT_PASSWORD: `${BASE_URL}/forgot-password`,
  RESET_PASSWORD: `${BASE_URL}/reset-password`,
};
