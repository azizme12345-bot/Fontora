import { useState, useMemo, useEffect } from 'react';
import { Font, LANGUAGES, CATEGORIES_BY_LANGUAGE } from '../data/fonts';
import { FontCard } from '../components/FontCard';
import { Search, SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';

interface FontsViewProps {
  fonts: Font[];
  favorites: string[];
  onToggleFavorite: (fontId: string, e: React.MouseEvent) => void;
  onSelectFont: (font: Font) => void;
  onDownload: (font: Font, e: React.MouseEvent) => void;
  initialLanguage?: string;
  initialCategory?: string;
  pageTitle?: string;
  pageSubtitle?: string;
  popularOnly?: boolean;
}

export function FontsView({
  fonts,
  favorites,
  onToggleFavorite,
  onSelectFont,
  onDownload,
  initialLanguage = 'All',
  initialCategory = 'All',
  pageTitle,
  pageSubtitle,
  popularOnly = false,
}: FontsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>(initialLanguage);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'popularity' | 'downloads' | 'name'>('popularity');

  // Synchronize when initialLanguage changes (e.g. from routing)
  useEffect(() => {
    setSelectedLanguage(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categoriesForLang = selectedLanguage === 'All'
    ? []
    : CATEGORIES_BY_LANGUAGE[selectedLanguage] || [];

  const baseFontList = useMemo(() => {
    if (popularOnly) {
      return fonts.filter((f) => f.isPopular || f.popularity >= 88);
    }
    return fonts;
  }, [fonts, popularOnly]);

  const filteredFonts = useMemo(() => {
    return baseFontList
      .filter((font) => {
        const matchesLang = selectedLanguage === 'All' || font.language === selectedLanguage;
        const matchesCat = selectedCategory === 'All' || font.category === selectedCategory;
        const matchesQuery =
          searchQuery.trim() === '' ||
          font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          font.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          font.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
          font.language.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesLang && matchesCat && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'downloads') return b.downloadCount - a.downloadCount;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return b.popularity - a.popularity;
      });
  }, [baseFontList, selectedLanguage, selectedCategory, searchQuery, sortBy]);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    setSelectedCategory('All'); // Reset category when language changes
  };

  const currentTitle =
    pageTitle ||
    (popularOnly
      ? 'Popular & Trending Fonts'
      : selectedLanguage !== 'All'
      ? `${selectedLanguage} Fonts Collection`
      : 'Explore All Fonts');

  const currentSubtitle =
    pageSubtitle ||
    (popularOnly
      ? 'The most downloaded and highly rated typefaces on Fontora.'
      : `Browse our collection of ${filteredFonts.length} professional multilingual typefaces.`);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {popularOnly ? 'Featured Collection' : 'Font Directory'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-1">
            {currentTitle}
          </h1>
          <p className="text-neutral-600 text-sm mt-1">
            {currentSubtitle}
          </p>
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5">
            <ArrowUpDown className="w-3.5 h-3.5" /> Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-neutral-300 rounded-xl px-3 py-2 text-xs font-semibold text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs"
          >
            <option value="popularity">Most Popular</option>
            <option value="downloads">Highest Downloads</option>
            <option value="name">Alphabetical (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-6 rounded-3xl border border-neutral-200/90 shadow-sm space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fonts by name, style, or keywords (e.g., Nastaleeq, Amiri, Sans)..."
            className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl pl-12 pr-10 py-3.5 text-neutral-900 placeholder:text-neutral-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Language Tabs */}
        {!popularOnly && (
          <div className="space-y-2">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
              Filter by Language:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleLanguageChange('All')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedLanguage === 'All'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                All Languages ({fonts.length})
              </button>
              {LANGUAGES.map((lang) => {
                const count = fonts.filter((f) => f.language === lang).length;
                return (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedLanguage === lang
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {lang} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Category Chips (if language is selected) */}
        {categoriesForLang.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-neutral-100">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
              {selectedLanguage} Categories:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === 'All'
                    ? 'bg-neutral-800 text-white'
                    : 'bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                All {selectedLanguage}
              </button>
              {categoriesForLang.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white'
                      : 'bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Active filters status */}
      <div className="flex items-center justify-between text-xs text-neutral-500 font-medium px-2">
        <span>
          Showing <strong className="text-neutral-900">{filteredFonts.length}</strong> fonts
          {selectedLanguage !== 'All' && ` in ${selectedLanguage}`}
          {selectedCategory !== 'All' && ` (${selectedCategory})`}
        </span>
        {(selectedLanguage !== 'All' || selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedLanguage('All');
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Font Cards Grid */}
      {filteredFonts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFonts.map((font) => (
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
      ) : (
        <div className="bg-white rounded-3xl border border-neutral-200 p-12 text-center space-y-4">
          <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-400">
            <SlidersHorizontal className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-neutral-800">No fonts found</h3>
          <p className="text-neutral-500 text-sm max-w-md mx-auto">
            We couldn't find any fonts matching your current search and filter criteria. Try clearing some filters.
          </p>
          <button
            onClick={() => {
              setSelectedLanguage('All');
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-500 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
