import React, { useState } from 'react';
import { Header } from '../../components/shared/Header';
import { Button } from '../../components/shared/Button';
import { Loader } from '../../components/shared/Loader';
import { PolicySuggestion } from '../../api/policyApi';
import { purchasePolicy } from '../../api/userApi';
import { VehicleData } from '../../App';
import styles from './PolicyReview.module.css';

interface PolicyReviewProps {
  policyData: PolicySuggestion;
  vehicleData: VehicleData;
  selectedAddons: string[];
  totalPremium: number;
  onNext: (purchaseId: string) => void;
  onBack: () => void;
}

export const PolicyReview: React.FC<PolicyReviewProps> = ({ 
  policyData, 
  vehicleData, 
  selectedAddons, 
  totalPremium, 
  onNext, 
  onBack 
}) => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleProceed = async () => {
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('Authentication required');

      const addonsPremium = policyData.bestPolicy.addons
        .filter(a => selectedAddons.includes(a.addonId))
        .reduce((sum, a) => sum + a.price, 0);

      const response = await purchasePolicy({
        vehicleDetails: {
          licencePlate: vehicleData.licensePlate,
          ownerName: vehicleData.ownerName,
          carName: vehicleData.carName,
          company: vehicleData.company,
          purchaseYear: parseInt(vehicleData.purchaseYear),
          insuranceClaimsCount: parseInt(vehicleData.insuranceClaimsCount),
          fuelType: vehicleData.fuelType,
          transmission: vehicleData.transmission,
          vehicleType: vehicleData.vehicleType,
          city: vehicleData.city,
          usageType: vehicleData.usageType,
        },
        policyId: policyData.bestPolicy.policyId,
        addons: selectedAddons,
        basePremium: policyData.bestPolicy.finalPremium,
        addonsPremium,
      }, token);

      onNext(response.purchaseId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to purchase policy');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className={styles.container}>
      <Header title="Review & Sign" onBack={onBack} />
      
      <main className={styles.main}>
        <div className={styles.progress}>
          <div className={styles.progressHeader}>
            <span className={styles.stepText}>STEP 4 OF 4</span>
            <span className={styles.finalText}>Final Review</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '100%' }} />
          </div>
        </div>

        <h3 className={styles.sectionTitle}>Policy Summary</h3>
        
        <div className={styles.policyCard}>
          <div className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.priceSection}>
              <div>
                <p className={styles.priceLabel}>TOTAL PREMIUM</p>
                <p className={styles.priceAmount}>₹{totalPremium.toLocaleString()} <span className={styles.pricePeriod}>/ year</span></p>
              </div>
              <div className={styles.badge}>{policyData.bestPolicy.providerName}</div>
            </div>
            <div className={styles.details}>
              <div className={styles.detailRow}>
                <span className={styles.icon}>🚗</span>
                <p className={styles.detailText}>{vehicleData.purchaseYear} {vehicleData.company} {vehicleData.carName} • {vehicleData.licensePlate}</p>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.icon}>🛡️</span>
                <div>
                  <p className={styles.detailText}>Base Premium: ₹{policyData.bestPolicy.finalPremium.toLocaleString()}</p>
                  {selectedAddons.length > 0 && (
                    <p className={styles.detailText}>
                      Add-ons: {policyData.bestPolicy.addons
                        .filter(a => selectedAddons.includes(a.addonId))
                        .map(a => a.name)
                        .join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className={styles.sectionTitle}>Agreements</h3>
        <div className={styles.agreementBox}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className={styles.checkboxInput}
            />
            <p className={styles.agreementText}>
              I agree to the <a href="#" className={styles.link}>Terms of Service</a>, 
              <a href="#" className={styles.link}> Privacy Policy</a>, and 
              <a href="#" className={styles.link}> Electronic Signature Disclosure</a>.
            </p>
          </label>
        </div>

        <div className={styles.helpSection}>
          <button className={styles.helpButton}>
            <span className={styles.helpIcon}>🎧</span>
            Need help? Talk to an agent
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        {error && <p className={styles.error}>{error}</p>}
        <Button onClick={handleProceed} disabled={!agreed || loading}>
          {loading ? 'Processing...' : 'Proceed to Payment'}
          <span>→</span>
        </Button>
        <p className={styles.secureText}>
          <span>🔒</span> Secure 256-bit Connection
        </p>
      </footer>
    </div>
    </>
  );
};
