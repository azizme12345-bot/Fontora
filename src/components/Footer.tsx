import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  navigate: (route: string, params?: any) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-indigo-500 transition-colors">
                F
              </div>
              <span className="font-bold text-xl text-white tracking-tight flex items-center gap-1.5">
                Fontora <Sparkles className="w-4 h-4 text-indigo-400" />
              </span>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed">
              The premier typography discovery and download platform for Urdu, Arabic, Hindi, English, and Roman Urdu creators.
            </p>
            <div className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Fontora. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Discovery</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => { e.preventDefault(); navigate('home'); }} 
                  className="hover:text-white transition-colors"
                >
                  Featured Fonts
                </a>
              </li>
              <li>
                <a 
                  href="/fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('fonts'); }} 
                  className="hover:text-white transition-colors"
                >
                  All Font Library
                </a>
              </li>
              <li>
                <a 
                  href="/categories" 
                  onClick={(e) => { e.preventDefault(); navigate('categories'); }} 
                  className="hover:text-white transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a 
                  href="/favorites" 
                  onClick={(e) => { e.preventDefault(); navigate('favorites'); }} 
                  className="hover:text-white transition-colors"
                >
                  My Saved Fonts
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Languages</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('fonts', { language: 'Urdu' }); }} 
                  className="hover:text-white transition-colors"
                >
                  Urdu Fonts (Nastaleeq & Naskh)
                </a>
              </li>
              <li>
                <a 
                  href="/fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('fonts', { language: 'Arabic' }); }} 
                  className="hover:text-white transition-colors"
                >
                  Arabic Calligraphy & Modern
                </a>
              </li>
              <li>
                <a 
                  href="/fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('fonts', { language: 'Hindi' }); }} 
                  className="hover:text-white transition-colors"
                >
                  Hindi Devanagari Fonts
                </a>
              </li>
              <li>
                <a 
                  href="/fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('fonts', { language: 'English' }); }} 
                  className="hover:text-white transition-colors"
                >
                  English Serif & Sans
                </a>
              </li>
              <li>
                <a 
                  href="/fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('fonts', { language: 'Roman Urdu' }); }} 
                  className="hover:text-white transition-colors"
                >
                  Roman Urdu Typography
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Licensing */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Legal & Information</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => { e.preventDefault(); navigate('about'); }} 
                  className="hover:text-white transition-colors"
                >
                  Font Licensing Policy
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => { e.preventDefault(); navigate('about'); }} 
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy & Data Handling
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => { e.preventDefault(); navigate('about'); }} 
                  className="hover:text-white transition-colors"
                >
                  Copyright & Attributions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            Typography discovery and previewing platform for Urdu, Arabic, Hindi, English, and Roman Urdu.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for global designers and publishers
          </p>
        </div>
      </div>
    </footer>
  );
}
