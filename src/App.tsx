import { useState, useEffect } from 'react';
import { FONTS_DATA, Font } from './data/fonts';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { PublisherIndexingModal } from './components/PublisherIndexingModal';
import { HomeView } from './views/HomeView';
import { FontsView } from './views/FontsView';
import { CategoriesView } from './views/CategoriesView';
import { FavoritesView } from './views/FavoritesView';
import { FontDetailView } from './views/FontDetailView';
import { AboutView } from './views/AboutView';
import { PrivacyPolicyView } from './views/PrivacyPolicyView';
import { ContactView } from './views/ContactView';
import { downloadFontFile } from './utils/downloadFont';

function parseRouteFromUrl(): { route: string; font: Font | null; params?: { language?: string; category?: string } } {
  if (typeof window === 'undefined') {
    return { route: 'home', font: null };
  }
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '' || path === '/' || path === '/home') {
    return { route: 'home', font: null };
  }
  if (path === '/fonts') {
    return { route: 'fonts', font: null };
  }
  if (path === '/categories') {
    return { route: 'categories', font: null };
  }
  if (path === '/popular-fonts') {
    return { route: 'popular-fonts', font: null };
  }
  if (path === '/urdu-fonts') {
    return { route: 'urdu-fonts', font: null, params: { language: 'Urdu' } };
  }
  if (path === '/arabic-fonts') {
    return { route: 'arabic-fonts', font: null, params: { language: 'Arabic' } };
  }
  if (path === '/hindi-fonts') {
    return { route: 'hindi-fonts', font: null, params: { language: 'Hindi' } };
  }
  if (path === '/english-fonts') {
    return { route: 'english-fonts', font: null, params: { language: 'English' } };
  }
  if (path === '/roman-urdu-fonts') {
    return { route: 'roman-urdu-fonts', font: null, params: { language: 'Roman Urdu' } };
  }
  if (path === '/about') {
    return { route: 'about', font: null };
  }
  if (path === '/privacy-policy') {
    return { route: 'privacy-policy', font: null };
  }
  if (path === '/contact') {
    return { route: 'contact', font: null };
  }
  if (path === '/favorites') {
    return { route: 'favorites', font: null };
  }
  if (path.startsWith('/fonts/')) {
    const slug = path.replace('/fonts/', '');
    const found = FONTS_DATA.find((f) => f.slug === slug || f.id === slug);
    if (found) {
      return { route: 'font-detail', font: found };
    }
    return { route: 'fonts', font: null };
  }
  return { route: 'home', font: null };
}

