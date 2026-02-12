import React from 'react';
import styles from './Loader.module.css';

export const Loader: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};
