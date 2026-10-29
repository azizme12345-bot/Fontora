import { Lock, ShieldCheck, Database, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export function PrivacyPolicyView() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-neutral-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
          <Lock className="w-3.5 h-3.5 text-indigo-600" />
          <span>Security & Transparency</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          At Fontora, we are committed to providing a clean, safe, and transparent font discovery experience with zero unnecessary data collection.
        </p>
        <p className="text-xs text-neutral-400">
          Last Updated: October 2026 • Effective Worldwide
        </p>
      </div>

      {/* Policy Content Sections */}
      <div className="space-y-8 text-neutral-700 leading-relaxed">
        {/* Section 1: Overview */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <EyeOff className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">1. Zero Account Registration</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Fontora does not require user accounts, email addresses, passwords, phone numbers, or billing information. You can freely search, preview, customize, and download all available fonts without creating an account or providing sensitive personal information.
          </p>
        </div>

        {/* Section 2: Local Storage */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">2. Local Storage Usage</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            To provide a seamless typography experience, Fontora stores certain non-personal preferences locally on your device using browser <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-xs font-mono">localStorage</code>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600">
            <li><strong>Favorites Collection:</strong> Identifiers of the fonts you bookmark for quick access.</li>
            <li><strong>Tester Settings:</strong> Custom preview text strings and slider preferences during testing.</li>
          </ul>
          <p className="text-sm text-neutral-500">
            This data never leaves your browser and is never uploaded to any remote server or third-party database. You can clear this data at any time via your browser settings.
          </p>
        </div>

        {/* Section 3: Cookies & Tracking */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">3. Cookies and Analytics</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            We do not use invasive third-party cross-site tracking cookies. Standard server access logs (including IP address, browser user-agent, and requested file path) may be retained temporarily by our hosting infrastructure solely to ensure network security, defend against DDoS attacks, and monitor uptime.
          </p>
        </div>

        {/* Section 4: External Font CDN */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">4. Third-Party CDNs & Assets</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Font files and web-font stylesheets are served through reputable, high-speed public content delivery networks (Google Fonts and jsDelivr). When your browser loads a font preview or downloads a font file, your browser connects directly to these CDN providers under their respective standard terms.
          </p>
        </div>

        {/* Section 5: Children's Privacy */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">5. Children's Online Privacy Protection</h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600">
            Fontora is an open educational and creative tool for typography discovery. We do not knowingly collect personal identifiable information from children or adults alike.
          </p>
        </div>
      </div>
    </div>
  );
}
