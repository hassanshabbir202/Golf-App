const BASE_URL = 'https://golf-app-backend-production.up.railway.app';
// const BASE_URL = 'http://192.168.1.107:3000';

export default {
  BASE_URL,
  SIGNUP: `${BASE_URL}/api/auth/signup`,
  LOGIN: `${BASE_URL}/api/auth/login`,
  LOGOUT: `${BASE_URL}/api/auth/logout`,
  FORGOT_PASSWORD: `${BASE_URL}/api/auth/forgot-password`,
  RESET_PASSWORD: `${BASE_URL}/api/auth/reset-password`,
  PLAYER_PROFILE: `${BASE_URL}/api/user/profile`,
  EDIT_PLAYER_PROFILE: `${BASE_URL}/api/user/profile`,
};
