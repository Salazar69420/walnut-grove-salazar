/** @format */

export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogBySlug,
  getAllBlogs,
  getRelatedBlogs,
  getBlogImageUrl,
} from "@/utils/blogData";
import { BlogDetailContainer } from "@/components/blog/blogDetailContainer";
import { getMetadata } from "@/utils/seoBuilder";
import { JsonLd } from "@/components/shared/jsonLd";
import { getBlogPostingSchema } from "@/utils/schemaBuilder";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Walnut Grove Animal Hospital",
      description: "The requested pet care blog post could not be found.",
    };
  }

  const imageUrl = getBlogImageUrl(blog.mainImage);

  const metaData = {
    metaData: {
      metaTitle:
        blog.metaData?.metaTitle ||
        `${blog.title} | Walnut Grove Animal Hospital`,
      metaDescription:
        blog.metaData?.metaDescription ||
        blog.excerpt ||
        "Expert pet care insights from Walnut Grove Animal Hospital in Langley, BC.",
      canonical:
        blog.metaData?.canonical ||
        `https://www.walnutgroveanimalclinic.com/blog/${blog.slug}`,
    },
  };

  const metadata = getMetadata(metaData, `/blog/${blog.slug}`);
  if (imageUrl) {
    metadata.openGraph = {
      ...metadata.openGraph,
      images: imageUrl,
    };
    metadata.twitter = {
      ...metadata.twitter,
      image: imageUrl,
    };
  }
  return metadata;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getAllBlogs();
  const currentIndex = allBlogs.findIndex((b) => b.slug === slug);

  const prevPost = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextPost =
    currentIndex !== -1 && currentIndex < allBlogs.length - 1
      ? allBlogs[currentIndex + 1]
      : null;

  // Curated or fallback related posts
  let relatedPosts = blog.relatedPosts || [];
  if (!relatedPosts || relatedPosts.length === 0) {
    relatedPosts = await getRelatedBlogs(slug, blog.category, 3);
  }

  // Recent posts for sidebar widget
  const recentPosts = allBlogs.filter((b) => b.slug !== slug).slice(0, 3);

  const imageUrl = getBlogImageUrl(blog.mainImage);
  const postingSchema = getBlogPostingSchema(blog, imageUrl);

  return (
    <>
      <JsonLd data={postingSchema} />
      <BlogDetailContainer
        blog={blog}
        relatedPosts={relatedPosts}
        recentPosts={recentPosts}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </>
  );
}
