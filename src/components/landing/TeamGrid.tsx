"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MemberCard } from "@/components/landing/MemberCard";

export interface Member {
  name: string;
  role: string;
  src: string;
  bio: string;
}

interface TeamGridProps {
  members: Member[];
}

export function TeamGrid({ members }: TeamGridProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <>
      <ul
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 max-w-[1344px] mx-auto w-full"
        aria-label="Team members"
      >
        {members.map((member) => (
          <li
            key={member.name}
            className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[458px] overflow-hidden rounded-[20px] lg:rounded-none"
          >
            <button
              type="button"
              onClick={() => setSelectedMember(member)}
              className="group relative w-full h-full block text-left"
              aria-label={`View details for ${member.name}, ${member.role}`}
            >
              {/* Image */}
              <Image
                src={member.src}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 lg:opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                aria-hidden="true"
              />
              {/* Shadow */}
              <div
                className="absolute inset-0 pointer-events-none shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
                aria-hidden="true"
              />
              {/* Labels */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 pb-8 z-10">
                <span className="font-display font-normal text-2xl leading-8 text-foreground lg:text-center block">
                  {member.name}
                </span>
                <span className="font-sans font-bold text-sm leading-5 tracking-[1.4px] uppercase text-primary lg:text-center block mt-0.5">
                  {member.role}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={selectedMember !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMember(null);
        }}
      >
        <DialogContent
          className="max-w-[1024px] p-0 border-none bg-transparent shadow-none"
          aria-describedby={undefined}
        >
          {selectedMember && <MemberCard member={selectedMember} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
