import React, { useState } from 'react';
import { Button } from '../components/shared/Button';
import { requestOtp, verifyOtp } from '../api/authApi';
import styles from './SignIn.module.css';

interface SignInProps {
  onNext: (token: string, isNewUser: boolean) => void;
  onBack: () => void;
  totalPremium?: number;
}

export const SignIn: React.FC<SignInProps> = ({ onNext, onBack, totalPremium }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const isStandalone = !totalPremium;

  const handleSendCode = async () => {
    if (!mobile || mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      await requestOtp(mobile);
      setOtpSent(true);
      setResendTimer(30);
      const interval = setInterval(() => {
        setResendTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const { token, isNewUser } = await verifyOtp(mobile, otpString);
      localStorage.setItem('authToken', token);
      onNext(token, isNewUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pastedData.length === 6) {
      setOtp(pastedData.split(''));
      document.getElementById(`otp-5`)?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className={isStandalone ? styles.standaloneContainer : styles.container}>
      {isStandalone ? (
        <header className={styles.standaloneHeader}>
          <button className={styles.closeButton} onClick={onBack}>×</button>
          <div className={styles.brandBadge}>
            <div className={styles.brandIcon}>
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <span className={styles.brandText}>PolicyPilot</span>
          </div>
          <div className={styles.spacer} />
        </header>
      ) : (
        <header className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          ←
        </button>
        <div className={styles.headerTitle}>
          <span className={styles.headerLabel}>CHECKOUT</span>
          <span className={styles.headerText}>Final Step</span>
        </div>
        <div className={styles.spacer} />
        </header>
      )}

      <main className={isStandalone ? styles.standaloneMain : styles.main}>
        {isStandalone && (
          <div className={styles.standaloneHero}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>🛡️</span>
            </div>
            <h1 className={styles.standaloneTitle}>
              <span className={styles.titleBold}>Welcome back</span>
            </h1>
            <p className={styles.standaloneSubtitle}>Sign in to manage your coverage</p>
          </div>
        )}

        {!isStandalone && (
        <div className={styles.premiumCard}>
          <div className={styles.cardBg} />
          <div className={styles.cardIcon}>
            <span>🛡️</span>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardLabel}>QUOTE SECURED</p>
            <div className={styles.cardPrice}>
              <p className={styles.priceAmount}>₹{totalPremium?.toLocaleString() || '0'}</p>
              <p className={styles.pricePeriod}>/ year</p>
            </div>
          </div>
          <div className={styles.cardDecor}>
            <span>🚗</span>
          </div>
          </div>
        )}

        {!isStandalone && (
          <div className={styles.titleSection}>
          <h1 className={styles.title}>
            <span className={styles.titleLight}>Secure your</span>
            <span className={styles.titleBold}>new policy</span>
          </h1>
          <p className={styles.subtitle}>Confirm your identity to finalize your coverage in seconds.</p>
        </div>
        )}

        <div className={isStandalone ? styles.standaloneForm : styles.form}>
          {!otpSent ? (
            <>
              <div className={styles.field}>
                <label className={styles.label}>MOBILE NUMBER</label>
                <div className={styles.inputWrapper}>
                  <input
                    className={styles.input}
                    placeholder="9876543210"
                    type="tel"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  />
                  <span className={styles.inputIcon}>📱</span>
                </div>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              {isStandalone ? (
                <button className={styles.standaloneButton} onClick={handleSendCode} disabled={isLoading}>
                  <span>{isLoading ? 'Sending...' : 'Send Secure Code'}</span>
                  <span>⚡</span>
                </button>
              ) : (
                <Button onClick={handleSendCode} disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Secure Code'}
                  <span>→</span>
                </Button>
              )}
            </>
          ) : (
            <>
              <div className={styles.field}>
                <label className={styles.label}>ENTER OTP</label>
                <p className={styles.otpHint}>Code sent to {mobile}</p>
                <div className={styles.otpInputs}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      className={styles.otpBox}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                    />
                  ))}
                </div>
                {error && <p className={styles.errorSmall}>{error}</p>}
              </div>

              {isStandalone ? (
                <button className={styles.standaloneButton} onClick={handleVerifyOtp} disabled={isLoading}>
                  <span>{isLoading ? 'Verifying...' : 'Verify & Continue'}</span>
                  <span>→</span>
                </button>
              ) : (
                <Button onClick={handleVerifyOtp} disabled={isLoading}>
                  {isLoading ? 'Verifying...' : 'Verify & Continue'}
                  <span>→</span>
                </Button>
              )}

              <button className={styles.resendButton} onClick={handleSendCode} disabled={resendTimer > 0}>
                {resendTimer > 0 ? `Resend Code (${resendTimer}s)` : 'Resend Code'}
              </button>
            </>
          )}

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>{isStandalone ? 'INTEGRATED LOGIN' : 'INSTANT ACCESS WITH'}</span>
            <div className={styles.dividerLine} />
          </div>

          <div className={isStandalone ? styles.standaloneSocial : styles.socialButtons}>
            <button className={styles.socialButton}>
              <span className={styles.googleIcon}>G</span>
              <span>Google</span>
            </button>
            <button className={styles.socialButton}>
              <span className={styles.appleIcon}>🍎</span>
              <span>Apple</span>
            </button>
          </div>
        </div>
      </main>

      <footer className={isStandalone ? styles.standaloneFooter : styles.footer}>
        {isStandalone ? (
          <>
            <p className={styles.standaloneFooterText}>
              New to PolicyPilot? <a href="#" className={styles.standaloneFooterLink}>Join now</a>
            </p>
            <div className={styles.standaloneFooterLinks}>
              <a href="#">Privacy</a>
              <a href="#">Security</a>
              <a href="#">Terms</a>
            </div>
          </>
        ) : (
          <div className={styles.footerLinks}>
          <a href="#">Privacy</a>
          <span>•</span>
          <a href="#">Security</a>
          <span>•</span>
          <a href="#">Terms</a>
        </div>
        )}
      </footer>
    </div>
  );
};
