/** @format */

export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { getAllBlogs } from "@/utils/blogData";
import { BlogListingContainer } from "@/components/blog/blogListingContainer";
import { getMetadata } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getBlogListingSchema } from "@/utils/schemaBuilder";

export async function generateMetadata(): Promise<Metadata> {
  const metaObject = {
    metaData: {
      metaTitle: "Pet Health & Veterinary Care Blog | Walnut Grove Animal Hospital",
      metaDescription:
        "Read helpful pet care articles, preventative medicine guides, and veterinary advice from the dedicated team at Walnut Grove Animal Hospital in Langley, BC.",
      canonical: "https://www.walnutgroveanimalclinic.com/blog",
    },
  };
  return getMetadata(metaObject, "/blog");
}

export default async function BlogListingPage() {
  const blogs = await getAllBlogs();
  const schema = getBlogListingSchema();

  return (
    <>
      <JsonLd data={schema} />
      <BlogListingContainer initialBlogs={blogs} />
    </>
  );
}
