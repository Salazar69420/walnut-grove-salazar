/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "./allServicesList";
import { RelatedServices } from "./relatedServices";
import { Breadcrumbs } from "../shared/breadcrumbs";
import { ServiceFaq } from "./serviceFaq";

export const UltrasoundContainer = ({ faqs }: { faqs?: any[] }) => {
  const points = [
    "Liver, kidneys, bladder, and gastrointestinal tract",
    "Abdominal masses, fluid buildup, or organ changes",
    "Pregnancy monitoring and reproductive health",
    "Unexplained pain, weight loss, vomiting, or changes in appetite",
    "Follow-up monitoring of ongoing medical conditions",
  ];

  const relatedServices = [
    { name: "Pet X-Ray", href: "/services/pet-x-ray", icon: "/icons/card4.svg" },
    { name: "Bloodwork", href: "/services/bloodwork", icon: "/icons/card4.svg" },
    { name: "Lab Services", href: "/services/lab-services", icon: "/icons/card4.svg" },
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
          { name: "Pet Ultrasound", href: "/services/ultrasound-services" },
        ]}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
        <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
            <Image
              src="/icons/card2.svg"
              alt="ultrasound-icon"
              height={87}
              width={87}
              className="w-[54px] lg:w-[87px] h-auto"
            />
            <h2 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
              ULTRASOUND SERVICES
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Ultrasound imaging allows us to look inside your pet's body in a
              gentle, non-invasive way. This advanced diagnostic tool helps us
              assess internal organs in real time, complementing{" "}
              <Link href="/services/pet-x-ray" className="text-primary-green hover:underline font-semibold">
                X-ray imaging
              </Link>{" "}
              and{" "}
              <Link href="/services/bloodwork" className="text-primary-green hover:underline font-semibold">
                bloodwork
              </Link>{" "}
              for a complete diagnostic picture.
            </p>
            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]">
              Ultrasounds are especially useful for evaluating soft tissues and
              identifying concerns that may not appear on routine exams or blood
              tests. They are also an essential part of{" "}
              <Link href="/services/dog-breeding" className="text-primary-green hover:underline font-semibold">
                dog breeding
              </Link>{" "}
              and pregnancy monitoring.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch gap-6 my-10">
              <div className="flex-1 bg-[#FFFCF7] rounded-[16px] py-6 px-6 lg:py-5 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border border-[#F0EAF8] lg:border-none">
                <h4 className="text-[20px] lg:text-[24px] leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-bold font-nunito text-primary-black mb-6 lg:mb-4 w-fit">
                  What Ultrasound Helps Us Evaluate
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
                  src="/assets/ultrasound.webp"
                  alt="ultrasound"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%] mt-4">
              Ultrasound imaging gives us a clearer picture of your pet&apos;s
              internal health, helping us diagnose conditions earlier and plan
              treatment with confidence, always prioritizing comfort, safety,
              and clarity for you and your pet.
            </p>

            <div className="flex justify-center lg:justify-start">
              <CtaButton className="mt-6 capitalize" icon="/icons/calender.svg">
                Schedule An Ultrasound
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
