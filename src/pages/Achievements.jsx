import { Trophy, Calendar, Star } from 'lucide-react';
import { achievements } from '../data/content';
import { motion } from 'framer-motion';

export function Achievements() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-yellow-500" size={48} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Our Achievements
            </h1>
            <Trophy className="text-yellow-500" size={48} />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating our successes, big and small!
          </p>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="md:flex">
              {achievement.image && (
                <div className="md:w-1/3">
                  <img
                    src={`/photos/${achievement.image}.webp`}
                    alt={achievement.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              )}
              <div className={`p-8 ${achievement.image ? 'md:w-2/3' : 'w-full'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-yellow-500 fill-yellow-500" size={24} />
                  <h2 className="text-3xl font-bold text-gray-800">{achievement.title}</h2>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{achievement.date}</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {achievements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No achievements recorded yet. Stay tuned!</p>
        </div>
      )}
    </div>
  );
}

