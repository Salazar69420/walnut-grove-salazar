/** @format */

import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

export const getPageData = async (type) => {
  try {
    const query = `*[_type == "${type}"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.warn(`[Sanity] Could not fetch page data for type: ${type}`);
    return null;
  }
};

export const getProductMetaData = async (slug) => {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      title,
      metaData {
        metaTitle,
        metaDescription,
        metaImage,
        canonical
      }
    }`;
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.warn(`[Sanity] Could not fetch product meta data for slug: ${slug}`);
    return null;
  }
};

/**
 * @param {any} data
 * @param {string} currentUrl
 */
export function getMetadata(data, currentUrl = "") {
  const seo = data?.metaData;
  
  // Resolve standard domain + path
  let canonicalUrl = "";
  if (currentUrl && (currentUrl.startsWith("http://") || currentUrl.startsWith("https://"))) {
    canonicalUrl = currentUrl;
  } else {
    let cleanPath = currentUrl || "";
    if (cleanPath && !cleanPath.startsWith("/")) {
      cleanPath = "/" + cleanPath;
    }
    canonicalUrl = `https://www.walnutgroveanimalclinic.com${cleanPath}`;
  }

  const metadata = {
    title: "Walnut Grove Animal Hospital",
    description:
      "Your trusted partner for quality veterinary care, surgeries, and pet boarding in Langley, BC.",
    openGraph: { images: "/assets/logo.png" },
    twitter: {
      card: "summary_large_image",
      title: "Walnut Grove Animal Hospital",
      description:
        "Your trusted partner for quality veterinary care, surgeries, and pet boarding in Langley, BC.",
      image: "/assets/logo.png",
    },
    alternates: {
      languages: {
        "en-US": canonicalUrl,
      },
      canonical: canonicalUrl,
    },
  };

  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  if (!seo) {
    return metadata;
  }

  if (seo.metaTitle) {
    metadata.title = seo.metaTitle;
    metadata.twitter.title = seo.metaTitle;
  }
  if (seo.metaDescription) {
    metadata.description = seo.metaDescription;
    metadata.twitter.description = seo.metaDescription;
  }
  if (seo.metaImage) {
    const imageUrl = urlFor(seo.metaImage).url() ?? "/assets/logo.png";
    metadata.openGraph = { images: imageUrl };
    metadata.twitter.image = seo.metaImage?.data?.attributes?.url;
  }

  if (seo.canonical) {
    metadata.alternates.canonical = seo.canonical;
  }

  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  return metadata;
}
