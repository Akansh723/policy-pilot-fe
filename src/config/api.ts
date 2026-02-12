const API_BASE_URL = (window as any).ENV?.API_BASE_URL || process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

console.log(API_BASE_URL, "akansh saxena checking 2", process.env.REACT_APP_API_BASE_URL)
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
    PURCHASE: '/policy/purchase',
  },
} as const;

export default API_BASE_URL;
