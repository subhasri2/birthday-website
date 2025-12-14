import { motion } from 'motion/react';
import { Heart, Star, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export function BirthdayWishes() {
  const wishes = [
    {
      icon: Heart,
      title: "With All My Love",
      message: "Every day with you feels like a celebration. Your kindness, beauty, and amazing spirit make life so much sweeter."
    },
    {
      icon: Star,
      title: "You're My Star",
      message: "You light up every room you enter and bring magic to the ordinary. Today we celebrate the incredible person you are."
    },
    {
      icon: Sparkles,
      title: "Shine Bright",
      message: "May this new year of your life be filled with endless adventures, laughter, and all the happiness you deserve."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-pink-200 to-rose-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-16"
        >
          Birthday Wishes Just For You
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {wishes.map((wish, index) => {
            const IconComponent = wish.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="mb-6"
                    >
                      <IconComponent
                        size={60}
                        className="mx-auto text-pink-500"
                        fill={wish.icon === Heart ? "currentColor" : "none"}
                      />
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                      {wish.title}
                    </h3>

                    <p className="text-pink-600 leading-relaxed">
                      {wish.message}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}