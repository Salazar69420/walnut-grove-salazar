/** @format */

import { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/utils/blogData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.walnutgroveanimalclinic.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/services",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/resources/how-to-videos",
    "/resources/poisonous-plants",
    "/resources/pet-food-recalls",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = [
    "anesthesia",
    "bloodwork",
    "chronic-pain-management",
    "dental-services",
    "dog-breeding",
    "euthanasia",
    "lab-services",
    "microchipping",
    "parasite-prevention",
    "pet-boarding-services",
    "pet-surgery",
    "pet-x-ray",
    "preventative-care",
    "puppy-kitten-care",
    "skin-ear-infections",
    "small-mammal-medicine",
    "soft-tissue-eye-ear",
    "spay-neuter",
    "ultrasound-services",
    "vaccines",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogSlugs = await getAllBlogSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
