import { useState } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjkqnwb';

const benefitAreas = [
  'Health Insurance',
  'Pension Benefits',
  'Disability Benefits',
  'Survivor Benefits',
  'Credited Seasons / Service Records',
  'Document Preparation',
  'Not Sure — I Have General Questions',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          (json as { error?: string }).error ||
            'Something went wrong. Please try again or email us directly.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMsg('Unable to send your request. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMsg('');
  };

  const inputClass =
    'bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors';

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #050d1e 0%, #091530 45%, #152f5c 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Request Benefits Help
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Tell us a little about your situation and we'll follow up with you directly — usually within 3–5 business days. Our assistance is completely free and all inquiries are kept confidential.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-white mb-5">Contact Information</h3>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-white text-sm">info@majoreverettfoundation.org</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-white text-sm">Provided after initial contact</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Who We Serve</p>
                    <p className="text-white text-sm">Former players and families, nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-400/10 border border-gold-400/20 rounded-2xl p-6">
              <p className="text-gold-300 text-sm font-bold mb-2">Please Note</p>
              <p className="text-white/60 text-sm leading-relaxed">
                The Major Everett Foundation provides general information and navigation support only. We are not attorneys or benefits administrators. We do not determine eligibility or act as your official representative in any benefit process.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white text-sm font-semibold mb-2">Not sure where to start?</p>
              <p className="text-white/50 text-sm leading-relaxed">
                That's completely fine — many people come to us with questions before they have answers. Just tell us what's on your mind and we'll take it from there.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">We Received Your Request</h3>
                <p className="text-white/60 max-w-md leading-relaxed">
                  Thank you for reaching out. A member of our team will review your information and follow up with you within 3–5 business days. We look forward to connecting with you.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-2 text-gold-400 hover:text-gold-300 text-sm font-semibold underline underline-offset-2 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-3 text-red-300 text-sm">
                    {errorMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="role" className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      I Am A…
                    </label>
                    <select
                      id="role"
                      name="role"
                      className={inputClass}
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" className="bg-navy-900">Select one</option>
                      <option value="Former Player" className="bg-navy-900">Former Player</option>
                      <option value="Spouse / Partner" className="bg-navy-900">Spouse / Partner</option>
                      <option value="Dependent Child" className="bg-navy-900">Dependent Child</option>
                      <option value="Surviving Family Member" className="bg-navy-900">Surviving Family Member</option>
                      <option value="Authorized Representative" className="bg-navy-900">Authorized Representative</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="benefit_area" className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                    Benefit Area *
                  </label>
                  <select
                    id="benefit_area"
                    name="benefit_area"
                    required
                    className={inputClass}
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="" className="bg-navy-900">Select one</option>
                    {benefitAreas.map((a) => (
                      <option key={a} value={a} className="bg-navy-900">{a}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                    What Can We Help You With?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your situation or what you're trying to understand. There's no wrong answer — just share what's on your mind. Please do not include Social Security numbers, medical records, or financial account details."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    value="yes"
                    className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/10 accent-gold-400 shrink-0 cursor-pointer"
                  />
                  <span className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                    I understand that the Major Everett Foundation provides general navigation support only and does not determine benefit eligibility, provide legal or financial advice, or act as my official representative. *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 disabled:opacity-60 text-navy-950 font-bold px-8 py-4 rounded transition-colors duration-200 w-full sm:w-auto"
                >
                  {status === 'submitting' ? 'Sending…' : 'Submit Request'}
                  {status !== 'submitting' && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
