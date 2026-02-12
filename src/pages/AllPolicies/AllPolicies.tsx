import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/shared/Loader';
import { getMyPolicies, MyPolicy } from '../../api/policyApi';
import styles from './AllPolicies.module.css';

export const AllPolicies: React.FC = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState<MyPolicy[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const data = await getMyPolicies(token);
          setPolicies(data);
        }
      } catch (error) {
        console.error('Failed to fetch policies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPolicies();
  }, []);

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case 'REVIEW': return { label: 'Under Review', color: '#f59e0b' };
      case 'ACTIVE': return { label: 'Active', color: '#059669' };
      case 'CANCELLED': return { label: 'Cancelled', color: '#94a3b8' };
      case 'EXPIRED': return { label: 'Expired', color: '#94a3b8' };
      default: return { label: status, color: '#6b7280' };
    }
  };

  const filteredPolicies = policies.filter(policy => {
    const vehicleName = `${policy.vehicleId.company} ${policy.vehicleId.carName}`.toLowerCase();
    return vehicleName.includes(searchQuery.toLowerCase());
  });

  return (
    <>
      {loading && <Loader />}
      <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className={styles.headerTop}>
          <h1 className={styles.title}>My Policies</h1>
          <div className={styles.avatar}>
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
        <div className={styles.searchBox}>
          <span className="material-symbols-outlined" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>search</span>
          <input 
            type="text" 
            placeholder="Search your vehicles..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main className={styles.main}>
        {loading ? (
          <p className={styles.loading}>Loading...</p>
        ) : filteredPolicies.length === 0 ? (
          <div className={styles.empty}>
            <span className="material-symbols-outlined" style={{ fontSize: '64px', color: '#cbd5e1' }}>description</span>
            <p>{searchQuery ? 'No vehicles found' : 'No policies found'}</p>
          </div>
        ) : (
          <div className={styles.policiesList}>
            {filteredPolicies.map((policy) => {
              const isExpanded = expandedId === policy._id;
              const statusInfo = getStatusDisplay(policy.status);
              return (
                <div key={policy._id} className={`${styles.policyCard} ${isExpanded ? styles.expanded : ''}`}>
                  <div className={styles.cardHeader} onClick={() => setExpandedId(isExpanded ? null : policy._id)}>
                    <div className={styles.vehicleInfo}>
                      <div className={styles.vehicleIcon}>
                        <span className="material-symbols-outlined">electric_car</span>
                      </div>
                      <div>
                        <h3 className={styles.vehicleName}>{policy.vehicleId.company} {policy.vehicleId.carName}</h3>
                        <p className={styles.policyNumber}>{policy._id.slice(-10)}</p>
                      </div>
                    </div>
                    <div className={styles.headerRight}>
                      <span className={styles.statusBadge} style={{ backgroundColor: statusInfo.color }}>
                        {statusInfo.label}
                      </span>
                      <span className={`material-symbols-outlined ${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}>chevron_right</span>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className={styles.cardBody}>
                      <div className={styles.detailsGrid}>
                        <div>
                          <p className={styles.label}>Provider</p>
                          <p className={styles.value}>{policy.policyId.providerName}</p>
                        </div>
                        <div>
                          <p className={styles.label}>License Plate</p>
                          <p className={styles.value}>{policy.vehicleId.licencePlate}</p>
                        </div>
                      </div>
                      <div className={styles.divider} />
                      <div className={styles.detailsGrid}>
                        <div>
                          <p className={styles.label}>Expiry Date</p>
                          <p className={styles.value}>{new Date(policy.policyExpiryDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className={styles.label}>Total Policy Cost</p>
                          <p className={styles.value}>₹{policy.totalPremium.toLocaleString()}/year</p>
                        </div>
                      </div>
                      <div className={styles.divider} />
                      <div>
                        <p className={styles.label}>Add-ons</p>
                        <div className={styles.addons}>
                          {policy.addons.length > 0 ? (
                            policy.addons.map((addon, idx) => (
                              <span key={idx} className={styles.addonTag}>
                                <span className="material-symbols-outlined">home_repair_service</span>
                                {addon.name}
                              </span>
                            ))
                          ) : (
                            <span className={styles.noAddons}>No add-ons</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>

      <button className={styles.fab} onClick={() => navigate('/get-a-quote')}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
    </>
  );
};
