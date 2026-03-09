"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MemberCard } from "@/components/landing/member-card";

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
        className="relative z-10 mx-auto grid w-full max-w-336 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        aria-label="Team members"
      >
        {members.map((member) => (
          <li
            key={member.name}
            className="rounded-card-sm relative aspect-3/4 w-full overflow-hidden lg:aspect-auto lg:h-114.5 lg:rounded-none"
          >
            <button
              type="button"
              onClick={() => setSelectedMember(member)}
              className="group relative block h-full w-full text-left"
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
                className="from-background via-background/40 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-90 lg:opacity-60"
                aria-hidden="true"
              />
              {/* Shadow */}
              <div
                className="pointer-events-none absolute inset-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
                aria-hidden="true"
              />
              {/* Labels */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 pb-8">
                <span className="font-display text-foreground block text-2xl leading-8 font-normal lg:text-center">
                  {member.name}
                </span>
                <span className="text-primary mt-0.5 block font-sans text-sm leading-5 font-bold tracking-[1.4px] uppercase lg:text-center">
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
          className="max-w-5xl border-none bg-transparent p-0 shadow-none sm:max-w-5xl"
          aria-describedby={undefined}
        >
          {selectedMember && <MemberCard member={selectedMember} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
