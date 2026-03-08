"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RSVPModal } from "./rsvp-modal";

export default function RSVPSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"attend" | "decline">("attend");

  const openModal = (type: "attend" | "decline") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <section
      id="rsvp"
      className="relative flex items-center justify-center overflow-hidden px-6 md:px-24 xl:px-48 py-24 bg-background w-full"
      aria-labelledby="rsvp-heading"
    >
      {/* Subtle radial gold wash */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(227,170,49,0.1) 0%, rgba(227,170,49,0) 60%)",
        }}
        aria-hidden="true"
      />

      {/* Glass card */}
      <div
        className={cn(
          "relative flex flex-col gap-6 items-center max-w-4xl w-full p-8 md:p-20 rounded-card-lg",
          "bg-surface-glass border border-gold-muted",
          "backdrop-blur-md shadow-2xl",
        )}
      >
        {/* Icon */}
        <Image
          src="/images/rsvp-icon.svg"
          alt=""
          width={44}
          height={44}
          className="size-11"
          aria-hidden="true"
          unoptimized
        />

        {/* Heading */}
        <h2
          id="rsvp-heading"
          className="font-display font-bold text-4xl md:text-[48px] md:leading-12 text-foreground text-center"
        >
          Will you join us?
        </h2>

        {/* Body */}
        <p className="font-sans font-normal text-base md:text-[18px] md:leading-[29.25px] text-secondary text-center max-w-xl">
          We would be honored by your presence. Kindly confirm
          <br className="hidden sm:block" />
          your attendance by{" "}
          <strong className="font-bold text-gold">March 14th, 2026</strong>.
        </p>

        {/* CTA pair */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center pt-6 w-full">
          <button
            onClick={() => openModal("attend")}
            className={cn(
              "flex items-center justify-center h-16 w-full sm:w-81 rounded-full",
              "bg-gold text-primary-foreground",
              "font-sans font-bold text-base md:text-[18px] leading-7 tracking-[0.9px] uppercase",
              "transition-all duration-200 hover:brightness-90",
              "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
              "shadow-[0_4px_20px_rgba(227,170,49,0.3)] hover:shadow-[0_4px_25px_rgba(227,170,49,0.5)]",
            )}
          >
            I Will Attend
          </button>
          <button
            onClick={() => openModal("decline")}
            className={cn(
              "flex items-center justify-center h-16 w-full sm:w-81 rounded-full",
              "border-2 border-gold text-gold bg-transparent",
              "font-sans font-bold text-base md:text-[18px] leading-7 tracking-[0.9px] uppercase",
              "transition-all duration-200 hover:bg-gold-dim",
              "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
            )}
          >
            I Cannot Attend
          </button>
        </div>

        {/* Footer note */}
        <p className="font-sans font-normal text-sm leading-5 text-muted-foreground text-center mt-6 md:mt-2">
          For any special requests, please contact us directly.
        </p>
      </div>

      {modalOpen && (
        <RSVPModal
          open={modalOpen}
          onOpenChangeAction={setModalOpen}
          type={modalType}
        />
      )}
    </section>
  );
}
