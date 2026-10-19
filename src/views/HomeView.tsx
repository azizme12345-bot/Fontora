import { useState } from 'react';
import { Font, LANGUAGES, CATEGORIES_BY_LANGUAGE } from '../data/fonts';
import { FontCard } from '../components/FontCard';
import { LivePreviewTool } from '../components/LivePreviewTool';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { SeoHelpfulContent } from '../components/SeoHelpfulContent';
import { Search, Sparkles, ArrowRight, Download, Globe, ShieldCheck, Zap } from 'lucide-react';

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
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-white pt-12 pb-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 text-indigo-800 text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Discover & Download Professional Fonts</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-black text-neutral-900 tracking-tight leading-[1.15]">
              Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Perfect Font</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Discover beautiful Urdu, Arabic, Hindi, English, and Roman Urdu fonts. Preview them instantly and download with absolute ease.
            </p>

            {/* Large Search Box */}
            <div className="pt-4 max-w-2xl mx-auto">
              <div 
                onClick={onOpenSearch}
                className="flex items-center gap-3 bg-white border border-neutral-300 hover:border-indigo-400 p-3.5 sm:p-4 rounded-2xl shadow-lg cursor-pointer transition-all group"
              >
                <Search className="w-5 h-5 text-neutral-400 group-hover:text-indigo-600 transition-colors ml-2" />
                <span className="text-neutral-400 text-sm sm:text-base flex-1 text-left">
                  Search across 140+ Urdu, Arabic, Hindi, & English fonts...
                </span>
                <kbd className="hidden sm:inline-block px-2.5 py-1 bg-neutral-100 text-neutral-500 text-xs rounded-lg border border-neutral-200 font-mono">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Quick Language Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="text-xs text-neutral-500 font-medium mr-1">Popular Scripts:</span>
              {['All', 'Urdu', 'Arabic', 'Hindi', 'English', 'Roman Urdu'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    if (lang !== 'All') navigate('fonts', { language: lang });
                  }}
                  className="px-3 py-1 bg-white hover:bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-xl border border-neutral-200 shadow-2xs transition-all cursor-pointer"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured / Popular Fonts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Featured Typefaces
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Hand-picked professional fonts with lightning-fast download links
            </p>
          </div>
          <button
            onClick={() => navigate('fonts')}
            className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer group"
          >
            <span>Browse Full Library</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Font Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Ad Placeholder 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder size="banner" />
      </div>

      {/* Live Font Preview Studio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Interactive Font Preview Studio
          </h2>
          <p className="text-neutral-600 text-sm mt-2">
            Test any typography combination in real time before downloading.
          </p>
        </div>
        <LivePreviewTool fonts={fonts} onSelectFont={onSelectFont} onDownload={onDownload} />
      </section>

      {/* Language Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-neutral-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Explore by Language & Script
          </h2>
          <p className="text-neutral-500 text-sm mt-1">
            Specialized typographic collections for South Asian and Middle Eastern publishing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {LANGUAGES.map((lang) => {
            const count = fonts.filter((f) => f.language === lang).length;
            return (
              <div
                key={lang}
                onClick={() => navigate('fonts', { language: lang })}
                className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between hover:border-indigo-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {lang.charAt(0)}
                  </div>
                  <h3 className="font-bold text-neutral-900 text-lg group-hover:text-indigo-600 transition-colors">
                    {lang} Fonts
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    {count} professional typefaces available
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-indigo-600">
                  <span>Explore {lang}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Features Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-lg">100% Free & Open License</h3>
              <p className="text-neutral-600 text-sm mt-1">
                All fonts featured on Fontora are cleared under SIL Open Font License for commercial and personal projects.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-lg">Multilingual Mastery</h3>
              <p className="text-neutral-600 text-sm mt-1">
                Specialized support for Nastaleeq, Arabic Calligraphy, Devanagari, and Roman Urdu typesetting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-lg">Instant TTF / WOFF Download</h3>
              <p className="text-neutral-600 text-sm mt-1">
                Download actual font files immediately with zero friction, sign-ups, or hidden redirects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Helpful Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SeoHelpfulContent />
      </section>
    </div>
  );
}
