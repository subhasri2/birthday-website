import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute text-pink-300"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 3 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <Heart
            size={Math.random() * 20 + 15}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}