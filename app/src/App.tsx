import { usePetStore } from './store/usePetStore';
import { VitalsMonitor } from './components/VitalsMonitor';
import { VitalsDashboard } from './components/VitalsDashboard';
import { NamingScreen } from './components/NamingScreen';
import { ActionBar } from './components/ActionBar';
import { DevMenu } from './components/DevMenu/DevMenu';
import { RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const name = usePetStore((state) => state.name);
  const stage = usePetStore((state) => state.stage);
  const status = usePetStore((state) => state.status);
  const growth = usePetStore((state) => state.growth);
  const activeInteraction = usePetStore((state) => state.activeInteraction);
  const resetGame = usePetStore((state) => state.resetGame);
  const isSleeping = activeInteraction === 'sleeping';
  const isSick = status === 'Sick';

  if (!name) {
    return (
      <div className="appContainer">
        <NamingScreen />
      </div>
    );
  }

  const handleReset = () => {
    if (window.confirm("Are you sure you want to adopt a new pet? This will erase your current pet completely.")) {
      resetGame();
    }
  };

  // Determine Sprite
  const sprite = isSick 
    ? (stage === 'Baby' ? '🤢' : '🤒')
    : (stage === 'Baby' ? '🥚' : '🐥');

  // Determine Scale based on Growth logic
  let spriteScale = 1;
  if (stage === 'Adult') spriteScale = 1.5;
  else if (growth >= 67) spriteScale = 1.5;
  else if (growth >= 34) spriteScale = 1.2;

  // Compile theme classes
  const themeClasses = `petArea ${isSleeping ? 'sleepingTheme' : ''} ${isSick ? 'sickTheme' : ''}`;

  return (
    <div className="appContainer">
      <VitalsMonitor />
      
      <header className="header">
        <button className="resetBtn" onClick={handleReset} title="Adopt a new pet">
          <RefreshCcw size={20} />
        </button>
        <h1 className="title">{name}</h1>
        <div className="statusBadges">
          <span className="badge">{stage}</span>
          <span className={`badge ${isSick ? 'badgeDanger' : 'badgeSuccess'}`}>
            {status}
          </span>
        </div>
      </header>

      <div className={themeClasses}>
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

          {activeInteraction === 'healing' && (
            <motion.div 
              key="heal"
              className="particle healParticle"
              initial={{ y: 20, opacity: 0, scale: 0.5 }}
              animate={{ y: -50, opacity: [0, 1, 0], scale: 2 }}
              transition={{ duration: 1.5, repeat: 1, ease: "easeOut" }}
            >
              ➕
            </motion.div>
          )}

          {activeInteraction === 'evolving' && (
            <motion.div 
              key="evolve"
              className="evolveOverlay"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 5, 10] }}
              transition={{ duration: 3, ease: "easeOut" }}
            />
          )}

          {/* Random sick particles if sick */}
          {isSick && (
            <motion.div 
              key="sickClouds"
              className="particle sickParticle"
              initial={{ y: -10, x: -30, opacity: 0 }}
              animate={{ y: -40, x: -40, opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              💨
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="petSprite"
          animate={
            activeInteraction === 'playing' 
              ? { y: [0, -30, 0, -30, 0], rotate: [0, 10, -10, 10, 0], scale: spriteScale } 
              : activeInteraction === 'sleeping'
              ? { scale: [spriteScale, spriteScale * 1.05, spriteScale] }
              : activeInteraction === 'evolving'
              ? { rotate: [0, 360, 720, 1080], scale: [spriteScale, 2, spriteScale] }
              : { y: [0, -10, 0], scale: spriteScale } 
          }
          transition={{ 
            duration: activeInteraction === 'playing' ? 1.5 : activeInteraction === 'sleeping' ? 4 : activeInteraction === 'evolving' ? 4 : 2, 
            repeat: activeInteraction === 'playing' || activeInteraction === 'evolving' ? 0 : Infinity,
            ease: "easeInOut"
          }}
        >
          {sprite}
        </motion.div>
      </div>

      <VitalsDashboard />
      <ActionBar />
      <DevMenu />
    </div>
  );
}

export default App;
