import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '../data/content';
import { motion } from 'framer-motion';

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          News & Blog
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated with our latest adventures, stories, and daily happenings!
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="md:flex">
              {post.image && (
                <div className="md:w-1/3">
                  <img
                    src={`/photos/${post.image}.webp`}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              )}
              <div className={`p-8 ${post.image ? 'md:w-2/3' : 'w-full'}`}>
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 hover:text-purple-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`}>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                    Read Full Post <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
