import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const REVIEWS = [
  {
    id: 1,
    name: "Paulose Achayan",
    rating: 5,
    date: "Verified Google Review",
    initials: "PA",
    text: "Samuel is great. Nice, professional, and makes you feel like you understand finances just as well as he does. I really appreciate people who take the time to explain their work so you can build a great rapport. My company's books seemed impossible to resolve, but he did a great job cleaning them up and helping me make better decisions. Very confident working with Samuel Associates.",
  },
  {
    id: 2,
    name: "Sahara Health",
    rating: 5,
    date: "Verified Google Review",
    initials: "SH",
    text: "Excellent service. He goes above and beyond — very kind, very professional. Always treated me with the utmost respect and answered all my questions thoroughly and efficiently. Extremely dedicated and very knowledgeable. A reliable tax accountant is definitely a must, and I highly recommend going with him.",
  },
  {
    id: 3,
    name: "Asim Abbasi",
    rating: 5,
    date: "Verified Google Review",
    initials: "AA",
    text: "Mathews & Samuel have been doing my personal taxes for 8 years. I found them very knowledgeable and helpful — they know the ins and outs of the tax code and provide great support. Not only do they provide tax services, they also give pointers on how to save money.",
  },
];

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?client=safari&hs=h6wU&sca_esv=2eb1beb0bd5e5e34&rls=en&biw=1480&bih=883&sxsrf=ANbL-n5A59PTYO3Ij15X_jN1eAxjR20SkA:1774914887765&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOU0_sxvIHugKZ0Jp7-iMNdpAsYvBy-jNmauqSnReKvWPq98jw5nsLbrWf2nObTvFk3mhmFpvDKnuVLn3EQ358fvEYzIn&q=Samuel+CPA+PLLC+Reviews&sa=X&ved=2ahUKEwjQ5pCb6ciTAxXPmmoFHaJxLc4Q0bkNegQIHhAH#";

function StarRating({ count = 5 }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < count ? "text-amber-400" : "text-navy-200"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 120}ms`;
          el.classList.add("fade-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={cardRef}
      className="
        relative flex flex-col bg-white border border-navy-100
        rounded-sm p-7 sm:p-8
        shadow-[0_2px_12px_rgba(10,25,60,0.06)]
        hover:shadow-[0_6px_24px_rgba(10,25,60,0.11)]
        hover:-translate-y-0.5
        transition-all duration-300 ease-out
        opacity-0
        "
      style={{ willChange: "transform, opacity" }}
    >
      <span
        className="absolute top-0 left-8 right-8 h-px bg-royal-300 opacity-60"
        aria-hidden="true"
      />

      <span
        className="block font-serif text-[4.5rem] leading-none text-royal-200 select-none mb-1 -mt-2"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="text-navy-700 text-[0.9375rem] leading-relaxed font-light tracking-[0.005em] flex-1">
        {review.text}
      </p>

      <div className="mt-6 pt-5 border-t border-navy-100 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-royal-700 text-white text-xs font-semibold tracking-wider uppercase"
          aria-hidden="true"
        >
          {review.initials}
        </div>
        {/* name */}
        <div className="flex-1 min-w-0">
          <p className="text-navy-900 font-semibold text-sm tracking-tight leading-snug truncate">
            {review.name}
          </p>
          <p className="text-navy-400 text-xs tracking-widest uppercase mt-0.5 font-medium">
            {review.date}
          </p>
        </div>
        {/* Stars - right-aligned on desktop */}
        <div className="hidden sm:flex ml-auto">
          <StarRating count={review.rating} />
        </div>
      </div>
      {/* Stars - below name on small screens */}
      <div className="sm:hidden mt-3">
        <StarRating count={review.rating} />
      </div>
    </article>
  );
}

//
export function ReviewSection() {
  const headinRef = useRef(null);

  useEffect(() => {
    const el = headinRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-navy-50 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* section header */}
        <div ref={headinRef} className="text-center mb-14 opacity-0">
          <p className="text-royal-600 text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Client Testimonials
          </p>

          <h2
            id="reviews-heading"
            className="font-serif text-3xl sm:text-4xl text-navy-900 tracking-tight leading-snug"
          >
            Trusted by Businesses &amp; Individuals
            <br className="hidden sm:block" />
            <span className="text-royal-600"> Across the Houston Area</span>
          </h2>

          <div
            className="flex items-center justify-center gap-3 mt-5"
            aria-hidden="true"
          >
            <span className="h-px w-12 bg-navy-200" />
            <span className="w-1.5 h-1.5 rounded-full bg-royal-400" />
            <span className="h-px w-12 bg-navy-200" />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating count={5} />
            <span className="text-navy-500 text-sm tracking-wide">
              5.0 · Google Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-royal-700 hover:bg-royal-800 active:bg-royal-900 text-white text-sm font-semibold tracking-[0.06em] uppercase px-7 py-3.5 rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-600 "
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#fff"
                opacity=".9"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#fff"
                opacity=".9"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#fff"
                opacity=".9"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#fff"
                opacity=".9"
              />
            </svg>
            Leave a Google Review
          </a>

          <Link
            to="/contact"
            className="text-navy-400 hover:text-navy-600 text-xs tracking-wide transition-colors duration-150 underline underline-offset-4 decoration-navy-200 hover:decoration-navy-400"
          >
            Have feedback you'd rather share privately? Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
