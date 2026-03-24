import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {onBack && (
          <button className={styles.backButton} onClick={onBack} aria-label="Go back">
            <span className={styles.backIcon} aria-hidden="true">‹</span>
          </button>
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
};
