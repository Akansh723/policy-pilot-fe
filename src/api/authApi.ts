import { post } from './httpClient';
import { API_ENDPOINTS } from '../config/api';

export const requestOtp = async (mobile: string): Promise<void> => {
  const response = await post(API_ENDPOINTS.AUTH.REQUEST_OTP, { mobile });
  if (!response.success) {
    throw new Error(response.message);
  }
};

export const verifyOtp = async (mobile: string, otp: string): Promise<{ token: string; isNewUser: boolean; userName?: string }> => {
  const response = await post<{ token: string; user: any; isNewUser: boolean }>(
    API_ENDPOINTS.AUTH.VERIFY_OTP,
    { mobile, otp }
  );
  if (!response.success || !response.data) {
    throw new Error(response.message);
  }
  
  // Store user name in localStorage if available
  if (response.data.user?.name) {
    localStorage.setItem('userName', response.data.user.name);
  }
  
  return { 
    token: response.data.token, 
    isNewUser: response.data.isNewUser,
    userName: response.data.user?.name 
  };
};
