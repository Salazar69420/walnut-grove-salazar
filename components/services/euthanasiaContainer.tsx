/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const EuthanasiaContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Quality of life consultations to help you assess your pet's comfort, pain levels, and overall well-being.",
    "A dedicated, quiet comfort space designed to provide a peaceful, stress-free setting for you and your pet.",
    "Step-by-step guidance on what to expect, ensuring you feel supported and informed throughout the process.",
    "Personalized options for family presence, allowing you to choose how you wish to say goodbye.",
    "Compassionate post-care arrangements, including private or communal cremation services and memorial keepsakes.",
  ];

  const relatedServices = [
    { name: "Chronic Pain Management", href: "/services/chronic-pain-management", icon: "/icons/card4.svg" },
    { name: "Bloodwork", href: "/services/bloodwork", icon: "/icons/card4.svg" },
    { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
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
          { name: "Compassionate Euthanasia", href: "/services/euthanasia" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card1.svg"
              alt="euthanasia-icon"
              height={87}
              width={87}
            />
            <h1 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              Compassionate End-of-Life Care
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Saying goodbye to a beloved pet is one of the most difficult decisions a pet owner will ever make.
              At Walnut Grove Animal Hospital, we are dedicated to supporting you with the utmost compassion,
              respect, and dignity during this tender time. Our team is here to help you evaluate your pet&apos;s
              quality of life and guide you through a gentle, peaceful transition when the time comes.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              We believe that every pet deserves a peaceful, painless, and dignified farewell. Our{" "}
              <Link href="/services/chronic-pain-management" className="text-primary-green hover:underline font-semibold">
                chronic pain management
              </Link>{" "}
              services can help improve comfort during difficult health challenges, and our staff handles
              every detail with gentle care, focusing entirely on your pet&apos;s comfort and your family&apos;s emotional needs.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  Our Supportive Services Include
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
                  src="/assets/euthanasia.png"
                  alt="Compassionate Euthanasia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              We are here to support you at every stage of the decision-making process. Diagnostic tools like{" "}
              <Link href="/services/bloodwork" className="text-primary-green hover:underline font-semibold">
                bloodwork
              </Link>{" "}
              can help assess your pet&apos;s current condition. Please do not hesitate to reach
              out if you need to talk, ask questions about the procedure, or receive resources on pet loss and grieving.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-8 capitalize" icon="/icons/calender.svg">
                Schedule Quality of Life Consultation
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
