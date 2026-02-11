import React from 'react';
import { VehicleDetails } from '../../services/VehicleService';
import styles from './VehicleDetailsView.module.css';

interface VehicleDetailsViewProps {
  details: VehicleDetails;
  onReset: () => void;
}

export const VehicleDetailsView: React.FC<VehicleDetailsViewProps> = ({ details, onReset }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Vehicle Details</h1>
        <p className={styles.subtitle}>Review your vehicle information below.</p>
      </div>
      
      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.label}>Vehicle Number</span>
          <span className={styles.value}>{details.vehicleNumber}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Manufacturer</span>
          <span className={styles.value}>{details.manufacturer}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Model</span>
          <span className={styles.value}>{details.model}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Year</span>
          <span className={styles.value}>{details.year}</span>
        </div>
      </div>
    </div>
  );
};
