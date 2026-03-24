import React from 'react';
import styles from './Loader.module.css';

export const Loader: React.FC = () => {
  return (
    <div className={styles.overlay} role="status" aria-label="Loading">
      <div className={styles.spinner}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};
