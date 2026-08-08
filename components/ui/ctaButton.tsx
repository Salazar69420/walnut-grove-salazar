/** @format */

"use client";

import { cn } from "@/utils/helpers";
import { useModalStore } from "@/utils/store";
import Image from "next/image";
import React from "react";

// Helper to recursively extract text from React children
const getTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string" || typeof children === "number") {
    return children.toString();
  }
  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }
  if (React.isValidElement(children)) {
    return getTextFromChildren((children.props as any).children);
  }
  return "";
};

export const CtaButton = ({
  icon,
  children,
  className,
  onClick,
}: {
  icon: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { openModal } = useModalStore();

  const handleClick = (e: React.MouseEvent) => {
    const textContent = getTextFromChildren(children).toLowerCase();
    console.log(textContent);

    if (
      textContent.includes("schedule") ||
      textContent.includes("request") ||
      textContent.includes("appointment")
    ) {
      e.preventDefault();
      openModal();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        `flex items-center justify-center cursor-pointer group`,
        className,
      )}
    >
      <button className="cursor-pointer bg-primary-green text-text-white rounded-[18px] text-[18px] px-5 py-2.5 font-medium leading-[26px] capitalize transition-all duration-500 group-hover:shadow-[inset_0px_0px_20px_0px_#FFF153]">
        {children}
      </button>
      <div className="h-2 w-2.5 bg-primary-green group-hover:shadow-[inset_0px_0px_5px_0px_#FFF153]" />
      <div className="bg-primary-green rounded-[18px] p-[9px] transition-all duration-500 group-hover:shadow-[inset_0px_0px_20px_0px_#FFF153]">
        <Image src={icon} alt="arrow-right" height={28} width={28} />
      </div>
    </div>
  );
};
