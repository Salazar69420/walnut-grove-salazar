/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CtaButton } from "../ui/ctaButton";
import { Menu, X, Phone } from "lucide-react";
import { useModalStore } from "@/utils/store";

type DropdownType = "services" | "about" | "resources" | null;

export const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModalStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Close menus when pathname changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const headerLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
      hasDropdown: true,
    },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
    },
    {
      label: "Resources",
      href: "/resources",
      hasDropdown: true,
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  const servicesDropdownContent = {
    sections: [
      {
        title: "All Services",
        items: [
          {
            label: "View All Services",
            description:
              "Comprehensive veterinary services guided by expertise and empathy.",
            href: "/services",
          },
          {
            label: "Pet Boarding Services",
            description:
              "A safe, calm, and caring stay for your pet while you're away.",
            href: "/services/pet-boarding-services",
          },
        ],
      },
      {
        title: "Preventive & Wellness Care",
        items: [
          { label: "Preventative Care", href: "/services/preventative-care" },
          { label: "Vaccines", href: "/services/vaccines" },
          {
            label: "Parasite prevention",
            href: "/services/parasite-prevention",
          },
          { label: "Puppy & kitten care", href: "/services/puppy-kitten-care" },
          { label: "Microchipping", href: "/services/microchipping" },
        ],
      },
      {
        title: "Specialized & Chronic Care",
        items: [
          { label: "Laboratory services", href: "/services/lab-services" },
          {
            label: "Small mammal medicine",
            href: "/services/small-mammal-medicine",
          },
          {
            label: "Chronic pain management",
            href: "/services/chronic-pain-management",
          },
          {
            label: "Skin & ear infections",
            href: "/services/skin-ear-infections",
          },
          {
            label: "Soft tissue, eye & ear procedures",
            href: "/services/soft-tissue-eye-ear",
          },
          {
            label: "Compassionate Euthanasia",
            href: "/services/euthanasia",
          },
        ],
      },
      {
        title: "Surgical & Reproductive Care",
        items: [
          { label: "Anesthesia", href: "/services/anesthesia" },
          { label: "Pet surgery", href: "/services/pet-surgery" },
          { label: "Spay & neuter", href: "/services/spay-neuter" },
          { label: "Dog breeding", href: "/services/dog-breeding" },
          { label: "Ultrasound", href: "/services/ultrasound-services" },
        ],
      },
      {
        title: "Diagnostics & Laboratory",
        items: [
          { label: "Laboratory services", href: "/services/lab-services" },
          { label: "Bloodwork", href: "/services/bloodwork" },
          { label: "Pet Ultrasound", href: "/services/ultrasound-services" },
          { label: "Pet X-Ray", href: "/services/pet-x-ray" },
        ],
      },
    ],
  };

  const resourcesDropdownContent = {
    sections: [
      {
        title: "Pet Health Blog",
        description: "Veterinary tips, preventative guides, and clinic updates.",
        href: "/blog",
      },
      {
        title: "Pet Food Recalls",
        description: "Latest safety alerts and recall updates for your pet.",
        href: "/resources/pet-food-recalls",
      },
      {
        title: "Poisonous Plant",
        description: "Common plants that may be harmful to cats and dogs.",
        href: "/resources/poisonous-plants",
      },
      {
        title: "How To Videos",
        description: "Easy-to-follow videos for everyday pet care at home.",
        href: "/resources/how-to-videos",
      },
      {
        title: "Links",
        description: "Trusted resources for additional pet health information.",
        href: "/resources/how-to-videos#important-links",
      },
      {
        title: "F.A.Q's",
        description: "Answers to common questions about our services and care.",
        href: "/faq",
      },
    ],
  };

  const aboutDropdownContent = {
    sections: [
      {
        title: "Our Story",
        description: "Walnut Grove's journey and our daily care philosophy.",
        href: "/about#story",
      },
      {
        title: "How We Care",
        description: "Our philosophy and commitment to compassionate care.",
        href: "/about#care-philosophy",
      },
      {
        title: "Meet The Team",
        description: "The caring professionals behind your pet's treatment.",
        href: "/about#team",
      },
      {
        title: "View Our Gallery",
        description:
          "A look inside our clinic and moments that define our care.",
        href: "/about#gallery",
      },
    ],
  };

  const handleToggleDropdown = (dropdown: DropdownType) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div
      className={`max-w-[1880px] w-[95%] font-nunito rounded-[24px] lg:rounded-[40px] mx-auto min-h-[72px] lg:h-[92px] bg-primary-white/90 backdrop-blur-md z-[50] shadow-[0px_0px_20px_0px_#57575614] top-5 ${
        pathname === "/" ? "fixed left-1/2 -translate-x-1/2" : "sticky"
      }`}
      ref={dropdownRef}
    >
      <div className="flex items-center justify-between h-full w-full mx-auto px-6 lg:px-[90px] py-4 lg:py-5">
        <Link href="/" className="z-10 shrink-0">
          <Image
            src="/assets/logo.png"
            alt="logo"
            height={52}
            width={251}
            className="w-[180px] lg:w-[251px] h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-15 ml-2">
          {headerLinks.map((link) => {
            const dropdownKey =
              link.label === "Services"
                ? "services"
                : link.label === "About Us"
                  ? "about"
                  : link.label === "Resources"
                    ? "resources"
                    : null;
            const isActive = activeDropdown === dropdownKey;

            return (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() =>
                      handleToggleDropdown(dropdownKey as DropdownType)
                    }
                    className="text-[18px] h-[52px] text-primary-black flex items-center leading-5 whitespace-nowrap font-medium hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    className="text-[18px] h-[52px] text-primary-black flex items-center leading-5 whitespace-nowrap font-medium hover:opacity-80 transition-opacity"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Services Dropdown - 5-column layout */}
                {link.label === "Services" && isActive && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1260px] bg-[#FFFCF7] rounded-[20px] shadow-[0px_8px_40px_0px_rgba(87,87,86,0.12)] py-10 px-0 flex border border-[#EBE2F9]">
                    {/* Pointer Arrow */}
                    <div className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-[124px] h-[6px] bg-primary-green rounded-t-[6px]"></div>
                    {servicesDropdownContent.sections.map((section, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 px-6 ${idx !== 0 ? "border-l border-[#E8E8E8]" : ""}`}
                      >
                        {/* Title: Nunito 400 16px/18px #3C3C3B */}
                        <h3 className="font-nunito font-normal whitespace-nowrap text-[16px] leading-[18px] text-[#3C3C3B] mb-5 pb-2 border-b border-[#C9A0DC] capitalize">
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveDropdown(null);
                                }}
                                className="group block"
                              >
                                {"description" in item && item.description ? (
                                  <>
                                    {/* Bold nav title for col 1 items */}
                                    <span className="font-nunito font-semibold text-[16px] leading-[18px] text-[#3C3C3B] group-hover:text-primary-green transition-all block mb-1">
                                      {item.label}
                                    </span>
                                    <p className="font-nunito font-light text-[14px] leading-[14px] text-[#3C3C3B] group-hover:text-primary-green transition-all">
                                      {item.description}
                                    </p>
                                  </>
                                ) : (
                                  /* List items: Nunito 300 14px/14px */
                                  <span className="font-nunito font-light text-[14px] leading-[14px] text-[#3C3C3B] hover:text-primary-green transition-all flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3C3C3B] flex-shrink-0" />
                                    {item.label}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Resources Dropdown - 2-column layout */}
                {link.label === "Resources" && isActive && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-[#FFFCF7] rounded-[20px] shadow-[0px_8px_40px_0px_rgba(87,87,86,0.12)] py-10 px-12 grid grid-cols-2 gap-x-12 gap-y-8 border border-[#EBE2F9]">
                    {/* Pointer Arrow */}
                    <div className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-[124px] h-[6px] bg-primary-green rounded-t-[6px]"></div>
                    {resourcesDropdownContent.sections.map((section, idx) => (
                      <Link
                        key={idx}
                        href={section.href}
                        className="group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                      >
                        <h3 className="font-nunito font-normal text-[20px] leading-[18px] text-[#3C3C3B] mb-2 pb-1 border-b border-[#E7D2FF] w-fit group-hover:text-primary-green transition-all">
                          {section.title}
                        </h3>
                        <p className="font-nunito font-light text-[14px] leading-[14px] text-[#3C3C3B] group-hover:text-primary-green transition-all">
                          {section.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}

                {/* About Us Dropdown */}
                {link.label === "About Us" && isActive && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-[#FFFCF7] rounded-[20px] shadow-[0px_8px_40px_0px_rgba(87,87,86,0.12)] p-8 grid grid-cols-2 gap-x-10 gap-y-[18px] border border-[#EBE2F9]">
                    {/* Pointer Arrow */}
                    <div className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-[124px] h-[6px] bg-primary-green rounded-t-[6px]"></div>
                    {aboutDropdownContent.sections.map((section, idx) => (
                      <Link
                        key={idx}
                        href={section.href}
                        className="group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(null);
                        }}
                      >
                        <h3 className="font-nunito font-normal text-[20px] leading-[18px] text-[#3C3C3B] mb-1 pb-1 border-b border-[#E7D2FF] w-fit group-hover:text-primary-green transition-all">
                          {section.title}
                        </h3>
                        <p className="font-nunito font-light text-[14px] leading-[14px] text-[#3C3C3B] group-hover:text-primary-green transition-all">
                          {section.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <CtaButton icon="/icons/calender.svg">Schedule Appointment</CtaButton>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex lg:hidden items-center gap-3 z-10">
          <a
            href="tel:+16048882628"
            className="p-2.5 bg-primary-green/20 text-primary-green rounded-xl hover:bg-primary-green/30 transition-colors flex items-center justify-center"
            aria-label="Call Us"
          >
            <Phone size={20} />
          </a>
          <button
            className="p-2 text-primary-black flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[88px] bg-primary-white z-[49] transition-transform duration-300 ease-in-out overflow-y-auto w-full ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "calc(100vh - 88px)" }}
      >
        <div className="flex flex-col p-6 pb-24 space-y-6">
          {headerLinks.map((link) => {
            const dropdownKey =
              link.label === "Services"
                ? "services"
                : link.label === "About Us"
                  ? "about"
                  : link.label === "Resources"
                    ? "resources"
                    : null;
            const isActive = activeDropdown === dropdownKey;

            return (
              <div
                key={link.label}
                className="flex flex-col border-b border-[#EBE2F9] pb-4 last:border-0 blur-none"
              >
                {link.hasDropdown ? (
                  <button
                    onClick={() =>
                      handleToggleDropdown(dropdownKey as DropdownType)
                    }
                    className="text-[20px] font-otomanopee-one text-primary-black flex items-center justify-between uppercase w-full"
                  >
                    {link.label}
                    <svg
                      className={`w-6 h-6 transition-transform ${isActive ? "rotate-180 text-primary-green" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    className="text-[20px] font-otomanopee-one text-primary-black uppercase w-full block hover:text-primary-green transition-colors"
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mobile Dropdown Content */}
                {isActive && (
                  <div className="mt-4 flex flex-col pl-4 border-l-2 border-primary-green/20 space-y-6">
                    {link.label === "Services" &&
                      servicesDropdownContent.sections.map((section, idx) => (
                        <div key={idx}>
                          <p className="font-nunito font-bold text-[16px] text-primary-black mb-3">
                            {section.title}
                          </p>
                          <ul className="space-y-4">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item.href}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(false);
                                  }}
                                  className="text-[15px] font-nunito text-[#3C3C3B] block hover:text-primary-green"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {link.label === "Resources" &&
                      resourcesDropdownContent.sections.map((section, idx) => (
                        <Link
                          key={idx}
                          href={section.href}
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileMenuOpen(false);
                          }}
                          className="block group"
                        >
                          <p className="font-nunito font-bold text-[16px] text-primary-black group-hover:text-primary-green mb-1">
                            {section.title}
                          </p>
                          <p className="font-nunito text-[14px] text-[#3C3C3B]">
                            {section.description}
                          </p>
                        </Link>
                      ))}

                    {link.label === "About Us" &&
                      aboutDropdownContent.sections.map((section, idx) => (
                        <Link
                          key={idx}
                          href={section.href}
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileMenuOpen(false);
                          }}
                          className="block group"
                        >
                          <p className="font-nunito font-bold text-[16px] text-primary-black group-hover:text-primary-green mb-1">
                            {section.title}
                          </p>
                          <p className="font-nunito text-[14px] text-[#3C3C3B]">
                            {section.description}
                          </p>
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile-only additional links */}
          <div className="flex flex-col space-y-6 pt-4">
            <Link
              className="text-[20px] font-otomanopee-one text-primary-black uppercase w-full block hover:text-primary-green transition-colors border-b border-[#EBE2F9] pb-4"
              href="https://www.myvetstore.ca/"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pet Supplies
            </Link>
            <Link
              className="text-[20px] font-otomanopee-one text-primary-black uppercase w-full block hover:text-primary-green transition-colors border-b border-[#EBE2F9] pb-4"
              href="/resources/how-to-videos"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pet Care Tips
            </Link>
          </div>

          <div className="pt-6 w-full flex flex-col items-center gap-4">
            <a
              href="tel:+16048882628"
              className="flex items-center justify-center gap-2.5 bg-primary-green/20 hover:bg-primary-green/30 text-primary-black rounded-[18px] px-6 py-3 w-full font-medium text-[18px] transition-all"
            >
              <Phone size={20} className="text-primary-green" />
              <span>Call (604) 888-2628</span>
            </a>
            <CtaButton icon="/icons/calender.svg" onClick={openModal}>
              Schedule Appointment
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
