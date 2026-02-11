import React, { useState } from 'react';
import { Header } from '../../components/shared/Header';
import { Button } from '../../components/shared/Button';
import { Toggle } from '../../components/shared/Toggle';
import { PolicySuggestion } from '../../api/policyApi';
import styles from './QuoteResults.module.css';

interface QuoteResultsProps {
  policyData: PolicySuggestion;
  initialSelectedAddons?: string[];
  onBack: () => void;
  onNext: (selectedAddons: string[], totalPremium: number) => void;
}

export const QuoteResults: React.FC<QuoteResultsProps> = ({ policyData, initialSelectedAddons, onBack, onNext }) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    initialSelectedAddons || []
  );

  const basePremium = policyData.bestPolicy.finalPremium;
  const availableAddons = policyData.bestPolicy.addons;
  
  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const addonTotal = availableAddons
    .filter(addon => selectedAddons.includes(addon.addonId))
    .reduce((sum, addon) => sum + addon.price, 0);
  
  const totalPrice = basePremium + addonTotal;

  return (
    <div className={styles.container}>
      <Header title="Quote Details" onBack={onBack} />

      <main className={styles.main}>
        <div className={styles.progress}>
          <div className={styles.progressHeader}>
            <span className={styles.stepText}>STEP 3 OF 4</span>
            <span className={styles.finalText}>Quote Details</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '75%' }} />
          </div>
        </div>

        <div className={styles.titleSection}>
          <h1 className={styles.title}>Your Estimated Premium</h1>
          <p className={styles.subtitle}>Based on your driving profile</p>
        </div>

        <div className={styles.premiumCard}>
          <div className={styles.premiumBg1} />
          <div className={styles.premiumBg2} />
          <p className={styles.premiumAmount}>
            ₹{totalPrice.toLocaleString()}<span className={styles.premiumPeriod}> / year</span>
          </p>
          <div className={styles.badge}>{policyData.bestPolicy.providerName}</div>
        </div>

        <div className={styles.coverageSection}>
          <h3 className={styles.coverageTitle}>Personalize your coverage</h3>
          <div className={styles.coverageCard}>
            <div className={styles.addonsSection}>
              {availableAddons.map(addon => (
                <div key={addon.addonId} className={styles.addonItem}>
                  <div className={styles.addonContent}>
                    <div className={styles.addonIcon}>🔧</div>
                    <div>
                      <p className={styles.addonTitle}>{addon.name}</p>
                      <p className={styles.addonDesc}>{addon.code}</p>
                    </div>
                  </div>
                  <div className={styles.addonRight}>
                    <span className={styles.addonPrice}>+₹{addon.price}</span>
                    <Toggle 
                      checked={selectedAddons.includes(addon.addonId)} 
                      onChange={() => toggleAddon(addon.addonId)} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            Quote is an estimate based on information provided. Final premium may vary after driving record verification. Terms and conditions apply.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <Button onClick={() => onNext(selectedAddons, totalPrice)}>Purchase Policy</Button>
        <Button variant="secondary">Save for Later</Button>
      </footer>
    </div>
  );
};
