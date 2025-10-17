import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts, achievements, galleryImages } from '../data/content';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = galleryImages.slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const latestPost = blogPosts[0];
  const latestAchievement = achievements[0];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Welcome to Robin & Lucky's World!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          Follow Robin's adventures and Lucky's playful moments. Check out our latest news, achievements, and photo galleries!
        </p>
        <div className="flex items-center justify-center gap-2 text-purple-600">
          <Sparkles className="animate-pulse" />
          <span className="text-lg font-medium">Celebrating Robin's 10th Birthday!</span>
          <Sparkles className="animate-pulse" />
        </div>
      </motion.div>

      {/* Image Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="relative h-96 bg-gradient-to-br from-purple-200 to-pink-200">
          {carouselImages.map((image, index) => (
            <motion.img
              key={image.id}
              src={`/photos/${image.src}.webp`}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Featured Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Latest News */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Latest News</h2>
          <h3 className="text-xl font-semibold mb-2">{latestPost.title}</h3>
          <p className="text-gray-600 mb-2 text-sm">{latestPost.date}</p>
          <p className="text-gray-700 mb-4">{latestPost.excerpt}</p>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              Read More <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Recent Achievement */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Recent Achievement</h2>
          <h3 className="text-xl font-semibold mb-2">{latestAchievement.title}</h3>
          <p className="text-gray-600 mb-2 text-sm">{latestAchievement.date}</p>
          <p className="text-gray-700 mb-4">{latestAchievement.description}</p>
          <Link to="/achievements">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              View All Achievements <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Featured Photos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Featured Photos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {galleryImages.slice(0, 4).map((image) => (
            <div
              key={image.id}
              className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
            >
              <img
                src={`/photos/${image.src}.webp`}
                alt={image.alt}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/gallery">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              View Full Gallery <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

