import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Card: React.FC<CardProps> = ({ children, ariaLabel }) => {
  return <div className={styles.card} role="region" aria-label={ariaLabel}>{children}</div>;
};
