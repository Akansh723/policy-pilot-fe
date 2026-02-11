import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyPolicies, MyPolicy } from '../api/policyApi';
import { getUserProfile } from '../api/userApi';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState<MyPolicy[]>([]);
  const [userName, setUserName] = useState('User');
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (token) {
          const [policiesData, userProfile] = await Promise.all([
            getMyPolicies(token),
            getUserProfile(token)
          ]);
          setPolicies(policiesData);
          setUserName(userProfile.name || 'User');
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const latestPolicy = policies[0];

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'REVIEW': return { label: 'Under Review', color: '#eab308' };
      case 'ACTIVE': return { label: 'Active', color: '#059669' };
      case 'CANCELLED': return { label: 'Cancelled', color: '#dc2626' };
      case 'EXPIRED': return { label: 'Expired', color: '#dc2626' };
      default: return { label: status, color: '#6b7280' };
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <span className={styles.brandText}>PolicyPilot</span>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.notificationBtn}>
            <span className="material-symbols-outlined">notifications</span>
            <span className={styles.notificationDot} />
          </button>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.greeting}>
          <h1 className={styles.greetingTitle}>Hello, {userName}!</h1>
          <p className={styles.greetingText}>Everything looks good today.</p>
        </div>

        {latestPolicy && (
          <section className={styles.policyCard}>
            <div className={styles.policyGradient} />
            <div className={styles.policyContent}>
              {loading ? (
                <p style={{ color: 'white' }}>Loading...</p>
              ) : (
                <>
                  <div className={styles.policyHeader}>
                    <div>
                      <span className={styles.activeBadge} style={{ backgroundColor: getStatusDisplay(latestPolicy.status).color }}>
                        {getStatusDisplay(latestPolicy.status).label}
                      </span>
                      <h2 className={styles.policyTitle}>{latestPolicy.vehicleId.company} {latestPolicy.vehicleId.carName}</h2>
                      <p className={styles.policyId}>ID: {latestPolicy._id.slice(-10)}</p>
                    </div>
                    <span className={styles.carIcon}>
                      <span className="material-symbols-outlined">electric_car</span>
                    </span>
                  </div>
                  <div className={styles.policyFooter}>
                    <div>
                      <p className={styles.paymentLabel}>Policy Expires</p>
                      <p className={styles.paymentDate}>{new Date(latestPolicy.policyExpiryDate).toLocaleDateString()}</p>
                    </div>
                    <button className={styles.viewDetailsBtn} onClick={() => navigate('/policies')}>
                      See All Policies
                      <span>→</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        <section className={styles.getQuoteSection}>
          <button className={styles.getQuoteBtn} onClick={() => navigate('/get-a-quote')}>
            <div className={styles.getQuoteContent}>
              <div className={styles.getQuoteIcon}>
                <span className="material-symbols-outlined">add_circle</span>
              </div>
              <div className={styles.getQuoteText}>
                <h3 className={styles.getQuoteTitle}>Get a New Quote</h3>
                <p className={styles.getQuoteDesc}>Add a vehicle to your policy in minutes</p>
              </div>
            </div>
            <span className={styles.chevron}>
              <span className="material-symbols-outlined">chevron_right</span>
            </span>
          </button>
        </section>

        <section className={styles.quickActions}>
          <h3 className={styles.sectionTitle}>Quick Actions</h3>
          <div className={styles.actionsGrid}>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <span className="material-symbols-outlined">badge</span>
              </div>
              <span className={styles.actionLabel}>Digital ID Card</span>
            </button>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <span className="material-symbols-outlined">add_moderator</span>
              </div>
              <span className={styles.actionLabel}>File a Claim</span>
            </button>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className={styles.actionLabel}>Payment History</span>
            </button>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <span className="material-symbols-outlined">minor_crash</span>
              </div>
              <span className={styles.actionLabel}>Roadside Help</span>
            </button>
          </div>
        </section>

        <section className={styles.newsSection}>
          <div className={styles.newsHeader}>
            <h3 className={styles.sectionTitle}>News & Tips</h3>
            <button className={styles.seeAllBtn}>See All</button>
          </div>
          <div className={styles.newsScroll}>
            <div className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src="https://via.placeholder.com/260x128" alt="EV Charging" />
                <div className={styles.newsOverlay} />
                <span className={styles.newsTag}>MAINTENANCE</span>
              </div>
              <div className={styles.newsContent}>
                <h4 className={styles.newsTitle}>5 Tips for EV Battery Health during Winter</h4>
                <p className={styles.newsDesc}>Learn how to maximize your range when temperatures drop.</p>
              </div>
            </div>
            <div className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src="https://via.placeholder.com/260x128" alt="Safety" />
                <div className={styles.newsOverlay} />
                <span className={styles.newsTag}>SAFETY</span>
              </div>
              <div className={styles.newsContent}>
                <h4 className={styles.newsTitle}>Advanced Safety Features Explained</h4>
                <p className={styles.newsDesc}>Understanding how your collision avoidance system works.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
