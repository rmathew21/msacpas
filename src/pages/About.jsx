import { Link } from 'react-router-dom'; 
import aboutImg from '../assets/RajuSamuel.jpg';

const values = [
  {
    title: 'Integrity',
    desc: 'We uphold the highest standards of professional ethics in every engagement, ensuring transparency and honesty in all our communications.',
  },
  {
    title: 'Expertise',
    desc: 'Our team brings deep knowledge across individual and business taxation, accounting, and financial planning to serve your needs.',
  },
  {
    title: 'Personalized Service',
    desc: 'We treat every client as an individual. No cookie-cutter solutions—just tailored strategies designed around your specific goals.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We invest in your success. Our clients return year after year because we grow alongside their businesses and evolving financial needs.',
  },
];

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-forest-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-forest-400 text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight max-w-2xl">
            About Samuel CPA, PLLC
          </h1>
          <div className="w-16 h-px bg-forest-500 mt-8" />
        </div>
      </section>

      {/* Principal Bio */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center ">
              <div className="w-full max-w-sm aspect-[3/4] bg-forest-100 overflow-hidden rounded-xl">
                <img
                  src={aboutImg}
                  alt="Raju Samuel, CPA, CMA"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = '<span class="text-forest-400 text-sm tracking-widest uppercase">Photo</span>';
                  }}
                />
              </div>
              <div className="mt-6 text-center py-4">
                <p className="text-forest-950 font-serif text-xl">Raju Samuel</p>
                <p className="text-forest-600 text-xs tracking-[0.2em] uppercase mt-1">CPA, CMA — Principal</p>
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-4">Meet Our Principal</p>
              <h2 className="text-3xl font-serif text-forest-950 mb-8 leading-tight">
                Nearly 25 Years of Finance & Accounting Expertise
              </h2>
              <div className="prose prose-sm text-gray-700 leading-relaxed space-y-5">
                <p>
                  Raju Samuel, CPA, CMA brings nearly 25 years of experience in finance and accounting, including extensive international expertise in both U.S. and Indian tax systems. His background uniquely combines private industry accounting, public accounting in the U.S., and advanced technology skills.
                </p>
                <p>
                  Earlier in his career, Mr. Samuel served as an Accountant at Unilever India and later as Chief Accountant at Qatar Petroleum Corporation in Doha, Qatar. He holds a Master's degree in Accounting and earned both his Certified Public Accountant (CPA) and Certified Management Accountant (CMA) credentials in 2010.
                </p>
                <p>
                  Before co-founding Mathews, Samuel & Associates, Mr. Samuel worked with several reputable local and regional CPA firms in Houston, Texas, where he gained deep expertise in tax planning, compliance, and small business advisory services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-4">Who We Are</p>
            <h2 className="text-3xl font-serif text-forest-950 mb-8 leading-tight">
              Trusted Financial Partners Since 2013
            </h2>
            <div className="prose prose-sm text-gray-700 leading-relaxed space-y-5">
              <p>
                Based in Stafford, Texas, Samuel CPA PLLC has been providing reliable, personalized CPA services to individuals and small businesses across the Houston region since 2013. What started as a commitment to serving the local community has grown into a trusted practice built on results, relationships, and professional excellence.
              </p>
              <p>
                We specialize in tax preparation, accounting, and financial consulting—helping our clients navigate complex financial decisions with confidence. Our approach is always personal: we take the time to understand your unique situation, your goals, and the challenges you face—so we can provide advice that's genuinely useful.
              </p>
              <p>
                Whether you're a small business owner navigating quarterly filings, an entrepreneur setting up a new entity, or an individual looking to minimize your tax burden, our team brings deep expertise and attention to detail to every engagement.
              </p>
            </div>
          </div>

          <div className="bg-forest-900 text-white p-10">
            <h3 className="text-2xl font-serif text-forest-300 mb-8">At a Glance</h3>
            <div className="space-y-6">
              {[
                { label: 'Founded', value: '2013' },
                { label: 'Location', value: 'Stafford, TX (Greater Houston)' },
                { label: 'Specialization', value: 'Tax Preparation, CPA Services, Business Accounting' },
                { label: 'Clients', value: 'Individuals & Small Businesses' },
                { label: 'Phone', value: '(281) 564-9500' },
                { label: 'Email', value: 'samuel@msacpas.com' },
              ].map(item => (
                <div key={item.label} className="border-b border-forest-800 pb-4">
                  <div className="text-forest-400 text-xs tracking-[0.15em] uppercase mb-1">{item.label}</div>
                  <div className="text-gray-200 text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-forest-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-forest-400 text-xs tracking-[0.3em] uppercase mb-6">Our Mission</p>
          <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed italic text-forest-100">
            "To advocate for small businesses and individual clients by delivering precision accounting services that provide real peace of mind—and a clear path forward."
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-4">What Drives Us</p>
            <h2 className="text-4xl font-serif text-forest-950">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="border-l-4 border-forest-500 pl-6 py-2">
                <h3 className="text-xl font-serif text-forest-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Work Together?</h2>
          <p className="text-gray-400 mb-8">Schedule a consultation and discover how Samuel CPA PLLC can serve your financial needs.</p>
          <Link to="/contact" className="inline-block bg-forest-600 hover:bg-forest-500 text-white px-10 py-4 text-xs tracking-widest uppercase font-medium transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
