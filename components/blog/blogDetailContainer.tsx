/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, RelatedPost, getBlogImageUrl } from "@/utils/blogData";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PortableTextRenderer } from "./portableTextRenderer";
import { CtaButton } from "@/components/ui/ctaButton";
import {
  Calendar,
  Clock,
  Share2,
  Check,
  Facebook,
  Twitter,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";

interface BlogDetailContainerProps {
  blog: BlogPost;
  relatedPosts: RelatedPost[];
  recentPosts: RelatedPost[];
  prevPost?: RelatedPost | null;
  nextPost?: RelatedPost | null;
}

export const BlogDetailContainer = ({
  blog,
  relatedPosts,
  recentPosts,
  prevPost,
  nextPost,
}: BlogDetailContainerProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareUrl =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.href)
      : "";
  const shareTitle = encodeURIComponent(blog.title);

  // Fallback services if none defined in Sanity document
  const displayServices =
    blog.relatedServices && blog.relatedServices.length > 0
      ? blog.relatedServices
      : [
          {
            title: "Preventative Care",
            href: "/services/preventative-care",
            description: "Annual wellness checkups, diagnostics, and routine screenings.",
          },
          {
            title: "Pet Dental Services",
            href: "/services/dental-services",
            description: "Ultrasonic scaling, polishing, and comprehensive oral examinations.",
          },
          {
            title: "Pet Boarding Services",
            href: "/services/pet-boarding-services",
            description: "Cozy, feline-friendly accommodations with veterinary supervision.",
          },
        ];

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-primary-white relative pb-20">
      {/* Background Banner */}
      <Image
        src="/assets/commonBanner.svg"
        alt="banner"
        width={1920}
        height={466}
        className="absolute top-0 left-0 w-full h-[260px] lg:h-[360px] object-cover z-0"
        priority
      />

      {/* Decorative Paws */}
      <Image
        src="/assets/rightPaws.svg"
        alt="paw-decorations"
        width={392}
        height={1484}
        className="absolute top-96 -right-12 z-0 hidden xl:block opacity-35 pointer-events-none"
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: blog.title, href: `/blog/${blog.slug}` },
        ]}
      />

      <div className="relative z-1 max-w-[1296px] mx-auto pt-4 lg:pt-8 px-6 lg:px-4">
        {/* Article Header */}
        <header className="max-w-[960px] mb-8 lg:mb-12">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-purple text-primary-black font-semibold text-[13px] tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles size={14} />
            {blog.category}
          </div>

          {/* Main Article Title */}
          <h1 className="text-[26px] sm:text-[36px] lg:text-[46px] font-otomanopee-one leading-tight lg:leading-[118%] text-primary-black uppercase tracking-wide">
            {blog.title}
          </h1>

          {/* Meta Information Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-[#F0EAF8]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-blue/30 border border-primary-blue/60 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/icons/pinkPaw.svg"
                  alt="author-avatar"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <p className="text-[15px] font-bold text-primary-black font-nunito">
                  {blog.author?.name || "Dr. Walnut Grove Team"}
                </p>
                <p className="text-[13px] text-primary-black/60 font-nunito">
                  {blog.author?.role || "Veterinarian in Langley, BC"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-[13px] lg:text-[14px] text-primary-black/70 font-nunito font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar size={16} className="text-primary-green" />
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              {blog.readTime && (
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-primary-green" />
                  {blog.readTime}
                </span>
              )}
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-white border border-gray-200 text-primary-black/70 hover:text-primary-green hover:border-primary-green transition-all shadow-sm cursor-pointer"
                title="Copy Article Link"
              >
                {copied ? (
                  <Check size={16} className="text-primary-green" />
                ) : (
                  <Share2 size={16} />
                )}
              </button>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white border border-gray-200 text-primary-black/70 hover:text-primary-green hover:border-primary-green transition-all shadow-sm"
                title="Share on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white border border-gray-200 text-primary-black/70 hover:text-primary-green hover:border-primary-green transition-all shadow-sm"
                title="Share on X"
              >
                <Twitter size={16} />
              </a>
              <a
                href={`mailto:?subject=${shareTitle}&body=Check out this article from Walnut Grove Animal Hospital: ${shareUrl}`}
                className="p-2 rounded-full bg-white border border-gray-200 text-primary-black/70 hover:text-primary-green hover:border-primary-green transition-all shadow-sm"
                title="Share via Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[540px] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0px_4px_35px_rgba(87,87,87,0.08)] border border-[#F0EAF8] mb-12 lg:mb-16">
          <Image
            src={getBlogImageUrl(blog.mainImage)}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Main Content Layout: 2 Columns (Article Body + Sticky Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Article Body (~68%) */}
          <article className="lg:col-span-8 bg-[#FFFCF7] rounded-[24px] p-6 sm:p-10 lg:p-14 border border-[#F0EAF8] shadow-[0px_4px_30px_rgba(87,87,87,0.04)]">
            {/* Excerpt Highlight Box */}
            {blog.excerpt && (
              <div className="mb-8 p-6 rounded-[18px] bg-primary-white border-l-4 border-primary-green text-[17px] sm:text-[19px] text-primary-black font-nunito font-semibold leading-relaxed shadow-sm">
                {blog.excerpt}
              </div>
            )}

            {/* Rich Text Body */}
            {blog.content && blog.content.length > 0 ? (
              <div className="article-body">
                <PortableTextRenderer value={blog.content} />
              </div>
            ) : (
              <p className="text-[17px] text-primary-black font-nunito leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            {/* Tags Section */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-[#F0EAF8]">
                <p className="text-[13px] font-bold uppercase tracking-wider text-primary-black/60 mb-3">
                  Topic Tags:
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1 rounded-full bg-primary-white border border-[#E9E2F5] text-primary-black text-[13px] font-nunito font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Profile Box */}
            <div className="mt-10 p-6 sm:p-8 rounded-[20px] bg-primary-purple/20 border border-primary-purple/30 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-primary-white border-2 border-primary-purple flex items-center justify-center shrink-0 shadow-sm">
                <Image
                  src="/icons/pinkPaw.svg"
                  alt="author-paw"
                  width={34}
                  height={34}
                />
              </div>
              <div>
                <div className="text-[12px] uppercase font-bold tracking-wider text-primary-black/60 mb-1">
                  Written by
                </div>
                <h4 className="text-[18px] lg:text-[20px] font-otomanopee-one text-primary-black uppercase">
                  {blog.author?.name || "Dr. Walnut Grove Veterinary Team"}
                </h4>
                <p className="text-[13px] font-semibold text-primary-green mb-2 font-nunito">
                  {blog.author?.role || "Veterinarian in Langley, BC"}
                </p>
                <p className="text-[14px] text-primary-black/85 font-nunito leading-relaxed">
                  {blog.author?.bio ||
                    "Providing caring, modern veterinary medicine to Langley pets and helping pet owners make informed choices for their furry family members."}
                </p>
              </div>
            </div>

            {/* Bottom Social Share */}
            <div className="mt-8 pt-6 border-t border-[#F0EAF8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[14px] font-bold font-nunito text-primary-black flex items-center gap-2">
                <Share2 size={16} className="text-primary-green" /> Share this pet health guide:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-[12px] bg-white border border-gray-200 text-[13px] font-nunito font-semibold text-primary-black hover:border-primary-green hover:text-primary-green transition-all cursor-pointer"
                >
                  {copied ? "Link Copied!" : "Copy Link"}
                </button>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-[12px] bg-white border border-gray-200 text-primary-black hover:text-primary-green transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-[12px] bg-white border border-gray-200 text-primary-black hover:text-primary-green transition-colors"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </article>

          {/* Right Column: Sticky Sidebar (~32%) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Appointment Booking Card */}
            <div className="bg-[#FFFCF7] rounded-[22px] p-6 lg:p-7 border-2 border-primary-green/50 shadow-[0px_4px_25px_rgba(87,87,87,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-green/10 rounded-bl-[100px] pointer-events-none" />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-green/15 text-primary-black text-[12px] font-bold uppercase tracking-wider mb-3">
                <Sparkles size={13} className="text-primary-green" />
                Book Clinic Care
              </div>
              <h3 className="text-[20px] font-otomanopee-one text-primary-black uppercase leading-tight mb-2">
                Need Veterinary Care in Langley?
              </h3>
              <p className="text-[14px] text-primary-black/80 font-nunito leading-relaxed mb-5">
                Our welcoming hospital provides preventative exams, surgical procedures, dental
                care, and boarding for cats and dogs.
              </p>

              <div className="space-y-3 mb-6 bg-white p-4 rounded-[16px] border border-gray-100 text-[13px] font-nunito">
                <div className="flex items-center gap-2.5 text-primary-black font-semibold">
                  <Phone size={16} className="text-primary-green shrink-0" />
                  <a href="tel:6048882628" className="hover:underline text-[15px]">
                    (604) 888-2628
                  </a>
                </div>
                <div className="text-primary-black/70">
                  <span className="font-semibold text-primary-black">Address: </span>
                  101A-20995 88 Ave, Langley, BC
                </div>
              </div>

              <CtaButton icon="/icons/calender.svg" className="w-full capitalize">
                Schedule Appointment
              </CtaButton>
            </div>

            {/* Interlinked Related Hospital Services */}
            <div className="bg-[#FFFCF7] rounded-[22px] p-6 lg:p-7 border border-[#F0EAF8] shadow-[0px_4px_25px_rgba(87,87,87,0.05)]">
              <h3 className="text-[18px] font-otomanopee-one text-primary-black uppercase mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-primary-green" />
                Related Services
              </h3>
              <div className="space-y-3">
                {displayServices.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="group block p-3.5 rounded-[16px] bg-white border border-gray-100 hover:border-primary-green/60 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[15px] font-bold text-primary-black font-nunito group-hover:text-primary-green transition-colors">
                        {service.title}
                      </h4>
                      <ChevronRight
                        size={16}
                        className="text-primary-black/40 group-hover:text-primary-green group-hover:translate-x-1 transition-all shrink-0"
                      />
                    </div>
                    {service.description && (
                      <p className="text-[12px] text-primary-black/70 font-nunito mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-4 block text-center text-[13px] font-bold text-primary-green hover:underline"
              >
                View All Clinic Services →
              </Link>
            </div>

            {/* Recent Blog Posts Widget */}
            {recentPosts.length > 0 && (
              <div className="bg-[#FFFCF7] rounded-[22px] p-6 lg:p-7 border border-[#F0EAF8] shadow-[0px_4px_25px_rgba(87,87,87,0.05)]">
                <h3 className="text-[18px] font-otomanopee-one text-primary-black uppercase mb-4">
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((item) => (
                    <Link
                      key={item._id}
                      href={`/blog/${item.slug}`}
                      className="group flex items-center gap-3.5 pb-3 border-b border-[#F0EAF8] last:border-none last:pb-0"
                    >
                      <div className="relative w-16 h-16 rounded-[12px] overflow-hidden shrink-0 border border-gray-100">
                        <Image
                          src={getBlogImageUrl(item.mainImage)}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[13px] font-bold text-primary-black font-nunito leading-snug group-hover:text-primary-green transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-primary-black/50 font-nunito mt-1">
                          <span>
                            {new Date(item.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          {item.readTime && <span>• {item.readTime}</span>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Previous / Next Article Navigation Bar */}
        {(prevPost || nextPost) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-[#F0EAF8]">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group p-5 rounded-[18px] bg-[#FFFCF7] border border-[#F0EAF8] hover:border-primary-green/50 transition-all flex items-center gap-4"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-primary-green group-hover:text-white transition-colors">
                  ←
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] uppercase font-bold text-primary-black/50">
                    Previous Article
                  </div>
                  <div className="text-[14px] font-bold text-primary-black font-nunito truncate group-hover:text-primary-green transition-colors">
                    {prevPost.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group p-5 rounded-[18px] bg-[#FFFCF7] border border-[#F0EAF8] hover:border-primary-green/50 transition-all flex items-center justify-end text-right gap-4 md:ml-auto w-full"
              >
                <div className="min-w-0">
                  <div className="text-[12px] uppercase font-bold text-primary-black/50">
                    Next Article
                  </div>
                  <div className="text-[14px] font-bold text-primary-black font-nunito truncate group-hover:text-primary-green transition-colors">
                    {nextPost.title}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-primary-green group-hover:text-white transition-colors">
                  →
                </div>
              </Link>
            )}
          </div>
        )}

        {/* Interlinked "Related Articles" Feed Section */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="mt-16 lg:mt-24 pt-12 border-t-2 border-primary-purple/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-purple/20 text-primary-black text-[12px] font-semibold uppercase mb-2">
                  <Sparkles size={13} className="text-primary-green" />
                  Continue Reading
                </div>
                <h3 className="text-[22px] sm:text-[30px] font-otomanopee-one text-primary-black uppercase">
                  Related Articles & Guides
                </h3>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-primary-green font-bold text-[14px] hover:underline"
              >
                Browse All Articles <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((item) => (
                <Link
                  key={item._id}
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col bg-[#FFFCF7] rounded-[20px] overflow-hidden border border-[#F0EAF8] shadow-[0px_4px_25px_rgba(87,87,87,0.05)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <Image
                      src={getBlogImageUrl(item.mainImage)}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.category && (
                      <div className="absolute top-3 left-3 bg-primary-purple text-primary-black font-semibold text-[11px] px-3 py-1 rounded-full shadow-sm">
                        {item.category}
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[12px] text-primary-black/60 font-nunito mb-2">
                        <span>
                          {new Date(item.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        {item.readTime && <span>• {item.readTime}</span>}
                      </div>
                      <h4 className="text-[17px] font-otomanopee-one text-primary-black uppercase leading-snug group-hover:text-primary-green transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      {item.excerpt && (
                        <p className="text-[13px] text-primary-black/75 font-nunito mt-2 line-clamp-2">
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="pt-3 mt-4 border-t border-[#F0EAF8] flex items-center justify-between text-[13px]">
                      <span className="font-semibold text-primary-black/80 font-nunito">
                        {item.author?.name || "Walnut Grove Team"}
                      </span>
                      <span className="text-primary-green font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
