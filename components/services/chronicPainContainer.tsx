/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const ChronicPainContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Assessment and treatment of osteoarthritis and joint pain commonly seen in aging pets.",
    "Long-term pain monitoring and evaluation to adjust treatment plans as your pet's condition evolves.",
    "Medication and therapeutic treatment strategies designed to manage inflammation and discomfort.",
    "Mobility support recommendations including lifestyle adjustments and supportive therapies.",
    "Ongoing quality-of-life evaluations to ensure your pet remains comfortable and active.",
  ];

  const relatedServices = [
    { name: "Preventative Care", href: "/services/preventative-care", icon: "/icons/card2.svg" },
    { name: "Bloodwork", href: "/services/bloodwork", icon: "/icons/card4.svg" },
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
          { name: "Chronic Pain Management", href: "/services/chronic-pain-management" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card4.svg"
              alt="chronic-pain-icon"
              height={87}
              width={87}
              className="w-[54px] lg:w-[87px] h-auto"
            />
            <h1 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              CHRONIC PAIN MANAGEMENT
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Chronic pain, often caused by arthritis or age-related conditions,
              can significantly impact your pet&apos;s quality of life. We focus
              on identifying the source of discomfort through diagnostic tools like{" "}
              <Link href="/services/bloodwork" className="text-primary-green hover:underline font-semibold">
                bloodwork
              </Link>{" "}
              and{" "}
              <Link href="/services/pet-x-ray" className="text-primary-green hover:underline font-semibold">
                X-ray imaging
              </Link>, and creating
              individualized multimodal plans to manage pain effectively.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Our goal is to improve mobility, increase comfort, and help your
              pet stay active and happy in their daily life. Regular{" "}
              <Link href="/services/preventative-care" className="text-primary-green hover:underline font-semibold">
                wellness exams
              </Link>{" "}
              can help detect pain early.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  Our Pain Management Approach Includes
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
                  src="/assets/pain.png"
                  alt="chronic-pain"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              Regular evaluations allow us to adjust protocols as needed making
              sure your pet receives optimal relief.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-8 capitalize" icon="/icons/calender.svg">
                Learn About Pain Relief
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
