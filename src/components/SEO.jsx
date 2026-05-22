import { Helmet } from "react-helmet-async";

const SITE = 'https://msacpas.com';

export default function SEO({ title, description, path = '', schema }) {
    const url = `${SITE}${path}`;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Page specific structured data */}
            {schema && (
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            )}
        </Helmet>
    );
}
    