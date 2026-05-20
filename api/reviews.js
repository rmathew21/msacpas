// export default async function handler(req, res) {
//   const PLACE_ID = process.env.GOOGLE_PLACE_ID;
//   const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&reviews_sort=newest&key=${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     const { reviews, rating, user_ratings_total } = data.result;

//     // Only return 5 star reviews or sort by rating
//     const filtered = reviews.filter((r) => r.rating >= 4).slice(0, 5);

//     res.status(200).json({ reviews: filtered, rating, user_ratings_total });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch reviews" });
//   }
// }

export default async function handler(req, res) {
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

    if (!PLACE_ID || !API_KEY) {
        return res.status(500).json({ error: 'Missing environment variables' });
    }

    const url = 'https://places.googleapis.com/v1/places/ChIJFxxqvdvnQIYRe31HaJUY5NM';

    try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': API_KEY,
                'X-Goog-FieldMask': 'reviews,rating,userRatingCount,displayName'
            }
        });
        
        if (!response.ok) {
            const errText = await response.text();
            console.error('Google API error:', errText);
            return res.status(500).json({ error: 'Google API request failed' });
        }

        const data = await response.json();

        const reviews = (data.reviews || [])
        .filter(r => r.rating >= 3)
        .slice(0, 5)
        .map(r => ({
            author_name: r.authorAttribution?.displayName || 'Anonymous',
            profile_photo_url: r.authorAttribution?.photoUri || '',
            rating: r.rating,
            text: r.text?.text || '', 
            relative_time_description: r.relativePublishTimeDescription || ''
        }));

        // Cache for 24 hours
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
        res.status(200).json({
            reviews,
            rating: data.rating || null,
            user_ratings_total: data.userRatingCount || null
        });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
}
