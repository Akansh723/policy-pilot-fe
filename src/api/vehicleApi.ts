import { get } from './httpClient';
import { API_ENDPOINTS } from '../config/api';

export interface VehicleData {
  licencePlate: string;
  ownerName: string;
  carName: string;
  company: string;
  purchaseYear: number;
  insuranceExpiryDate: string;
  insuranceClaimsCount: number;
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  vehicleType: 'sedan' | 'suv' | 'hatchback';
  city: string;
  usageType: 'personal' | 'commercial';
  lastAccidentDate?: string;
}

export const getByLicensePlate = async (licensePlate: string): Promise<VehicleData> => {
  const response = await get<VehicleData>(
    `${API_ENDPOINTS.VEHICLE}/${licensePlate.toUpperCase()}`
  );
  if (!response.success || !response.data) {
    throw new Error(response.message);
  }
  return response.data;
};
