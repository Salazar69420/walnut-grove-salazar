/** @format */

"use client";

import Image from "next/image";
import { CtaButton } from "../ui/ctaButton";
import Link from "next/link";
import { Instagram, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Our Team", href: "/about#team" },
        { name: "Gallery", href: "/about#gallery" },
        { name: "F.A.Q's", href: "/faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Preventive & Wellness", href: "/services/preventative-care" },
        { name: "Dental & Specialized", href: "/services/dental-services" },
        { name: "Surgery & Reproductive", href: "/services/pet-surgery" },
        { name: "Diagnostics & Lab", href: "/services/bloodwork" },
        { name: "Pet Boarding", href: "/services/pet-boarding-services" },
        { name: "View All Services", href: "/services" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Pet Health Blog", href: "/blog" },
        { name: "Pet Library", href: "/resources/how-to-videos" },
        { name: "Pet Food Recalls", href: "/resources/pet-food-recalls" },
        { name: "Poisonous Plants", href: "/resources/poisonous-plants" },
        { name: "Links", href: "/resources/how-to-videos#important-links" },
      ],
    },
  ];

  return (
    <footer className="w-full max-w-[calc(100vw-56px)] mx-auto relative h-fit rounded-[20px] mt-20 relative bg-primary-purple pb-10 mb-[28px]">
      {/* <Image
        src="/assets/footer.svg"
        alt="footer-banner"
        fill
        className="absolute top-0 left-0 z-0 object-cover"
      /> */}

      <div className="relative z-10 max-w-[1296px] mx-auto pt-10 px-6 lg:px-4">
        {/* Top Section: Map and Working Hours */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-start gap-6 lg:gap-10">
          {/* Map Area */}
          <div className="flex-1 min-h-[131px] bg-white rounded-[18px] overflow-hidden shadow-sm relative border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1774700352646!6m8!1m7!1sKh4mWQXbT_BqNYb-C2ubMQ!2m2!1d49.16296129558101!2d-122.6392032980328!3f140.8!4f0!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Working Hours Card */}
          <div className="w-full lg:w-[380px] bg-primary-blue rounded-[18px] p-8 shadow-sm h-auto lg:h-[112px] p-[18px]">
            <h3 className="text-[16px] font-otomanopee-one text-primary-black mb-2 uppercase">
              Working Hours
            </h3>
            <div className="text-[14px] font-nunito text-primary-black">
              <p className="flex justify-between">
                <span className="font-medium">Monday to Friday :</span>
                <span>8:30am-7:00pm</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Saturday & Sunday :</span>
                <span>9:00am-5:00pm</span>
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Info and Schedule Button */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-6 lg:mt-3 gap-6 lg:gap-0">
          <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-12">
            {/* Address */}
            <div className="flex items-start gap-3">
              <Image
                src="/icons/location.svg"
                alt="location"
                width={21}
                height={24}
              />

              <div className="text-[14px] font-nunito text-primary-black">
                <p className="font-medium">101A-20995 88 Ave</p>
                <p>Langley, BC V1M2C9, Canada</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Image
                src="/icons/phone.svg"
                alt="phone"
                width={21}
                height={24}
              />

              <p className="text-[14px] font-medium font-nunito text-primary-black">
                (604) 888-2628
              </p>
            </div>
          </div>

          {/* Schedule Button */}
          <div className="flex w-full lg:w-auto mt-4 lg:mt-0 lg:-mt-5">
            <CtaButton
              icon="/icons/calender.svg"
              className="w-full justify-center lg:w-auto"
            >
              Schedule Appointment
            </CtaButton>
          </div>
        </div>

        {/* Bottom Section: Logo, Links and Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-10 pb-8 gap-8 lg:gap-0 text-center lg:text-left">
          {/* Logo Brand */}
          <div className="flex items-center gap-4 max-w-[300px]">
            <Image src="/assets/logo.png" alt="logo" width={251} height={52} />
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-12 flex-1 lg:px-10 w-full lg:w-auto">
            {footerLinks.map((category, catIdx) => (
              <div key={catIdx}>
                <h4 className="font-bold text-[14px] mb-3 text-primary-black   whitespace-nowrap">
                  {category.title}
                </h4>
                <ul className="space-y-2 text-[12px] text-primary-black">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="cursor-pointer hover:text-primary-green transition-colors whitespace-nowrap"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-center lg:text-right mt-2 lg:mt-0 w-full lg:w-auto">
            <h4 className="font-bold text-[14px] mb-4 text-primary-black">
              Find Us On Social Media!
            </h4>
            <div className="flex gap-4 justify-center lg:justify-end">
              <Link
                href="https://www.instagram.com/walnutgroveanimalhospitalbc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green/20 p-2.5 rounded-xl cursor-pointer hover:bg-primary-green/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} className="text-primary-green" />
              </Link>
              <Link
                href="https://www.facebook.com/walnutgroveanimalhospitalbc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green/20 p-2.5 rounded-xl cursor-pointer hover:bg-primary-green/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} className="text-primary-green" />
              </Link>
              <Link
                href="https://www.google.com/maps/place/Walnut+Grove+Animal+Hospital+Langley/@49.1629613,-122.6546539,17z"
                target="_blank"
                className="bg-primary-green/20 p-2.5 rounded-xl cursor-pointer hover:bg-primary-green/30 transition-colors"
                aria-label="Google Business"
              >
                <MapPin size={28} className="text-primary-green" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t-2 border-white/30 max-w-[1296px] mx-auto px-6 lg:px-4 pt-5">
        <p className="text-white/70 text-[13px] font-medium">
          © Copyright 2026, All Rights Reserved
        </p>
        <Image
          src="/icons/food.svg"
          alt="footer-bottom"
          width={120}
          height={36}
          className="shrink-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
