"use client";

import Image from "next/image";
import { type Member } from "./team-grid";
import { DialogTitle } from "@/components/ui/dialog";

export function MemberCard({ member }: { member: Member }) {
  // Using radial gradients to match the Figma design's lighting effects
  // The first overlay is a gentle primary (gold), the second is a faint blue.
  return (
    <div className="border-primary/30 bg-background rounded-media-xl relative flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden border shadow-[0px_0px_40px_-10px_rgba(227,170,49,0.2)]">
      {/* For accessibility since we hid the header */}
      <DialogTitle className="sr-only">{member.name}</DialogTitle>

      {/* Background container matching Figma's background styling */}
      <div
        className="relative flex min-h-150 w-full flex-col md:h-157.5 md:flex-row"
        style={{
          backgroundImage: `
            url('data:image/svg+xml;utf8,<svg viewBox="0 0 1024 630" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(126.96 0 0 106.58 1024 0)"><stop stop-color="rgba(227,170,49,0.15)" offset="0"/><stop stop-color="rgba(227,170,49,0)" offset="1"/></radialGradient></defs></svg>'),
            url('data:image/svg+xml;utf8,<svg viewBox="0 0 1024 630" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(126.96 0 0 106.58 0 630)"><stop stop-color="rgba(165,243,252,0.05)" offset="0"/><stop stop-color="rgba(165,243,252,0)" offset="1"/></radialGradient></defs></svg>'),
            linear-gradient(90deg, var(--background) 0%, var(--background) 100%)
          `,
        }}
      >
        {/* Decorative blur blobs behind the content (as in Figma) */}
        <div className="bg-primary/5 pointer-events-none absolute -right-24 -bottom-24 size-64 rounded-full blur-[32px]" />
        <div className="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-[rgba(165,243,252,0.05)] blur-[32px]" />

        {/* ── Image Section (Left) ── */}
        <div className="relative h-75 w-full shrink-0 overflow-hidden md:h-full md:w-1/2 md:flex-1">
          <Image
            src={member.src}
            alt={member.name}
            fill
            className="object-cover"
          />
          {/* Overlay gradient to blend into background — transparent left half, dark right half */}
          <div className="to-background/60 md:to-background/50 absolute inset-0 bg-linear-to-b from-transparent md:bg-linear-to-r md:from-transparent md:from-50%" />

          {/* Decorative Sparkle SVG */}
          <div className="text-primary absolute top-6 left-6 size-8.25">
            <svg
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M16.5 0L19.2683 11.2317L30.5 14L19.2683 16.7683L16.5 28L13.7317 16.7683L2.5 14L13.7317 11.2317L16.5 0Z"
                fill="currentColor"
              />
              <path
                d="M26.5 22L27.6853 26.8147L32.5 28L27.6853 29.1853L26.5 34L25.3147 29.1853L20.5 28L25.3147 26.8147L26.5 22Z"
                fill="currentColor"
              />
              <path
                d="M7 23L7.79017 26.2098L11 27L7.79017 27.7902L7 31L6.20983 27.7902L3 27L6.20983 26.2098L7 23Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* ── Content Section (Right) ── */}
        <div className="relative z-10 flex h-82.5 w-full flex-col justify-center p-8 md:h-full md:w-1/2 md:flex-1 md:p-16">
          <div className="flex w-full max-w-md flex-col gap-6">
            {/* Role / Tag */}
            <div className="flex items-center gap-2">
              <div className="bg-primary h-px w-8 shrink-0 rounded-full" />
              <span className="text-primary font-sans text-xs font-bold tracking-[1.2px] uppercase">
                {member.role}
              </span>
            </div>

            {/* Name & Divider */}
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-primary text-4xl leading-tight font-bold md:text-[72px] md:leading-[72px]">
                {member.name}
              </h2>
              <div className="from-primary h-1 w-20 rounded-full bg-linear-to-r to-transparent" />
            </div>

            {/* Bio text */}
            <div className="custom-scrollbar overflow-y-auto pr-4">
              <p className="text-secondary font-sans text-base leading-[26px] font-normal whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
