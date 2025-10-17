import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '../data/content';
import { motion } from 'framer-motion';

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
        <Link to="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <Button
          onClick={() => navigate('/blog')}
          variant="ghost"
          className="mb-6 hover:bg-purple-100"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Button>

        <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          {post.image && (
            <img
              src={`/photos/${post.image}.webp`}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          )}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Calendar size={16} />
              <span className="text-sm">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              {post.title}
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
