import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  step: number;
  totalSteps: number;
  percentage: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps, percentage, label }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.stepText}>{label || `STEP ${step} OF ${totalSteps}`}</p>
        <p className={styles.percentage}>{percentage}%</p>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
