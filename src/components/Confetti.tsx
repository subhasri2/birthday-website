import { motion } from 'motion/react';

export function Confetti() {
  const confetti = Array.from({ length: 50 }, (_, i) => i);
  
  const colors = ['bg-pink-400', 'bg-rose-400', 'bg-fuchsia-400', 'bg-pink-300', 'bg-rose-300'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {confetti.map((piece) => (
        <motion.div
          key={piece}
          className={`absolute w-2 h-2 ${colors[Math.floor(Math.random() * colors.length)]}`}
          style={{
            left: Math.random() * 100 + '%',
          }}
          initial={{
            y: -20,
            rotation: 0,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 20,
            rotation: 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}