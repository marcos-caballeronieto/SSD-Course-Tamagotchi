import { usePetStore } from '../store/usePetStore';
import { Drumstick, Gamepad2, Moon } from 'lucide-react';
import styles from './ActionBar.module.css';

export function ActionBar() {
  const { 
    feed, 
    play, 
    rest, 
    activeInteraction,
    vitals
  } = usePetStore();

  const isLocked = activeInteraction !== 'idle';
  const cantPlay = vitals.energy < 10;

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
