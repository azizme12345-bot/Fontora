import { useState } from 'react';
import { Font } from '../data/fonts';
import { Heart, Download, ArrowRight, Check } from 'lucide-react';

interface FontCardProps {
  font: Font;
  isFavorite: boolean;
  onToggleFavorite: (fontId: string, e: React.MouseEvent) => void;
  onSelectFont: (font: Font) => void;
  onDownload: (font: Font, e: React.MouseEvent) => void;
}

export function FontCard({
  font,
  isFavorite,
  onToggleFavorite,
  onSelectFont,
  onDownload,
}: FontCardProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloaded(true);
    onDownload(font, e);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const isRTL = font.language === 'Urdu' || font.language === 'Arabic';

  return (
    <div
      onClick={() => onSelectFont(font)}
      className="group bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:border-indigo-200 dark:hover:border-indigo-500/50"
    >
      {/* Card Header */}
      <div className="p-4 pb-2.5 flex items-start justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/80">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/50 text-[11px] font-semibold rounded-full border border-indigo-100/80">
              {font.language}
            </span>
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 text-[11px] font-medium rounded-full border border-neutral-200/60">
              {font.category}
            </span>
          </div>
          <h3 className="font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-base">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectFont(font);
              }}
              className="text-left hover:underline cursor-pointer font-bold"
            >
              {font.name}
            </button>
          </h3>
        </div>

        <button
          type="button"
          onClick={(e) => onToggleFavorite(font.id, e)}
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            isFavorite
              ? 'bg-rose-50 text-rose-500 scale-105 dark:bg-rose-950/60 dark:text-rose-400'
              : 'bg-white text-neutral-400 hover:text-rose-500 hover:bg-rose-50 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-rose-400 dark:hover:bg-rose-950/50'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
        </button>
      </div>

      {/* Font Live Preview Box */}
      <div className="p-5 bg-white dark:bg-neutral-950 flex-1 flex flex-col justify-center min-h-[110px] max-h-[150px] overflow-hidden relative border-b border-neutral-100 dark:border-neutral-800">
        <div
          className={`text-xl sm:text-2xl text-neutral-800 dark:text-neutral-100 transition-all leading-relaxed line-clamp-2 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
          dir={isRTL ? 'rtl' : 'ltr'}
          style={{ fontFamily: font.cssFontFamily }}
        >
          {font.previewText}
        </div>
        <div className="absolute bottom-2 right-3 text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">
          {font.fontFormat} • {font.fileSize}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-3.5 bg-white dark:bg-neutral-900 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectFont(font);
          }}
          className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
        >
          <span>Preview & Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={handleDownloadClick}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer ${
            downloaded
              ? 'bg-emerald-600 text-white'
              : 'bg-neutral-900 hover:bg-indigo-600 text-white dark:bg-neutral-800 dark:hover:bg-indigo-600 dark:text-neutral-100'
          }`}
        >
          {downloaded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
