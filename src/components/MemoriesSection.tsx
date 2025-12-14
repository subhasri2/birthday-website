import { motion } from 'motion/react';
import { Heart, Camera } from 'lucide-react';
import { Card } from './ui/card';

export function MemoriesSection() {
  return (
    <div className="py-20 bg-gradient-to-b from-pink-200 to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
            Beautiful Memories
          </h2>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto">
            Every moment with you becomes a treasured memory. Here's to creating many more together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "/birthday-website/memories/memory3.jpg",
            "/birthday-website/memories/memory6.jpg",
            "/birthday-website/memories/memory7.jpg",
            "/birthday-website/memories/memory8.jpg",
            "/birthday-website/memories/memory9.jpg",
            "/birthday-website/memories/memory10.jpg"
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="aspect-square bg-gradient-to-br from-pink-200 to-rose-300 border-pink-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                <img
                  src={src}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={index === 5 ? { objectPosition: 'center 20%' } : undefined}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-pink-600">
            <Heart size={24} fill="currentColor" />
            <span className="text-xl font-medium">Made with love for you</span>
            <Heart size={24} fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}