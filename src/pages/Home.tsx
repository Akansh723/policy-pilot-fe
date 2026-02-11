import React, { useState, useEffect } from 'react';
import { Button } from '../components/shared/Button';
import styles from './Home.module.css';

interface HomeProps {
  onGetQuote: () => void;
}

const perks = [
  { icon: '⏱️', title: 'Instant Quotes', desc: 'Price in under 2 minutes.' },
  { icon: '🎧', title: '24/7 Support', desc: 'Human help anytime.' },
  { icon: '📱', title: 'Digital ID', desc: 'Instant proof on phone.' },
  { icon: '📊', title: 'Fair Pricing', desc: 'Based on how you drive.' },
];

export const Home: React.FC<HomeProps> = ({ onGetQuote }) => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerBrand}>
            <div className={styles.headerLogo}>
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <span className={styles.headerBrandText}>PolicyPilot</span>
          </div>
          <button className={styles.headerButton} onClick={() => window.location.href = '/sign-in'}>
            Sign In
          </button>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Premium Coverage</span>
          <h1 className={styles.heroTitle}>
            Insurance for the <span className={styles.highlight}>Modern</span> Driver
          </h1>
          <p className={styles.heroSubtitle}>
            Experience a new standard of protection. High-end coverage tailored to your lifestyle, all managed from your phone.
          </p>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
              alt="Luxury car"
              className={styles.heroImage}
            />
          </div>
          <Button onClick={onGetQuote}>Get a Quote</Button>
        </div>
      </section>

      <section className={styles.perks}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleLine} />
          Why Choose Us?
        </h2>
        <div className={styles.perksGrid}>
          {perks.map((perk, index) => (
            <div key={index} className={styles.perkCard}>
              <div className={styles.perkIcon}>{perk.icon}</div>
              <h3 className={styles.perkTitle}>{perk.title}</h3>
              <p className={styles.perkDesc}>{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.vision}>
        <h3 className={styles.visionLabel}>Our Vision</h3>
        <p className={styles.visionText}>
          We believe insurance should be <span className={styles.visionBold}>transparent, efficient, and mobile-first.</span>
        </p>
        <p className={styles.visionDesc}>
          By leveraging real-time data and sophisticated AI, we offer coverage that adapts to you, providing peace of mind without the legacy complexities of traditional firms.
        </p>
        <a href="#" className={styles.visionLink}>
          Learn more about our mission →
        </a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <span className={styles.footerBrandText}>PolicyPilot</span>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Product</h4>
              <ul className={styles.footerList}>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Claims</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Legal</h4>
              <ul className={styles.footerList}>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Compliance</a></li>
              </ul>
            </div>
          </div>
          <p className={styles.footerCopyright}>
            © 2024 PolicyPilot Insurance Services LLC. All rights reserved.
          </p>
        </div>
      </footer>

      {showFloating && (
        <div className={styles.floatingBar}>
          <div className={styles.floatingContent}>
            <div className={styles.floatingPrice}>
              <span className={styles.floatingLabel}>Starting at</span>
              <span className={styles.floatingAmount}>₹5,000/yr</span>
            </div>
            <button className={styles.floatingButton} onClick={onGetQuote}>
              Get Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
