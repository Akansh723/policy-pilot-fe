import React, { useState } from 'react';
import { Input } from '../Input/Input';
import styles from './VehicleNumberForm.module.css';

interface VehicleNumberFormProps {
  onSubmit: (vehicleNumber: string) => void;
  onManualEntry: () => void;
  loading: boolean;
}

export const VehicleNumberForm: React.FC<VehicleNumberFormProps> = ({ 
  onSubmit, 
  onManualEntry,
  loading 
}) => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleNumber.trim()) {
      setError('Vehicle number is required');
      return;
    }
    setError('');
    onSubmit(vehicleNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Vehicle Details</h1>
        <p className={styles.subtitle}>Enter your vehicle number to get started.</p>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <Input
            label="What's your vehicle number?"
            placeholder="DL01AB1234"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
            error={error}
          />
        </div>
        
        <button 
          type="button" 
          className={styles.manualLink}
          onClick={onManualEntry}
        >
          Enter details manually instead
        </button>
      </form>
    </div>
  );
};
