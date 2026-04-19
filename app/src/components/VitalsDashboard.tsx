import React from 'react';
import { usePetStore } from '../store/usePetStore';
import { Drumstick, Smile, Battery } from 'lucide-react';
import styles from './VitalsDashboard.module.css';

export function VitalsDashboard() {
  const vitals = usePetStore((state) => state.vitals);

  const getBarColor = (val: number) => {
    if (val > 50) return 'var(--color-success)';
    if (val > 20) return 'var(--color-warning)';
    return 'var(--color-danger)';
  };

  return (
    <div className={styles.dashboard}>
      <VitalBar 
        icon={<Drumstick size={18} />} 
        label="Hunger" 
        value={vitals.hunger} 
        color={getBarColor(vitals.hunger)} 
      />
      <VitalBar 
        icon={<Smile size={18} />} 
        label="Happiness" 
        value={vitals.happiness} 
        color={getBarColor(vitals.happiness)} 
      />
      <VitalBar 
        icon={<Battery size={18} />} 
        label="Energy" 
        value={vitals.energy} 
        color={getBarColor(vitals.energy)} 
      />
    </div>
  );
}

interface VitalBarProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}

function VitalBar({ icon, label, value, color }: VitalBarProps) {
  const displayValue = Math.round(value);
  
  return (
    <div className={styles.vitalRow}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.barContainer}>
        <div className={styles.barHeader}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{displayValue}%</span>
        </div>
        <div className={styles.track}>
          <div 
            className={styles.fill} 
            style={{ width: `${value}%`, backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
}
