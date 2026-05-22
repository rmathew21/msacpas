import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Samuel CPA, PLLC",
  "description": "Tax preparation, accounting, and business advisory services for individuals and small businesses across the Greater Houston area.",
  "url": "https://msacpas.com/services",
  "telephone": "(281) 564-9500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11104 West Airport Blvd, Suite 114",
    "addressLocality": "Stafford",
    "addressRegion": "TX",
    "postalCode": "77477",
    "addressCountry": "US"
  },
  "areaServed": "Greater Houston, TX",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CPA & Accounting Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Tax Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Individual & Business Tax Preparation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategic Tax Planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IRS Audit Representation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foreign Income & Asset Reporting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FBAR Compliance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Expatriate Tax Preparation" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Business Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Small Business Accounting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Processing & Compliance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Part-Time CFO Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Business Formation & Entity Selection" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Support for Nonprofit Organizations" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internal Controls Review & Implementation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cost Report Preparation (Medicare)" } }
        ]
      }
    ]
  }
};

const taxServices = [
  {
    title: 'Individual & Business Tax Preparation',
    desc: 'Comprehensive tax return preparation for individuals, sole proprietors, partnerships, S-Corps, C-Corps, and LLCs. We ensure accuracy and maximize legitimate deductions to reduce your liability.',
  },
  {
    title: 'Strategic Tax Planning',
    desc: 'Forward-looking tax strategies designed to minimize your burden over time. We analyze your situation year-round—not just at filing time—to identify opportunities and avoid surprises.',
  },
  {
    title: 'IRS Audit Representation',
    desc: 'If you receive an IRS notice or audit, we represent you directly. Our experienced team handles all communication with the IRS so you don\'t have to face it alone.',
  },
  {
    title: 'Foreign Income & Asset Reporting',
    desc: 'Guidance and compliance for taxpayers with foreign income, foreign bank accounts, or overseas assets—including FATCA reporting requirements.',
  },
  {
    title: 'FBAR Compliance',
    desc: 'We help U.S. persons with foreign financial accounts meet their annual FBAR (FinCEN Form 114) reporting obligations and avoid costly penalties.',
  },
  {
    title: 'Expatriate Tax Preparation',
    desc: 'Specialized tax preparation for U.S. citizens and resident aliens living or working abroad, including foreign tax credits, exclusions, and treaty considerations.',
  },
];

const businessServices = [
  {
    title: 'Small Business Accounting',
    desc: 'Full-cycle accounting support including bookkeeping, financial statement preparation, bank reconciliations, and month-end close to keep your books clean and current.',
  },
  {
    title: 'Payroll Processing & Compliance',
    desc: 'Accurate and timely payroll processing with full compliance oversight—federal, state, and local payroll taxes, direct deposit, and employee reporting.',
  },
  {
    title: 'Part-Time CFO Services',
    desc: 'Executive-level financial leadership on a fractional basis. Ideal for growing businesses that need strategic financial guidance without the cost of a full-time CFO.',
  },
  {
    title: 'New Business Formation & Entity Selection',
    desc: 'Expert advice on choosing the right business structure (LLC, S-Corp, C-Corp, Partnership) along with full entity formation support and initial setup.',
  },
  {
    title: 'Support for Nonprofit Organizations',
    desc: 'Specialized accounting and tax compliance for nonprofit entities, including Form 990 preparation and governance best practices.',
  },
  {
    title: 'Internal Controls Review & Implementation',
    desc: 'Evaluation and improvement of your internal financial controls to reduce risk, prevent fraud, and ensure the integrity of your financial data.',
  },
  {
    title: 'Cost Report Preparation (Medicare)',
    desc: 'Preparation of Medicare cost reports for healthcare providers, ensuring compliance with CMS requirements and accurate cost allocation.',
  },
  // {
  //   title: '1099 vs. W-2 Classification',
  //   desc: 'Guidance on properly classifying workers as employees or independent contractors—protecting your business from IRS penalties and employment tax liabilities.',
  // },
];

// const quickbooksServices = [
//   {
//     title: 'QuickBooks Setup & Customization',
//     desc: 'Complete QuickBooks Online or Desktop setup tailored to your business type—including chart of accounts, templates, integrations, and user access configuration.',
//   },
//   {
//     title: 'QuickBooks Training',
//     desc: 'One-on-one training sessions to help you and your team get the most out of QuickBooks, from basic data entry to generating reports and managing payroll.',
//   },
//   {
//     title: 'Ongoing QuickBooks Support',
//     desc: 'Ongoing consulting and troubleshooting to keep your QuickBooks running smoothly, data clean, and reports accurate.',
//   },
// ];

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-royal-50 border border-royal-100 p-6 hover:border-royal-200 hover:shadow-sm transition-all duration-200">
      <div className="w-8 h-px bg-royal-500 mb-4" />
      <h3 className="text-lg font-serif text-royal-950 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className="pt-16 md:pt-20">
      <SEO 
        title="Tax Preparation & Accounting Services | Samuel CPA, PLLC"
        description="Comprehensive tax preparation, accounting, and business advisory services for Houston-area individuals and small businesses."
        path="/services"
        schema={servicesSchema}
      />
      {/* Hero */}
      <section className="bg-royal-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-royal-300 text-xs tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="text-navy-50 text-5xl md:text-6xl font-serif font-bold leading-tight max-w-2xl">
          Tax Preparation & Accounting Services
          </h1>
          <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
            From individual tax returns to full-service business accounting, we offer a comprehensive suite of services designed to meet your needs at every stage, serving individuals and businesses across the Greater Houston area.
          </p>
          <div className="w-16 h-px bg-royal-300 mt-8" />
        </div>
      </section>

      {/* Tax Services */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div>
              {/* <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-2">Category 01</p> */}
              <h2 className="text-3xl md:text-4xl font-serif text-navy-600">Tax Services</h2>
            </div>
            <div className="flex-1 h-px bg-royal-100 hidden md:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxServices.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>

          {/* Tax Organizer CTA */}
          {/* <div className="mt-10 bg-royal-800 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif mb-2">Tax Organizer</h3>
              <p className="text-royal-200 text-sm">Download our tax organizer to gather and organize your documents before your appointment.</p>
            </div>
            <a
              href="https://oriole-point-wx69.squarespace.com/s/MSACPAsTaxOrganizer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-royal-500 hover:bg-royal-400 text-white px-6 py-3 text-xs tracking-widest uppercase font-medium transition-colors"
            >
              Download PDF
            </a>
          </div> */}
        </div>
      </section>

      {/* Business Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div>
              {/* <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-2">Category 02</p> */}
              <h2 className="text-3xl md:text-4xl font-serif text-navy-600">Business Services</h2>
            </div>
            <div className="flex-1 h-px bg-royal-100 hidden md:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* QuickBooks Services */}
      {/* <section className="bg-royal-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-2">Category 03</p>
              <h2 className="text-3xl md:text-4xl font-serif text-royal-950">QuickBooks Services</h2>
            </div>
            <div className="flex-1 h-px bg-royal-100 hidden md:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickbooksServices.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section> */}

      {/* Becoming a Client */}
      <section className="bg-royal-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-royal-100 text-3xl font-serif mb-6">Becoming a Client</h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Getting started is easy. Reach out to schedule an initial consultation and we'll discuss your needs, walk you through our process, and determine the best path forward.
          </p>
          <Link to="/contact" className="inline-block bg-royal-600 hover:bg-royal-500 text-white px-10 py-4 text-xs tracking-widest uppercase font-medium transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
