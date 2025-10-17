import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-purple-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> for Robin's 10th Birthday
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Robin and Lucky's Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

