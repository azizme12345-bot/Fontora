import { useState } from 'react';
import { Font } from '../data/fonts';
import { FontCard } from '../components/FontCard';
import { LivePreviewTool } from '../components/LivePreviewTool';
import { SeoHelpfulContent } from '../components/SeoHelpfulContent';
import { Search, Sparkles, ArrowRight, ShieldCheck, Zap, Globe2 } from 'lucide-react';

interface HomeViewProps {
  fonts: Font[];
  favorites: string[];
  onToggleFavorite: (fontId: string, e: React.MouseEvent) => void;
  onSelectFont: (font: Font) => void;
  onDownload: (font: Font, e?: React.MouseEvent) => void;
  navigate: (route: string, params?: any) => void;
  onOpenSearch: () => void;
}

export function HomeView({
  fonts,
  favorites,
  onToggleFavorite,
  onSelectFont,
  onDownload,
  navigate,
  onOpenSearch,
}: HomeViewProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  const popularFonts = fonts.filter((f) => f.isPopular || f.popularity > 90);
  const filteredFonts = selectedLanguage === 'All'
    ? popularFonts
    : fonts.filter((f) => f.language === selectedLanguage);

  return (
    <div className="space-y-8 pb-12">
      {/* Compact Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50/40 via-white to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950 pt-8 pb-8 border-b border-neutral-100 dark:border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/50 text-xs font-semibold border border-indigo-100/80">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Multilingual Typography Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
              Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Perfect Font</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
              Discover, preview, and download Urdu, Arabic, Hindi, English, and Roman Urdu fonts instantly.
            </p>

            {/* Compact Search Bar */}
            <div className="pt-2 max-w-xl mx-auto">
              <div 
                onClick={onOpenSearch}
                className="flex items-center gap-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-indigo-500 dark:hover:border-indigo-500 px-4 py-3 rounded-2xl shadow-xs hover:shadow-md cursor-pointer transition-all group"
              >
                <Search className="w-4 h-4 text-neutral-400 group-hover:text-indigo-600 transition-colors ml-1" />
                <span className="text-neutral-400 dark:text-neutral-400 text-xs sm:text-sm flex-1 text-left">
                  Search across 144 typefaces...
                </span>
                <kbd className="hidden sm:inline-block px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-[10px] rounded border border-neutral-200 dark:border-neutral-700 font-mono">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Quick Script Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium mr-1">Scripts:</span>
              {[
                { name: 'All', route: null },
                { name: 'Urdu', route: 'urdu-fonts' },
                { name: 'Arabic', route: 'arabic-fonts' },
                { name: 'Hindi', route: 'hindi-fonts' },
                { name: 'English', route: 'english-fonts' },
                { name: 'Roman Urdu', route: 'roman-urdu-fonts' },
              ].map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setSelectedLanguage(item.name);
                    if (item.route) {
                      navigate(item.route);
                    }
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    selectedLanguage === item.name
                      ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-indigo-600 dark:border-indigo-600'
                      : 'bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 shadow-2xs'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slim 1-Line Trust Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl py-3 px-4 sm:px-6 flex flex-wrap items-center justify-around gap-3 text-xs text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold">SIL Open Font License & Free Use</span>
          </div>
          <div className="hidden sm:inline-block text-neutral-300 dark:text-neutral-700">•</div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold">Direct TTF / OTF Downloads</span>
          </div>
          <div className="hidden sm:inline-block text-neutral-300 dark:text-neutral-700">•</div>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold">5 Script Families & Zero Registration</span>
          </div>
        </div>
      </section>

      {/* Featured Fonts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Featured Typefaces
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
              Hand-picked fonts ready for instant preview and download
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('fonts')}
            className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer group"
          >
            <span>All Fonts</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Font Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFonts.slice(0, 6).map((font) => (
            <FontCard
              key={font.id}
              font={font}
              isFavorite={favorites.includes(font.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectFont={onSelectFont}
              onDownload={onDownload}
            />
          ))}
        </div>
      </section>

      {/* Compact Interactive Live Preview Studio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LivePreviewTool fonts={fonts} onSelectFont={onSelectFont} onDownload={onDownload} />
      </section>

      {/* SEO Helpful Content Section - Compact Bilingual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SeoHelpfulContent />
      </section>
    </div>
  );
}
