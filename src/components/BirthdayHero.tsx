import { motion } from 'motion/react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BirthdayHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src={import.meta.env.BASE_URL + "images/hero-bg.jpg"}
          alt="Birthday celebration background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
      </div>

      {/* Decorative Hearts */}
      <motion.div
        className="absolute top-20 left-20 text-pink-400"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Heart size={40} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute top-32 right-24 text-rose-400"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Heart size={32} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32 text-fuchsia-400"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 20, -20, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 2,
        }}
      >
        <Heart size={36} fill="currentColor" />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute top-16 right-16 text-yellow-400"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Sparkles size={28} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-40 text-yellow-300"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Sparkles size={24} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <Gift size={80} className="mx-auto text-pink-500 mb-4" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-pink-600 mb-6 drop-shadow-lg"
        >
          Happy 25th Birthday
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-rose-500 mb-8"
        >
          Varshitha Nasam ✨
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-pink-700 max-w-2xl mx-auto leading-relaxed"
        >
          Today we celebrate you and all the joy you bring into this world. Seven years of friendship and three years of long distance, yet our bond grows stronger. Wishing you endless happiness, success, and smiles always. With love, Diya 💖
        </motion.p>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex justify-center space-x-4"
        >
          <Heart size={40} className="text-pink-500" fill="currentColor" />
          <Heart size={40} className="text-rose-500" fill="currentColor" />
          <Heart size={40} className="text-fuchsia-500" fill="currentColor" />
        </motion.div>
      </div>
    </div>
  );
}