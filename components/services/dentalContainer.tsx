/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const DentalContainer = ({ faqs }: { faqs?: any[] }) => {
  const problems = [
    "Periodontal (gum) disease and plaque buildup",
    "Tooth decay and fractured or broken teeth",
    "Oral infections, inflammation, and tumors",
    "Persistent bad breath (halitosis)",
  ];

  const services = [
    "Professional teeth cleaning and polishing",
    "Dental X-rays for accurate diagnosis",
    "Tooth extractions and oral surgical procedures when needed",
  ];

  const relatedServices = [
    { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
    { name: "Anesthesia", href: "/services/anesthesia", icon: "/icons/card3.svg" },
    { name: "Pet Surgery", href: "/services/pet-surgery", icon: "/icons/card3.svg" },
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
          { name: "Pet Dental Care", href: "/services/dental-services" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card2.svg"
              alt="dental-icon"
              height={87}
              width={87}
              className="w-[54px] lg:w-[87px] h-auto"
            />
            <h2 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              PET DENTAL CARE
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Oral health is deepy connected to your pet&apos;s overall
              wellbeing. Left untreated, dental disease can cause pain and lead
              to systemic issues affecting the heart, liver, and kidneys. As part of a comprehensive{" "}
              <Link href="/services/preventative-care" className="text-primary-green hover:underline font-semibold">
                preventative care
              </Link>{" "}
              approach, we offer professional dental care to keep your pet&apos;s smile
              healthy and their breath fresh.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Our dental services include thorough cleanings, examinations, and
              polishing to remove plaque and tartar buildup. Advanced{" "}
              <Link href="/services/pet-x-ray" className="text-primary-green hover:underline font-semibold">
                digital X-ray imaging
              </Link>{" "}
              helps us identify issues below the gumline.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                      Our Comprehensive Dental Services Include
                    </h4>
                    <ul className="space-y-3 lg:space-y-2">
                      {services.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                      Common Dental Problems
                    </h4>
                    <ul className="space-y-3 lg:space-y-2">
                      {problems.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative rounded-[16px] overflow-hidden min-h-[250px] lg:min-h-0">
                <Image
                  src="/assets/dental.webp"
                  alt="dental"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 pt-6">
              <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                Preventative Care
              </h4>
              <ul className="space-y-4 lg:space-y-3">
                <li className="flex items-start gap-3 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                  Regularly brushing your pet's teeth can effectively reduce the
                  accumulation of harmful bacteria and plaque within its oral
                  cavity.
                </li>
                <li className="flex items-start gap-3 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                  It is generally more advantageous to adopt a proactive
                  approach in contrast to a reactive one.
                </li>
                <li className="flex items-start gap-3 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
                  Human toothpaste should be avoided, as this can contain
                  xylitol (also known as birch sugar), which is toxic to house
                  pets.
                </li>
              </ul>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              Regular dental checkups and professional cleanings are key to
              preventing painful oral conditions and supporting long-term
              health. Many dental procedures require safe{" "}
              <Link href="/services/anesthesia" className="text-primary-green hover:underline font-semibold">
                anesthesia
              </Link>{" "}
              to ensure your pet remains comfortable throughout.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-6 capitalize" icon="/icons/calender.svg">
                Schedule A Dental Visit
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
