const API_BASE_URL = 'https://policy-pilot-api-157386566439.europe-west1.run.app';

export const API_ENDPOINTS = {
  HEALTH: '/health',
  VEHICLE: '/vehicle',
  AUTH: {
    REQUEST_OTP: '/auth/request-otp',
    VERIFY_OTP: '/auth/verify-otp',
    LOGOUT: '/auth/logout',
  },
  USER: {
    PROFILE: '/user/profile',
  },
  POLICY: {
    SUGGEST: '/policies/suggest',
    BUY: '/policy/buy',
    MY: '/policy/my',
    PURCHASE: '/policy/purchase',
  },
} as const;

export default API_BASE_URL;
