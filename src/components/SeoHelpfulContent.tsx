export function SeoHelpfulContent() {
  return (
    <div className="fontora-seo-content bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 mt-6 text-neutral-700 dark:text-neutral-300 space-y-6 shadow-xs">
      {/* About Section - Compact Bilingual */}
      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          About Fontora & Multilingual Typography / فونٹورا اور ٹائپوگرافی کا تعارف
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            Fontora is a curated typography platform built for graphic designers, digital publishers, and web creators. Delivering a responsive <strong>Modern Font Preview</strong> engine, a high-fidelity <strong>Unicode Font Converter</strong>, and a dynamic <strong>Stylish Text Generator</strong>, Fontora enables instant ligature and weight testing for Urdu Nastaleeq, Arabic, Hindi, English, and Roman Urdu fonts before direct one-click downloading.
          </p>
          <p className="rtl text-right" dir="rtl">
            فونٹورا گرافک ڈیزائنرز، پبلشرز اور ڈیجیٹل تخلیق کاروں کے لیے ایک جدید ٹائپوگرافی پلیٹ فارم ہے۔ یہاں آپ <strong>Modern Font Preview</strong>، طاقتور <strong>Unicode Font Converter</strong> اور <strong>Stylish Text Generator</strong> کے ذریعے اردو، عربی، ہندی، انگریزی اور رومن اردو فونٹس کو ڈاؤن لوڈ کرنے سے پہلے براہِ راست ٹیسٹ کر سکتے ہیں۔
          </p>
        </div>
      </div>

      {/* How to Use Section - Concise Steps */}
      <div className="border-t border-neutral-100 dark:border-neutral-800 pt-5 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
          How to Use / استعمال کا طریقہ
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">1. Browse & Filter</span>
            <p className="text-neutral-600 dark:text-neutral-400">Select Urdu, Arabic, Hindi, English, or Roman Urdu categories.</p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">2. Live Preview</span>
            <p className="text-neutral-600 dark:text-neutral-400">Type custom text, adjust size, alignment, and review ligatures.</p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">3. Direct Download</span>
            <p className="text-neutral-600 dark:text-neutral-400">Download verified TTF/OTF files with zero ads, redirects, or wait times.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section - Compact 2x2 Grid */}
      <div className="border-t border-neutral-100 dark:border-neutral-800 pt-5 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
          Frequently Asked Questions (FAQ) / اکثر پوچھے گئے سوالات
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
            <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">1. Commercial Use License?</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs">
              Fonts cataloged under the SIL Open Font License (OFL) or Apache 2.0 are free for personal and commercial projects.
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
            <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">2. Unicode Font Converter Accuracy?</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs">
              Our renderer handles full UTF-8 encoding without ligature fragmentation on Windows, macOS, iOS, and Android.
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
            <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">3. Adobe & Office Compatibility?</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs">
              All downloaded TTF/OTF fonts install into system fonts and work natively in Photoshop, Premiere, InDesign, and Word.
            </p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/80 dark:border-neutral-800">
            <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">4. Registration or Installation Needed?</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs">
              No registration or account is required. All interactive previews and font downloads are completely client-side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
