import React, { useState } from 'react';
import { Header } from '../../components/shared/Header';
import { Button } from '../../components/shared/Button';
import { Loader } from '../../components/shared/Loader';
import { updateProfile } from '../../api/userApi';
import { validateName, validateAge, sanitize } from '../../utils/validation';
import styles from './UserDetails.module.css';

interface UserDetailsProps {
  onNext: () => void;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ onNext }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const nameCheck = validateName(name);
    if (!nameCheck.valid) {
      setError(nameCheck.error);
      return;
    }
    const ageCheck = validateAge(age);
    if (!ageCheck.valid) {
      setError(ageCheck.error);
      return;
    }
    if (!agreed) {
      setError('Please agree to terms and conditions');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await updateProfile({ name: sanitize(name.trim()), age, gender });
      onNext();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className={styles.container}>
      <Header title="Profile Setup" />

      <main className={styles.main}>
        <div className={styles.titleSection}>
          <div className={styles.iconBox}>
            <span className={styles.icon}>👤</span>
          </div>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.subtitle}>Please provide a few details to personalize your insurance experience.</p>
        </div>

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="ud-fullname">Full Name</label>
            <div className={styles.inputWrapper}>
              <input
                id="ud-fullname"
                className={styles.input}
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className={styles.inputIcon} aria-hidden="true">👤</span>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="ud-age">Age</label>
            <div className={styles.ageControl}>
              <button 
                className={styles.ageButton} 
                onClick={() => setAge(Math.max(16, age - 1))}
                type="button"
                aria-label="Decrease age"
              >
                −
              </button>
              <input
                id="ud-age"
                className={styles.ageInput}
                type="number"
                min="16"
                max="100"
                value={age}
                onChange={(e) => setAge(Math.max(16, Math.min(100, parseInt(e.target.value) || 16)))}
              />
              <button 
                className={styles.ageButton} 
                onClick={() => setAge(Math.min(100, age + 1))}
                type="button"
                aria-label="Increase age"
              >
                +
              </button>
            </div>
            <p className={styles.hint}>Must be at least 16 years old</p>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Gender</label>
            <div className={styles.genderControl} role="radiogroup" aria-label="Gender">
              <label className={gender === 'male' ? styles.genderOptionActive : styles.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other')}
                  className={styles.genderInput}
                />
                Male
              </label>
              <label className={gender === 'female' ? styles.genderOptionActive : styles.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other')}
                  className={styles.genderInput}
                />
                Female
              </label>
              <label className={gender === 'other' ? styles.genderOptionActive : styles.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other')}
                  className={styles.genderInput}
                />
                Other
              </label>
            </div>
          </div>

          <div className={styles.agreementBox}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className={styles.checkboxInput}
              />
              <span className={styles.agreementText}>
                I agree to the <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>.
              </span>
            </label>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        {error && <div className={styles.error} role="alert">{error}</div>}
        <Button onClick={handleSubmit} disabled={!name || !agreed || loading}>
          {loading ? 'Saving...' : 'Complete Profile'}
          <span>✓</span>
        </Button>
      </footer>
    </div>
    </>
  );
};
