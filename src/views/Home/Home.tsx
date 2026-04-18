import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';
import { GetQuoteButton, FloatingBar } from './HomeClient';

const perks = [
  { title: 'Instant Quotes', desc: 'Price in under 2 minutes.' },
  { title: '24/7 Support', desc: 'Human help anytime.' },
  { title: 'Digital ID', desc: 'Instant proof on phone.' },
  { title: 'Fair Pricing', desc: 'Based on how you drive.' },
];

export function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerBrand}>
            <div className={styles.headerLogo} aria-hidden="true">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <span className={styles.headerBrandText}>PolicyPilot</span>
          </div>
          <Link href="/sign-in" className={styles.headerButton} aria-label="Sign in to your account">
            Sign In
          </Link>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <span className={styles.badge}>Premium Coverage</span>
          <h1 className={styles.heroTitle} id="hero-title">
            Insurance for the <span className={styles.highlight}>Modern</span> Driver
          </h1>
          <p className={styles.heroSubtitle}>
            Experience a new standard of protection. High-end coverage tailored to your lifestyle, all managed from your phone.
          </p>
          <div className={styles.imageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
              alt="Luxury car"
              className={styles.heroImage}
              width={800}
              height={224}
              priority
            />
          </div>
          <GetQuoteButton>
            <span className={styles.ctaButton}>Get a Quote</span>
          </GetQuoteButton>
        </div>
      </section>

      <section className={styles.perks} aria-labelledby="perks-title">
        <h2 className={styles.sectionTitle} id="perks-title">
          <span className={styles.titleLine} aria-hidden="true" />
          Why Choose Us?
        </h2>
        <div className={styles.perksGrid}>
          {perks.map((perk, index) => (
            <div key={index} className={styles.perkCard}>
              <h3 className={styles.perkTitle}>{perk.title}</h3>
              <p className={styles.perkDesc}>{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.vision} aria-labelledby="vision-label">
        <h3 className={styles.visionLabel}>Our Vision</h3>
        <p className={styles.visionText}>
          We believe insurance should be <span className={styles.visionBold}>transparent, efficient, and mobile-first.</span>
        </p>
        <p className={styles.visionDesc}>
          By leveraging real-time data and sophisticated AI, we offer coverage that adapts to you, providing peace of mind without the legacy complexities of traditional firms.
        </p>
        <a href="#" className={styles.visionLink} aria-label="Learn more about our mission">
          Learn more about our mission →
        </a>
      </section>

      <footer className={styles.footer} role="contentinfo">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo} aria-hidden="true">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <span className={styles.footerBrandText}>PolicyPilot</span>
          </div>
          <nav className={styles.footerLinks} aria-label="Product links">
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
          </nav>
          <p className={styles.footerCopyright}>
            © 2024 PolicyPilot Insurance Services LLC. All rights reserved.
          </p>
        </div>
      </footer>

      <FloatingBar />
    </div>
  );
}
