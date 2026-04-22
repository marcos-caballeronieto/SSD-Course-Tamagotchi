import { usePetStore } from '../store/usePetStore';
import { Drumstick, Gamepad2, Moon, Pill } from 'lucide-react';
import styles from './ActionBar.module.css';

export function ActionBar() {
  const { 
    feed, 
    play, 
    rest, 
    heal,
    activeInteraction,
    vitals,
    status
  } = usePetStore();

  const isLocked = activeInteraction !== 'idle';
  const cantPlay = vitals.energy < 10;
  const isSick = status === 'Sick';

  // If the pet is sick, ONLY the heal button is available to focus on recovery
  if (isSick) {
    return (
      <div className={styles.actionBar}>
        <button 
          className={`${styles.actionBtn} ${styles.healBtn}`} 
          disabled={isLocked} 
          onClick={heal}
        >
          <div className={styles.iconBox}><Pill size={20} /></div>
          <span>Heal</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.actionBar}>
      <button 
        className={styles.actionBtn} 
        disabled={isLocked} 
        onClick={feed}
      >
        <div className={styles.iconBox}><Drumstick size={20} /></div>
        <span>Feed</span>
      </button>

      <button 
        className={`${styles.actionBtn} ${styles.playBtn}`} 
        disabled={isLocked || cantPlay} 
        onClick={play}
        title={cantPlay ? 'Not enough energy to play' : ''}
      >
        <div className={styles.iconBox}><Gamepad2 size={20} /></div>
        <span>Play</span>
      </button>

      <button 
        className={`${styles.actionBtn} ${styles.restBtn}`} 
        disabled={isLocked} 
        onClick={rest}
      >
        <div className={styles.iconBox}><Moon size={20} /></div>
        <span>Rest</span>
      </button>
    </div>
  );
}
