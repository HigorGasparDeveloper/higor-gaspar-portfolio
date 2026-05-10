import { useState } from 'react';
import { GameView } from './components/GameView';
import { StartScreen } from './components/StartScreen';
import { audio } from './utils/AudioService';

function App() {
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const handleStart = () => {
    audio.init();
    audio.startBGM();
    audio.playSelect();
    setStarted(true);
  };

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    audio.toggleMute(newMuted);
  };

  return (
    <div className="scanlines min-h-screen bg-game-bg text-game-text font-pixel flex flex-col items-center justify-center relative p-4 crt-flicker">
      {started && (
        <button 
          onClick={toggleMute} 
          className="absolute top-4 right-4 z-50 text-2xl bg-game-panel pixel-borders p-2 hover:bg-game-accent hover:text-white transition-colors"
          onMouseEnter={() => audio.playHover()}
        >
          {muted ? '🔇' : '🔊'}
        </button>
      )}

      {!started ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <GameView />
      )}
    </div>
  );
}

export default App;
