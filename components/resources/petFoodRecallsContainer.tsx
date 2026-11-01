/** @format */

"use client";

import Image from "next/image";

export const PetFoodRecallsContainer = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white relative pb-20 lg:pb-40">
      {/* Banner */}
      <Image
        src="/assets/commonBanner.svg"
        alt="banner"
        width={1920}
        height={466}
        className="absolute top-0 left-0 w-full h-[300px] lg:h-auto object-cover z-0"
      />

      <div className="relative z-1 max-w-[1296px] mx-auto pt-[150px] lg:pt-[297px] px-6 lg:px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 mb-12 text-center lg:text-left">
          <div className="rounded-full shrink-0">
            <Image
              src="/icons/card1.svg"
              alt="recall"
              width={79}
              height={79}
              className="w-[79px] lg:w-[79px]"
            />
          </div>
          <div>
            <h1 className="text-[28px] lg:text-[40px] font-otomanopee-one text-primary-black uppercase leading-[1.1]">
              Pet Food Recalls, <br className="hidden lg:block" /> Stay Informed
              On Your Pet&apos;s Nutrition
            </h1>
            <p className="text-[16px] lg:text-[20px] font-nunito font-medium text-primary-black leading-relaxed mt-4 max-w-[950px]">
              Keeping your pets safe starts with knowing what goes into their
              bowls. Stay updated with the latest pet food and product recalls
              to ensure your furry family members receive only the safest, highest
              quality nutrition.
            </p>
          </div>
        </div>

        {/* Iframe Section */}
        <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.08)] border border-gray-100 mt-8">
          <div className="w-full h-[800px] lg:h-[1000px] relative">
            <iframe
              src="https://www.vin.com/recallcenter/default.aspx"
              className="absolute inset-0 w-full h-full border-0"
              title="Pet Food Recall Center"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Disclaimer/Note */}
        <div className="mt-12 p-6 lg:p-10 bg-primary-blue/10 rounded-[20px] border border-primary-blue/20">
          <p className="text-[14px] lg:text-[16px] font-nunito text-primary-black/80 text-center italic">
            Note: This resource is provided by the Veterinary Information
            Network (VIN) and is updated regularly. For specific concerns about
            your pet&apos;s diet or symptoms after eating a particular food,
            please contact us immediately at (604) 888-2628.
          </p>
        </div>
      </div>

      {/* Decorative Paws */}
      <Image
        src="/assets/leftPaws.svg"
        alt="paws"
        width={392}
        height={1484}
        className="absolute bottom-0 left-[-10%] opacity-20 pointer-events-none -z-1"
      />
    </div>
  );
};
