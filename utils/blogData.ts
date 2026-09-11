/** @format */

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export interface BlogAuthor {
  name: string;
  role?: string;
  image?: any;
  bio?: string;
}

export interface RelatedPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  category?: string;
  readTime?: string;
  author?: BlogAuthor;
}

export interface RelatedService {
  title: string;
  href: string;
  description?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  author?: BlogAuthor;
  category: string;
  readTime?: string;
  tags?: string[];
  content?: any[];
  relatedPosts?: RelatedPost[];
  relatedServices?: RelatedService[];
  metaData?: {
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: any;
    canonical?: string;
  };
}

// GROQ Queries
export const getAllBlogsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  author,
  category,
  readTime,
  tags
}`;

export const getBlogBySlugQuery = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  author,
  category,
  readTime,
  tags,
  content,
  relatedServices,
  metaData,
  "relatedPosts": relatedPosts[]-> {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    publishedAt,
    category,
    readTime,
    author
  }
}`;

export const getRelatedBlogsQuery = `*[_type == "blog" && slug.current != $slug && category == $category] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  category,
  readTime,
  author
}`;

export const getAllBlogSlugsQuery = `*[_type == "blog" && defined(slug.current)][].slug.current`;

// Image URL Resolver Helper
export const getBlogImageUrl = (imageSource: any): string => {
  if (!imageSource) return "/assets/preventionCare.png";
  if (typeof imageSource === "string") return imageSource;
  if (imageSource?.asset?._ref || imageSource?.asset?._id) {
    try {
      return urlFor(imageSource).url();
    } catch {
      return "/assets/preventionCare.png";
    }
  }
  return "/assets/preventionCare.png";
};

