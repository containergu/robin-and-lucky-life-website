import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Trophy, Compass, Image } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/blog', label: 'News/Blog', icon: BookOpen },
    { path: '/achievements', label: 'Achievements', icon: Trophy },
    { path: '/adventures', label: 'Adventures', icon: Compass },
    { path: '/gallery', label: 'Gallery', icon: Image }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
            Robin & Lucky's Life
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path || 
                             (path !== '/' && location.pathname.startsWith(path));
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex space-x-2">
            {navItems.map(({ path, icon: Icon }) => {
              const isActive = location.pathname === path || 
                             (path !== '/' && location.pathname.startsWith(path));
              return (
                <Link
                  key={path}
                  to={path}
                  className={`p-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

