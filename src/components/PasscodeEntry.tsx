import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Lock, Sparkles, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

interface PasscodeEntryProps {
  onCorrectPasscode: () => void;
}

export function PasscodeEntry({ onCorrectPasscode }: PasscodeEntryProps) {
  const [passcode, setPasscode] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // You can change this secret code to whatever you want
  const SECRET_CODE = 'varshadiya';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passcode.toLowerCase().trim() === SECRET_CODE) {
      onCorrectPasscode();
    } else {
      setIsWrong(true);
      setAttempts(prev => prev + 1);
      setPasscode('');

      // Reset error state after animation
      setTimeout(() => setIsWrong(false), 2000);
    }
  };

  const hints = [
    "It’s not one name… it’s two hearts blended into one.",
    "Take your name, take mine… now don’t keep them separate.",
    "It’s what happens when you and I become a single word.",
    "Neither fully yours nor fully mine… but something we share.",
    "Say both our names slowly… the answer is hiding in between."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Heart size={Math.random() * 30 + 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 text-pink-400"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        className="absolute top-20 right-16 text-rose-400"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <Gift size={35} />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-20 text-fuchsia-400"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Heart size={45} fill="currentColor" />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.4
        }}
        className="w-full max-w-md"
      >
        <Card className="p-8 bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl">
          <div className="text-center">
            {/* Lock Icon */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: isWrong ? [-5, 5, -5, 5, 0] : 0,
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 0.5 }
              }}
              className="mb-6"
            >
              <div className="relative">
                <Lock
                  size={80}
                  className={`mx-auto transition-colors duration-300 ${isWrong ? 'text-red-400' : 'text-pink-500'
                    }`}
                />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  <Heart size={24} className="text-rose-400" fill="currentColor" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-pink-600 mb-3"
            >
              Secret Birthday Portal
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-pink-700 mb-8 text-lg"
            >
              Enter the secret code if you are the birthday girl! 💕
            </motion.p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                animate={isWrong ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Input
                  type="password"
                  placeholder="Enter secret code..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className={`text-center text-lg py-6 border-2 transition-all duration-300 ${isWrong
                    ? 'border-red-300 bg-red-50'
                    : 'border-pink-300 focus:border-pink-500 bg-pink-50/50'
                    }`}
                  autoFocus
                />
              </motion.div>

              <Button
                type="submit"
                className="w-full py-6 text-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!passcode.trim()}
              >
                <Heart size={20} className="mr-2" fill="currentColor" />
                Unlock Birthday Magic
                <Sparkles size={20} className="ml-2" />
              </Button>
            </form>

            {/* Error Message */}
            {isWrong && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg"
              >
                <p className="text-red-600 text-sm">
                  Oops! That's not quite right. Try again! 💭
                </p>
              </motion.div>
            )}

            {/* Hints */}
            {attempts > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-pink-100 border border-pink-200 rounded-lg"
              >
                <p className="text-pink-700 text-sm font-medium mb-2">💡 Hint:</p>
                <p className="text-pink-600 text-sm">
                  {hints[(attempts - 1) % hints.length]}
                </p>
              </motion.div>
            )}

            {/* Decorative Hearts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex justify-center space-x-3"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Heart size={16} className="text-pink-400" fill="currentColor" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}