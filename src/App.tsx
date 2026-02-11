import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { AllPolicies } from './pages/AllPolicies';
import { VehicleInfo } from './pages/VehicleInfo';
import { VehicleReview } from './pages/VehicleReview';
import { QuoteResults } from './pages/QuoteResults';
import { PolicyReview } from './pages/PolicyReview';
import { SignIn } from './pages/SignIn';
import { UserDetails } from './pages/UserDetails';
import { Registration } from './pages/Registration';
import { PurchaseSuccess } from './pages/PurchaseSuccess';
import { PolicySuggestion } from './api/policyApi';
import './App.css';

interface PurchaseData {
  policyData: PolicySuggestion;
  selectedAddons: string[];
  totalPremium: number;
}

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

function QuoteFlow() {
  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [policyData, setPolicyData] = useState<PolicySuggestion | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null);
  const [purchaseId, setPurchaseId] = useState<string>('');

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Home onGetQuote={() => navigate('/get-a-quote')} />} />
      <Route path="/policies" element={<AllPolicies />} />
      <Route
        path="/get-a-quote"
        element={
          <VehicleInfo
            initialData={vehicleData}
            onNext={(data) => {
              setVehicleData(data);
              navigate('/review');
            }}
          />
        }
      />
      <Route
        path="/review"
        element={
          vehicleData ? (
            <VehicleReview
              vehicleData={vehicleData}
              onContinue={(data) => {
                setPolicyData(data);
                navigate('/quote');
              }}
              onEdit={() => navigate('/get-a-quote')}
            />
          ) : (
            <Navigate to="/get-a-quote" />
          )
        }
      />
      <Route
        path="/quote"
        element={
          policyData ? (
            <QuoteResults
              policyData={policyData}
              initialSelectedAddons={purchaseData?.selectedAddons}
              onBack={() => navigate('/review')}
              onNext={(selectedAddons, totalPremium) => {
                if (isAuthenticated) {
                  setPurchaseData({ policyData, selectedAddons, totalPremium });
                  navigate('/policy-review');
                } else {
                  setPurchaseData({ policyData, selectedAddons, totalPremium });
                  navigate('/sign-in');
                }
              }}
            />
          ) : (
            <Navigate to="/get-a-quote" />
          )
        }
      />
      <Route
        path="/policy-review"
        element={
          purchaseData && vehicleData ? (
            <PolicyReview
              policyData={purchaseData.policyData}
              vehicleData={vehicleData}
              selectedAddons={purchaseData.selectedAddons}
              totalPremium={purchaseData.totalPremium}
              onNext={(id) => {
                setPurchaseId(id);
                navigate('/success');
              }}
              onBack={() => navigate('/quote')}
            />
          ) : (
            <Navigate to="/get-a-quote" />
          )
        }
      />
      <Route
        path="/success"
        element={
          vehicleData && purchaseId ? (
            <PurchaseSuccess
              vehicleData={vehicleData}
              purchaseId={purchaseId}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/sign-in"
        element={
          <SignIn
            totalPremium={purchaseData?.totalPremium}
            onNext={(token, isNewUser) => {
              localStorage.setItem('authToken', token);
              setIsAuthenticated(true);
              if (isNewUser) {
                navigate('/user-details');
              } else {
                navigate(purchaseData ? '/policy-review' : '/');
              }
            }}
            onBack={() => navigate(purchaseData ? '/quote' : '/')}
          />
        }
      />
      <Route
        path="/user-details"
        element={
          <UserDetails
            onNext={() => navigate(purchaseData ? '/policy-review' : '/registration')}
          />
        }
      />
      <Route
        path="/registration"
        element={
          <Registration
            onNext={() => alert('Registration Complete!')}
            onBack={() => navigate('/sign-in')}
          />
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <QuoteFlow />
      </div>
    </BrowserRouter>
  );
}

export default App;
