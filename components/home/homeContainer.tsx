/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import { Welcome } from "./welcome";
import { Service } from "./service";
import { Team } from "./team";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import Link from "next/link";
import { Care } from "../about/care";

const HomeContainer = ({ team }: { team?: any[] }) => {
  return (
    <div className="max-w-[1920px] mx-auto font-nunito bg-primary-white overflow-hidden">
      {/* Hero Banner */}
      <section className="relative w-full h-[850px] lg:h-[900px] max-w-[1880px] mx-auto overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <Image
          src="/assets/bannerHer.webp"
          alt="Veterinary Care"
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1880px"
          className="object-cover object-center"
        />

        {/* Overlay to ensure text readability if needed, though glass box should handle it */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Centered Glass Box Content */}
        <div className="flex flex-col justify-center items-center mb-48 lg:mb-40 pt-20 lg:pt-0">
          <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-[18px] border border-white/30 p-6 lg:p-2.5 max-w-[90%] lg:max-w-[850px] flex flex-col items-center text-center shadow-2xl">
            <h1 className="font-otomanopee-one uppercase text-primary-black text-[24px] lg:text-[41px] leading-[1.1] font-normal tracking-tight">
              Langley&apos;s Trusted Medical Care,
              <br />
              Genuine Compassion.
            </h1>
            <p className="mt-4 text-primary-black text-[14px] lg:text-[20px] leading-[1.2] font-nunito font-semibold max-w-[700px]">
              We offer Langley’s pets specialized care with clear communication
              and genuine compassion. Our goal is to keep them healthy and happy
              every day.
            </p>
          </div>
          <Link href="/services" className="mt-8 z-10">
            <CtaButton icon="/icons/paw.svg">View Our Services</CtaButton>
          </Link>
        </div>
        {/* Stat Cards — horizontal row at bottom */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col lg:flex-row gap-4 lg:gap-8 px-6 w-full lg:w-[90%] max-w-[1296px] justify-center">
          {[
            {
              stat: "10000+",
              label: "Cases",
              sub: "Served over 500+ pets!",
            },
            {
              stat: "40+",
              label: "Years",
              sub: "Years of Veterinary Experience",
            },
            {
              stat: "7",
              label: "Days",
              sub: "Open 7 days of the week!",
            },
          ].map(({ stat, label, sub }) => (
            <div
              key={label}
              className="flex-1 bg-white rounded-[24px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center py-6 lg:py-10 gap-1 border border-white/50 hover:shadow-2xl transition-all duration-300"
            >
              <span className="font-otomanopee-one text-primary-blue text-[32px] lg:text-[48px] leading-tight font-normal text-center">
                {stat} {label}
              </span>
              <span className="text-primary-black font-nunito text-[14px] lg:text-[18px] leading-snug font-medium text-center px-4 opacity-70">
                {sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of page — top padding so content doesn't hide behind cards */}
      <div className="relative z-1">
        <Welcome />
        <Service />
        <Care />
        <Team team={team} />
        <Gallery />
        {/* <Testimonials testimonials={testimonials} /> */}
      </div>
    </div>
  );
};

export default HomeContainer;
