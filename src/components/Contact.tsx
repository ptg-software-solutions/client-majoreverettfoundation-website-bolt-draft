import { useState } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';

const benefitAreas = [
  'Health Insurance',
  'Pension Benefits',
  'Disability Benefits',
  'Survivor Benefits',
  'Credited Seasons / Records',
  'Document Preparation',
  'Not Sure — Need Guidance',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    relationship: '',
    benefitArea: '',
    yearsPlayed: '',
    message: '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate async submission (no backend wired in v1)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

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
            Complete the form below and our team will follow up with you directly. All inquiries are handled with full confidentiality. There is no cost for our assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info sidebar */}
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
                    <p className="text-white text-sm">Available upon request</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Service Area</p>
                    <p className="text-white text-sm">All former NFL players &amp; families, nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-400/10 border border-gold-400/20 rounded-2xl p-6">
              <p className="text-gold-300 text-sm font-bold mb-2">Important Note</p>
              <p className="text-white/60 text-sm leading-relaxed">
                The Major Everett Foundation provides guidance and informational support. We do not provide legal or financial advice, and we cannot guarantee eligibility determinations or benefit outcomes.
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
                <h3 className="font-display text-2xl font-bold text-white">Request Submitted</h3>
                <p className="text-white/60 max-w-md leading-relaxed">
                  Thank you for reaching out. A member of our team will review your request and follow up with you within 3–5 business days.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', relationship: '', benefitArea: '', yearsPlayed: '', message: '' }); }}
                  className="mt-2 text-gold-400 hover:text-gold-300 text-sm font-semibold underline underline-offset-2 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder="John Smith"
                      className="bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="john@example.com"
                      className="bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      placeholder="(555) 000-0000"
                      className="bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Your Relationship</label>
                    <select
                      value={form.relationship}
                      onChange={(e) => set('relationship', e.target.value)}
                      className="bg-white/10 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors appearance-none"
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" className="bg-navy-900">Select one</option>
                      <option value="player" className="bg-navy-900">Former Player</option>
                      <option value="spouse" className="bg-navy-900">Spouse / Partner</option>
                      <option value="child" className="bg-navy-900">Dependent Child</option>
                      <option value="family" className="bg-navy-900">Surviving Family Member</option>
                      <option value="representative" className="bg-navy-900">Authorized Representative</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Benefit Area of Concern *</label>
                    <select
                      required
                      value={form.benefitArea}
                      onChange={(e) => set('benefitArea', e.target.value)}
                      className="bg-white/10 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" className="bg-navy-900">Select one</option>
                      {benefitAreas.map((a) => (
                        <option key={a} value={a} className="bg-navy-900">{a}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Approximate Years Played</label>
                    <input
                      type="text"
                      value={form.yearsPlayed}
                      onChange={(e) => set('yearsPlayed', e.target.value)}
                      placeholder="e.g. 1995–2003"
                      className="bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs font-semibold uppercase tracking-wider">Tell Us About Your Situation</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    placeholder="Briefly describe your situation and what kind of help you're looking for..."
                    className="bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 disabled:opacity-60 text-navy-950 font-bold px-8 py-4 rounded transition-colors duration-200 w-full sm:w-auto"
                >
                  {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
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
