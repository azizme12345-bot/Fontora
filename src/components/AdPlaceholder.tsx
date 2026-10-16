import { Sparkles } from 'lucide-react';

interface AdPlaceholderProps {
  className?: string;
  size?: 'banner' | 'box';
}

export function AdPlaceholder({ className = '', size = 'banner' }: AdPlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-r from-neutral-50 via-indigo-50/30 to-neutral-50 border border-neutral-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between text-neutral-600 my-8 shadow-xs ${
        size === 'banner' ? 'min-h-[80px]' : 'min-h-[180px]'
      } ${className}`}
      aria-label="Typography Tip"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">Typography Tip</div>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            Pair sweeping Nastaleeq or decorative display headlines with clean Naskh or Sans-Serif for optimal screen legibility.
          </p>
        </div>
      </div>
      <div className="text-[11px] text-neutral-400 mt-2 sm:mt-0 font-medium whitespace-nowrap">
        Fontora Design Guide
      </div>
    </div>
  );
}
