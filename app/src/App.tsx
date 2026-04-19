import { VitalsMonitor } from './components/VitalsMonitor';
import { VitalsDashboard } from './components/VitalsDashboard';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      {/* Headless component to run the game loop engine */}
      <VitalsMonitor />
      
      <header className="header">
        <h1 className="title">Tiny Tamagotchi</h1>
      </header>

      <div className="petArea">
        <div className="petSprite">🥚</div>
      </div>

      <VitalsDashboard />
    </div>
  );
}

export default App;
