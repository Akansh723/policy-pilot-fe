'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuoteFlow } from '@/context/QuoteFlowContext';
import { Dashboard } from '@/views/Dashboard';
import styles from './Home.module.css';

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, authChecked, handleLogout } = useQuoteFlow();

  if (authChecked && isAuthenticated) {
    return (
      <Dashboard
        onLogout={async () => {
          await handleLogout();
          router.push('/');
        }}
      />
    );
  }

  return <>{children}</>;
}

export function GetQuoteButton({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <button
      className={`${styles.floatingButton}`}
      style={{ all: 'unset', display: 'contents' }}
      onClick={() => router.push('/get-a-quote')}
    >
      {children}
    </button>
  );
}

export function FloatingBar() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.floatingBar} role="complementary" aria-label="Quick quote">
      <div className={styles.floatingContent}>
        <div className={styles.floatingPrice}>
          <span className={styles.floatingLabel}>Starting at</span>
          <span className={styles.floatingAmount}>₹5,000/yr</span>
        </div>
        <button
          className={styles.floatingButton}
          onClick={() => router.push('/get-a-quote')}
          aria-label="Get a quote starting at ₹5,000 per year"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}
