import { useState } from 'react';
import { Font } from '../data/fonts';
import { Type, RotateCcw, Copy, Check, AlignLeft, AlignCenter, AlignRight, Bold, Download } from 'lucide-react';

interface LivePreviewToolProps {
  fonts: Font[];
  selectedFontId?: string;
  onSelectFont: (font: Font) => void;
  onDownload?: (font: Font, e?: React.MouseEvent) => void;
}

export function LivePreviewTool({ fonts, selectedFontId, onSelectFont, onDownload }: LivePreviewToolProps) {
  const [activeFontId, setActiveFontId] = useState<string>(
    selectedFontId || fonts[0]?.id || 'jameel-noori-nastaleeq'
  );
  const currentFont = fonts.find((f) => f.id === activeFontId) || fonts[0];

  const defaultSampleText =
    currentFont.language === 'Urdu'
      ? 'اپنا متن یہاں لکھیں اور اردو خوش خطی کا جادو دیکھیں'
      : currentFont.language === 'Arabic'
      ? 'اكتب النص الخاص بك هنا واستمتع بجمال الخط العربي'
      : currentFont.language === 'Hindi'
      ? 'यहाँ अपना पाठ लिखें और सुंदर देवनागरी फॉन्ट का आनंद लें'
      : currentFont.language === 'Roman Urdu'
      ? 'Yahan apna text likhein aur Fontora ka kamaal dekhein!'
      : 'Type your custom typography preview here and experience perfection.';

  const [customText, setCustomText] = useState(defaultSampleText);
  const [fontSize, setFontSize] = useState(32);
  const [isBold, setIsBold] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [copied, setCopied] = useState(false);

  const handleFontChange = (fontId: string) => {
    setActiveFontId(fontId);
    const newF = fonts.find((f) => f.id === fontId);
    if (newF) {
      setCustomText(newF.previewText);
    }
  };

  const handleReset = () => {
    setCustomText(currentFont.previewText);
    setFontSize(32);
    setIsBold(false);
    setLetterSpacing(0);
    setTextAlign('center');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(customText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isRTL = currentFont.language === 'Urdu' || currentFont.language === 'Arabic';

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 shadow-sm overflow-hidden my-4">
      {/* Compact Tool Header */}
      <div className="bg-neutral-900 dark:bg-neutral-900 text-white px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/90 flex items-center justify-center text-white shrink-0">
            <Type className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">Live Font Tester</h2>
            <p className="text-neutral-400 text-xs">Preview typefaces with live custom text</p>
          </div>
        </div>

        {/* Font Selector & Action */}
        <div className="flex items-center gap-2.5">
          <select
            value={activeFontId}
            onChange={(e) => handleFontChange(e.target.value)}
            className="bg-neutral-800 text-white border border-neutral-700 rounded-xl px-3 py-1.5 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-indigo-500 cursor-pointer"
          >
            {fonts.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} ({f.language})
              </option>
            ))}
          </select>

          {onDownload && (
            <button
              type="button"
              onClick={(e) => onDownload(currentFont, e)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              title={`Download ${currentFont.name}`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          )}
        </div>
      </div>

      {/* Compact Controls Toolbar */}
      <div className="bg-neutral-50 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Size Slider */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-600 dark:text-neutral-300 text-[11px] uppercase tracking-wider">Size:</span>
          <input
            type="range"
            min="18"
            max="64"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-24 sm:w-32 accent-indigo-600 cursor-pointer h-1.5"
          />
          <span className="text-neutral-500 dark:text-neutral-400 font-mono text-[11px] w-8">{fontSize}px</span>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setTextAlign('left')}
            className={`p-1 rounded flex items-center justify-center transition-colors ${
              textAlign === 'left' ? 'bg-indigo-600 text-white' : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            title="Align Left"
          >
            <AlignLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setTextAlign('center')}
            className={`p-1 rounded flex items-center justify-center transition-colors ${
              textAlign === 'center' ? 'bg-indigo-600 text-white' : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            title="Align Center"
          >
            <AlignCenter className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setTextAlign('right')}
            className={`p-1 rounded flex items-center justify-center transition-colors ${
              textAlign === 'right' ? 'bg-indigo-600 text-white' : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            title="Align Right"
          >
            <AlignRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bold Toggle */}
        <button
          type="button"
          onClick={() => setIsBold(!isBold)}
          className={`px-2 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
            isBold
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700'
          }`}
        >
          <Bold className="w-3 h-3" />
          <span>Bold</span>
        </button>

        {/* Quick Actions: Copy & Reset */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleCopyText}
            className="px-2.5 py-1 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
            title="Copy text"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors shadow-2xs"
            title="Reset"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Compact Input Box */}
      <div className="p-3 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <input
          type="text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Type or paste custom text to preview..."
          className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-sm shadow-inner"
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>

      {/* Compact Live Display Pane */}
      <div className="p-6 bg-white dark:bg-neutral-950 min-h-[110px] max-h-[180px] flex items-center justify-center overflow-x-auto relative">
        <div
          className={`w-full text-neutral-900 dark:text-neutral-100 transition-all ${
            textAlign === 'left' ? 'text-left' : textAlign === 'right' ? 'text-right' : 'text-center'
          }`}
          style={{
            fontFamily: currentFont.cssFontFamily,
            fontSize: `${fontSize}px`,
            fontWeight: isBold ? 700 : 400,
            letterSpacing: `${letterSpacing}px`,
            lineHeight: 1.4,
          }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {customText || 'Type above to preview font...'}
        </div>

        <div className="absolute bottom-2 right-3 text-[10px] text-neutral-400 dark:text-neutral-400 bg-neutral-100/90 dark:bg-neutral-900/90 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 font-mono">
          {currentFont.name} • {currentFont.language}
        </div>
      </div>
    </div>
  );
}
