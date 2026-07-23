/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const LaboratoryContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Complete Blood Counts (CBCs) to assess red and white blood cells and platelets",
    "Chemistry profiles evaluating kidney, liver, electrolyte, and blood glucose levels",
    "Pre-anesthetic blood panels to support safe surgical procedures",
    "Urinalysis and fecal testing for kidney health and parasite screening",
    "Heartworm and tick-borne disease testing",
    "Feline leukaemia (FeLV) and FIV testing",
    "Pancreatic, clotting, skin, ear, and parasite diagnostics",
  ];

  const relatedServices = [
    { name: "Bloodwork", href: "/services/bloodwork", icon: "/icons/card4.svg" },
    { name: "Pet X-Ray", href: "/services/pet-x-ray", icon: "/icons/card4.svg" },
    { name: "Pet Ultrasound", href: "/services/ultrasound-services", icon: "/icons/card2.svg" },
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
          { name: "Lab Services", href: "/services/lab-services" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card4.svg"
              alt="lab-icon"
              height={87}
              width={87}
              className="w-[54px] lg:w-[87px] h-auto"
            />
            <h2 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              LAB SERVICES
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Detailed lab testing is essential for accurate diagnosis and
              effective treatment. Our comprehensive in-house laboratory
              services, including{" "}
              <Link href="/services/bloodwork" className="text-primary-green hover:underline font-semibold">
                bloodwork analysis
              </Link>
              , allow us to perform a variety of tests quickly and
              accurately, providing prompt answers for your pet&apos;s care.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              From routine{" "}
              <Link href="/services/preventative-care" className="text-primary-green hover:underline font-semibold">
                wellness screenings
              </Link>{" "}
              to urgent diagnostic evaluations, our lab
              capabilities support every aspect of veterinary medicine. Lab results complement{" "}
              <Link href="/services/ultrasound-services" className="text-primary-green hover:underline font-semibold">
                ultrasound
              </Link>{" "}
              and{" "}
              <Link href="/services/pet-x-ray" className="text-primary-green hover:underline font-semibold">
                X-ray imaging
              </Link>{" "}
              for comprehensive diagnostics.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  Our Lab Capabilities Include
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
                  src="/assets/laboratory.webp"
                  alt="lab"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              Fast and accurate lab results allow us to begin appropriate
              treatments sooner, promoting better health outcomes for your pet.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-6 capitalize" icon="/icons/calender.svg">
                Schedule A Test
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
