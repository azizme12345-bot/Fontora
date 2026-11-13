import { FileText, ShieldCheck, Scale, AlertTriangle, Copyright, HelpCircle } from 'lucide-react';

export function TermsView() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-neutral-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
          <Scale className="w-3.5 h-3.5 text-indigo-600" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
          Terms of Use
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Please review these terms carefully before exploring, testing, or downloading fonts from Fontora.
        </p>
        <p className="text-xs text-neutral-400">
          Last Updated: November 2026 • Effective Worldwide
        </p>
      </div>

      {/* Terms Content Sections */}
      <div className="space-y-8 text-neutral-700 leading-relaxed">
        {/* Section 1 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            By using Fontora, you agree to these terms. If you do not agree, please do not use the website.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">2. Use of the Website</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Fontora is provided to find, preview, and download fonts for lawful purposes. Do not try to disrupt the site, misuse it, or copy it in bulk.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">3. Font Licenses</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Each font has its own license, shown on its font page (for example SIL Open Font License, Apache License 2.0, Ubuntu Font License, or a free community license). You must follow the license of each font. Some fonts may limit commercial use, so check the license before using a font in a commercial project.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Copyright className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">4. Ownership</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Fonts belong to their designers and foundries. Fontora does not claim ownership of any font. Do not sell font files on their own unless the font's license allows it.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">5. Accuracy of Information</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Font names, designer names, and license details come from public sources and may contain mistakes. Check the original source before commercial use.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">6. Third-Party Services</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Font files are served through public content delivery networks and original font sources. Fontora is not responsible for the availability of those services.
          </p>
        </div>

        {/* Section 7 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">7. Disclaimer</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            The website and fonts are provided "as is", without warranties of any kind.
          </p>
        </div>

        {/* Section 8 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">8. Limitation of Liability</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Fontora is not liable for any loss that comes from using the website or its fonts.
          </p>
        </div>

        {/* Section 9 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Copyright className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">9. Copyright and Removal Requests</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            If you believe any content infringes your rights, contact us through the Contact & DMCA page. We review valid requests.
          </p>
        </div>

        {/* Section 10 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">10. Changes to These Terms</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            We may update these terms from time to time. The "Last Updated" date at the top shows the latest version.
          </p>
        </div>

        {/* Section 11 */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">11. Contact</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            For questions about these terms, use the Contact page.
          </p>
        </div>
      </div>
    </div>
  );
}
