/** @format */

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, getBlogImageUrl } from "@/utils/blogData";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CtaButton } from "@/components/ui/ctaButton";
import { Search, Calendar, Clock, ArrowRight, Sparkles, Filter } from "lucide-react";

export const BlogListingContainer = ({ initialBlogs }: { initialBlogs: BlogPost[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract available categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(initialBlogs.map((b) => b.category).filter(Boolean)));
    return ["All", ...cats];
  }, [initialBlogs]);

  // Filtered blogs based on search query and category
  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        (blog.excerpt && blog.excerpt.toLowerCase().includes(q)) ||
        (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(q))) ||
        (blog.category && blog.category.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialBlogs, selectedCategory, searchQuery]);

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const regularBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-primary-white relative pb-20">
      {/* Top Wave Banner */}
      <Image
        src="/assets/commonBanner.svg"
        alt="blog-banner"
        width={1920}
        height={466}
        className="absolute top-0 left-0 w-full h-[260px] lg:h-[360px] object-cover z-0"
        priority
      />

      {/* Decorative paws */}
      <Image
        src="/assets/rightPaws.svg"
        alt="paw-decorations"
        width={392}
        height={1484}
        className="absolute top-80 -right-12 z-0 hidden xl:block opacity-40 pointer-events-none"
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <div className="relative z-1 max-w-[1296px] mx-auto pt-6 lg:pt-10 px-6 lg:px-4">
        {/* Header Hero Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 mb-6 text-center lg:text-left">
            <div className="bg-[#EBE2F9]/50 rounded-full p-3 lg:p-4 flex items-center justify-center shrink-0">
              <Image
                src="/icons/pinkPaw.svg"
                alt="paw-icon"
                width={72}
                height={72}
                className="w-[48px] lg:w-[72px] h-auto"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-purple/20 text-primary-black text-[13px] font-semibold tracking-wider uppercase mb-2">
                <Sparkles size={14} className="text-primary-black" />
                Walnut Grove Animal Hospital
              </div>
              <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-otomanopee-one leading-tight lg:leading-[115%] text-primary-black uppercase tracking-wide">
                PET HEALTH & WELLNESS BLOG
              </h1>
              <p className="text-[16px] lg:text-[20px] font-nunito font-medium text-primary-black leading-relaxed mt-3 max-w-[860px]">
                Expert advice, preventive care guides, nutrition insights, and stories
                from our dedicated veterinary clinic team in Langley, BC.
              </p>
            </div>
          </div>

          {/* Search Bar & Category Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#FFFCF7] p-4 lg:p-5 rounded-[22px] border border-[#F0EAF8] shadow-[0px_4px_25px_rgba(87,87,87,0.04)]">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-black/40"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pet health topics, symptoms, vaccines..."
                className="w-full bg-white rounded-[16px] pl-12 pr-4 py-3 text-[15px] lg:text-[16px] font-nunito text-primary-black placeholder:text-primary-black/40 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all"
              />
            </div>

            {/* Category Pills (Desktop & Mobile scrollable) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="hidden lg:flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-primary-black/50 ml-2 mr-1">
                <Filter size={14} /> Topics:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 rounded-[14px] text-[14px] font-nunito font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary-green text-text-white shadow-sm"
                        : "bg-white text-primary-black/75 hover:bg-primary-purple/20 hover:text-primary-black border border-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Blog Card */}
        {featuredBlog && (
          <section className="mb-14 lg:mb-20">
            <div className="text-[13px] font-bold uppercase tracking-wider text-primary-black/60 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-green animate-pulse" />
              Featured Article
            </div>
            <Link
              href={`/blog/${featuredBlog.slug}`}
              className="group block bg-[#FFFCF7] rounded-[24px] overflow-hidden border border-[#F0EAF8] shadow-[0px_4px_30px_rgba(87,87,87,0.06)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Image */}
                <div className="relative w-full lg:w-[50%] min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden">
                  <Image
                    src={getBlogImageUrl(featuredBlog.mainImage)}
                    alt={featuredBlog.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-primary-purple text-primary-black font-semibold text-[13px] px-3.5 py-1.5 rounded-full shadow-sm">
                    {featuredBlog.category}
                  </div>
                </div>

                {/* Content Details */}
                <div className="w-full lg:w-[50%] p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[13px] lg:text-[14px] text-primary-black/70 font-nunito font-medium mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={15} className="text-primary-green" />
                        {new Date(featuredBlog.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      {featuredBlog.readTime && (
                        <span className="flex items-center gap-1.5">
                          <Clock size={15} className="text-primary-green" />
                          {featuredBlog.readTime}
                        </span>
                      )}
                    </div>

                    <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-otomanopee-one text-primary-black uppercase leading-tight lg:leading-[120%] group-hover:text-primary-green transition-colors">
                      {featuredBlog.title}
                    </h2>

                    <p className="text-[15px] lg:text-[17px] text-primary-black/80 font-nunito font-medium leading-relaxed mt-4 line-clamp-3 lg:line-clamp-4">
                      {featuredBlog.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F0EAF8] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-blue/30 flex items-center justify-center overflow-hidden shrink-0 border border-primary-blue/50">
                        <Image
                          src="/icons/pinkPaw.svg"
                          alt="author-paw"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-primary-black font-nunito">
                          {featuredBlog.author?.name || "Walnut Grove Team"}
                        </p>
                        <p className="text-[12px] text-primary-black/60 font-nunito">
                          {featuredBlog.author?.role || "Veterinary Care Specialist"}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 text-primary-green font-bold text-[15px] group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Regular Blog Grid */}
        {regularBlogs.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[20px] lg:text-[28px] font-otomanopee-one text-primary-black uppercase">
                {selectedCategory === "All"
                  ? "Recent Articles & Guides"
                  : `${selectedCategory} Articles`}
              </h3>
              <span className="text-[14px] font-nunito text-primary-black/60">
                Showing {filteredBlogs.length} articles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="group flex flex-col bg-[#FFFCF7] rounded-[20px] overflow-hidden border border-[#F0EAF8] shadow-[0px_4px_25px_rgba(87,87,87,0.05)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden">
                    <Image
                      src={getBlogImageUrl(blog.mainImage)}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-primary-purple text-primary-black font-semibold text-[12px] px-3 py-1 rounded-full shadow-sm">
                      {blog.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[12px] text-primary-black/60 font-nunito font-medium mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-primary-green" />
                          {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        {blog.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock size={13} className="text-primary-green" />
                            {blog.readTime}
                          </span>
                        )}
                      </div>

                      <h4 className="text-[18px] lg:text-[20px] font-otomanopee-one text-primary-black uppercase leading-snug group-hover:text-primary-green transition-colors line-clamp-2">
                        {blog.title}
                      </h4>

                      <p className="text-[14px] text-primary-black/75 font-nunito font-medium leading-relaxed mt-3 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-[#F0EAF8] flex items-center justify-between text-[13px]">
                      <span className="font-semibold text-primary-black/80 font-nunito">
                        {blog.author?.name || "Walnut Grove Team"}
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary-green font-bold group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Empty Search / Filter State */}
        {filteredBlogs.length === 0 && (
          <div className="bg-[#FFFCF7] rounded-[24px] p-12 text-center border border-[#F0EAF8] my-12">
            <div className="w-16 h-16 rounded-full bg-primary-purple/20 flex items-center justify-center mx-auto mb-4">
              <Search size={28} className="text-primary-black/50" />
            </div>
            <h3 className="text-[22px] font-otomanopee-one text-primary-black uppercase mb-2">
              No Articles Found
            </h3>
            <p className="text-[16px] text-primary-black/70 font-nunito max-w-[480px] mx-auto mb-6">
              We couldn&apos;t find any blog posts matching your search query &quot;{searchQuery}&quot;.
              Try adjusting your keywords or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 bg-primary-green text-text-white rounded-[16px] font-semibold text-[15px] hover:shadow-md transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <section className="relative overflow-hidden bg-primary-purple/35 rounded-[28px] p-8 lg:p-14 border border-primary-purple/40 shadow-sm mt-12 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-1">
            <div className="max-w-[700px] text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-primary-black text-[13px] font-semibold uppercase mb-3">
                <Sparkles size={14} className="text-primary-green" />
                Trusted Animal Clinic in Langley
              </div>
              <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-otomanopee-one text-primary-black uppercase leading-tight">
                HAVE QUESTIONS ABOUT YOUR PET&apos;S HEALTH?
              </h2>
              <p className="text-[16px] lg:text-[19px] font-nunito text-primary-black/85 leading-relaxed mt-3">
                From routine wellness checkups and preventive vaccines to specialized surgeries
                and cozy cat boarding, our compassionate team is here to support you.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <CtaButton icon="/icons/calender.svg" className="capitalize">
                Schedule Appointment
              </CtaButton>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-[18px] text-[16px] font-semibold font-nunito text-primary-black bg-white hover:bg-[#FFFCF7] border border-gray-200 transition-all shadow-sm"
              >
                Contact Clinic
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
