import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="text-xl font-serif font-bold">Samuel CPA</div>
              <div className="text-forest-400 text-xs tracking-[0.25em] uppercase mt-0.5">
                PLLC
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision accounting for peace of mind. Advocating for small
              businesses and our clients since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-forest-400 mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/resources", label: "Resources" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-gray-400 text-sm hover:text-forest-300 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-forest-400 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <div>
                <p>11104 West Airport Blvd, Suite 114</p>
                <p>Stafford, TX 77477</p>
              </div>
              <div>
                <a
                  href="tel:2815649500"
                  className="hover:text-forest-300 transition-colors"
                >
                  <span className="text-gray-500 text-xs uppercase tracking-wider">
                    Office:{" "}
                  </span>
                  (281) 564-9500
                </a>
              </div>
              <div>
                <span className="text-gray-500 text-xs uppercase tracking-wider">
                  Fax:{" "}
                </span>
                (1-866-621-1648)
              </div>
              <a
                href="mailto:samuel@msacpas.com"
                className="hover:text-forest-300 transition-colors"
              >
                samuel@msacpas.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {year} Samuel CPA, PLLC. All rights reserved.</p>
          <p className="hover:text-forest-300 transition-colors">Powered by <a href="https://www.robowebsolutions.com/">Robo Web Solutions</a></p>
        </div>
      </div>
    </footer>
  );
}
