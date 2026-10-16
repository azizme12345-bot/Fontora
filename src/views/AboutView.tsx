import { ShieldCheck, Sparkles, Lock, Copyright, CheckCircle2 } from 'lucide-react';

export function AboutView() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 border-b border-neutral-200 pb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>About Fontora</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          Multilingual Typography Platform
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Fontora provides an accessible, interactive platform for previewing, testing, and downloading typefaces across Urdu, Arabic, Hindi, English, and Roman Urdu scripts.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10 text-neutral-700 leading-relaxed">
        {/* Mission */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              🎯
            </div>
            <h2 className="text-xl font-bold">Platform Purpose</h2>
          </div>
          <p>
            Typography bridges culture, identity, and digital communication. While Latin typography benefits from extensive testing tools, South Asian and Middle Eastern scripts—including Nastaleeq, Naskh, and Devanagari—often lack unified, interactive web discovery. Fontora provides live multi-script text previewing, glyph testing, and font access.
          </p>
        </div>

        {/* Licensing Policy */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">Font Licensing & Usage Policy</h2>
          </div>
          <p>
            Fonts featured on Fontora originate from a variety of sources, including verified open-source repositories (such as the SIL Open Font License 1.1, Apache License 2.0, and Ubuntu Font License), educational projects, and community freeware releases.
          </p>
          <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 space-y-2 text-sm text-neutral-600">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Verified Open-Source Fonts:</strong> Free for personal and commercial usage according to their respective open licenses (e.g., SIL OFL, Apache 2.0).</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Community & Freeware Fonts:</strong> Released for free personal and general use. Commercial use policies may vary by designer or foundry. Users are advised to review the specific license indicated on each font page before commercial deployment.</span>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">Privacy Policy & Data Handling</h2>
          </div>
          <p>
            Fontora is designed to function with minimal data collection:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600">
            <li><strong>No User Accounts:</strong> We do not require registration, login, email addresses, or passwords to preview or download fonts.</li>
            <li><strong>Client-Side Storage:</strong> Your favorited fonts and custom typography tester preferences are stored strictly inside your browser's local storage (<code className="bg-neutral-100 px-1.5 py-0.5 rounded text-xs font-mono">localStorage</code>). This data remains on your device and is not transmitted to any external server.</li>
            <li><strong>No Tracking Cookies:</strong> Fontora does not deploy invasive cross-site tracking cookies. Server logs maintain standard, non-sensitive connection records for network security and uptime monitoring.</li>
          </ul>
        </div>

        {/* Copyright & Attributions */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-3 text-neutral-900">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Copyright className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">Copyright & Designer Attributions</h2>
          </div>
          <p>
            All typefaces, logos, and trademarks remain the intellectual property of their respective creators, type designers, and foundries. If you are a copyright owner or font creator and have questions regarding attribution, licensing metadata, or would like a listing updated or removed, please open an inquiry via the project repository or contact the platform administrator.
          </p>
        </div>
      </div>
    </div>
  );
}
