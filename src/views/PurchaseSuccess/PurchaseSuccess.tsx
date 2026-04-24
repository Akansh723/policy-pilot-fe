'use client';

import React from 'react';
import { Button } from '../../components/shared/Button';
import { VehicleData } from '../../context/QuoteFlowContext';
import styles from './PurchaseSuccess.module.css';

interface PurchaseSuccessProps {
  vehicleData: VehicleData;
  purchaseId: string;
}

export const PurchaseSuccess: React.FC<PurchaseSuccessProps> = ({ vehicleData, purchaseId }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandIcon}>🛡️</span>
          <span className={styles.brandText}>PolicyPilot</span>
        </div>
        <div className={styles.dots}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </header>

      <main className={styles.main} aria-labelledby="success-title">
        <div className={styles.successIcon} aria-hidden="true">
          <div className={styles.iconOuter}>
            <div className={styles.iconInner}>
              <span className="material-symbols-outlined">check</span>
            </div>
          </div>
        </div>

        <div className={styles.titleSection}>
          <h1 className={styles.title} id="success-title">Purchase Successful!</h1>
          <p className={styles.subtitle}>
            We are reviewing your policy and will update you within 48 hours.
          </p>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.policyHeader}>
            <div>
              <p className={styles.policyLabel}>Policy Number</p>
              <p className={styles.policyNumber}>{purchaseId}</p>
            </div>
            <span className={styles.verifiedIcon} aria-hidden="true">
              <span className="material-symbols-outlined">verified</span>
            </span>
          </div>
          <div className={styles.divider} />
          <div className={styles.vehicleInfo}>
            <div className={styles.vehicleIcon} aria-hidden="true">
              <span className="material-symbols-outlined">directions_car</span>
            </div>
            <div>
              <p className={styles.vehicleLabel}>Vehicle Covered</p>
              <p className={styles.vehicleName}>{vehicleData.company} {vehicleData.carName}</p>
              <p className={styles.vehicleDetails}>{vehicleData.licensePlate} • {vehicleData.purchaseYear}</p>
            </div>
          </div>
        </div>

        <div className={styles.infoBox}>
          <span className={styles.infoIcon} aria-hidden="true">
            <span className="material-symbols-outlined">info</span>
          </span>
          <p className={styles.infoText}>
            Your policies can always be viewed and managed in your <span className={styles.profileLink}>Profile</span> section.
          </p>
        </div>

        <div className={styles.actions}>
          <Button onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </div>
      </main>

      <div className={styles.gradient} aria-hidden="true" />
    </div>
  );
};
