import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { VehicleDetails } from '../../services/VehicleService';
import styles from './ManualEntryForm.module.css';

interface ManualEntryFormProps {
  onSubmit: (details: VehicleDetails) => void;
  onBack: () => void;
}

export const ManualEntryForm: React.FC<ManualEntryFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    manufacturer: '',
    model: '',
    year: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.vehicleNumber.trim()) newErrors.vehicleNumber = 'Required';
    if (!formData.manufacturer.trim()) newErrors.manufacturer = 'Required';
    if (!formData.model.trim()) newErrors.model = 'Required';
    if (!formData.year || parseInt(formData.year) < 1900 || parseInt(formData.year) > new Date().getFullYear()) {
      newErrors.year = 'Invalid year';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        vehicleNumber: formData.vehicleNumber,
        manufacturer: formData.manufacturer,
        model: formData.model,
        year: parseInt(formData.year)
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Enter Vehicle Details</h1>
        <p className={styles.subtitle}>Provide your vehicle information manually.</p>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <Input
            label="Vehicle Number"
            placeholder="DL01AB1234"
            value={formData.vehicleNumber}
            onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value.toUpperCase() })}
            error={errors.vehicleNumber}
          />
        </div>
        
        <div className={styles.field}>
          <Input
            label="Manufacturer"
            placeholder="Toyota"
            value={formData.manufacturer}
            onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
            error={errors.manufacturer}
          />
        </div>
        
        <div className={styles.field}>
          <Input
            label="Model"
            placeholder="Camry"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            error={errors.model}
          />
        </div>
        
        <div className={styles.field}>
          <Input
            label="Year"
            type="number"
            placeholder="2022"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            error={errors.year}
          />
        </div>
      </form>
    </div>
  );
};
