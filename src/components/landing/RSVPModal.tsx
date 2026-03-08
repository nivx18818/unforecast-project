"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type RSVPModalProps = {
  open: boolean;
  onOpenChangeAction: (open: boolean) => void;
  type: "attend" | "decline";
};

export function RSVPModal({
  open,
  onOpenChangeAction: onOpenChange,
  type,
}: RSVPModalProps) {
  const isAttend = type === "attend";
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  // Reset state when modal opens/closes
  React.useEffect(() => {
    if (open) {
      setIsSuccess(false);
      setError("");
      setIsLoading(false);
    }
  }, [open]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      type,
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      setIsSuccess(true);
      // Auto close after brief delay
      setTimeout(() => {
        onOpenChange(false);
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-130 p-8 md:p-12 bg-background border border-white/10 gap-8 rounded-card-lg sm:rounded-[32px] overflow-hidden">
        {/* Subtle decorative elements matching Figma at the bottom */}
        <div className="absolute flex justify-center bottom-0 left-1/2 -translate-x-1/2 w-31 h-1 bg-gold rounded-t-full" />

        <DialogHeader className="gap-3 text-center px-2">
          <DialogTitle className="font-display font-bold text-[32px] md:text-[40px] leading-tight text-foreground text-center">
            {isSuccess
              ? "Thank You!"
              : isAttend
                ? "Confirm Your Attendance"
                : "We'll Miss You"}
          </DialogTitle>
          <DialogDescription className="font-sans font-normal text-base md:text-lg text-secondary text-center">
            {isSuccess
              ? "Your response has been successfully recorded."
              : isAttend
                ? "Please fill out the form below to confirm your attendance."
                : "We are sorry you can't make it. Leave a message for the hosts."}
          </DialogDescription>
        </DialogHeader>

        {!isSuccess && (
          <form
            className="flex flex-col gap-5 md:gap-6 mt-2"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg border border-destructive/20 text-center">
                {error}
              </div>
            )}
            {isAttend ? (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="font-sans font-bold text-sm tracking-[0.4px] text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-14.5 px-5 rounded-[12px] bg-white/5 border border-transparent hover:border-white/10 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-white/10 transition-all text-base"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-sans font-bold text-sm tracking-[0.4px] text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    className="h-14.5 px-5 rounded-[12px] bg-white/5 border border-transparent hover:border-white/10 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-white/10 transition-all text-base"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-sans font-bold text-sm tracking-[0.4px] text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+84 98 765 4321"
                    className="h-14.5 px-5 rounded-[12px] bg-white/5 border border-transparent hover:border-white/10 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-white/10 transition-all text-base"
                    required
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "mt-2 flex items-center justify-center h-15 w-full rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
                    "bg-gold text-primary-foreground",
                    "font-sans font-bold text-base md:text-[18px] leading-7 tracking-[0.9px] uppercase",
                    "transition-all duration-200 hover:brightness-90",
                    "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                    "shadow-[0_4px_20px_rgba(227,170,49,0.3)] hover:shadow-[0_4px_25px_rgba(227,170,49,0.5)]",
                  )}
                >
                  {isLoading ? "Submitting..." : "Confirm"}
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="font-sans font-bold text-sm tracking-[0.4px] text-foreground"
                  >
                    Your name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-14.5 px-5 rounded-[12px] bg-white/5 border border-transparent hover:border-white/10 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-white/10 transition-all text-base"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-sans font-bold text-sm tracking-[0.4px] text-foreground"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Wishing you a wonderful celebration..."
                    className="min-h-29.5 p-5 rounded-[12px] bg-white/5 border border-transparent hover:border-white/10 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-white/10 transition-all resize-none text-base"
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "mt-2 flex items-center justify-center h-15 w-full rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
                    "bg-gold text-primary-foreground",
                    "font-sans font-bold text-base md:text-[18px] leading-7 tracking-[0.9px] uppercase",
                    "transition-all duration-200 hover:brightness-90",
                    "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                    "shadow-[0_4px_20px_rgba(227,170,49,0.3)] hover:shadow-[0_4px_25px_rgba(227,170,49,0.5)]",
                  )}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
