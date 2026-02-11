const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const API_ENDPOINTS = {
  HEALTH: '/health',
  VEHICLE: '/vehicle',
  AUTH: {
    REQUEST_OTP: '/auth/request-otp',
    VERIFY_OTP: '/auth/verify-otp',
  },
  USER: {
    PROFILE: '/user/profile',
  },
  POLICY: {
    SUGGEST: '/policies/suggest',
    BUY: '/policy/buy',
    MY: '/policy/my',
  },
} as const;

export default API_BASE_URL;
