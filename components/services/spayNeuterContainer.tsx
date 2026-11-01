/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const SpayNeuterContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Lower Risk of Hormone-Driven Aggression: Supports more stable behavioral patterns.",
    "Prevention of Unplanned Litters: Responsible population control and community health.",
    "Reduced Risk of Mammary Tumors: Significantly lowers cancer risk when performed early.",
    "Reduced Prostate Disease Risk: Lowers incidence of benign prostatic enlargement and infections.",
    "Long-Term Health & Longevity Benefits: Contributes to a healthier, more predictable life course.",
  ];

  const relatedServices = [
    { name: "Anesthesia", href: "/services/anesthesia", icon: "/icons/card3.svg" },
    { name: "Pet Surgery", href: "/services/pet-surgery", icon: "/icons/card3.svg" },
    { name: "Puppy & Kitten Care", href: "/services/puppy-kitten-care", icon: "/icons/card2.svg" },
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
        className="absolute top-50 h-[1485px] right-10 z-0 hidden lg:block"
        width={392}
        height={1484}
      />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "Spay & Neuter", href: "/services/spay-neuter" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card1.svg"
              alt="spay-neuter-icon"
              height={87}
              width={87}
              className="w-[54px] lg:w-[87px] h-auto"
            />
            <h1 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              SPAY & NEUTER
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Spaying and neutering are important preventive procedures that
              support your pet's long-term health and well-being. Beyond
              preventing unplanned litters, these{" "}
              <Link href="/services/pet-surgery" className="text-primary-green hover:underline font-semibold">
                surgical procedures
              </Link>{" "}
              play a key role in
              reducing the risk of serious health conditions and improving
              quality of life.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Our experienced veterinary team provides professional,
              compassionate spay and neuter care, using safe{" "}
              <Link href="/services/anesthesia" className="text-primary-green hover:underline font-semibold">
                anesthesia protocols
              </Link>{" "}
              and guiding you through every step
              of the process. Pre-surgical{" "}
              <Link href="/services/bloodwork" className="text-primary-green hover:underline font-semibold">
                bloodwork
              </Link>{" "}
              ensures your pet is ready for the procedure.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  Benefits of Spaying & Neutering
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
                  src="/assets/spray.png"
                  alt="spay-neuter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              We recommend discussing the ideal timing for your pet&apos;s
              procedure with your veterinarian, as age, breed, and health
              factors can influence the optimal approach. This is especially important for{" "}
              <Link href="/services/puppy-kitten-care" className="text-primary-green hover:underline font-semibold">
                puppies and kittens
              </Link>.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-6 capitalize" icon="/icons/calender.svg">
                Schedule A Surgery
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
