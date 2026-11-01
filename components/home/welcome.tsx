/** @format */

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";

const points = [
  "A friendly, experienced veterinary team that treats pets like their own.",
  "Modern equipment for accurate diagnosis and safer treatments.",
  "Honest guidance and transparent communication, no rushed visits.",
  "A warm, welcoming clinic designed to keep pets comfortable.",
];

export const Welcome = () => {
  return (
    <div className="mb-20 max-w-[1296px] relative mx-auto flex flex-col lg:flex-row items-center gap-10 mt-10 lg:mt-[140px] font-nunito px-4 lg:px-0">
      <Image
        src="/assets/leftPaws.svg"
        alt="left"
        className="hidden lg:block absolute top-[600%] h-[1485px] -left-[30%] z-0"
        width={392}
        height={1484}
      />
      <Image
        src="/assets/rightPaws.svg"
        alt="right"
        className="hidden lg:block absolute top-[200%] h-[1485px] -right-[25%] z-0"
        width={392}
        height={1484}
      />
      <Image
        src="/assets/welcome.webp"
        alt="welcome"
        height={481}
        width={522}
        className="z-2 md:h-[481px] w-[522px] h-[373px]"
      />
      <div className="flex flex-col justify-center items-start">
        <div className="flex flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mt-6 lg:mt-0">
          <Image
            src="/assets/heartPaw.svg"
            alt="heart-paw"
            height={87}
            width={87}
            className="w-[48px] lg:w-[87px] h-auto"
          />
          <h2 className="text-[22px] lg:text-[32px] text-left font-nunito font-normal z-1 leading-tight lg:leading-[38px] text-primary-black uppercase font-otomanopee-one">
            Welcome to Walnut Grove - <br className="hidden lg:block" />
            Langley&apos;s Trusted Animal Hospital!
          </h2>
        </div>
        <div className="flex flex-col mt-4 gap-2 lg:gap-4 items-start text-left">
          {points.map((point) => (
            <div key={point}>
              <p className="text-primary-black text-[16px] lg:text-[20px] leading-snug lg:leading-[28px] font-normal">
                {" "}
                &#9679; {point}
              </p>
            </div>
          ))}
          <p className="text-primary-black text-[18px] lg:text-[22px] leading-snug lg:leading-[28px] font-medium mt-4 lg:mt-0">
            From routine screenings to advanced procedures and comfortable
            boarding, our dedicated team is here to support your pet’s health,
            and give you peace of mind.
          </p>
          <div className="w-full lg:w-fit flex justify-center lg:justify-start">
            <Link href="/about">
              <CtaButton className="mt-6" icon="/icons/vet.svg">
                know more about us
              </CtaButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
