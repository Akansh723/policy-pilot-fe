'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { PolicySuggestion } from '@/api/policyApi';
import { getUserProfile } from '@/api/userApi';
import { logout as apiLogout } from '@/api/authApi';
import { clearCsrfToken } from '@/api/httpClient';

export interface VehicleData {
  licensePlate: string;
  ownerName: string;
  carName: string;
  company: string;
  purchaseYear: string;
  fuelType: string;
  transmission: string;
  vehicleType: string;
  city: string;
  usageType: string;
  insuranceClaimsCount: string;
}

interface PurchaseData {
  policyData: PolicySuggestion;
  selectedAddons: string[];
  totalPremium: number;
}

interface QuoteFlowContextType {
  vehicleData: VehicleData | null;
  setVehicleData: (data: VehicleData | null) => void;
  policyData: PolicySuggestion | null;
  setPolicyData: (data: PolicySuggestion | null) => void;
  purchaseData: PurchaseData | null;
  setPurchaseData: (data: PurchaseData | null) => void;
  purchaseId: string;
  setPurchaseId: (id: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (v: boolean) => void;
  authChecked: boolean;
  handleLogout: () => Promise<void>;
}

const QuoteFlowContext = createContext<QuoteFlowContextType | null>(null);

export function QuoteFlowProvider({ children }: { children: ReactNode }) {
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [policyData, setPolicyData] = useState<PolicySuggestion | null>(null);
  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null);
  const [purchaseId, setPurchaseId] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    getUserProfile()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setAuthChecked(true));
  }, []);

  const handleLogout = useCallback(async () => {
    try { await apiLogout(); } catch { clearCsrfToken(); }
    setIsAuthenticated(false);
  }, []);

  return (
    <QuoteFlowContext.Provider value={{
      vehicleData, setVehicleData,
      policyData, setPolicyData,
      purchaseData, setPurchaseData,
      purchaseId, setPurchaseId,
      isAuthenticated, setIsAuthenticated,
      authChecked,
      handleLogout,
    }}>
      {children}
    </QuoteFlowContext.Provider>
  );
}

export function useQuoteFlow() {
  const ctx = useContext(QuoteFlowContext);
  if (!ctx) throw new Error('useQuoteFlow must be used within QuoteFlowProvider');
  return ctx;
}