// Rich Sample Data Fallback (Used when Sanity holds no blog documents yet or offline)
export const sampleBlogs: BlogPost[] = [
  {
    _id: "sample-blog-1",
    title: "Preventative Pet Care: Why Routine Wellness Exams Keep Pets Thriving in Langley",
    slug: "preventative-pet-care-wellness-exams-langley",
    excerpt:
      "Routine veterinary wellness checks help identify potential health concerns before they become serious. Discover what our clinic checks during annual exams and why early prevention is best.",
    mainImage: "/assets/preventionCare.png",
    publishedAt: "2026-09-08T10:00:00Z",
    author: {
      name: "Dr. Walnut Grove Team",
      role: "Veterinary Medical Director",
      bio: "Committed to gentle, thorough veterinary care and educating pet families throughout the Langley and Fraser Valley communities.",
    },
    category: "Preventative Care",
    readTime: "5 min read",
    tags: ["Wellness", "Preventative Care", "Dogs", "Cats", "Langley Vet"],
    relatedServices: [
      {
        title: "Preventative Care",
        href: "/services/preventative-care",
        description: "Comprehensive physical exams, parasite prevention, and wellness blood panels.",
      },
      {
        title: "Vaccines",
        href: "/services/vaccines",
        description: "Tailored vaccination schedules to protect against core and lifestyle-based pet illnesses.",
      },
      {
        title: "Microchipping",
        href: "/services/microchipping",
        description: "Safe, permanent identification to keep your furry companion secure at all times.",
      },
    ],
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "As pet owners, we want our dogs and cats to enjoy long, active, and joyful lives. While it can be tempting to only visit the veterinary hospital when your pet is visibly ill or injured, proactive preventative healthcare is the single most impactful step you can take to safeguard their well-being.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "What Happens During a Comprehensive Wellness Exam?",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "At Walnut Grove Animal Hospital, our veterinarians conduct a meticulous nose-to-tail physical exam. Because pets age much faster than humans, an annual checkup is equivalent to four or five years of human health changes. During this visit, we evaluate:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Eyes, Ears & Nose: Checking for infections, discharge, inflammation, or cataracts.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Oral & Dental Health: Assessing tartar buildup, gingivitis, loose teeth, or oral pain.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Heart & Lungs: Listening for murmurs, irregular rhythms, or respiratory distress.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Abdomen & Lymph Nodes: Palpating organs to detect swelling, discomfort, or abnormalities.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Musculoskeletal & Joints: Checking range of motion, muscle symmetry, and early signs of arthritis.",
          },
        ],
      },
      {
        _type: "callout",
        type: "tip",
        title: "Veterinary Tip: Senior Pets Need Twice-Yearly Checks",
        message:
          "Dogs and cats aged 7 and older benefit significantly from exams every 6 months. Early detection of kidney disease, arthritis, and diabetes can dramatically extend comfort and longevity.",
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "The Power of Baseline Bloodwork & Diagnostics",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Pets are evolutionary masters at concealing pain and weakness. Routine laboratory screenings provide an invaluable window beneath the surface, revealing liver or kidney changes long before visible symptoms appear.",
          },
        ],
      },
      {
        _type: "serviceCta",
        title: "Ready to Schedule Your Pet's Annual Wellness Exam?",
        description:
          "Our compassionate veterinary team in Langley provides personalized care tailored to your pet's life stage, breed, and lifestyle.",
        serviceLink: "/services/preventative-care",
        buttonText: "Learn About Preventative Care",
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Partnering for Lifelong Health",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Routine preventative appointments are also your chance to consult with our veterinary team regarding nutrition, behavioral changes, parasite defense, and travel preparations. Together, we build a customized health roadmap for your pet's happiness.",
          },
        ],
      },
    ],
  },
  {
    _id: "sample-blog-2",
    title: "Stress-Free Cat Boarding: How We Keep Feline Guests Happy & Comfortable",
    slug: "stress-free-cat-boarding-guide",
    excerpt:
      "Cats thrive on routine and quiet surroundings. Learn how Walnut Grove Animal Hospital's feline-friendly boarding provides safe, calm, and medically supervised stays.",
    mainImage: "/assets/petBoarding.png",
    publishedAt: "2026-09-05T14:30:00Z",
    author: {
      name: "Dr. Walnut Grove Team",
      role: "Veterinary Care Team",
      bio: "Passionate about stress-reducing handling techniques and feline environmental enrichment.",
    },
    category: "Pet Health & Wellness",
    readTime: "4 min read",
    tags: ["Cats", "Boarding", "Feline Care", "Langley Vet"],
    relatedServices: [
      {
        title: "Pet Boarding Services",
        href: "/services/pet-boarding-services",
        description: "Cozy, quiet, and individualized boarding specifically designed for our feline companions.",
      },
      {
        title: "Vaccines",
        href: "/services/vaccines",
        description: "Ensure rabies and FVRCP vaccinations are up to date prior to boarding.",
      },
      {
        title: "Parasite Prevention",
        href: "/services/parasite-prevention",
        description: "Reliable flea and tick protection to safeguard pets while away from home.",
      },
    ],
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Unlike dogs who frequently enjoy high-energy socialization, cats are territorial and sensitive creatures. When traveling or facing home renovations, boarding your cat in a noisy or dog-heavy environment can trigger intense stress. That is why choosing a calm, veterinary-supervised cat boarding facility makes all the difference.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Why Quiet, Dedicated Spaces Matter for Cats",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "At Walnut Grove Animal Hospital, our feline guests have private accommodations situated in a peaceful, quiet section of the clinic. With veterinary professionals on site, pets with daily medications or medical conditions receive exact, timely treatment.",
          },
        ],
      },
      {
        _type: "callout",
        type: "info",
        title: "Boarding Checklist Before Check-In",
        message:
          "Remember to bring your cat's regular food to prevent digestive upset, their favorite blanket or toy for scent familiarity, and up-to-date vaccine records.",
      },
      {
        _type: "serviceCta",
        title: "Planning a Trip Away From Home?",
        description:
          "Reserve your cat's comfortable stay with our attentive team in Langley. Spaces fill quickly around holidays and long weekends!",
        serviceLink: "/services/pet-boarding-services",
        buttonText: "Explore Boarding Amenities",
      },
    ],
  },
  {
    _id: "sample-blog-3",
    title: "Pet Dental Health: Signs of Hidden Tooth Pain & Why Cleanings Matter",
    slug: "pet-dental-health-signs-gum-disease",
    excerpt:
      "Over 80% of dogs and cats show signs of periodontal disease by age three. Discover common symptoms of oral discomfort and how veterinary cleanings protect overall organ health.",
    mainImage: "/assets/dental.webp",
    publishedAt: "2026-08-28T09:15:00Z",
    author: {
      name: "Dr. Walnut Grove Team",
      role: "Veterinary Surgery & Dental Specialist",
      bio: "Dedicated to pet oral hygiene, pain-free extractions, and preventative dental wellness.",
    },
    category: "Surgical & Specialized Care",
    readTime: "6 min read",
    tags: ["Dental Health", "Oral Care", "Dogs", "Cats", "Langley Vet"],
    relatedServices: [
      {
        title: "Pet Dental Care",
        href: "/services/dental-services",
        description: "Full oral exams, ultrasonic scaling, polishing, and digital dental radiography.",
      },
      {
        title: "Anesthesia",
        href: "/services/anesthesia",
        description: "Continuous multi-parameter monitoring for secure, stress-free dental procedures.",
      },
    ],
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Pet owners often assume that foul breath is just a natural part of owning an animal. In reality, persistent 'dog breath' or bad cat breath is frequently the first sign of bacteria buildup, periodontal infection, or decaying teeth.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Signs Your Pet May Be Experiencing Dental Pain",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Animals instinctively hide mouth discomfort and will often keep eating even with severe toothaches. Watch for subtle cues like dropping kibble, chewing exclusively on one side, pawing at the mouth, or red, inflamed gums.",
          },
        ],
      },
      {
        _type: "callout",
        type: "warning",
        title: "Dental Bacteria Affects Vital Organs",
        message:
          "Oral bacteria can enter the bloodstream through inflamed gum tissue, traveling to the heart valves, kidneys, and liver over time. Professional cleanings help protect both teeth and internal health.",
      },
      {
        _type: "serviceCta",
        title: "Schedule a Pet Dental Assessment",
        description:
          "Keep your pet smiling brightly and pain-free. Our veterinary team provides safe ultrasonic cleanings and polishing in Langley.",
        serviceLink: "/services/dental-services",
        buttonText: "View Dental Care Details",
      },
    ],
  },
  {
    _id: "sample-blog-4",
    title: "Puppy & Kitten First-Year Checklist: Essential Vaccines, Spay/Neuter & Care",
    slug: "puppy-kitten-first-year-health-checklist",
    excerpt:
      "Welcoming a new furry family member? Here is your complete first-year timeline for booster shots, deworming, microchipping, and spay/neuter surgery in Langley.",
    mainImage: "/assets/kittenCare.png",
    publishedAt: "2026-08-20T11:45:00Z",
    author: {
      name: "Dr. Walnut Grove Team",
      role: "Veterinary Care Team",
      bio: "Loving guides for new puppies, kittens, and first-time pet parents.",
    },
    category: "Puppy & Kitten Care",
    readTime: "5 min read",
    tags: ["Puppies", "Kittens", "Vaccines", "Spay & Neuter", "Microchipping"],
    relatedServices: [
      {
        title: "Puppy & Kitten Care",
        href: "/services/puppy-kitten-care",
        description: "Tailored health plans for early development, socialization, and pediatric checkups.",
      },
      {
        title: "Spay & Neuter",
        href: "/services/spay-neuter",
        description: "Safe surgical procedures that prevent reproductive health risks and unwanted litters.",
      },
      {
        title: "Microchipping",
        href: "/services/microchipping",
        description: "Lifetime identification to help lost pets return safely home.",
      },
    ],
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Bringing a new puppy or kitten into your home is an unforgettable milestone. However, the first year of life also represents the period of highest vulnerability to infectious illnesses and rapid physical changes.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Key Milestones in the First 12 Months",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "6-8 Weeks: Initial wellness exam, core vaccine booster series, and gentle deworming.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "12-16 Weeks: Rabies vaccination, final puppy/kitten boosters, and microchip placement.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "6 Months: Consultation for spaying or neutering, and evaluating adult tooth emergence.",
          },
        ],
      },
      {
        _type: "serviceCta",
        title: "Give Your Young Pet the Best Start in Life",
        description:
          "Schedule a warm, stress-free first visit with our caring team at Walnut Grove Animal Hospital.",
        serviceLink: "/services/puppy-kitten-care",
        buttonText: "Explore Puppy & Kitten Care",
      },
    ],
  },
  {
    _id: "sample-blog-5",
    title: "Seasonal Pet Safety in the Fraser Valley: Fleas, Ticks & Poisonous Plants",
    slug: "seasonal-pet-safety-fleas-ticks-poisonous-plants",
    excerpt:
      "British Columbia's lush greenery also harbors outdoor risks. Protect your dogs and cats from tick bites, year-round fleas, and toxic garden foliage in Langley.",
    mainImage: "/assets/parasitePrevention.png",
    publishedAt: "2026-08-12T08:00:00Z",
    author: {
      name: "Dr. Walnut Grove Team",
      role: "Veterinary Team",
      bio: "Dedicated to outdoor safety, seasonal parasite prevention, and toxicology awareness.",
    },
    category: "Nutrition & Safety",
    readTime: "4 min read",
    tags: ["Ticks", "Fleas", "Toxic Plants", "Outdoor Safety", "Fraser Valley"],
    relatedServices: [
      {
        title: "Parasite Prevention",
        href: "/services/parasite-prevention",
        description: "Veterinary-approved treatments preventing fleas, ticks, heartworm, and intestinal parasites.",
      },
      {
        title: "Poisonous Plants Guide",
        href: "/resources/poisonous-plants",
        description: "Interactive directory of household and outdoor flora dangerous to cats and dogs.",
      },
    ],
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Langley's walking trails, forested parks, and temperate climate provide incredible opportunities for outdoor recreation with our dogs. However, our mild coastal winters mean fleas and ticks can remain active throughout almost the entire year.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Ticks & Lyme Disease Defense",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Black-legged ticks (deer ticks) thrive in tall grass and leaf litter across the Fraser Valley. A single bite can transmit Lyme disease or other tick-borne pathogens. Modern chewable and topical preventatives kill ticks before they can transmit infection.",
          },
        ],
      },
      {
        _type: "callout",
        type: "tip",
        title: "Check Common Tick Hiding Spots",
        message:
          "After hiking in Derby Reach or Campbell Valley, run your hands over your dog's ears, neck, armpits, between their toes, and under their collar.",
      },
      {
        _type: "serviceCta",
        title: "Keep Your Pet Protected Year-Round",
        description:
          "Ask our veterinary staff about safe, weight-specific parasite prevention products during your visit.",
        serviceLink: "/services/parasite-prevention",
        buttonText: "Learn About Parasite Defense",
      },
    ],
  },
];

