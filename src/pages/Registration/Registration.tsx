import React, { useState } from 'react';
import { Header } from '../../components/shared/Header';
import { Button } from '../../components/shared/Button';
import styles from './Registration.module.css';

interface RegistrationProps {
  onNext: () => void;
  onBack: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onNext, onBack }) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <Header title="Profile Setup" onBack={onBack} />
        <div className={styles.progress}>
          <div className={styles.progressHeader}>
            <span className={styles.stepText}>ACCOUNT VERIFIED</span>
            <span className={styles.progressPercent}>STEP 1 OF 2</span>
          </div>
          <div className={styles.progressBar} role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
            <div className={styles.progressFill} style={{ width: '50%' }} />
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.welcome}>
          <div className={styles.iconCircle}>
            <span className={styles.icon}>👤</span>
          </div>
          <h3 className={styles.title}>Welcome!</h3>
          <p className={styles.subtitle}>Please provide a few details to personalize your insurance experience.</p>
        </div>

        <form className={styles.form} aria-label="Profile setup form">
          <div className={styles.field}>
            <label className={styles.label} htmlFor="reg-fullname">Full Name</label>
            <div className={styles.inputWrapper}>
              <input
                id="reg-fullname"
                className={styles.input}
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <span className={styles.inputIcon} aria-hidden="true">📛</span>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="reg-age">Age</label>
            <div className={styles.ageControl}>
              <button type="button" className={styles.ageButton} onClick={() => setAge(Math.max(18, age - 1))} aria-label="Decrease age">
                −
              </button>
              <input
                id="reg-age"
                className={styles.ageInput}
                value={age}
                readOnly
                aria-label="Age"
              />
              <button type="button" className={styles.ageButton} onClick={() => setAge(Math.min(100, age + 1))} aria-label="Increase age">
                +
              </button>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Gender</label>
            <div className={styles.genderGroup} role="radiogroup" aria-label="Gender">
              <label className={gender === 'male' ? styles.genderOptionActive : styles.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                  className={styles.genderInput}
                />
                <span>Male</span>
              </label>
              <label className={gender === 'female' ? styles.genderOptionActive : styles.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                  className={styles.genderInput}
                />
                <span>Female</span>
              </label>
              <label className={gender === 'other' ? styles.genderOptionActive : styles.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={() => setGender('other')}
                  className={styles.genderInput}
                />
                <span>Other</span>
              </label>
            </div>
          </div>
        </form>
      </main>

      <footer className={styles.footer}>
        <Button onClick={onNext}>Continue</Button>
      </footer>
    </div>
  );
};