function updateMetadata(route: string, font: Font | null) {
  if (typeof document === 'undefined') return;
  const baseUrl = 'https://fontora-ten.vercel.app';
  let title = 'Fontora - Multilingual Font Platform & Typography Preview';
  let desc = 'Discover, preview, and download stunning Urdu, Arabic, Hindi, English, and Roman Urdu fonts with live typography customization.';
  let canonical = baseUrl + '/';

  if (route === 'font-detail' && font) {
    title = `${font.name} - Free Download & Live Preview | Fontora`;
    desc = `${font.description} Free download ${font.name} in ${font.fontFormat} format with interactive multi-script preview.`;
    canonical = `${baseUrl}/fonts`;
  } else if (route === 'fonts') {
    title = 'All Fonts Directory - Urdu, Arabic, Hindi & English | Fontora';
    desc = 'Browse 140+ verified open-source and community typefaces across Urdu, Arabic, Devanagari, and Latin scripts.';
    canonical = `${baseUrl}/fonts`;
  } else if (route === 'categories') {
    title = 'Font Categories - Nastaleeq, Naskh, Calligraphy & Display | Fontora';
    desc = 'Browse fonts categorized by artistic style: Nastaleeq, Naskh, Arabic Calligraphy, Serif, Sans-Serif, and Handwriting.';
    canonical = `${baseUrl}/categories`;
  } else if (route === 'popular-fonts') {
    title = 'Popular Fonts - Most Downloaded Multilingual Typefaces | Fontora';
    desc = 'Explore the highest rated, most popular Urdu Nastaleeq, Arabic, Hindi, and English fonts downloaded by designers worldwide.';
    canonical = `${baseUrl}/popular-fonts`;
  } else if (route === 'urdu-fonts') {
    title = 'Urdu Fonts - Download Free Jameel Noori Nastaleeq & Naskh | Fontora';
    desc = 'Download top Urdu fonts including Jameel Noori Nastaleeq, Alvi Naskh, Gulzar, and Quranic calligraphy for professional design.';
    canonical = `${baseUrl}/urdu-fonts`;
  } else if (route === 'arabic-fonts') {
    title = 'Arabic Fonts - Quranic, Calligraphy & Modern Sans | Fontora';
    desc = 'Explore premium Arabic typefaces: Amiri Quranic, Cairo, Reem Kufi, and Scheherazade with live ligature testing.';
    canonical = `${baseUrl}/arabic-fonts`;
  } else if (route === 'hindi-fonts') {
    title = 'Hindi Devanagari Fonts - Free Download & Live Preview | Fontora';
    desc = 'Discover beautiful Devanagari and Hindi fonts for websites, branding, posters, and graphic design.';
    canonical = `${baseUrl}/hindi-fonts`;
  } else if (route === 'english-fonts') {
    title = 'English Fonts - Modern Serif, Sans-Serif & Display | Fontora';
    desc = 'Collection of high-legibility English typefaces: Inter, Roboto, Playfair Display, Montserrat, and Fira Code.';
    canonical = `${baseUrl}/english-fonts`;
  } else if (route === 'roman-urdu-fonts') {
    title = 'Roman Urdu Fonts - Stylish Social Media Typography | Fontora';
    desc = 'Aesthetic, bold, and modern typography tailored for Roman Urdu quotes, Instagram reels, and YouTube thumbnails.';
    canonical = `${baseUrl}/roman-urdu-fonts`;
  } else if (route === 'about') {
    title = 'About Us - Fontora Multilingual Typography Platform';
    desc = 'Learn about the Fontora platform, our mission to elevate non-Latin typography, and our open-source licensing standards.';
    canonical = `${baseUrl}/about`;
  } else if (route === 'privacy-policy') {
    title = 'Privacy Policy - Zero Tracking & Local Storage | Fontora';
    desc = 'Read Fontora\'s transparent privacy policy: zero account registration, no tracking cookies, and local client storage.';
    canonical = `${baseUrl}/privacy-policy`;
  } else if (route === 'contact') {
    title = 'Contact Us & Font Submissions | Fontora';
    desc = 'Get in touch with Fontora for font submissions, designer attribution updates, DMCA inquiries, or feedback.';
    canonical = `${baseUrl}/contact`;
  } else if (route === 'favorites') {
    title = 'My Saved Fonts - Fontora Collection';
    desc = 'View and test your saved collection of favorite Urdu, Arabic, and English typefaces.';
    canonical = `${baseUrl}/favorites`;
  }

  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', desc);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', desc);
  const canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalTag) canonicalTag.setAttribute('href', canonical);
}

