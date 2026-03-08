"use client";

import Image from "next/image";
import { type Member } from "./TeamGrid";
import { DialogTitle } from "@/components/ui/dialog";

export function MemberCard({ member }: { member: Member }) {
  // Using radial gradients to match the Figma design's lighting effects
  // The first overlay is a gentle primary (gold), the second is a faint blue.
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-5xl overflow-hidden rounded-media-xl bg-background border border-gold-muted shadow-[0_0_40px_-10px_var(--gold-dim)]">
      {/* For accessibility since we hid the header */}
      <DialogTitle className="sr-only">{member.name}</DialogTitle>

      {/* Background container matching Figma's background styling */}
      <div
        className="relative flex flex-col md:flex-row w-full min-h-150 md:h-157.5"
        style={{
          backgroundImage: `
            url('data:image/svg+xml;utf8,<svg viewBox="0 0 1024 630" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(126.96 0 0 106.58 1024 0)"><stop stop-color="rgba(227,170,49,0.15)" offset="0"/><stop stop-color="rgba(227,170,49,0)" offset="1"/></radialGradient></defs></svg>'),
            url('data:image/svg+xml;utf8,<svg viewBox="0 0 1024 630" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(126.96 0 0 106.58 0 630)"><stop stop-color="rgba(165,243,252,0.05)" offset="0"/><stop stop-color="rgba(165,243,252,0)" offset="1"/></radialGradient></defs></svg>'),
            linear-gradient(90deg, var(--background) 0%, var(--background) 100%)
          `,
        }}
      >
        {/* Decorative blur blobs behind the content (as in Figma) */}
        <div className="absolute bg-muted blur-[32px] -bottom-24 -right-24 rounded-full size-64 pointer-events-none" />
        <div className="absolute bg-[rgba(165,243,252,0.05)] blur-[32px] -left-24 -top-24 rounded-full size-64 pointer-events-none" />

        {/* ── Image Section (Left) ── */}
        <div className="relative flex-1 md:flex-none md:w-[45%] h-75 md:h-full overflow-hidden shrink-0">
          <Image
            src={member.src}
            alt={member.name}
            fill
            className="object-cover"
          />
          {/* Overlay gradient to blend into background */}
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-background/50 md:from-background/0 to-background/50" />

          {/* Decorative Sparkle SVG */}
          <div className="absolute left-6 top-6 size-8.25 text-primary">
            <svg
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
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
        <div className="relative flex flex-col justify-center flex-1 p-8 md:p-16 h-82.5 md:h-full z-10">
          <div className="flex flex-col gap-6 w-full max-w-md">
            {/* Role / Tag */}
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-primary rounded-full shrink-0" />
              <span className="font-sans font-bold text-xs uppercase tracking-[1.2px] text-primary">
                {member.role}
              </span>
            </div>

            {/* Name & Divider */}
            <div className="flex flex-col gap-2">
              <h2 className="font-display font-bold text-4xl md:text-[60px] leading-tight text-primary">
                {member.name}
              </h2>
              <div className="h-1 w-20 bg-linear-to-r from-primary to-transparent rounded-full" />
            </div>

            {/* Bio text */}
            <div className="overflow-y-auto pr-4 custom-scrollbar">
              <p className="font-sans font-normal text-base text-secondary leading-relaxed whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
