/** @format */

import Image from "next/image";

export const Gallery = () => {
  const images = [
    "/assets/gal1.png",
    "/assets/gal2.png",
    "/assets/gallery4.png",
    "/assets/gal4.png",
    "/assets/gal5.png",
    "/assets/gallery1.png",
    "/assets/gal7.png",
    "/assets/gal8.png",
    "/assets/gal9.png",
    "/assets/gal10.png",
    "/assets/gal11.png",
    "/assets/gal12.png",
    "/assets/gal13.png",
    "/assets/gal14.png",
  ];
  return (
    <div
      id="gallery"
      className="scroll-mt-[200px] max-w-[1092px] mx-auto flex flex-col items-center justify-center mt-20 mb-20 lg:mb-40 px-6 lg:px-0"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 w-full">
        <Image
          src="/icons/pinkBow.svg"
          alt="pink-paw"
          width={87}
          height={87}
          className="w-[56px] lg:w-[87px] h-auto"
        />

        <h2 className="text-[24px] lg:text-[32px] max-w-[562px] text-center lg:text-left font-normal leading-tight lg:leading-[38px] text-primary-black uppercase font-otomanopee-one">
          A Closer Look at Our Clinic <br />
          and our community
        </h2>
      </div>

      <div className="mt-4 w-full flex items-center justify-center text-center lg:text-left">
        <p className="text-primary-black max-w-full lg:max-w-[674px] text-[16px] lg:text-[22px] leading-relaxed lg:leading-[28px] font-medium">
          We believe a welcoming environment makes all the difference! Our
          clinic is designed to be calm, comfortable, and reassuring, helping
          pets feel safe and families feel confident.
        </p>
      </div>

      {/* GALLERY GRID */}
      <div className="mt-10 lg:mt-14 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:gap-y-6">
        {images.map((image, index) => {
          const itemNum = index + 1;
          const isWide = itemNum === 1 || itemNum === 10;

          return (
            <div
              key={itemNum}
              className={`relative overflow-hidden rounded-[20px] ${
                isWide
                  ? "col-span-2 h-[160px] lg:h-[260px]"
                  : "h-[160px] lg:h-[260px]"
              }`}
            >
              <Image
                src={image}
                alt={`gallery-${itemNum}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
