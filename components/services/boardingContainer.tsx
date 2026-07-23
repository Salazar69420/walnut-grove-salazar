/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const BoardingContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Private and comfortable accommodations designed to provide a quiet and stress-free environment for each cat.",
    "Personalized daily care routines including feeding, litter maintenance, and attentive monitoring by our staff.",
    "Gentle interaction and enrichment time to help keep cats relaxed, engaged, and emotionally comfortable during their stay.",
    "Veterinary supervision within our clinic allowing immediate medical attention if any concerns arise.",
    "Flexible drop-off and pick-up scheduling available during regular hospital hours throughout the week.",
  ];

  const relatedServices = [
    { name: "Vaccinations", href: "/services/vaccines", icon: "/icons/card2.svg" },
    { name: "Parasite Prevention", href: "/services/parasite-prevention", icon: "/icons/card2.svg" },
    { name: "Microchipping", href: "/services/microchipping", icon: "/icons/card2.svg" },
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
          { name: "Pet Boarding", href: "/services/pet-boarding-services" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card4.svg"
              alt="boarding-icon"
              height={87}
              width={87}
              className="w-[54px] lg:w-[87px] h-auto"
            />
            <h2 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              PET BOARDING
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              We offer cozy, individualized boarding specifically for our feline
              friends. Our boarding area is designed to be a quiet, low-stress
              environment where your cat can feel safe and relaxed while you are
              away. We recommend ensuring{" "}
              <Link href="/services/vaccines" className="text-primary-green hover:underline font-semibold">
                vaccinations
              </Link>{" "}
              are up to date before boarding.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Our dedicated staff provides attentive care, clean facilities, and
              regular monitoring to ensure every guest stays happy and healthy.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  Cat Boarding Highlights Include
                </h4>
                <ul className="space-y-3 lg:space-y-2">
                  {points.map((point, index) => (
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
              <div className="flex-1 relative rounded-[16px] overflow-hidden min-h-[250px] lg:min-h-0">
                <Image
                  src="/assets/petBoarding.png"
                  alt="boarding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              Rest easy knowing your cat is in a calm, caring environment
              supervised by veterinary professionals. We also recommend{" "}
              <Link href="/services/microchipping" className="text-primary-green hover:underline font-semibold">
                microchipping
              </Link>{" "}
              and current{" "}
              <Link href="/services/parasite-prevention" className="text-primary-green hover:underline font-semibold">
                parasite prevention
              </Link>{" "}
              for all boarding guests.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              When you can't be there, you can trust that your cat is in
              compassionate, capable hands, receiving attentive care in a clean,
              secure, and professionally supervised setting. We strive to
              maintain a calm, low-stress environment so your cat can rest
              comfortably and adjust with ease.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-6 capitalize" icon="/icons/calender.svg">
                Schedule Boarding
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
