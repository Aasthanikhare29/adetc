// Renders a JSON-LD structured-data block. Server component; `data` is a plain
// object (or array) from lib/seo.js builders. Accepts trusted, code-authored data only.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
