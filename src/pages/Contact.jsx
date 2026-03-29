import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Form submission placeholder — connect to backend/email service as needed
    setSubmitted(true);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-royal-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-royal-400 text-xs tracking-[0.3em] uppercase mb-4">Reach Out</p>
          <h1 className="text-navy-600 text-5xl md:text-6xl font-serif font-bold leading-tight max-w-2xl">
            Contact Us
          </h1>
          <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
            Whether you need help with tax planning, business consulting, or financial reporting, our experienced team is ready to assist. Reach out today.
          </p>
          <div className="w-16 h-px bg-royal-500 mt-8" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-6">Get in Touch</p>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-royal-950 mb-3">Office Location</h3>
                <div className="w-8 h-px bg-royal-400 mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  11104 West Airport Blvd, Suite 114<br />
                  Stafford, TX 77477
                </p>
                <a
                  href="https://maps.google.com/?q=11104+West+Airport+Blvd+Suite+114+Stafford+TX+77477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs text-royal-600 hover:text-royal-800 tracking-wide uppercase font-medium transition-colors"
                >
                  Get Directions →
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-royal-950 mb-3">Phone</h3>
                <div className="w-8 h-px bg-royal-400 mb-4" />
                <a href="tel:2815649500" className="text-gray-700 text-sm hover:text-royal-700 transition-colors">(281) 564-9500</a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-royal-950 mb-3">Email</h3>
                <div className="w-8 h-px bg-royal-400 mb-4" />
                <a href="mailto:samuel@msacpas.com" className="text-gray-700 text-sm hover:text-royal-700 transition-colors">samuel@msacpas.com</a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-royal-950 mb-3">Office Hours</h3>
                <div className="w-8 h-px bg-royal-400 mb-4" />
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex justify-between max-w-xs">
                    <span>Monday – Friday</span>
                    <span className="text-royal-700 font-medium">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Saturday</span>
                    <span className="text-gray-500">By Appointment</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">Extended hours available during tax season (Jan–Apr)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-6">Send a Message</p>

            {submitted ? (
              <div className="bg-royal-50 border border-royal-200 p-10 text-center">
                <div className="text-royal-600 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-royal-950 mb-3">Message Received</h3>
                <p className="text-gray-600">Thank you for reaching out. A member of our team will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-royal-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-royal-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-royal-500 transition-colors"
                      placeholder="(281) 555-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-royal-500 transition-colors text-gray-700"
                    >
                      <option value="">Select a topic...</option>
                      <option>Tax Preparation</option>
                      <option>Tax Planning</option>
                      <option>Business Accounting</option>
                      <option>Payroll Services</option>
                      <option>QuickBooks Help</option>
                      <option>IRS Audit Representation</option>
                      <option>New Business Formation</option>
                      <option>CFO Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-royal-500 transition-colors resize-none"
                    placeholder="Tell us a bit about your situation and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-royal-700 hover:bg-royal-800 text-white py-4 text-xs tracking-widest uppercase font-medium transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Or call us directly at <a href="tel:2815649500" className="text-royal-600 hover:underline">(281) 564-9500</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="bg-royal-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-royal-400 text-xs tracking-[0.3em] uppercase mb-4">Find Us</p>
          <h2 className="text-2xl font-serif text-navy-600 mb-2">11104 West Airport Blvd, Suite 114</h2>
          <p className="text-royal-300 mb-8">Stafford, TX 77477</p>
          <a
            href="https://maps.google.com/?q=11104+West+Airport+Blvd+Suite+114+Stafford+TX+77477"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-royal-600 text-royal-300 hover:bg-royal-800 hover:text-white px-8 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-200"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
