import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/shared/Header';
import { Button } from '../../components/shared/Button';
import { Loader } from '../../components/shared/Loader';
import { VehicleData } from '../../App';
import { getByLicensePlate } from '../../api/vehicleApi';
import styles from './VehicleInfo.module.css';

interface VehicleInfoProps {
  onNext: (data: VehicleData) => void;
  initialData: VehicleData | null;
}

export const VehicleInfo: React.FC<VehicleInfoProps> = ({ onNext, initialData }) => {
  const navigate = useNavigate();
  const [licensePlate, setLicensePlate] = useState(initialData?.licensePlate || '');
  const [ownerName, setOwnerName] = useState(initialData?.ownerName || '');
  const [carName, setCarName] = useState(initialData?.carName || '');
  const [company, setCompany] = useState(initialData?.company || '');
  const [purchaseYear, setPurchaseYear] = useState(initialData?.purchaseYear || '');
  const [fuelType, setFuelType] = useState(initialData?.fuelType || '');
  const [transmission, setTransmission] = useState(initialData?.transmission || '');
  const [vehicleType, setVehicleType] = useState(initialData?.vehicleType || '');
  const [city, setCity] = useState(initialData?.city || '');
  const [usageType, setUsageType] = useState(initialData?.usageType || 'personal');
  const [insuranceClaimsCount, setInsuranceClaimsCount] = useState(initialData?.insuranceClaimsCount || '0');
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleSearch = async () => {
    if (!licensePlate.trim()) return;
    setIsSearching(true);
    setSearchError('');
    try {
      const data = await getByLicensePlate(licensePlate);
      onNext({
        licensePlate: data.licencePlate,
        ownerName: data.ownerName,
        carName: data.carName,
        company: data.company,
        purchaseYear: data.purchaseYear.toString(),
        fuelType: data.fuelType,
        transmission: data.transmission,
        vehicleType: data.vehicleType,
        city: data.city,
        usageType: data.usageType,
        insuranceClaimsCount: data.insuranceClaimsCount.toString(),
      });
    } catch (error) {
      setSearchError(error instanceof Error ? error.message : 'Vehicle not found');
      setIsSearching(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <>
      {isSearching && <Loader />}
      <Header title="Get a Quote" onBack={() => navigate('/')} />

      <main className={styles.main}>
        <div className={styles.progress}>
          <div className={styles.progressHeader}>
            <span className={styles.stepText}>STEP 1 OF 4</span>
            <span className={styles.finalText}>Vehicle Details</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '25%' }} />
          </div>
        </div>

        <div className={styles.titleSection}>
          <h3 className={styles.title}>Vehicle Details</h3>
          <p className={styles.subtitle}>Let's find your car to get started with your premium coverage.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span className={styles.labelText}>License Plate</span>
              <div className={styles.plateInputWrapper}>
                <input
                  className={styles.plateInput}
                  placeholder="ABC-1234"
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                />
              </div>
            </label>
            <Button 
              onClick={handleSearch}
              disabled={!licensePlate.trim() || isSearching}
            >
              {isSearching ? 'Searching...' : 'Find My Car'}
            </Button>
            {searchError && <p className={styles.error}>{searchError}</p>}
          </div>
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerText}>MANUAL ENTRY</span>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.manualForm}>
          <label className={styles.selectLabel}>
            <span className={styles.selectLabelText}>OWNER NAME</span>
            <input
              className={styles.input}
              placeholder="Enter owner name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </label>

          <label className={styles.selectLabel}>
            <span className={styles.selectLabelText}>LICENSE PLATE</span>
            <input
              className={styles.input}
              placeholder="Enter license plate"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
            />
          </label>

          <div className={styles.gridRow}>
            <label className={styles.selectLabel}>
              <span className={styles.selectLabelText}>COMPANY</span>
              <select className={styles.select} value={company} onChange={(e) => setCompany(e.target.value)}>
                <option value="">Select Company</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
                <option>Tesla</option>
                <option>Maruti Suzuki</option>
                <option>Hyundai</option>
                <option>Tata</option>
                <option>Mahindra</option>
              </select>
            </label>
            <label className={styles.selectLabel}>
              <span className={styles.selectLabelText}>YEAR</span>
              <select className={styles.select} value={purchaseYear} onChange={(e) => setPurchaseYear(e.target.value)}>
                <option value="">Select Year</option>
                {years.map(year => <option key={year}>{year}</option>)}
              </select>
            </label>
          </div>

          <label className={styles.selectLabel}>
            <span className={styles.selectLabelText}>CAR MODEL</span>
            <input
              className={styles.input}
              placeholder="Enter car model"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
            />
          </label>

          <div className={styles.gridRow}>
            <label className={styles.selectLabel}>
              <span className={styles.selectLabelText}>FUEL TYPE</span>
              <select className={styles.select} value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                <option value="">Select Fuel</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </label>
            <label className={styles.selectLabel}>
              <span className={styles.selectLabelText}>TRANSMISSION</span>
              <select className={styles.select} value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                <option value="">Select Type</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </label>
          </div>

          <div className={styles.gridRow}>
            <label className={styles.selectLabel}>
              <span className={styles.selectLabelText}>VEHICLE TYPE</span>
              <select className={styles.select} value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                <option value="">Select Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
              </select>
            </label>
            <label className={styles.selectLabel}>
              <span className={styles.selectLabelText}>CITY</span>
              <input
                className={styles.input}
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>

          <label className={styles.selectLabel}>
            <span className={styles.selectLabelText}>INSURANCE CLAIMS</span>
            <select className={styles.select} value={insuranceClaimsCount} onChange={(e) => setInsuranceClaimsCount(e.target.value)}>
              <option value="0">0 Claims</option>
              <option value="1">1 Claim</option>
              <option value="2">2 Claims</option>
              <option value="3">3+ Claims</option>
            </select>
          </label>
        </div>

        <div className={styles.vehicleUseSection}>
          <p className={styles.vehicleUseTitle}>Primary vehicle use</p>
          <div className={styles.radioGroup}>
            <label className={usageType === 'personal' ? styles.radioOptionActive : styles.radioOption}>
              <div className={styles.radioContent}>
                <span className={styles.radioLabel}>Personal</span>
              </div>
              <input
                type="radio"
                name="usageType"
                checked={usageType === 'personal'}
                onChange={() => setUsageType('personal')}
                className={styles.radioInput}
              />
            </label>
            <label className={usageType === 'commercial' ? styles.radioOptionActive : styles.radioOption}>
              <div className={styles.radioContent}>
                <span className={styles.radioLabel}>Commercial</span>
              </div>
              <input
                type="radio"
                name="usageType"
                checked={usageType === 'commercial'}
                onChange={() => setUsageType('commercial')}
                className={styles.radioInput}
              />
            </label>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Button 
          onClick={() => onNext({
            licensePlate,
            ownerName,
            carName,
            company,
            purchaseYear,
            fuelType,
            transmission,
            vehicleType,
            city,
            usageType,
            insuranceClaimsCount
          })}
        >
          Continue to Step 2
          <span>→</span>
        </Button>
      </footer>
    </>
  );
};
