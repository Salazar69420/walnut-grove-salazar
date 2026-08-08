/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";

import { LucideIcon, Phone } from "lucide-react";
import { useModalStore } from "@/utils/store";

type FloatingIconItem = {
  label: string;
  icon: string | LucideIcon;
  href?: string;
  onClick?: () => void;
  isLucide?: boolean;
  target?: string;
};

export const FloatingIcons = () => {
  const { openModal } = useModalStore();

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSehUwbaqcTlwSin_brRmliAyTd3o4EvM7lk6baeJgzMfcszzw/viewform?usp=publish-editor";

  const icons: FloatingIconItem[] = [
    {
      label: "(604) 888-2628",
      icon: Phone,
      onClick: () => {
        const phoneNumber = "+16048882628";
        if (window.innerWidth >= 1024) {
          navigator.clipboard.writeText(phoneNumber);
          alert("Phone number copied to clipboard!");
        } else {
          window.location.href = `tel:${phoneNumber}`;
        }
      },
      isLucide: true,
    },
    {
      label: "Request Appointment",
      icon: "/icons/calender.svg",
      href: GOOGLE_FORM_URL,
      target: "_blank",
      onClick: openModal,
    },
    {
      label: "Pet Supplies",
      icon: "/icons/petCare.svg",
      href: "https://www.myvetstore.ca/",
      target: "_blank",
    },
    {
      label: "Pet Care Tips",
      icon: "/icons/petFood.svg",
      href: "/resources/how-to-videos",
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[21] flex flex-col gap-4 pr-4">
      {icons.map((item, index) => {
        const Icon = item.icon;
        const buttonContent = (
          <div className="flex flex-col lg:flex-row items-center bg-primary-green hover:bg-[#8CBF67] transition-all duration-500 ease-in-out h-auto lg:h-[54px] w-[64px] lg:w-auto rounded-[12px] lg:rounded-[22px] overflow-hidden shadow-lg border-none outline-none py-2 lg:py-0">
            {/* Icon Container - fixed width on desktop, centric on mobile */}
            <div className="w-[40px] lg:w-[54px] h-[40px] lg:h-[54px] flex items-center justify-center flex-shrink-0 lg:bg-transparent order-1 lg:order-2">
              {item.isLucide && typeof Icon !== "string" ? (
                (() => {
                  const LucideIcon = Icon as any;
                  return (
                    <LucideIcon
                      strokeWidth={1.2}
                      className="text-white w-6 lg:w-10 h-auto"
                    />
                  );
                })()
              ) : (
                <Image
                  src={Icon as string}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="w-6 lg:w-10 h-auto"
                />
              )}
            </div>

            {/* Label Container - visible on mobile, expandable on desktop */}
            <div className="lg:max-w-0 lg:group-hover:max-w-[280px] transition-all duration-500 ease-in-out overflow-hidden order-2 lg:order-1 mt-1 lg:mt-0">
              <span className="text-white font-nunito font-bold text-[10px] lg:text-[16px] text-center lg:text-left whitespace-normal lg:whitespace-nowrap px-1 lg:pl-6 lg:pr-2 block leading-tight">
                {item.label}
              </span>
            </div>
          </div>
        );

        if (item.href) {
          const isExternal = item.href.startsWith("http");
          return (
            <Link
              key={index}
              href={item.href}
              target={item.target || (isExternal ? "_blank" : "_self")}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={item.onClick}
              className="group flex items-center justify-end"
            >
              {buttonContent}
            </Link>
          );
        }

        return (
          <button
            key={index}
            onClick={item.onClick}
            className="group flex items-center justify-end bg-transparent p-0 border-none outline-none cursor-pointer"
            aria-label={item.label}
          >
            {buttonContent}
          </button>
        );
      })}
    </div>
  );
};
