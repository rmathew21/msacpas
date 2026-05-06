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
                    el.classList.add('fade-up');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );

        obserber.observe(el);
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
        style={{ willChange: 'transform, opacity' }}
        >
         <span className="absolute top-0 left-8 right-8 h-px bg-royal-300 opacity-60"  aria-hidden='true' />   

         <span className="block font-serif text-[4.5rem] leading-none text-royal-200 select-none mb-1 -mt-2"
         aria-hidden='true'
         >
            &ldquo;
         </span>

         <p className="text-navy-700 text-[0.9375rem] leading-relaxed font-light tracking-[0.005em] flex-1">
            {review.text}
         </p>

         <div className="mt-6 pt-5 border-t border-navy-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-royal-700 text-white text-xs font-semibold tracking-wider uppercase"
            aria-hidden='true'
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
