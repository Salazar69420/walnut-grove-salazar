/** @format */

"use client";

import { AboutFaq } from "../about/aboutFaq";

export const FaqContainer = ({ faqs }: { faqs?: any[] }) => {
  return (
    <div className="max-w-[1920px] mx-auto bg-primary-white py-20 lg:py-32">
      <AboutFaq faqs={faqs} asMain />
    </div>
  );
};
