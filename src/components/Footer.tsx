import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  navigate: (route: string, params?: any) => void;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-400 border-t border-neutral-800 pt-10 pb-8 mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
                  Home
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
                  Font Categories
                </a>
              </li>
              <li>
                <a 
                  href="/popular-fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('popular-fonts'); }} 
                  className="hover:text-white transition-colors"
                >
                  Popular & Top Fonts
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Scripts & Languages</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/urdu-fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('urdu-fonts'); }} 
                  className="hover:text-white transition-colors"
                >
                  Urdu Fonts (Nastaleeq & Naskh)
                </a>
              </li>
              <li>
                <a 
                  href="/arabic-fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('arabic-fonts'); }} 
                  className="hover:text-white transition-colors"
                >
                  Arabic Fonts (Calligraphy & Modern)
                </a>
              </li>
              <li>
                <a 
                  href="/hindi-fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('hindi-fonts'); }} 
                  className="hover:text-white transition-colors"
                >
                  Hindi Fonts (Devanagari)
                </a>
              </li>
              <li>
                <a 
                  href="/english-fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('english-fonts'); }} 
                  className="hover:text-white transition-colors"
                >
                  English Fonts (Serif & Sans)
                </a>
              </li>
              <li>
                <a 
                  href="/roman-urdu-fonts" 
                  onClick={(e) => { e.preventDefault(); navigate('roman-urdu-fonts'); }} 
                  className="hover:text-white transition-colors"
                >
                  Roman Urdu Typography
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Information */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Information & Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => { e.preventDefault(); navigate('about'); }} 
                  className="hover:text-white transition-colors"
                >
                  About Us & Licensing
                </a>
              </li>
              <li>
                <a 
                  href="/privacy-policy" 
                  onClick={(e) => { e.preventDefault(); navigate('privacy-policy'); }} 
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  onClick={(e) => { e.preventDefault(); navigate('contact'); }} 
                  className="hover:text-white transition-colors"
                >
                  Contact & DMCA
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
