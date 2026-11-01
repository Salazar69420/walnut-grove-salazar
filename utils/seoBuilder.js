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

/** Each page's own title and description, used when the CMS has none for it (so no two pages share a title). */
const PAGE_SEO = {
  "": {
    "title": "Veterinarian in Langley, BC | Walnut Grove Animal Hospital",
    "description": "Walnut Grove Animal Hospital in Langley, BC: wellness exams, vaccines, dental care, surgery, X-ray, lab work and boarding for dogs, cats and small pets."
  },
  "/about": {
    "title": "About Our Langley Vet Team | Walnut Grove Animal Hospital",
    "description": "Meet the veterinarians and team at Walnut Grove Animal Hospital in Langley, BC, and see how we care for dogs, cats and small pets."
  },
  "/contact": {
    "title": "Contact & Hours | Walnut Grove Animal Hospital, Langley",
    "description": "Call (604) 888-2628 or visit us at 101A-20995 88 Ave, Langley, BC. Open Monday to Friday 8:30am to 7:00pm, Saturday and Sunday 9:00am to 5:00pm."
  },
  "/faq": {
    "title": "Pet Care FAQ | Walnut Grove Animal Hospital, Langley BC",
    "description": "Answers to the questions pet parents ask us most about appointments, vaccines, surgery, boarding and caring for your pet at Walnut Grove Animal Hospital."
  },
  "/services": {
    "title": "Veterinary Services in Langley | Walnut Grove Animal Hospital",
    "description": "All veterinary services at Walnut Grove Animal Hospital in Langley, BC: preventive care, vaccines, dental, surgery, diagnostics, boarding and more."
  },
  "/blog": {
    "title": "Pet Health & Veterinary Blog | Walnut Grove Animal Hospital",
    "description": "Pet care advice, preventive health tips and veterinary guides from the team at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/privacy-policy": {
    "title": "Privacy Policy | Walnut Grove Animal Hospital",
    "description": "How Walnut Grove Animal Hospital in Langley, BC collects, uses and protects your personal information."
  },
  "/terms-and-conditions": {
    "title": "Terms and Conditions | Walnut Grove Animal Hospital",
    "description": "The terms and conditions for using the Walnut Grove Animal Hospital website and services in Langley, BC."
  },
  "/resources/how-to-videos": {
    "title": "Pet Care How-To Videos | Walnut Grove Animal Hospital",
    "description": "Short how-to videos from Walnut Grove Animal Hospital in Langley, BC to help you care for your dog or cat at home."
  },
  "/resources/poisonous-plants": {
    "title": "Plants Poisonous to Pets | Walnut Grove Animal Hospital",
    "description": "Which common plants are toxic to dogs and cats, and what to do if your pet eats one. A guide from Walnut Grove Animal Hospital, Langley."
  },
  "/resources/pet-food-recalls": {
    "title": "Pet Food Recalls & Safety | Walnut Grove Animal Hospital",
    "description": "Stay up to date on pet food recalls and safety alerts, with guidance from Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/anesthesia": {
    "title": "Pet Anesthesia & Monitoring in Langley | Walnut Grove",
    "description": "Safe anesthesia and monitoring for dogs and cats having surgery or dental care at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/bloodwork": {
    "title": "Pet Bloodwork in Langley | Walnut Grove Animal Hospital",
    "description": "Blood tests for dogs and cats to check organ health and catch problems early, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/chronic-pain-management": {
    "title": "Pet Pain Management in Langley | Walnut Grove",
    "description": "Care plans for dogs and cats living with chronic pain or arthritis, from the veterinary team at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/dental-services": {
    "title": "Pet Dental Care in Langley | Walnut Grove Animal Hospital",
    "description": "Dental exams, cleaning and treatment for dogs and cats at Walnut Grove Animal Hospital in Langley, BC, for healthier teeth and gums."
  },
  "/services/dog-breeding": {
    "title": "Dog Breeding Services in Langley | Walnut Grove",
    "description": "Veterinary support for dog breeding at Walnut Grove Animal Hospital in Langley, BC, from planning to puppy care."
  },
  "/services/euthanasia": {
    "title": "Pet Euthanasia & End-of-Life Care in Langley | Walnut Grove",
    "description": "Compassionate end-of-life care and euthanasia for dogs and cats, with support for your family, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/lab-services": {
    "title": "Veterinary Lab Services in Langley | Walnut Grove",
    "description": "In-house and reference lab testing for dogs and cats at Walnut Grove Animal Hospital in Langley, BC, for faster answers about your pet's health."
  },
  "/services/microchipping": {
    "title": "Pet Microchipping in Langley | Walnut Grove Animal Hospital",
    "description": "Microchipping for dogs and cats at Walnut Grove Animal Hospital in Langley, BC, so a lost pet can find its way home."
  },
  "/services/parasite-prevention": {
    "title": "Flea, Tick & Worm Prevention in Langley | Walnut Grove",
    "description": "Parasite prevention for dogs and cats against fleas, ticks and worms, from Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/pet-boarding-services": {
    "title": "Pet Boarding in Langley | Walnut Grove Animal Hospital",
    "description": "Boarding for dogs and cats with veterinary staff on hand, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/pet-surgery": {
    "title": "Pet Surgery in Langley | Walnut Grove Animal Hospital",
    "description": "Soft tissue and routine surgery for dogs and cats, with anesthesia monitoring and aftercare, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/pet-x-ray": {
    "title": "Pet X-Ray in Langley | Walnut Grove Animal Hospital",
    "description": "Digital X-rays for dogs and cats to diagnose injuries and illness, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/preventative-care": {
    "title": "Preventive Pet Care & Wellness Exams in Langley | Walnut Grove",
    "description": "Wellness exams and preventive care that keep dogs and cats healthy at every age, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/puppy-kitten-care": {
    "title": "Puppy & Kitten Care in Langley | Walnut Grove",
    "description": "First visits, vaccines and care plans for new puppies and kittens at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/skin-ear-infections": {
    "title": "Pet Skin & Ear Infection Care in Langley | Walnut Grove",
    "description": "Diagnosis and treatment of skin problems and ear infections in dogs and cats at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/small-mammal-medicine": {
    "title": "Small Pet Vet in Langley: Rabbits & More | Walnut Grove",
    "description": "Veterinary care for rabbits, guinea pigs and other small mammals at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/soft-tissue-eye-ear": {
    "title": "Soft Tissue, Eye & Ear Surgery for Pets in Langley | Walnut Grove",
    "description": "Soft tissue, eye and ear procedures for dogs and cats at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/spay-neuter": {
    "title": "Spay & Neuter in Langley | Walnut Grove Animal Hospital",
    "description": "Spay and neuter surgery for dogs and cats, with anesthesia monitoring and aftercare, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/ultrasound-services": {
    "title": "Pet Ultrasound in Langley | Walnut Grove Animal Hospital",
    "description": "Ultrasound imaging for dogs and cats to look at organs and find problems early, at Walnut Grove Animal Hospital in Langley, BC."
  },
  "/services/vaccines": {
    "title": "Pet Vaccines in Langley | Walnut Grove Animal Hospital",
    "description": "Core and lifestyle vaccines for dogs and cats, set to your pet's age and needs, at Walnut Grove Animal Hospital in Langley, BC."
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

  const pagePath = (currentUrl.startsWith("http") ? new URL(currentUrl).pathname : currentUrl || "").replace(/\/$/, "");
  const fallback = PAGE_SEO[pagePath] || {
    title: "Walnut Grove Animal Hospital",
    description: "Your trusted partner for quality veterinary care, surgeries, and pet boarding in Langley, BC.",
  };
  const metadata = {
    title: fallback.title,
    description: fallback.description,
    openGraph: { images: "/assets/logo.png", url: canonicalUrl, siteName: "Walnut Grove Animal Hospital", type: "website" },
    twitter: {
      card: "summary_large_image",
      title: fallback.title,
      description: fallback.description,
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
    metadata.openGraph = { ...metadata.openGraph, images: imageUrl };
    metadata.twitter.image = seo.metaImage?.data?.attributes?.url;
  }

  if (seo.canonical) {
    metadata.alternates.canonical = seo.canonical;
  }

  metadata.openGraph.title = metadata.title;
  metadata.openGraph.description = metadata.description;
  return metadata;
}
