import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface LoveQuestionProps {
  onYesClicked: () => void;
}

export function LoveQuestion({ onYesClicked }: LoveQuestionProps) {
  const [showHearts, setShowHearts] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [heartCount, setHeartCount] = useState(0);

  const handleYesClick = () => {
    setShowHearts(true);
    setHeartCount(prev => prev + 1);

    // Wait for heart animation then proceed
    setTimeout(() => {
      onYesClicked();
    }, 2000);
  };

  const handleNoHover = () => {
    // Move the No button to a random position
    const maxX = 200;
    const maxY = 100;
    setNoButtonPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Heart size={Math.random() * 25 + 15} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-16 left-16 text-pink-400"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <Sparkles size={35} />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 text-rose-400"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, -20, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Heart size={40} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-24 text-fuchsia-400"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      >
        <Sparkles size={30} />
      </motion.div>

      {/* Explosion Hearts when Yes is clicked */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {Array.from({ length: 25 }, (_, i) => (
            <motion.div
              key={`explosion-${heartCount}-${i}`}
              className="absolute text-pink-500"
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 800,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 600,
                scale: [0, 1.5, 0],
                opacity: [1, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              <Heart size={Math.random() * 30 + 20} fill="currentColor" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          type: "spring",
          bounce: 0.4
        }}
        className="w-full max-w-lg z-20"
      >
        <Card className="p-10 bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl">
          <div className="text-center">
            {/* Welcome Message */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold text-pink-600 mb-4">
                Welcome My Love
              </h1>
              <motion.h2
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-5xl font-bold text-rose-500 mb-6"
              >
                Varshitha ✨
              </motion.h2>
            </motion.div>

            {/* Animated Heart */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mb-8"
            >
              <Heart size={80} className="mx-auto text-pink-500" fill="currentColor" />
            </motion.div>

            {/* Question */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-10"
            >
              <h3 className="text-3xl font-semibold text-pink-700 mb-4">
                Do you love me?
              </h3>
              <p className="text-pink-600 text-lg">
                Choose your answer wisely... 💕
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex justify-center items-center space-x-8 relative">
              {/* Yes Button */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleYesClick}
                  className="px-8 py-6 text-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-w-[120px]"
                  disabled={showHearts}
                >
                  <Heart size={24} className="mr-2" fill="currentColor" />
                  Yes!
                </Button>
              </motion.div>

              {/* No Button (moves on hover) */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{
                  x: 0 + noButtonPosition.x,
                  y: 0 + noButtonPosition.y,
                  opacity: 1
                }}
                transition={{
                  delay: 0.7,
                  type: "spring",
                  damping: 15,
                  stiffness: 300
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Button
                  onMouseEnter={handleNoHover}
                  className="px-8 py-6 text-xl bg-gray-300 hover:bg-gray-400 text-gray-700 shadow-lg transition-all duration-300 min-w-[120px] cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNoHover();
                  }}
                >
                  No
                </Button>
              </motion.div>
            </div>

            {/* Cheeky message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <p className="text-pink-500 text-sm italic">
                *Hint: The "No" button is a bit shy... 😉*
              </p>
            </motion.div>

            {/* Loading state when Yes is clicked */}
            {showHearts && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 bg-pink-100 rounded-lg border border-pink-200"
              >
                <p className="text-pink-700 font-medium">
                  Aww, I love you too! Preparing your birthday surprise... 💕
                </p>
              </motion.div>
            )}

            {/* Decorative Hearts at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex justify-center space-x-2"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  <Heart size={12} className="text-pink-400" fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}