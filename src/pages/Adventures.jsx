import { Compass, Calendar, MapPin } from 'lucide-react';
import { adventures } from '../data/content';
import { motion } from 'framer-motion';

export function Adventures() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Compass className="text-blue-500" size={48} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Our Life & Adventures
            </h1>
            <MapPin className="text-green-500" size={48} />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stories and memories from our exciting adventures together!
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-12">
        {adventures.map((adventure, index) => (
          <motion.div
            key={adventure.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="text-blue-500" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{adventure.title}</h2>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <Calendar size={16} />
                <span className="text-sm">{adventure.date}</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{adventure.description}</p>
              
              {adventure.images && adventure.images.length > 0 && (
                <div className={`grid gap-4 ${
                  adventure.images.length === 1 ? 'grid-cols-1' :
                  adventure.images.length === 2 ? 'grid-cols-2' :
                  'grid-cols-2 md:grid-cols-3'
                }`}>
                  {adventure.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
                    >
                      <img
                        src={`/photos/${image}.webp`}
                        alt={`${adventure.title} - Photo ${imgIndex + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {adventures.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No adventures recorded yet. More coming soon!</p>
        </div>
      )}
    </div>
  );
}
