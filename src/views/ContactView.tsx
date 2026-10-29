import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export function ContactView() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Build mailto fallback as clean open communication channel
    const mailtoLink = `mailto:azizme12345@gmail.com?subject=${encodeURIComponent(
      `[Fontora Contact] ${subject} - from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-neutral-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
          <Mail className="w-3.5 h-3.5 text-indigo-600" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
          Contact & Support
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Have feedback, a font submission, or a licensing question? Reach out to the Fontora engineering team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Column */}
        <div className="space-y-6 md:col-span-1">
          <div className="bg-white p-6 rounded-3xl border border-neutral-200/90 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-neutral-900 text-lg">Inquiry Types</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We welcome inquiries from typography designers, creators, and publishers for:
            </p>
            <ul className="text-xs space-y-2 text-neutral-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Font Submissions & Updates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Designer Attribution Queries</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>DMCA & Copyright Notices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Platform Technical Feedback</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-neutral-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Response Commitment</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We prioritize copyright and attribution verification inquiries and aim to review all legitimate requests within 2 business days.
            </p>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-xs md:col-span-2 space-y-6">
          <div className="flex items-center gap-2 text-neutral-900 font-bold text-lg border-b border-neutral-100 pb-4">
            <Send className="w-5 h-5 text-indigo-600" />
            <span>Send a Direct Message</span>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 space-y-3 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-base">Inquiry Prepared!</h3>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Your email client has been prepared. If your mail client did not open automatically, please send your email directly to <strong className="font-mono">azizme12345@gmail.com</strong>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-900"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ali Khan"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                  Subject / Topic *
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="General Inquiry">General Typography Inquiry</option>
                  <option value="Font Submission">New Font Submission</option>
                  <option value="Designer Attribution">Designer Attribution Update</option>
                  <option value="Copyright/DMCA">Copyright or DMCA Request</option>
                  <option value="Bug Report">Technical Bug Report</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry, requested font name, or question in detail..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-sm text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
