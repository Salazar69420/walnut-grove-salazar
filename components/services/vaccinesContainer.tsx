/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const VaccinesContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Core vaccinations for dogs and cats to protect against highly contagious and serious diseases.",
    "Lifestyle-based non-core vaccines recommended based on your pet's environment, travel, and exposure risks.",
    "Structured puppy and kitten vaccination schedules to safely build immunity during early development.",
    "Adult booster vaccinations to maintain long-term disease protection throughout your pet's life.",
    "Personalized vaccine consultations to evaluate your pet's health status and determine the most appropriate schedule.",
  ];

  const relatedServices = [
    { name: "Puppy & Kitten Care", href: "/services/puppy-kitten-care", icon: "/icons/card2.svg" },
    { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
    { name: "Parasite Prevention", href: "/services/parasite-prevention", icon: "/icons/card2.svg" },
  ];

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-primary-white">
      <Image
        src={"/assets/commonBanner.svg"}
        alt="services-banner"
        height={466}
        width={1920}
        className="absolute top-0 left-0 z-0 w-full h-[250px] lg:h-auto object-cover"
      />

      <Image
        src="/assets/rightPaws.svg"
        alt="right"
        className="absolute top-50 h-[1485px] -right-10 z-0 hidden lg:block"
        width={392}
        height={1484}
      />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "Vaccinations", href: "/services/vaccines" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card2.svg"
              alt="vaccines-icon"
              height={87}
              width={87}
            />
            <h1 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              VACCINATIONS
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Vaccinations play a critical role in protecting pets from
              infectious and potentially life-threatening diseases. As part of our{" "}
              <Link href="/services/preventative-care" className="text-primary-green hover:underline font-semibold">
                preventative care
              </Link>{" "}
              programs, our vaccination protocols are designed to provide effective protection
              while considering your pet&apos;s lifestyle, age, and individual
              risk factors.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Our team follows evidence-based guidelines to ensure each pet
              receives the appropriate immunizations without unnecessary
              treatments. Vaccines are often paired with{" "}
              <Link href="/services/parasite-prevention" className="text-primary-green hover:underline font-semibold">
                parasite prevention
              </Link>{" "}
              for comprehensive protection.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  Key Vaccination Services Include
                </h4>
                <ul className="space-y-3 lg:space-y-2">
                  {points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black"
                    >
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative rounded-[16px] overflow-hidden min-h-[250px] lg:min-h-0">
                <Image
                  src="/assets/vaccinations.png"
                  alt="vaccinations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              A strong start during puppy-hood and kitten-hood helps create the
              foundation for a lifetime of good health. Learn more about our{" "}
              <Link href="/services/puppy-kitten-care" className="text-primary-green hover:underline font-semibold">
                puppy & kitten care
              </Link>{" "}
              programs.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-8 capitalize" icon="/icons/calender.svg">
                Update Vaccinations
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
      <ServiceFaq faqs={faqs} />
      <RelatedServices services={relatedServices} />
      <AllServicesList />
    </div>
  );
};
