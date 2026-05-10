import { motion } from 'framer-motion';
import { audio } from '../utils/AudioService';

export function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 w-full max-w-4xl px-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="font-arcade text-4xl md:text-6xl text-game-accent mb-4 text-shadow-sm">
          HIGOR GASPAR
        </h1>
        <h2 className="text-xl md:text-2xl text-game-primary font-pixel tracking-widest uppercase">
          Desenvolvedor Full Stack
        </h2>
      </motion.div>

      <motion.button
        onClick={onStart}
        onMouseEnter={() => audio.playHover()}
        className="font-arcade text-2xl text-white pixel-borders bg-game-panel p-6 px-12 hover:bg-game-accent transition-colors animate-pulse"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        PRESS START
      </motion.button>
      
      <div className="mt-12 text-center text-game-text/60 font-pixel text-lg max-w-lg">
        <p>Visão Computacional | Cloud | AWS | Python | Node.js | PHP</p>
        <p className="mt-2 text-sm">&copy; 2026 - Versão 1.0</p>
      </div>
    </div>
  );
}
