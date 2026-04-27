import { put, post, get } from './httpClient';
import { API_ENDPOINTS } from '../config/api';

interface UpdateProfileData {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
}

export const updateProfile = async (data: UpdateProfileData): Promise<void> => {
  const response = await put(API_ENDPOINTS.USER.PROFILE, data);
  if (!response.success) {
    throw new Error(response.message);
  }
};

interface UserProfile {
  id: string;
  mobile: string;
  name?: string;
  age?: number;
  gender?: string;
  createdAt?: string;
}

export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await get<UserProfile>(API_ENDPOINTS.USER.PROFILE);
  if (!response.success || !response.data) {
    throw new Error(response.message);
  }
  return response.data;
};

interface PurchasePolicyData {
  vehicleDetails: {
    licencePlate: string;
    ownerName: string;
    carName: string;
    company: string;
    purchaseYear: number;
    insuranceExpiryDate?: string;
    insuranceClaimsCount: number;
    fuelType: string;
    transmission: string;
    vehicleType: string;
    city: string;
    usageType: string;
  };
  policyId: string;
  addons: string[];
  basePremium: number;
  addonsPremium: number;
}

interface PurchaseResponse {
  purchaseId: string;
  vehicleId: string;
  policyExpiryDate: string;
  totalPremium: number;
  status: string;
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

interface VerifyPaymentData {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}

interface VerifyPaymentResponse {
  purchaseId: string;
  status: string;
}

export const purchasePolicy = async (data: PurchasePolicyData): Promise<PurchaseResponse> => {
  const response = await post<PurchaseResponse>(API_ENDPOINTS.POLICY.PURCHASE, data);
  if (!response.success || !response.data) {
    throw new Error(response.message);
  }
  return response.data;
};

export const verifyPayment = async (data: VerifyPaymentData): Promise<VerifyPaymentResponse> => {
  const response = await post<VerifyPaymentResponse>(API_ENDPOINTS.POLICY.VERIFY_PAYMENT, data);
  if (!response.success || !response.data) {
    throw new Error(response.message);
  }
  return response.data;
};
