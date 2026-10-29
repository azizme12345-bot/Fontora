import { useState } from 'react';
import { Search, Heart, Menu, X, Sparkles, Globe, Flame, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string, params?: any) => void;
  favoritesCount: number;
  onOpenSearch: () => void;
  onOpenPublisherConsole: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Header({
  currentRoute,
  navigate,
  favoritesCount,
  onOpenSearch,
  onOpenPublisherConsole,
  darkMode,
  onToggleDarkMode,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="flex items-center gap-3 cursor-pointer group"
          aria-label="Fontora Home"
        >
          <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-indigo-600 transition-colors">
            F
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
              Fontora <Sparkles className="w-4 h-4 text-indigo-500 hidden sm:inline" />
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block font-medium tracking-wide">
              Typography Platform
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Crawlable Anchors for Core Pages */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm text-neutral-600 dark:text-neutral-300" aria-label="Main Navigation">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('home');
            }}
            className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${currentRoute === 'home' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''}`}
          >
            Home
          </a>
          <a 
            href="/fonts"
            onClick={(e) => {
              e.preventDefault();
              handleNav('fonts');
            }}
            className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${currentRoute === 'fonts' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''}`}
          >
            Fonts
          </a>
          <a 
            href="/categories"
            onClick={(e) => {
              e.preventDefault();
              handleNav('categories');
            }}
            className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${currentRoute === 'categories' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''}`}
          >
            Categories
          </a>
          <a 
            href="/popular-fonts"
            onClick={(e) => {
              e.preventDefault();
              handleNav('popular-fonts');
            }}
            className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 ${currentRoute === 'popular-fonts' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''}`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Popular</span>
          </a>
          <a 
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNav('about');
            }}
            className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${currentRoute === 'about' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''}`}
          >
            About
          </a>
          <a 
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('contact');
            }}
            className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${currentRoute === 'contact' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''}`}
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl transition-colors border border-neutral-200 dark:border-neutral-700 shadow-2xs cursor-pointer"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Black/Dark Mode'}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>

          <a
            href="/favorites"
            onClick={(e) => {
              e.preventDefault();
              handleNav('favorites');
            }}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors border shadow-2xs ${
              currentRoute === 'favorites'
                ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800'
                : 'bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-700'
            }`}
            title="My Saved Fonts"
          >
            <Heart className={`w-3.5 h-3.5 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-neutral-500 dark:text-neutral-400'}`} />
            <span>Saved</span>
            {favoritesCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200 text-xs rounded-full font-bold">
                {favoritesCount}
              </span>
            )}
          </a>

          <button
            onClick={onOpenPublisherConsole}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/85 dark:text-indigo-300 rounded-xl text-xs font-semibold transition-colors border border-indigo-200 dark:border-indigo-800 shadow-2xs cursor-pointer"
            title="Search Console & Sitemap Assistant"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Search Console</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-300 rounded-xl text-sm font-medium transition-colors border border-neutral-200/80 dark:border-neutral-700 shadow-2xs cursor-pointer"
            title="Search fonts (Cmd+K)"
          >
            <Search className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            <span className="hidden sm:inline text-neutral-400 dark:text-neutral-400">Search fonts...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 bg-white text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400 text-[10px] rounded border border-neutral-300 dark:border-neutral-700 font-mono">
              ⌘K
            </kbd>
          </button>

          <a
            href="/favorites"
            onClick={(e) => {
              e.preventDefault();
              handleNav('favorites');
            }}
            className="sm:hidden relative p-2.5 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
            aria-label="Favorites"
          >
            <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                {favoritesCount}
              </span>
            )}
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('home');
            }}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${currentRoute === 'home' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'}`}
          >
            Home
          </a>
          <a
            href="/fonts"
            onClick={(e) => {
              e.preventDefault();
              handleNav('fonts');
            }}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${currentRoute === 'fonts' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'}`}
          >
            Browse All Fonts
          </a>
          <a
            href="/categories"
            onClick={(e) => {
              e.preventDefault();
              handleNav('categories');
            }}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${currentRoute === 'categories' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'}`}
          >
            Font Categories
          </a>
          <a
            href="/popular-fonts"
            onClick={(e) => {
              e.preventDefault();
              handleNav('popular-fonts');
            }}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${currentRoute === 'popular-fonts' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'}`}
          >
            Popular Fonts
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNav('about');
            }}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${currentRoute === 'about' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'}`}
          >
            About Us & Licenses
          </a>
          <a
            href="/privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              handleNav('privacy-policy');
            }}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${currentRoute === 'privacy-policy' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'}`}
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('contact');
            }}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${currentRoute === 'contact' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'}`}
          >
            Contact & Support
          </a>
        </div>
      )}
    </header>
  );
}
