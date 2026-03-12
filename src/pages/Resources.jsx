import { useState } from 'react';
import { Link } from 'react-router-dom';

// Accordion Component
function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-serif text-forest-950 text-lg pr-4">{title}</span>
        <span className={`text-forest-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

// IRS Publications data
const irsPublications = [
  { pub: 'Publication 1', title: 'Your Rights as a Taxpayer', url: 'https://www.irs.gov/pub/irs-pdf/p1.pdf' },
  { pub: 'Publication 17', title: 'Your Federal Income Tax (Individuals)', url: 'https://www.irs.gov/pub/irs-pdf/p17.pdf' },
  { pub: 'Publication 334', title: 'Tax Guide for Small Business', url: 'https://www.irs.gov/pub/irs-pdf/p334.pdf' },
  { pub: 'Publication 463', title: 'Travel, Gift, and Car Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p463.pdf' },
  { pub: 'Publication 501', title: 'Dependents, Standard Deduction, and Filing Information', url: 'https://www.irs.gov/pub/irs-pdf/p501.pdf' },
  { pub: 'Publication 502', title: 'Medical and Dental Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p502.pdf' },
  { pub: 'Publication 503', title: 'Child and Dependent Care Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p503.pdf' },
  { pub: 'Publication 526', title: 'Charitable Contributions', url: 'https://www.irs.gov/pub/irs-pdf/p526.pdf' },
  { pub: 'Publication 535', title: 'Business Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p535.pdf' },
  { pub: 'Publication 550', title: 'Investment Income and Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p550.pdf' },
  { pub: 'Publication 596', title: 'Earned Income Credit (EIC)', url: 'https://www.irs.gov/pub/irs-pdf/p596.pdf' },
  { pub: 'Publication 946', title: 'How to Depreciate Property', url: 'https://www.irs.gov/pub/irs-pdf/p946.pdf' },
];

// 2026 Tax Brackets
const taxBrackets2026 = {
  single: [
    { rate: '10%', range: '$0 – $11,925' },
    { rate: '12%', range: '$11,926 – $48,475' },
    { rate: '22%', range: '$48,476 – $103,350' },
    { rate: '24%', range: '$103,351 – $197,300' },
    { rate: '32%', range: '$197,301 – $250,525' },
    { rate: '35%', range: '$250,526 – $626,350' },
    { rate: '37%', range: 'Over $626,350' },
  ],
  mfj: [
    { rate: '10%', range: '$0 – $23,850' },
    { rate: '12%', range: '$23,851 – $96,950' },
    { rate: '22%', range: '$96,951 – $206,700' },
    { rate: '24%', range: '$206,701 – $394,600' },
    { rate: '32%', range: '$394,601 – $501,050' },
    { rate: '35%', range: '$501,051 – $751,600' },
    { rate: '37%', range: 'Over $751,600' },
  ],
};

// Record Retention Guide
const retentionGuide = [
  {
    category: 'Tax Records',
    items: [
      { record: 'Federal and State Tax Returns', retention: '7 years' },
      { record: 'W-2s and 1099s', retention: '7 years' },
      { record: 'Supporting receipts & deductions', retention: '7 years' },
      { record: 'Records of tax-exempt income', retention: 'Permanently' },
    ],
  },
  {
    category: 'Business Records',
    items: [
      { record: 'Payroll records and summaries', retention: '7 years' },
      { record: 'Accounts payable / receivable ledgers', retention: '7 years' },
      { record: 'Annual financial statements', retention: 'Permanently' },
      { record: 'General ledger / chart of accounts', retention: 'Permanently' },
      { record: 'Bank statements & reconciliations', retention: '7 years' },
      { record: 'Cancelled checks (general)', retention: '7 years' },
      { record: 'Cancelled checks (major purchases)', retention: 'Permanently' },
      { record: 'Expense reports', retention: '7 years' },
      { record: 'Invoices (customers & vendors)', retention: '7 years' },
    ],
  },
  {
    category: 'Corporate / Legal Records',
    items: [
      { record: 'Corporate minute books', retention: 'Permanently' },
      { record: 'Bylaws and operating agreements', retention: 'Permanently' },
      { record: 'Capital stock records', retention: 'Permanently' },
      { record: 'Contracts and leases (active)', retention: 'Permanently' },
      { record: 'Contracts and leases (expired)', retention: '7 years' },
      { record: 'Patents, trademarks, copyrights', retention: 'Permanently' },
    ],
  },
  {
    category: 'Employment Records',
    items: [
      { record: 'Employee personnel files (terminated)', retention: '7 years' },
      { record: 'Employment applications', retention: '3 years' },
      { record: 'Workers compensation claims', retention: '10 years' },
      { record: 'I-9 forms', retention: '3 years after hire / 1 year after termination' },
    ],
  },
  {
    category: 'Personal Records',
    items: [
      { record: 'Tax returns', retention: '7 years' },
      { record: 'Birth, marriage, death certificates', retention: 'Permanently' },
      { record: 'Social Security cards', retention: 'Permanently' },
      { record: 'Passports (expired)', retention: 'Permanently' },
      { record: 'Real estate records', retention: 'Permanently' },
      { record: 'Mortgage documents', retention: '7 years after payoff' },
      { record: 'Investment records', retention: '7 years after sale' },
      { record: 'Medical records', retention: 'Permanently' },
      { record: 'Insurance policies (active)', retention: 'Permanently' },
      { record: 'Insurance policies (expired)', retention: '3 years' },
    ],
  },
];

export default function Resources() {
  const [bracketView, setBracketView] = useState('single');

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-forest-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-forest-400 text-xs tracking-[0.3em] uppercase mb-4">Helpful Information</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight max-w-2xl">
            Resources
          </h1>
          <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
            Access IRS publications, 2026 tax rates, and our record retention guide—everything you need to stay organized and informed.
          </p>
          <div className="w-16 h-px bg-forest-500 mt-8" />
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-forest-800 text-white py-5 px-6 sticky top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center md:justify-start">
          {[
            { label: 'IRS Publications', href: '#publications' },
            { label: 'Tax Organizer', href: '#taxOrganizer' },
            { label: '2026 Tax Rates', href: '#tax-rates' },
            { label: 'Record Retention', href: '#retention' },
            { label: 'FAQs', href: '#faqs' },
          ].map(item => (
            <a key={item.href} href={item.href} className="text-xs tracking-[0.15em] uppercase text-forest-200 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* IRS Publications */}
      <section id="publications" className="bg-cream py-20 px-6 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-3">IRS Resources</p>
            <h2 className="text-3xl md:text-4xl font-serif text-forest-950 mb-4">Tax Forms & Publications</h2>
            <p className="text-gray-600 max-w-2xl">Easily access and print any IRS tax form or publication—no need for mail requests or post office visits. Click any publication below to open the PDF directly from the IRS website.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {irsPublications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 p-5 hover:border-forest-300 hover:shadow-md transition-all duration-200 group flex items-start gap-4"
              >
                <div className="bg-forest-100 text-forest-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 group-hover:bg-forest-200 transition-colors">PDF</div>
                <div>
                  <div className="text-xs text-forest-600 font-medium mb-1">{pub.pub}</div>
                  <div className="text-sm text-gray-800 font-medium leading-snug">{pub.title}</div>
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-6 text-center">
            Need a form not listed? Visit the{' '}
            <a href="https://www.irs.gov/forms-instructions" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline">
              IRS Forms & Instructions library
            </a>
          </p>
        </div>
      </section>

      <section id="taxOrganizer" className='scroll-mt-32'>
      <div className="mt-10 bg-forest-800 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif mb-2">Tax Organizer</h3>
              <p className="text-forest-200 text-sm">Download our tax organizer to gather and organize your documents before your appointment.</p>
            </div>
            <a
              href="https://oriole-point-wx69.squarespace.com/s/MSACPAsTaxOrganizer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-forest-500 hover:bg-forest-400 text-white px-6 py-3 text-xs tracking-widest uppercase font-medium transition-colors"
            >
              Download PDF
            </a>
          </div>
      </section>
      

      {/* 2026 Tax Rates */}
      <section id="tax-rates" className="bg-white py-20 px-6 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-3">Tax Year 2026</p>
            <h2 className="text-3xl md:text-4xl font-serif text-forest-950 mb-4">Federal Income Tax Rates</h2>
            <p className="text-gray-600 max-w-2xl">Stay up to date with the latest federal income tax brackets for 2026. These rates apply to taxable income after deductions.</p>
          </div>

          {/* Toggle */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setBracketView('single')}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-colors ${bracketView === 'single' ? 'bg-forest-700 text-white' : 'border border-gray-200 text-gray-600 hover:border-forest-400'}`}
            >
              Single Filers
            </button>
            <button
              onClick={() => setBracketView('mfj')}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-colors ${bracketView === 'mfj' ? 'bg-forest-700 text-white' : 'border border-gray-200 text-gray-600 hover:border-forest-400'}`}
            >
              Married Filing Jointly
            </button>
          </div>

          <div className="overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-forest-900 text-white">
                  <th className="text-left px-6 py-4 text-xs tracking-[0.15em] uppercase font-medium">Tax Rate</th>
                  <th className="text-left px-6 py-4 text-xs tracking-[0.15em] uppercase font-medium">Taxable Income Range</th>
                </tr>
              </thead>
              <tbody>
                {taxBrackets2026[bracketView].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-medium text-forest-700">{row.rate}</td>
                    <td className="px-6 py-4 text-gray-700">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Rates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { label: 'Standard Deduction (Single)', value: '$15,000' },
              { label: 'Standard Deduction (MFJ)', value: '$30,000' },
              { label: 'Standard Deduction (HOH)', value: '$22,500' },
              { label: 'Long-Term Capital Gains – 0%', value: 'Up to $48,350 (Single)' },
              { label: 'Long-Term Capital Gains – 15%', value: '$48,351 – $533,400 (Single)' },
              { label: 'Long-Term Capital Gains – 20%', value: 'Over $533,400 (Single)' },
            ].map((item, i) => (
              <div key={i} className="bg-forest-50 border border-forest-100 p-5">
                <div className="text-xs text-forest-600 tracking-wide uppercase mb-2">{item.label}</div>
                <div className="text-xl font-serif text-forest-900 font-bold">{item.value}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs mt-6">
            * Rates reflect 2026 inflation-adjusted figures. Consult with a tax professional for your specific situation.
          </p>
        </div>
      </section>

      {/* Record Retention Guide */}
      <section id="retention" className="bg-forest-950 text-white py-20 px-6 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-forest-400 mb-3">How Long to Keep Records</p>
            <h2 className="text-3xl md:text-4xl font-serif text-forest-100 mb-4">Record Retention Guide</h2>
            <p className="text-forest-300 max-w-2xl">Use this guide to determine how long you need to keep your tax and other financial records. When in doubt, keep it longer—or consult with us.</p>
          </div>

          <div className="space-y-8">
            {retentionGuide.map((group, gi) => (
              <div key={gi}>
                <h3 className="text-forest-400 text-xs tracking-[0.2em] uppercase font-medium mb-4 border-b border-forest-900 pb-3">{group.category}</h3>
                <div className="overflow-hidden rounded-sm">
                  <table className="w-full">
                    <tbody>
                      {group.items.map((item, ii) => (
                        <tr key={ii} className={`border-b border-forest-900 ${ii % 2 === 0 ? 'bg-forest-900/40' : 'bg-transparent'}`}>
                          <td className="px-5 py-3 text-sm text-gray-300">{item.record}</td>
                          <td className="px-5 py-3 text-sm text-forest-300 font-medium text-right whitespace-nowrap">{item.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-forest-800 border border-forest-700 mt-10 p-6">
            <p className="text-forest-200 text-sm leading-relaxed">
              <strong className="text-white">Important Note:</strong> These are general guidelines. The IRS generally has 3 years to audit a return, but this extends to 6 years if substantial income was omitted, and there's no limit for fraud. Always consult with a qualified tax professional before destroying records.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-cream py-20 px-6 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-forest-600 mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-serif text-forest-950 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            <Accordion title="When should I file my taxes?">
              <p>For most individuals, the federal income tax deadline is April 15. If you need more time, you can request a 6-month extension using Form 4868, which moves your deadline to October 15. However, an extension to file is not an extension to pay—any taxes owed are still due by April 15 to avoid interest and penalties.</p>
            </Accordion>

            <Accordion title="What documents do I need to bring for tax preparation?">
              <p className="mb-3">You'll typically need:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Social Security numbers for yourself, spouse, and dependents</li>
                <li>W-2 forms from all employers</li>
                <li>1099 forms (interest, dividends, self-employment, etc.)</li>
                <li>Prior year tax return</li>
                <li>Receipts for deductible expenses (medical, charitable contributions, etc.)</li>
                <li>Records of any estimated tax payments made</li>
                <li>Bank account information for direct deposit of refund</li>
              </ul>
              <p className="mt-3">Download our <a href="https://oriole-point-wx69.squarespace.com/s/MSACPAsTaxOrganizer.pdf" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline font-medium">Tax Organizer</a> for a complete checklist.</p>
            </Accordion>

            <Accordion title="What is the difference between a W-2 employee and a 1099 contractor?">
              <p>A W-2 employee has taxes withheld by the employer, who also pays a share of FICA (Social Security and Medicare) taxes. An independent contractor (1099) is responsible for paying self-employment tax (both the employee and employer portions) and must make quarterly estimated tax payments. Misclassifying workers can result in significant IRS penalties—we can help you navigate this correctly.</p>
            </Accordion>

            <Accordion title="How long do I need to keep my tax records?">
              <p>Generally, keep tax records for at least 7 years. The IRS typically has 3 years to audit a return from the due date, but this extends to 6 years if you omit more than 25% of gross income. There is no statute of limitations for fraud. See our full Record Retention Guide above for detailed guidance by document type.</p>
            </Accordion>

            <Accordion title="What is an IRS audit and how does it work?">
              <p>An IRS audit is a review of your tax return to verify that the information is correct and that you've complied with tax laws. Most audits are conducted by mail (correspondence audits), where the IRS asks for specific documentation. Some are conducted in-person at an IRS office or at your home or business. Samuel CPA PLLC provides IRS Audit Representation services—we'll handle all communications and represent you throughout the process.</p>
            </Accordion>

            <Accordion title="Do you offer QuickBooks help?">
              <p>Yes! We provide comprehensive QuickBooks services including initial setup and customization, one-on-one training, and ongoing support. Whether you're new to QuickBooks or have been using it for years but want to use it more effectively, we can help you get the most out of the platform.</p>
            </Accordion>

            <Accordion title="Can you help if I have foreign income or assets abroad?">
              <p>Absolutely. We specialize in foreign income and asset reporting, including FBAR (FinCEN Form 114) compliance for foreign bank accounts, FATCA reporting, and expatriate tax preparation for U.S. citizens and residents living abroad. Non-compliance with these requirements can result in significant penalties, so it's important to get this right.</p>
            </Accordion>

            <Accordion title="How do I track my tax refund?">
              <p>You can check the status of your federal refund using the IRS's official "Where's My Refund?" tool at <a href="https://www.irs.gov/refunds" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline font-medium">irs.gov/refunds</a>. You'll need your Social Security number, filing status, and exact refund amount. Most refunds are issued within 21 days for e-filed returns.</p>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Have a question not answered here?</p>
            <Link to="/contact" className="inline-block bg-forest-700 text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-forest-800 transition-colors">
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
