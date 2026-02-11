import React, { useState } from 'react';
import { Header } from '../components/shared/Header';
import { Button } from '../components/shared/Button';
import { VehicleData } from '../App';
import { getPolicySuggestions, PolicySuggestion } from '../api/policyApi';
import styles from './VehicleReview.module.css';

interface VehicleReviewProps {
  vehicleData: VehicleData;
  onContinue: (policyData: PolicySuggestion) => void;
  onEdit: () => void;
}

export const VehicleReview: React.FC<VehicleReviewProps> = ({ vehicleData, onContinue, onEdit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleContinue = async () => {
    setIsLoading(true);
    setError('');
    try {
      const policyData = await getPolicySuggestions(
        vehicleData.licensePlate,
        vehicleData.fuelType,
        vehicleData.usageType,
        vehicleData.purchaseYear,
        vehicleData.insuranceClaimsCount
      );
      onContinue(policyData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch policy suggestions');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header title="Review Details" onBack={onEdit} />

      <main className={styles.main}>
        <div className={styles.progress}>
          <div className={styles.progressHeader}>
            <span className={styles.stepText}>STEP 2 OF 4</span>
            <span className={styles.finalText}>Review Details</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '50%' }} />
          </div>
        </div>

        <div className={styles.titleSection}>
          <h1 className={styles.title}>Review Your Vehicle Details</h1>
          <p className={styles.subtitle}>Please verify the information below before continuing</p>
        </div>

        <div className={styles.card}>
          <div className={styles.infoGrid}>
            <div className={styles.infoRow}>
              <span className={styles.label}>License Plate</span>
              <span className={styles.value}>{vehicleData.licensePlate}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Owner Name</span>
              <span className={styles.value}>{vehicleData.ownerName}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Vehicle</span>
              <span className={styles.value}>{vehicleData.company} {vehicleData.carName}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Year</span>
              <span className={styles.value}>{vehicleData.purchaseYear}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Vehicle Type</span>
              <span className={styles.value}>{vehicleData.vehicleType}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Fuel Type</span>
              <span className={styles.value}>{vehicleData.fuelType}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Transmission</span>
              <span className={styles.value}>{vehicleData.transmission}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>City</span>
              <span className={styles.value}>{vehicleData.city}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Usage Type</span>
              <span className={styles.value}>{vehicleData.usageType}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Insurance Claims</span>
              <span className={styles.value}>{vehicleData.insuranceClaimsCount}</span>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        {error && <p className={styles.error}>{error}</p>}
        <Button variant="secondary" onClick={onEdit}>Edit Details</Button>
        <Button onClick={handleContinue} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Continue to Quote'}
        </Button>
      </footer>
    </div>
  );
};
