/** @format */

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";

const points = [
  "Ongoing education and professional development",
  "Modern diagnostic and surgical technology",
  "Gentle, compassionate handling techniques",
  "Clear communication and transparent guidance",
  "Supports longer, healthier lives through proactive monitoring.",
];

export const Care = () => {
  return (
    <div
      id="story"
      className="scroll-mt-[200px] mb-20 lg:mb-50 max-w-[1185px] relative mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-6 mt-20 lg:mt-[120px] font-nunito px-6 lg:px-0"
    >
      <Image
        src="/assets/leftPaws.svg"
        alt="left"
        className="absolute top-[30%] h-[1485px] -left-[30%] z-0 hidden lg:block"
        width={392}
        height={1484}
      />
      <Image
        src="/assets/rightPaws.svg"
        alt="right"
        className="absolute top-[185%] h-[1485px] -right-[30%] z-0 hidden lg:block"
        width={392}
        height={1484}
      />
      <Image
        src="/assets/homeWeCare.webp"
        alt="welcome"
        height={573}
        width={458}
        className="z-1 w-full object-cover lg:w-[458px] md:h-[573px] h-auto rounded-[16px]"
      />
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 ">
          <Image
            src="/assets/heartPaw.svg"
            alt="heart-paw"
            height={87}
            width={87}
            className="hidden lg:block w-[56px] lg:w-[87px] h-auto"
          />
          <h2 className="text-[24px] lg:text-[32px] font-nunito font-normal z-1 leading-tight lg:leading-[38px] text-primary-black uppercase font-otomanopee-one rounded-[16px]">
            Dedicated to Exceptional Care, Every Day!
          </h2>
        </div>
        <div className="mt-4 lg:mt-4">
          <p className="text-primary-black text-[16px] lg:text-[22px] leading-relaxed lg:leading-[28px] font-medium">
            For more than 15 years, Walnut Grove Animal Hospital has proudly
            served the Langley, BC community. As one of the area’s longstanding
            veterinary clinics, we have built our reputation on trust, medical
            excellence, and genuine compassion.
          </p>
        </div>
        <h4 className="text-[20px] lg:text-[24px] my-6 lg:my-4 leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-semibold font-nunito text-primary-black mb-4 w-fit">
          Our Mission
        </h4>
        <p className="text-primary-black text-[16px] lg:text-[22px] leading-relaxed lg:leading-[28px] font-medium">
          To assemble a veterinary healthcare team committed to delivering
          outstanding client service and the highest standards of veterinary
          medicine.
        </p>
        <h4 className="text-[20px] lg:text-[24px] my-6 lg:my-4 leading-tight lg:leading-[28px] border-b-2 border-primary-purple font-semibold font-nunito text-primary-black mb-4 w-fit">
          We continuously invest in
        </h4>
        <div className="flex flex-col gap-3 lg:gap-2 items-center lg:items-start text-center lg:text-left">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span className="text-primary-green hidden lg:inline">
                &#9679;
              </span>
              <p className="text-primary-black text-[15px] lg:text-[20px] leading-relaxed lg:leading-[28px] font-normal">
                {point}
              </p>
            </div>
          ))}
          <p className="text-primary-black text-[16px] lg:text-[22px] mt-6 lg:mt-4 leading-relaxed lg:leading-[28px] font-medium">
            Whether you’re visiting us for preventive care, diagnostics,
            surgery, or boarding, you can count on our team when quality truly
            matters.
          </p>
          <div className="w-fit mt-8 lg:mt-6">
            <CtaButton className="capitalize" icon="/icons/calender.svg">
              schedule appointment
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
