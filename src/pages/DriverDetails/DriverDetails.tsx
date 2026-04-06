import React, { useState } from 'react';
import { validateName, validateNumericString } from '../../utils/validation';
import styles from './DriverDetails.module.css';

interface DriverDetailsProps {
  onNext: () => void;
  onBack: () => void;
}

export const DriverDetails: React.FC<DriverDetailsProps> = ({ onNext, onBack }) => {
  const [zipCode, setZipCode] = useState('');
  const [dob, setDob] = useState('05 / 24 / 1992');
  const [accidents, setAccidents] = useState('no');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.backButton} onClick={onBack} role="button" tabIndex={0} aria-label="Go back" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onBack(); } }}>
          <span className={styles.backIcon} aria-hidden="true">‹</span>
        </div>
        <h2 className={styles.headerTitle}>Car Insurance</h2>
      </header>

      <main className={styles.main}>
        <div className={styles.progress}>
          <div className={styles.progressHeader}>
            <p className={styles.stepText}>STEP 2 OF 4</p>
            <p className={styles.progressPercent}>50%</p>
          </div>
          <div className={styles.progressBar} role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} aria-label="Step 2 of 4">
            <div className={styles.progressFill} style={{ width: '50%' }} />
          </div>
        </div>

        <div className={styles.titleSection}>
          <h1 className={styles.title}>Driver Details</h1>
          <p className={styles.subtitle}>Tell us a bit more to get your personalized quote.</p>
        </div>

        <div className={styles.formSection}>
          <div className={styles.field}>
            <label className={styles.label}>
              <p className={styles.labelText}>What's your zip code?</p>
              <input
                className={styles.input}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="12345"
                maxLength={6}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
              />
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.labelText} id="dob-label">Date of Birth</label>
            <div className={styles.dateInputWrapper}>
              <input
                className={styles.dateInput}
                type="text"
                readOnly
                value={dob}
                aria-labelledby="dob-label"
              />
              <span className={styles.calendarIcon} aria-hidden="true">📅</span>
            </div>
          </div>

          <div className={styles.field}>
            <p className={styles.labelText} id="accidents-label">Any accidents in the last 3 years?</p>
            <div className={styles.toggleGroup} role="group" aria-labelledby="accidents-label">
              <button
                className={accidents === 'no' ? styles.toggleButtonActive : styles.toggleButton}
                onClick={() => setAccidents('no')}
                aria-pressed={accidents === 'no'}
              >
                No
              </button>
              <button
                className={accidents === 'yes' ? styles.toggleButtonActive : styles.toggleButton}
                onClick={() => setAccidents('yes')}
                aria-pressed={accidents === 'yes'}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <button className={styles.backBtn} onClick={onBack}>
          Back
        </button>
        <button className={styles.nextBtn} onClick={onNext}>
          Next
        </button>
      </footer>
    </div>
  );
};
