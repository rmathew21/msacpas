import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function scrollToSection(id) {
  const target = document.getElementById(id.replace('#', ''));
  if (!target) return;

  const stickyNav = document.querySelector('[data-sticky-nav]');
  const topBar = document.querySelector('header') || document.querySelector('nav');

  const offset = (stickyNav?.offsetHeight || 48) + (topBar?.offsetHeight || 64) + 8;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: 'smooth' });
}
// Accordion Component
function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-serif text-royal-950 text-lg pr-4">{title}</span>
        <span className={`text-royal-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
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

const faqItems = [
  {
    title: 'When should I file my taxes?',
    keywords: 'april deadline extension form 4868 october penalty interest',
  },
  {
    title: 'What documents do I need to bring for tax preparation?',
    keywords: 'w-2 1099 social security prior year receipts estimated payments bank organizer checklist',
  },
  {
    title: 'What is the difference between a W-2 employee and a 1099 contractor?',
    keywords: 'worker classification independent contractor self-employment fica payroll withholding quarterly',
  },
  {
    title: 'How long do I need to keep my tax records?',
    keywords: 'retention records 7 years audit statute of limitations fraud 25 percent',
  },
  {
    title: 'What is an IRS audit and how does it work?',
    keywords: 'audit review correspondence mail in-person representation samuel cpa',
  },
  {
    title: 'Do you offer QuickBooks help?',
    keywords: 'quickbooks setup training bookkeeping accounting software support',
  },
  {
    title: 'Can you help if I have foreign income or assets abroad?',
    keywords: 'fbar fincen 114 fatca foreign bank account expatriate expat abroad international',
  },
  {
    title: 'How do I track my tax refund?',
    keywords: 'refund status wheres my refund irs.gov 21 days direct deposit e-file',
  },
];

// flat search index
const searchIndex = [
  ...irsPublications.map(p => ({
    type: 'pub',
    title: `${p.pub} - ${p.title}`,
    sub: 'IRS Publications',
    sectionId: 'publications',
    url: p.url,
    searchText: `${p.pub} ${p.title} irs publication tax`.toLowerCase(),
  })),
  ...retentionGuide.flatMap(g =>
    g.items.map(item => ({
      type: 'ret',
      title: item.record,
      sub: `${item.retention} · ${g.category}`,
      sectionId: 'retention',
      searchText: `${item.record} ${g.category} ${item.retention} record retention keep`.toLowerCase(),
    }))
  ),
  ...faqItems.map(f => ({
    type: 'faq',
    title: f.title,
    sub: 'Frequently Asked Questions',
    sectionId: 'faqs',
    searchText: `${f.title} ${f.keywords} faq question`.toLowerCase(),
  })),

  // static section search entries 
  {
    type: 'section',
    title: '2026 Federal Income Tax Rates',
    sub: 'Tax brackets for single filers and married filing jointly',
    sectionId: 'tax-rates',
    searchText: 'tax rates brackets 2026 federal income single married filing jointly standard deduction capital gains'.toLowerCase(),
  },
  {
    type: 'section',
    title: 'Tax Organizer',
    sub: 'Download the PDF organizer for your appointment',
    sectionId: 'taxOrganizer',
    searchText: 'tax organizer download pdf appointment documents checklist'.toLowerCase(),
  },
  {
    type: 'section',
    title: '1099 vs W-2 Worker Classification',
    sub: 'IRS 20-Factor Test, misclassification risks',
    sectionId: '1099vsW2',
    searchText: '1099 w2 w-2 worker classification contractor employee irs 20 factor test misclassification'.toLowerCase(),
  },
];

const GROUP_META = {
  pub:     { label: 'IRS Publications',           badgeBg: 'bg-blue-50',   badgeText: 'text-blue-800',   badge: 'PDF' },
  faq:     { label: 'Frequently Asked Questions', badgeBg: 'bg-green-50',  badgeText: 'text-green-800',  badge: 'FAQ' },
  ret:     { label: 'Record Retention Guide',     badgeBg: 'bg-amber-50',  badgeText: 'text-amber-800',  badge: 'RET' },
  section: { label: 'Page Sections',              badgeBg: 'bg-royal-50',  badgeText: 'text-royal-700',  badge: 'GO'  },
};

const GROUP_ORDER = ['section', 'pub', 'faq', 'ret'];

const SUGGESTION_CHIPS = ['1099', 'w-2', 'audit', 'QuickBooks', 'medical expenses', 'refund', 'depreciation', 'FBAR'];

// highlight matching text 
function Highlight({ text, query }) {
  if (!query) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, i) =>
        re.test(part)
          ? <mark key={i} className="bg-amber-100 text-amber-900 rounded-sm px-0.5 not-italic">{part}</mark>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

// resource Search
function ResourceSearch() {
  const [query, setQuery]           = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen]             = useState(false);

  const inputRef    = useRef(null);
  const dropdownRef = useRef(null);
  const itemRefs    = useRef([]);

  const trimmed = query.trim().toLowerCase();

  const results = trimmed.length < 2
    ? []
    : searchIndex.filter(item => item.searchText.includes(trimmed));

  const grouped = results.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

  const flatResults = GROUP_ORDER.flatMap(k => grouped[k] ?? []);

  const handleSelect = useCallback((item) => {
    setQuery('');
    setOpen(false);
    setActiveIndex(-1);
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection('#' + item.sectionId);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (!open || flatResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.min(activeIndex + 1, flatResults.length - 1);
      setActiveIndex(next);
      itemRefs.current[next]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = Math.max(activeIndex - 1, 0);
      setActiveIndex(prev);
      itemRefs.current[prev]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && flatResults[activeIndex]) {
        handleSelect(flatResults[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActiveIndex(-1);
      inputRef.current?.blur();
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Cmd/Ctrl+K focuses the search input from anywhere on the page
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Reset keyboard index when results change
  useEffect(() => {
    setActiveIndex(-1);
    itemRefs.current = [];
  }, [trimmed]);

  const showDropdown = open && trimmed.length >= 2;
  const activeGroups = GROUP_ORDER.filter(k => grouped[k]);

  // Running index across all groups for keyboard nav
  let flatIdx = 0;

  return (
    <section className="bg-white border-b border-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-royal-600 mb-3 text-center">
            Search Resources
          </p>

          {/* Input row */}
          <div className="relative">
            <div
              className={`flex items-center gap-3 border px-5 py-4 bg-white transition-all duration-150 ${
                open ? 'border-royal-400 shadow-sm' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Search icon */}
              <svg className="w-4 h-4 text-royal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth={1.5} />
                <path d="M21 21l-4.35-4.35" strokeWidth={1.5} strokeLinecap="round" />
              </svg>

              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => { setQuery(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                onKeyDown={handleKeyDown}
                placeholder="Search publications, FAQs, record retention, tax rates…"
                className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                aria-label="Search resources"
                aria-expanded={showDropdown}
                aria-autocomplete="list"
                role="combobox"
              />

              {/* Clear button */}
              {query && (
                <button
                  onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus(); }}
                  className="text-gray-300 hover:text-gray-500 flex-shrink-0 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              {/* Keyboard shortcut hint */}
              {!query && (
                <span className="hidden sm:flex items-center gap-1 flex-shrink-0">
                  <kbd className="text-[10px] text-gray-300 bg-gray-50 border border-gray-200 px-1.5 py-0.5 rounded font-sans">⌘</kbd>
                  <kbd className="text-[10px] text-gray-300 bg-gray-50 border border-gray-200 px-1.5 py-0.5 rounded font-sans">K</kbd>
                </span>
              )}
            </div>

            {/* ── Dropdown overlay ── */}
            {showDropdown && (
              <div
                ref={dropdownRef}
                role="listbox"
                className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-50 max-h-[420px] overflow-y-auto"
              >
                {flatResults.length === 0 ? (
                  <div className="px-6 py-8 text-center">
                    <p className="text-gray-400 text-sm">
                      No results for <span className="text-gray-600 font-medium">"{query}"</span>
                    </p>
                    <p className="text-gray-300 text-xs mt-1">Try a different keyword</p>
                  </div>
                ) : (
                  <>
                    {/* Result count + keyboard hint */}
                    <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {flatResults.length} result{flatResults.length !== 1 ? 's' : ''}
                      </span>
                      <span className="text-xs text-gray-300 hidden sm:block">
                        ↑↓ to navigate · Enter to go · Esc to close
                      </span>
                    </div>

                    {/* Grouped results */}
                    {activeGroups.map(type => {
                      const items = grouped[type];
                      const meta  = GROUP_META[type];
                      return (
                        <div key={type}>
                          <div className="px-4 pt-3 pb-1.5">
                            <span className="text-[10px] tracking-[0.18em] uppercase text-gray-400 font-medium">
                              {meta.label}
                            </span>
                          </div>

                          {items.map(item => {
                            const currentIdx = flatIdx++;
                            const isActive   = currentIdx === activeIndex;
                            return (
                              <div
                                key={`${type}-${item.title}`}
                                ref={el => { itemRefs.current[currentIdx] = el; }}
                                role="option"
                                aria-selected={isActive}
                                onMouseEnter={() => setActiveIndex(currentIdx)}
                                onMouseDown={(e) => { e.preventDefault(); handleSelect(item); }}
                                className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors ${
                                  isActive ? 'bg-royal-50' : 'hover:bg-gray-50'
                                }`}
                              >
                                {/* Type badge */}
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 tracking-wide uppercase ${meta.badgeBg} ${meta.badgeText}`}>
                                  {meta.badge}
                                </span>

                                {/* Title + subtitle */}
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm text-gray-800 leading-snug">
                                    <Highlight text={item.title} query={trimmed} />
                                  </p>
                                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                                    <Highlight text={item.sub} query={trimmed} />
                                  </p>
                                </div>

                                {/* Active chevron */}
                                {isActive && (
                                  <svg className="w-3.5 h-3.5 text-royal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}

                    {/* Footer note */}
                    <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50">
                      <p className="text-[10px] text-gray-400">
                        IRS Publications open directly on IRS.gov · All other results scroll to the relevant section
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Suggestion chips — shown when input is empty */}
          {!query && (
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {SUGGESTION_CHIPS.map(chip => (
                <button
                  key={chip}
                  onClick={() => { setQuery(chip); setOpen(true); inputRef.current?.focus(); }}
                  className="text-xs text-royal-600 bg-royal-50 hover:bg-royal-100 border border-royal-100 px-3 py-1 rounded-full transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Resources() {
  const [bracketView, setBracketView] = useState('single');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['publications', 'taxOrganizer', '1099vsW2', 'tax-rates', 'retention', 'faqs'];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-royal-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-royal-300 text-xs tracking-[0.3em] uppercase mb-4">Helpful Information</p>
          <h1 className="text-navy-50 text-5xl md:text-6xl font-serif font-bold leading-tight max-w-2xl">
            Resources
          </h1>
          <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
            Access IRS publications, 2026 tax rates, and our record retention guide—everything you need to stay organized and informed.
          </p>
          <div className="w-16 h-px bg-royal-300 mt-8" />
        </div>
      </section>

      {/* Search Bar */}
      <ResourceSearch />

      {/* Quick Nav */}
      <section data-sticky-nav className="bg-royal-800 text-white py-5 px-6 sticky top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center md:justify-center">
          {[
            { label: 'IRS Publications', href: '#publications', id: 'publications' },
            { label: 'Tax Organizer', href: '#taxOrganizer', id: 'taxOrganizer' },
            { label: '1099 vs W-2', href: '#1099vsW2', id: '1099vsW2' },
            { label: '2026 Tax Rates', href: '#tax-rates', id: 'tax-rates' },
            { label: 'Record Retention', href: '#retention', id: 'retention' },
            { label: 'FAQs', href: '#faqs', id: 'faqs' },
          ].map(item => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                activeSection === item.id
                ? 'text-white border-b border-white pb-0.5'
                : 'text-royal-200 hover:text-white'
              }`}
              >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* IRS Publications */}
      <section id="publications" className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-3">IRS Resources</p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-600 mb-4">Tax Forms & Publications</h2>
            <p className="text-gray-600 max-w-2xl">Easily access and print any IRS tax form or publication—no need for mail requests or post office visits. Click any publication below to open the PDF directly from the IRS website.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {irsPublications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 p-5 hover:border-royal-300 hover:shadow-md transition-all duration-200 group flex items-start gap-4"
              >
                <div className="bg-royal-100 text-royal-700 text-xs font-bold px-2 py-1 rounded flex-shrink-0 group-hover:bg-royal-200 transition-colors">PDF</div>
                <div>
                  <div className="text-xs text-royal-600 font-medium mb-1">{pub.pub}</div>
                  <div className="text-sm text-gray-800 font-medium leading-snug">{pub.title}</div>
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-6 text-center">
            Need a form not listed? Visit the{' '}
            <a href="https://www.irs.gov/forms-instructions" target="_blank" rel="noopener noreferrer" className="text-royal-600 hover:underline">
              IRS Forms & Instructions library
            </a>
          </p>
        </div>
      </section>

        {/* Tax Organizer */}
      <section id="taxOrganizer" className='scroll-mt-32 mt-10'>
      <div className="mt-10 bg-royal-800 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
          </div>
      </section>
              
      {/* 1099 vs W-2 */}
<section id="1099vsW2" className="bg-cream py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="mb-10">
      <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-3">Worker Classification</p>
      <h2 className="text-3xl md:text-4xl font-serif text-navy-600 mb-4">1099 vs W-2</h2>
      <p className="text-gray-600 max-w-2xl">
        With more businesses turning to independent contractors to reduce costs and avoid employee benefits,
        it's critical to understand how 1099 contractors and W-2 employees differ—not just for IRS compliance,
        but also for your business's bottom line.
      </p>
    </div>

    {/* Key Difference Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
      <div className="bg-white border border-gray-100 p-7">
        <div className="text-xs tracking-[0.2em] uppercase text-royal-600 font-medium mb-3">W-2 Employee</div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Payroll taxes are automatically withheld and submitted to the government by the employer.
          The employer also pays a share of FICA (Social Security and Medicare) taxes on the employee's behalf.
        </p>
      </div>
      <div className="bg-white border border-gray-100 p-7">
        <div className="text-xs tracking-[0.2em] uppercase text-royal-600 font-medium mb-3">1099 Independent Contractor</div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Responsible for calculating and paying their own taxes, typically on a quarterly basis.
          They pay self-employment tax covering both the employee and employer portions of FICA.
        </p>
      </div>
    </div>

    {/* Why Classification Matters */}
    <div className="mb-10">
      <h3 className="text-xl font-serif text-royal-950 mb-3">Why Classification Matters</h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
        Misclassifying workers can result in significant IRS penalties. The <strong>IRS 20-Factor Test</strong> helps
        determine whether someone is an employee or an independent contractor by focusing on the "right of control."
        The more control you have over how and when a worker performs their job, the more likely they are to be
        considered an employee—not a contractor.
      </p>
    </div>

    {/* 20-Factor Checklist */}
    <div className="mb-4">
      <h3 className="text-xl font-serif text-royal-950 mb-1">IRS 20-Factor Checklist</h3>
      <p className="text-gray-500 text-sm mb-6">
        Generally, <span className="text-royal-700 font-medium">No</span> answers to questions 1–16 and{' '}
        <span className="text-royal-700 font-medium">Yes</span> answers to 17–20 point toward independent contractor status.
        No single answer is determinative—it's the totality of the relationship.
      </p>

      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] bg-royal-900 text-white">
          <div className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium">Question</div>
          <div className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium text-center">Employee</div>
          <div className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium text-center">Contractor</div>
        </div>
        {[
          'Do you control how, when, and where the work is done?',
          'Do you provide training to the worker?',
          'Is your business reliant on the work being done?',
          'Must the individual personally complete the work?',
          'Do you hire, supervise, or pay others to help them?',
          'Is there an ongoing relationship?',
          'Are they required to work set hours?',
          'Are they working full-time for your company?',
          'Is the work performed at your location?',
          'Must they follow specific routines or procedures?',
          'Are they required to submit regular reports?',
          'Are they paid hourly, weekly, or monthly?',
          'Do you reimburse them for expenses?',
          'Do you provide tools, materials, or equipment?',
          'Have you invested in the facilities where they work?',
          'Can they incur a profit or loss based on their work?',
          'Do they work solely for your business?',
          'Do they avoid offering services to the general public?',
          'Can you terminate their services at will?',
          'Can they quit at any time without liability?',
        ].map((question, i) => {
          const isContractorYes = i >= 16; // questions 17–20 (0-indexed 16–19)
          return (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_auto] border-b border-gray-100 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="px-6 py-3 text-sm text-gray-700">
                <span className="text-royal-400 font-medium mr-2 text-xs">{i + 1}.</span>
                {question}
              </div>
              <div className="px-6 py-3 text-center">
                <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${!isContractorYes ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-400'}`}>
                  {!isContractorYes ? 'YES' : 'NO'}
                </span>
              </div>
              <div className="px-6 py-3 text-center">
                <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${isContractorYes ? 'bg-royal-100 text-royal-700' : 'bg-gray-100 text-gray-400'}`}>
                  {isContractorYes ? 'YES' : 'NO'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* CTA */}
    <div className="bg-royal-800 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
      <div>
        <h3 className="text-xl font-serif mb-2">Still Unsure How to Classify Your Workers?</h3>
        <p className="text-royal-200 text-sm">
          Misclassification risks are real and costly. Contact us to get it right.
        </p>
      </div>
      <Link
        to="/contact"
        className="whitespace-nowrap bg-royal-500 hover:bg-royal-400 text-white px-6 py-3 text-xs tracking-widest uppercase font-medium transition-colors"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>

      {/* 2026 Tax Rates */}
      <section id="tax-rates" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-3">Tax Year 2026</p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-600 mb-4">Federal Income Tax Rates</h2>
            <p className="text-gray-600 max-w-2xl">Stay up to date with the latest federal income tax brackets for 2026. These rates apply to taxable income after deductions.</p>
          </div>

          {/* Toggle */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setBracketView('single')}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-colors ${bracketView === 'single' ? 'bg-royal-700 text-white' : 'border border-gray-200 text-gray-600 hover:border-royal-400'}`}
            >
              Single Filers
            </button>
            <button
              onClick={() => setBracketView('mfj')}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-medium transition-colors ${bracketView === 'mfj' ? 'bg-royal-700 text-white' : 'border border-gray-200 text-gray-600 hover:border-royal-400'}`}
            >
              Married Filing Jointly
            </button>
          </div>

          <div className="overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-royal-900 text-white">
                  <th className="text-left px-6 py-4 text-xs tracking-[0.15em] uppercase font-medium">Tax Rate</th>
                  <th className="text-left px-6 py-4 text-xs tracking-[0.15em] uppercase font-medium">Taxable Income Range</th>
                </tr>
              </thead>
              <tbody>
                {taxBrackets2026[bracketView].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-medium text-royal-700">{row.rate}</td>
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
              <div key={i} className="bg-royal-50 border border-royal-100 p-5">
                <div className="text-xs text-royal-600 tracking-wide uppercase mb-2">{item.label}</div>
                <div className="text-xl font-serif text-royal-900 font-bold">{item.value}</div>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-xs mt-6">
            * Rates reflect 2026 inflation-adjusted figures. Consult with a tax professional for your specific situation.
          </p>
        </div>
      </section>

      {/* Record Retention Guide */}
      <section id="retention" className="bg-navy-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-royal-400 mb-3">How Long to Keep Records</p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-50 mb-4">Record Retention Guide</h2>
            <p className="text-royal-300 max-w-2xl">Use this guide to determine how long you need to keep your tax and other financial records. When in doubt, keep it longer—or consult with us.</p>
          </div>

          <div className="space-y-8">
            {retentionGuide.map((group, gi) => (
              <div key={gi}>
                <h3 className="text-royal-400 text-xs tracking-[0.2em] uppercase font-medium mb-4 border-b border-royal-900 pb-3">{group.category}</h3>
                <div className="overflow-hidden rounded-sm">
                  <table className="w-full">
                    <tbody>
                      {group.items.map((item, ii) => (
                        <tr key={ii} className={`border-b border-royal-900 ${ii % 2 === 0 ? 'bg-royal-900/40' : 'bg-transparent'}`}>
                          <td className="px-5 py-3 text-sm text-gray-300">{item.record}</td>
                          <td className="px-5 py-3 text-sm text-royal-300 font-medium text-right whitespace-nowrap">{item.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-royal-800 border border-royal-700 mt-10 p-6">
            <p className="text-royal-200 text-sm leading-relaxed">
              <strong className="text-white">Important Note:</strong> These are general guidelines. The IRS generally has 3 years to audit a return, but this extends to 6 years if substantial income was omitted, and there's no limit for fraud. Always consult with a qualified tax professional before destroying records.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-royal-600 mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-600 mb-4">Frequently Asked Questions</h2>
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
              <p className="mt-3">Download our <a href="https://oriole-point-wx69.squarespace.com/s/MSACPAsTaxOrganizer.pdf" target="_blank" rel="noopener noreferrer" className="text-royal-600 hover:underline font-medium">Tax Organizer</a> for a complete checklist.</p>
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
              <p>You can check the status of your federal refund using the IRS's official "Where's My Refund?" tool at <a href="https://www.irs.gov/refunds" target="_blank" rel="noopener noreferrer" className="text-royal-600 hover:underline font-medium">irs.gov/refunds</a>. You'll need your Social Security number, filing status, and exact refund amount. Most refunds are issued within 21 days for e-filed returns.</p>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Have a question not answered here?</p>
            <Link to="/contact" className="inline-block bg-royal-700 text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-royal-800 transition-colors">
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
