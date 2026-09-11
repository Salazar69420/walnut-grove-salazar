/** @format */

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { getBlogImageUrl } from "@/utils/blogData";
import { CtaButton } from "@/components/ui/ctaButton";
import { Info, Lightbulb, AlertCircle, ExternalLink } from "lucide-react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[16px] lg:text-[18px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[170%] mb-5">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[22px] lg:text-[30px] font-otomanopee-one leading-tight lg:leading-[125%] text-primary-black uppercase mt-10 mb-4 tracking-wide border-b border-primary-purple/40 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[19px] lg:text-[24px] font-otomanopee-one leading-snug text-primary-black uppercase mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[17px] lg:text-[20px] font-bold font-nunito text-primary-black mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-green bg-[#FFFCF7] pl-6 py-4 pr-5 rounded-r-[16px] italic text-[17px] lg:text-[19px] text-primary-black font-medium my-6 shadow-[0px_2px_15px_rgba(0,0,0,0.03)] border-t border-b border-r border-[#F0EAF8]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 my-5 pl-1 list-none">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 my-5 pl-6 list-decimal text-primary-black font-nunito font-medium text-[16px] lg:text-[18px] leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-[16px] lg:text-[18px] text-primary-black font-nunito font-medium leading-relaxed">
        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary-green flex-shrink-0" />
        <div className="flex-1">{children}</div>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[16px] lg:text-[18px] text-primary-black font-nunito font-medium leading-relaxed">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-primary-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline decoration-primary-green decoration-2 underline-offset-4">
        {children}
      </span>
    ),
    code: ({ children }) => (
      <code className="bg-primary-purple/20 px-2 py-1 rounded text-[15px] font-mono text-primary-black">
        {children}
      </code>
    ),
    // Standard External Link
    link: ({ value, children }) => {
      const isExternal =
        value?.blank ||
        (value?.href && !value.href.startsWith("/") && !value.href.startsWith("#"));
      return (
        <a
          href={value?.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-primary-green hover:underline font-semibold inline-flex items-center gap-1 transition-colors"
        >
          <span>{children}</span>
          {isExternal && <ExternalLink size={13} className="inline opacity-70" />}
        </a>
      );
    },
    // Interlinking: Internal Blog Reference Link
    internalBlogLink: ({ value, children }) => {
      const slug = value?.reference?.slug?.current || value?.reference?.slug;
      const href = slug ? `/blog/${slug}` : "/blog";
      return (
        <Link
          href={href}
          className="text-primary-green hover:underline font-semibold transition-colors underline decoration-dotted decoration-primary-green"
          title="Read related article"
        >
          {children}
        </Link>
      );
    },
    // Interlinking: Hospital Service Link
    serviceLink: ({ value, children }) => {
      const path = value?.path || "/services";
      return (
        <Link
          href={path}
          className="text-primary-green hover:underline font-semibold transition-colors"
          title="View hospital service"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const src = getBlogImageUrl(value);
      return (
        <figure className="my-8">
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-[20px] overflow-hidden shadow-sm border border-[#F0EAF8]">
            <Image
              src={src}
              alt={value?.alt || "Article illustration"}
              fill
              className="object-cover"
            />
          </div>
          {value?.caption && (
            <figcaption className="text-[14px] text-primary-black/70 font-nunito italic text-center mt-2.5">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const type = value?.type || "tip";
      let bgStyle = "bg-[#F4F9F2] border-primary-green";
      let icon = <Lightbulb className="text-primary-green flex-shrink-0" size={24} />;

      if (type === "info") {
        bgStyle = "bg-[#EDF7FF] border-primary-blue";
        icon = <Info className="text-[#3695DB] flex-shrink-0" size={24} />;
      } else if (type === "warning") {
        bgStyle = "bg-[#F9F4FF] border-primary-purple";
        icon = <AlertCircle className="text-[#9952E3] flex-shrink-0" size={24} />;
      }

      return (
        <div
          className={`my-8 p-6 rounded-[18px] border-l-4 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] ${bgStyle}`}
        >
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5">{icon}</div>
            <div className="flex-1">
              {value?.title && (
                <h4 className="text-[18px] font-bold font-nunito text-primary-black mb-1.5">
                  {value.title}
                </h4>
              )}
              <p className="text-[15px] lg:text-[16px] text-primary-black/90 font-nunito leading-relaxed">
                {value?.message}
              </p>
            </div>
          </div>
        </div>
      );
    },
    serviceCta: ({ value }) => {
      const link = value?.serviceLink || "/services";
      return (
        <div className="my-10 bg-[#FFFCF7] rounded-[20px] p-6 lg:p-8 border border-primary-purple/30 shadow-[0px_6px_30px_rgba(87,87,87,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-purple/25 text-primary-black text-[13px] font-semibold tracking-wide uppercase">
              Hospital Service
            </div>
            <h4 className="text-[20px] lg:text-[24px] font-otomanopee-one text-primary-black uppercase leading-tight">
              {value?.title || "Need Veterinary Care?"}
            </h4>
            <p className="text-[15px] lg:text-[16px] text-primary-black/80 font-nunito leading-relaxed max-w-[650px]">
              {value?.description}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href={link}>
              <CtaButton icon="/icons/calender.svg" className="capitalize w-full md:w-auto">
                {value?.buttonText || "Learn More"}
              </CtaButton>
            </Link>
          </div>
        </div>
      );
    },
  },
};

export const PortableTextRenderer = ({ value }: { value: any }) => {
  if (!value) return null;
  return <PortableText value={value} components={portableTextComponents} />;
};
