import { Link } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: 'Tax Preparation Services',
    desc: 'We handle your tax preparation and filing with a strategic eye—minimizing your tax burden while supporting your business growth.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Certified Public Accountant',
    desc: 'We offer comprehensive CPA, tax, and accounting services tailored for small businesses and individuals across the Houston region.',
  },
  // {
  //   icon: (
  //     <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  //     </svg>
  //   ),
  //   title: 'QuickBooks Services',
  //   desc: 'Expert QuickBooks setup, training, and support to help you streamline your accounting and gain clear financial insights.',
  // },
];

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '500+', label: 'Clients Served' },
  { value: '2013', label: 'Established' },
  { value: 'TX', label: 'Stafford, Texas' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-950 text-white min-h-screen flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px'
          }} />
        </div>
        {/* Green accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-forest-500" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="text-forest-400 text-xs tracking-[0.35em] uppercase mb-8 fade-up">
              Stafford, Texas · Since 2013
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8 fade-up delay-1">
              Precision<br />
              Accounting<br />
              <span className="text-forest-400">for Peace</span><br />
              of Mind
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-12 fade-up delay-2">
              Samuel CPA PLLC provides reliable and personalized CPA services to individuals and small businesses across the Houston region. We go beyond the numbers to support your long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up delay-3">
              <Link
                to="/contact"
                className="inline-block bg-forest-600 hover:bg-forest-500 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium transition-colors text-center"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="inline-block border border-white/30 hover:border-white text-white px-8 py-4 text-sm tracking-widest uppercase font-medium transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-forest-400">
          <div className="w-px h-12 bg-forest-700 animate-pulse" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-forest-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-serif font-bold text-forest-300">{s.value}</div>
                <div className="text-xs tracking-widest uppercase text-gray-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-forest-600 mx-auto mb-8" />
          <blockquote className="text-3xl md:text-4xl font-serif text-forest-900 leading-tight italic">
            "Good accounting is the foundation of every successful business."
          </blockquote>
          <div className="w-12 h-px bg-forest-600 mx-auto mt-8" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-950">Our Focus</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="border border-gray-100 p-8 hover:border-forest-200 hover:shadow-md transition-all duration-300 group">
                <div className="text-forest-600 mb-6 group-hover:text-forest-700 transition-colors">{s.icon}</div>
                <h3 className="text-xl font-serif text-forest-950 mb-4">{s.title}</h3>
                <div className="w-8 h-px bg-forest-400 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border border-forest-700 text-forest-700 px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-forest-700 hover:text-white transition-all duration-200">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-forest-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-4">About Samuel CPA</p>
            <h2 className="text-4xl font-serif text-forest-950 mb-6 leading-tight">
              Trusted Advisors.<br />Real Results.
            </h2>
            <div className="w-12 h-px bg-forest-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              Based in Stafford, Texas, Samuel CPA PLLC has been serving individuals and small businesses since 2013. We specialize in tax preparation, accounting, and financial consulting—helping our clients navigate complex financial decisions with confidence.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you're a small business owner, entrepreneur, or individual taxpayer, our team brings deep expertise, attention to detail, and a commitment to professionalism tailored to your unique financial goals.
            </p>
            <Link to="/about" className="inline-block bg-forest-700 text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-forest-800 transition-colors">
              Learn More
            </Link>
          </div>

          <div className="bg-forest-900 text-white p-10">
            <h3 className="text-2xl font-serif mb-8 text-forest-300">Contact Us</h3>
            <div className="flex flex-col gap-6 text-sm">
              <div className="flex gap-4">
                <div className="text-forest-400 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-gray-300">
                  <p>11104 West Airport Blvd, Suite 114</p>
                  <p>Stafford, TX 77477</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-forest-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:2815649500" className="text-gray-300 hover:text-forest-300 transition-colors">(281) 564-9500</a>
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-forest-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:samuel@msacpas.com" className="text-gray-300 hover:text-forest-300 transition-colors">samuel@msacpas.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-forest-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Get in Touch</h2>
          <p className="text-forest-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you need help with tax planning, business consulting, or financial reporting, our experienced team is ready to assist. Reach out today to schedule a consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-forest-800 px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-forest-50 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
