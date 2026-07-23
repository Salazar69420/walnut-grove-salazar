/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const PreventativeContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Comprehensive wellness examinations to monitor your pet's overall health and detect early signs of medical concerns.",
    "Age-based health screening recommendations tailored to puppies, adult pets, and senior companions.",
    "Nutritional counselling and weight management guidance to support healthy growth and prevent obesity-related conditions.",
    "Lifestyle and behavioural health guidance to ensure your pet's physical and emotional wellbeing.",
    "Long-term preventative health planning designed to protect your pet throughout every stage of life.",
  ];

  const relatedServices = [
    { name: "Vaccinations", href: "/services/vaccines", icon: "/icons/card2.svg" },
    { name: "Puppy & Kitten Care", href: "/services/puppy-kitten-care", icon: "/icons/card2.svg" },
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
          { name: "Preventative Care", href: "/services/preventative-care" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card2.svg"
              alt="preventative-icon"
              height={87}
              width={87}
            />
            <h2 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              PREVENTATIVE CARE
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Our preventative care programs are designed to protect your
              pet&apos;s health before problems arise. Through regular wellness
              examinations, routine{" "}
              <Link href="/services/bloodwork" className="text-primary-green hover:underline font-semibold">
                bloodwork screenings
              </Link>
              , and lifestyle-based care plans,
              we focus on maintaining long-term health and early disease
              detection.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              By monitoring your pet&apos;s development, weight, and overall
              condition, our team can identify potential concerns early and
              recommend proactive treatment strategies tailored to your
              pet&apos;s individual needs. Keeping up with{" "}
              <Link href="/services/vaccines" className="text-primary-green hover:underline font-semibold">
                vaccinations
              </Link>{" "}
              and{" "}
              <Link href="/services/parasite-prevention" className="text-primary-green hover:underline font-semibold">
                parasite prevention
              </Link>{" "}
              is a key part of any wellness plan.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  Key Preventative Care Services Include
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
                  src="/assets/preventionCare.png"
                  alt="preventative-care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              Preventative medicine plays a vital role in maintaining your
              pet&apos;s quality of life. Through regular monitoring and
              proactive care, we help reduce the risk of serious illnesses while
              supporting a long, healthy life for your companion.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-8 capitalize" icon="/icons/calender.svg">
                Schedule A Wellness Exam
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
