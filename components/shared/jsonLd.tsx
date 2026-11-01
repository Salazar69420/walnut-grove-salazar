/** @format */

interface JsonLdProps {
  data: any;
  id?: string;
}

// Structured data must be in the HTML the server sends: search engines and AI crawlers read it there. (next/script added it
// only after the page's JavaScript ran.) "<" is escaped so text from the CMS can never close the script tag.
export const JsonLd = ({ data, id = "json-ld" }: JsonLdProps) => {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
};
