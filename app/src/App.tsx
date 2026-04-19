import { usePetStore } from './store/usePetStore';
import { VitalsMonitor } from './components/VitalsMonitor';
import { VitalsDashboard } from './components/VitalsDashboard';
import { NamingScreen } from './components/NamingScreen';
import './App.css';

function App() {
  const name = usePetStore((state) => state.name);
  const stage = usePetStore((state) => state.stage);
  const status = usePetStore((state) => state.status);

  if (!name) {
    return (
      <div className="appContainer">
        <NamingScreen />
      </div>
    );
  }

  return (
    <div className="appContainer">
      {/* Headless component to run the game loop engine */}
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

      <div className="petArea">
        {/* Sprites will evolve in Phase 4 */}
        <div className="petSprite">
          {stage === 'Baby' ? '🥚' : '🐥'}
        </div>
      </div>

      <VitalsDashboard />
    </div>
  );
}

export default App;
