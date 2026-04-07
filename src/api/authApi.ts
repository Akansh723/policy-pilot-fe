import { post, clearCsrfToken } from './httpClient';
import { API_ENDPOINTS } from '../config/api';

export const requestOtp = async (mobile: string): Promise<void> => {
  const response = await post(API_ENDPOINTS.AUTH.REQUEST_OTP, { mobile });
  if (!response.success) {
    throw new Error(response.message);
  }
};

export interface AuthUser {
  name?: string;
  mobile?: string;
  [key: string]: any;
}

export const verifyOtp = async (mobile: string, otp: string): Promise<{ user: AuthUser; isNewUser: boolean }> => {
  const response = await post<{ user: AuthUser; isNewUser: boolean }>(
    API_ENDPOINTS.AUTH.VERIFY_OTP,
    { mobile, otp }
  );
  if (!response.success || !response.data) {
    throw new Error(response.message);
  }
  return { user: response.data.user, isNewUser: response.data.isNewUser };
};

export const logout = async (): Promise<void> => {
  await post(API_ENDPOINTS.AUTH.LOGOUT, {});
  clearCsrfToken();
};
