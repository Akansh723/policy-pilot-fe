import { get } from './httpClient';
import { API_ENDPOINTS } from '../config/api';

export interface PolicyAddon {
  addonId: string;
  name: string;
  code: string;
  price: number;
}

export interface PolicyOption {
  policyId: string;
  providerName: string;
  basePremium: number;
  finalPremium: number;
  idvPercentage: number;
  purchaseYearGap: number;
  addons: PolicyAddon[];
}

export interface PolicySuggestion {
  success: boolean;
  vehicle: {
    licencePlate: string;
    carName: string;
    company: string;
    purchaseYear: number;
    fuelType: string;
    usageType: string;
    insuranceClaimsCount: number;
  };
  bestPolicy: PolicyOption;
  allOptions: PolicyOption[];
}

export const getPolicySuggestions = async (
  licensePlate: string,
  fuelType?: string,
  usageType?: string,
  purchaseYear?: string,
  insuranceClaimsCount?: string
): Promise<PolicySuggestion> => {
  let url = `${API_ENDPOINTS.POLICY.SUGGEST}/${licensePlate.toUpperCase()}`;
  
  if (fuelType && usageType && purchaseYear) {
    const params = new URLSearchParams({
      fuelType,
      usageType,
      purchaseYear,
      insuranceClaimsCount: insuranceClaimsCount || '0'
    });
    url += `?${params.toString()}`;
  }
  
  const response = await get<PolicySuggestion>(url);
  if (!response.success) {
    throw new Error(response.message);
  }
  return response.data || response as any;
};

export interface MyPolicy {
  _id: string;
  vehicleId: {
    licencePlate: string;
    carName: string;
    company: string;
  };
  policyId: {
    providerName: string;
    basePremium: number;
  };
  addons: Array<{
    name: string;
    code: string;
  }>;
  basePremium: number;
  addonsPremium: number;
  totalPremium: number;
  status: string;
  policyExpiryDate: string;
  createdAt: string;
}

export const getMyPolicies = async (token: string): Promise<MyPolicy[]> => {
  const response = await fetch(`http://localhost:3001/policy/my`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.message);
  }
  return data.data;
};
