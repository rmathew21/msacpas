import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const REVIEWS = [
    {
        id: 1,
        name: 'Paulose Achayan',
        rating: 5,
        date: 'Verified Google Review',
        initials: 'PA', 
        text: "Samuel is great. Nice, professional, and makes you feel like you understand finances just as well as he does. I really appreciate people who take the time to explain their work so you can build a great rapport. My company's books seemed impossible to resolve, but he did a great job cleaning them up and helping me make better decisions. Very confident working with Samuel Associates.",
    },
    {
        id: 2,
        name: 'Sahara Health',
        rating: 5,
        date: 'Verified Google Review',
        initials: 'SH', 
        text: 'Excellent service. He goes above and beyond — very kind, very professional. Always treated me with the utmost respect and answered all my questions thoroughly and efficiently. Extremely dedicated and very knowledgeable. A reliable tax accountant is definitely a must, and I highly recommend going with him.',
    },
    {
        id: 3,
        name: 'Asim Abbasi',
        rating: 5,
        date: 'Verified Google Review',
        initials: 'AA', 
        text: 'Mathews & Samuel have been doing my personal taxes for 8 years. I found them very knowledgeable and helpful — they know the ins and outs of the tax code and provide great support. Not only do they provide tax services, they also give pointers on how to save money.',
    },
];

const GOOGLE_REVIEW_URL =
'https://www.google.com/search?client=safari&hs=h6wU&sca_esv=2eb1beb0bd5e5e34&rls=en&biw=1480&bih=883&sxsrf=ANbL-n5A59PTYO3Ij15X_jN1eAxjR20SkA:1774914887765&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOU0_sxvIHugKZ0Jp7-iMNdpAsYvBy-jNmauqSnReKvWPq98jw5nsLbrWf2nObTvFk3mhmFpvDKnuVLn3EQ358fvEYzIn&q=Samuel+CPA+PLLC+Reviews&sa=X&ved=2ahUKEwjQ5pCb6ciTAxXPmmoFHaJxLc4Q0bkNegQIHhAH#';