// Helper to populate sample related posts
sampleBlogs.forEach((blog, index) => {
  if (!blog.relatedPosts || blog.relatedPosts.length === 0) {
    blog.relatedPosts = sampleBlogs
      .filter((_, i) => i !== index)
      .slice(0, 3)
      .map((p) => ({
        _id: p._id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        mainImage: p.mainImage,
        publishedAt: p.publishedAt,
        category: p.category,
        readTime: p.readTime,
        author: p.author,
      }));
  }
});

// Fetch All Blogs (with fallback)
export const getAllBlogs = async (): Promise<BlogPost[]> => {
  try {
    const data = await client.fetch(getAllBlogsQuery);
    if (data && Array.isArray(data) && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn("[Sanity] Unable to fetch blogs from Sanity, using fallback sample data.");
  }
  return sampleBlogs;
};

// Fetch Single Blog by Slug (with fallback)
export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const data = await client.fetch(getBlogBySlugQuery, { slug });
    if (data && data.title) {
      return data;
    }
  } catch (err) {
    console.warn(`[Sanity] Unable to fetch blog for slug ${slug}, checking fallback data.`);
  }

  const found = sampleBlogs.find((b) => b.slug === slug);
  return found || null;
};

// Fetch Related / Recent Blogs
export const getRelatedBlogs = async (
  currentSlug: string,
  category?: string,
  limit = 3
): Promise<RelatedPost[]> => {
  try {
    if (category) {
      const data = await client.fetch(getRelatedBlogsQuery, {
        slug: currentSlug,
        category,
      });
      if (data && Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch {
    // Fall back to sample
  }

  // Filter sample blogs
  const sameCategory = sampleBlogs.filter(
    (b) => b.slug !== currentSlug && (!category || b.category === category)
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const remaining = sampleBlogs.filter(
    (b) => b.slug !== currentSlug && !sameCategory.includes(b)
  );

  return [...sameCategory, ...remaining].slice(0, limit);
};

// Get All Blog Slugs
export const getAllBlogSlugs = async (): Promise<string[]> => {
  try {
    const slugs = await client.fetch(getAllBlogSlugsQuery);
    if (slugs && Array.isArray(slugs) && slugs.length > 0) {
      return slugs;
    }
  } catch {
    // Fallback
  }
  return sampleBlogs.map((b) => b.slug);
};
