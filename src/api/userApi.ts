import { put, post } from './httpClient';
import API_BASE_URL, { API_ENDPOINTS } from '../config/api';

interface UpdateProfileData {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
}

export const updateProfile = async (data: UpdateProfileData, token: string): Promise<void> => {
  const response = await put(API_ENDPOINTS.USER.PROFILE, data, token);
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

export const getUserProfile = async (token: string): Promise<UserProfile> => {
  const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.USER.PROFILE}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.message);
  }
  return data.data;
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
}

export const purchasePolicy = async (data: PurchasePolicyData, token: string): Promise<PurchaseResponse> => {
  const response = await post<PurchaseResponse>(API_ENDPOINTS.POLICY.PURCHASE, data, token);
  if (!response.success || !response.data) {
    throw new Error(response.message);
  }
  return response.data;
};