export default function App() {
  const initial = parseRouteFromUrl();
  const [currentRoute, setCurrentRoute] = useState<string>(initial.route);
  const [routeParams, setRouteParams] = useState<{ language?: string; category?: string }>(initial.params || {});
  const [selectedFont, setSelectedFont] = useState<Font | null>(initial.font);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isPublisherModalOpen, setIsPublisherModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Favorites state with localStorage persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fontora_favorites');
      return saved ? JSON.parse(saved) : ['jameel-noori-nastaleeq', 'amiri-arabic', 'poppins-sans'];
    } catch {
      return [];
    }
  });

  // Dark / Black mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('fontora_dark_mode');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fontora_dark_mode', JSON.stringify(darkMode));
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (err) {
      console.error('Failed to save dark mode', err);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle URL changes & browser history back/forward
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseRouteFromUrl();
      setCurrentRoute(parsed.route);
      setSelectedFont(parsed.font);
      setRouteParams(parsed.params || {});
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic document title, description, and canonical URL
  useEffect(() => {
    updateMetadata(currentRoute, selectedFont);
  }, [currentRoute, selectedFont]);

  useEffect(() => {
    try {
      localStorage.setItem('fontora_favorites', JSON.stringify(favorites));
    } catch (err) {
      console.error('Failed to save favorites', err);
    }
  }, [favorites]);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (route: string, params?: { language?: string; category?: string }) => {
    setCurrentRoute(route);
    setSelectedFont(null);
    if (params) {
      setRouteParams(params);
    } else {
      setRouteParams({});
    }
    const path = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFont = (font: Font) => {
    setSelectedFont(font);
    setCurrentRoute('font-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleFavorite = (fontId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const isFav = prev.includes(fontId);
      const next = isFav ? prev.filter((id) => id !== fontId) : [...prev, fontId];
      showToast(isFav ? 'Removed from favorites' : 'Added to favorites successfully!');
      return next;
    });
  };

  const handleDownloadFont = (font: Font, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    downloadFontFile(font, showToast);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-indigo-600 selection:text-white ${
      darkMode ? 'bg-neutral-950 text-neutral-100 dark' : 'bg-neutral-50/60 text-neutral-900'
    }`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-semibold animate-in slide-in-from-bottom-5 duration-200 border border-neutral-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        favoritesCount={favorites.length}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenPublisherConsole={() => setIsPublisherModalOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomeView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            navigate={navigate}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        )}

        {currentRoute === 'fonts' && (
          <FontsView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            initialLanguage={routeParams.language || 'All'}
            initialCategory={routeParams.category || 'All'}
          />
        )}

        {currentRoute === 'popular-fonts' && (
          <FontsView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            popularOnly={true}
            pageTitle="Popular & Trending Fonts"
            pageSubtitle="Explore our highest-rated, most downloaded multilingual typefaces."
          />
        )}

        {currentRoute === 'urdu-fonts' && (
          <FontsView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            initialLanguage="Urdu"
            pageTitle="Urdu Fonts Collection"
            pageSubtitle="Free download authentic Nastaleeq, Naskh, and Urdu calligraphic typefaces."
          />
        )}

        {currentRoute === 'arabic-fonts' && (
          <FontsView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            initialLanguage="Arabic"
            pageTitle="Arabic Fonts Directory"
            pageSubtitle="Discover Quranic, classic calligraphy, and modern Arabic display typefaces."
          />
        )}

        {currentRoute === 'hindi-fonts' && (
          <FontsView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            initialLanguage="Hindi"
            pageTitle="Hindi & Devanagari Fonts"
            pageSubtitle="Classical and contemporary Devanagari typography for websites and print."
          />
        )}

        {currentRoute === 'english-fonts' && (
          <FontsView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            initialLanguage="English"
            pageTitle="English Typefaces Library"
            pageSubtitle="High legibility Serif, Sans-Serif, Monospace, and Display typography."
          />
        )}

        {currentRoute === 'roman-urdu-fonts' && (
          <FontsView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            initialLanguage="Roman Urdu"
            pageTitle="Roman Urdu Typography"
            pageSubtitle="Punchy, stylish typefaces designed for modern social media posts and reels."
          />
        )}

        {currentRoute === 'categories' && (
          <CategoriesView fonts={FONTS_DATA} navigate={navigate} />
        )}

        {currentRoute === 'favorites' && (
          <FavoritesView
            fonts={FONTS_DATA}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            navigate={navigate}
          />
        )}

        {currentRoute === 'about' && <AboutView />}

        {currentRoute === 'privacy-policy' && <PrivacyPolicyView />}

        {currentRoute === 'contact' && <ContactView />}

        {currentRoute === 'font-detail' && selectedFont && (
          <FontDetailView
            font={selectedFont}
            allFonts={FONTS_DATA}
            isFavorite={favorites.includes(selectedFont.id)}
            onToggleFavorite={handleToggleFavorite}
            onSelectFont={handleSelectFont}
            onDownload={handleDownloadFont}
            navigate={navigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        fonts={FONTS_DATA}
        onSelectFont={handleSelectFont}
      />

      {/* Publisher Indexing & Google Search Console Modal */}
      <PublisherIndexingModal
        isOpen={isPublisherModalOpen}
        onClose={() => setIsPublisherModalOpen(false)}
      />
    </div>
  );
}
