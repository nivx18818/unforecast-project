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
      className="bg-background relative flex w-full items-center justify-center overflow-hidden px-6 py-24 md:px-24 xl:px-48"
      aria-labelledby="rsvp-heading"
    >
      {/* Subtle radial gold wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(227,170,49,0.1) 0%, rgba(227,170,49,0) 60%)",
        }}
        aria-hidden="true"
      />

      {/* Glass card */}
      <div
        className={cn(
          "rounded-card-lg relative flex w-full max-w-4xl flex-col items-center gap-6 p-8 md:p-20",
          "bg-surface-glass border-gold-muted border",
          "shadow-2xl backdrop-blur-md",
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
          className="font-display text-foreground text-center text-4xl font-bold md:text-[48px] md:leading-12"
        >
          Will you join us?
        </h2>

        {/* Body */}
        <p className="text-secondary max-w-xl text-center font-sans text-base font-normal md:text-[18px] md:leading-[29.25px]">
          We would be honored by your presence. Kindly confirm
          <br className="hidden sm:block" />
          your attendance by{" "}
          <strong className="text-gold font-bold">March 14th, 2026</strong>.
        </p>

        {/* CTA pair */}
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-6">
          <button
            onClick={() => openModal("attend")}
            className={cn(
              "flex h-16 w-full items-center justify-center rounded-full sm:w-81",
              "bg-gold text-primary-foreground",
              "font-sans text-base leading-7 font-bold tracking-[0.9px] uppercase md:text-[18px]",
              "transition-all duration-200 hover:brightness-90",
              "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
              "shadow-[0_4px_20px_rgba(227,170,49,0.3)] hover:shadow-[0_4px_25px_rgba(227,170,49,0.5)]",
            )}
          >
            I Will Attend
          </button>
          <button
            onClick={() => openModal("decline")}
            className={cn(
              "flex h-16 w-full items-center justify-center rounded-full sm:w-81",
              "border-gold text-gold border-2 bg-transparent",
              "font-sans text-base leading-7 font-bold tracking-[0.9px] uppercase md:text-[18px]",
              "hover:bg-gold-dim transition-all duration-200",
              "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
          >
            I Cannot Attend
          </button>
        </div>

        {/* Footer note */}
        <p className="text-muted-foreground mt-6 text-center font-sans text-sm leading-5 font-normal md:mt-2">
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
