import { usePetStore } from './store/usePetStore';
import { VitalsMonitor } from './components/VitalsMonitor';
import { VitalsDashboard } from './components/VitalsDashboard';
import { NamingScreen } from './components/NamingScreen';
import { ActionBar } from './components/ActionBar';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const name = usePetStore((state) => state.name);
  const stage = usePetStore((state) => state.stage);
  const status = usePetStore((state) => state.status);
  const activeInteraction = usePetStore((state) => state.activeInteraction);
  const isSleeping = activeInteraction === 'sleeping';

  if (!name) {
    return (
      <div className="appContainer">
        <NamingScreen />
      </div>
    );
  }

  return (
    <div className="appContainer">
      <VitalsMonitor />
      
      <header className="header">
        <h1 className="title">{name}</h1>
        <div className="statusBadges">
          <span className="badge">{stage}</span>
          <span className={`badge ${status === 'Sick' ? 'badgeDanger' : 'badgeSuccess'}`}>
            {status}
          </span>
        </div>
      </header>

      <div className={`petArea ${isSleeping ? 'sleepingTheme' : ''}`}>
        <AnimatePresence>
          {activeInteraction === 'eating' && (
            <motion.div 
              key="food"
              className="particle foodParticle"
              initial={{ y: -80, x: -80, opacity: 0, rotate: -45, scale: 0.5 }}
              animate={{ y: -10, x: -20, opacity: 1, rotate: 0, scale: 1.5 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
            >
              🍔
            </motion.div>
          )}

          {activeInteraction === 'playing' && (
            <motion.div 
              key="heart"
              className="particle heartParticle"
              initial={{ y: 0, x: 20, opacity: 1, scale: 0 }}
              animate={{ y: -80, x: 20, opacity: 0, scale: 2 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              ❤️
            </motion.div>
          )}
          
          {activeInteraction === 'sleeping' && (
            <motion.div 
              key="zzz"
              className="particle zzzParticle"
              initial={{ y: -20, x: 20, opacity: 0 }}
              animate={{ y: -80, x: 40, opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Zzz
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="petSprite"
          animate={
            activeInteraction === 'playing' 
              ? { y: [0, -30, 0, -30, 0], rotate: [0, 10, -10, 10, 0] } 
              : activeInteraction === 'sleeping'
              ? { scale: [1, 1.05, 1] }
              : { y: [0, -10, 0] } 
          }
          transition={{ 
            duration: activeInteraction === 'playing' ? 1.5 : activeInteraction === 'sleeping' ? 4 : 2, 
            repeat: activeInteraction === 'playing' ? 0 : Infinity,
            ease: "easeInOut"
          }}
        >
          {stage === 'Baby' ? '🥚' : '🐥'}
        </motion.div>
      </div>

      <VitalsDashboard />
      <ActionBar />
    </div>
  );
}

export default App;
