import { useState, useEffect } from 'react';
import { usePetStore, type PetVitals } from '../../store/usePetStore';
import styles from './DevMenu.module.css';

export function DevMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const vitals = usePetStore((state) => state.vitals);
  const stage = usePetStore((state) => state.stage);
  const status = usePetStore((state) => state.status);
  const growth = usePetStore((state) => state.growth);
  const setStat = usePetStore((state) => state.setStat);
  const setStage = usePetStore((state) => state.setStage);
  const setStatus = usePetStore((state) => state.setStatus);
  const resetGame = usePetStore((state) => state.resetGame);
  const fastForward = usePetStore((state) => state.fastForward);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on Shift + D
      if (e.shiftKey && e.key.toLowerCase() === 'd') {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.devMenu} data-testid="dev-menu">
      <div className={styles.header}>
        <h3>🛠 QA Tools</h3>
        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>×</button>
      </div>

      <div className={styles.section}>
        <h4>Vitals</h4>
        {(Object.keys(vitals) as Array<keyof PetVitals>).map((key) => (
          <div key={key} className={styles.sliderGroup}>
            <label htmlFor={`slider-${key}`}>
              {key}: {Math.round(vitals[key])}
            </label>
            <input
              id={`slider-${key}`}
              type="range"
              min="0"
              max="100"
              value={Math.round(vitals[key])}
              onChange={(e) => setStat(key, Number(e.target.value))}
            />
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h4>State overrides</h4>
        <div className={styles.buttonGroup}>
          <button onClick={() => setStatus(status === 'Sick' ? 'Normal' : 'Sick')}>
            Toggle Sick ({status})
          </button>
          <button onClick={() => setStage(stage === 'Baby' ? 'Adult' : 'Baby')}>
            Toggle Stage ({stage})
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Time manipulation</h4>
        {"Growth: " + Math.round(growth) + "%"}
        <div className={styles.buttonGroup}>
          <button onClick={() => fastForward(60)}>+1m</button>
          <button onClick={() => fastForward(600)}>+10m (Adult)</button>
        </div>
      </div>

      <div className={styles.section}>
        <button className={styles.resetBtn} onClick={resetGame}>
          Global Reset
        </button>
      </div>
    </div>
  );
}
