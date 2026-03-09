"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("rsvpModal");
  const isAttend = type === "attend";
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  // Form state
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Validation errors
  const [errors, setErrors] = React.useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // Reset state when modal opens/closes
  React.useEffect(() => {
    if (open) {
      setIsSuccess(false);
      setError("");
      setIsLoading(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({ fullName: "", email: "", phone: "" });
    }
  }, [open]);

  const validate = () => {
    const newErrors = { fullName: "", email: "", phone: "" };
    if (!fullName.trim()) {
      newErrors.fullName = t("nameRequired");
    }
    if (isAttend) {
      if (!email.trim()) {
        newErrors.email = t("emailRequired");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = t("emailInvalid");
      }
      if (!phone.trim()) {
        newErrors.phone = t("phoneRequired");
      }
    }
    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setError("");

    const data = {
      type,
      fullName,
      email,
      phone,
      message,
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
      setError(t("errorGeneric"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background rounded-card-lg hide-scrollbar max-h-[calc(100dvh-2rem)] w-full max-w-md gap-6 overflow-y-auto border border-white/10 p-6 sm:rounded-[32px] md:max-w-lg md:p-8">
        {/* Subtle decorative elements matching Figma at the bottom */}
        <div className="bg-gold absolute bottom-0 left-1/2 flex h-1 w-31 -translate-x-1/2 justify-center rounded-t-full" />

        <DialogHeader className="gap-3 px-2 text-center">
          <DialogTitle className="font-display text-foreground text-center text-[32px] leading-tight font-bold md:text-[40px]">
            {isSuccess
              ? t("titleSuccess")
              : isAttend
                ? t("titleAttend")
                : t("titleDecline")}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-center font-sans text-base font-normal md:text-lg">
            {isSuccess
              ? t("descSuccess")
              : isAttend
                ? t("descAttend")
                : t("descDecline")}
          </DialogDescription>
        </DialogHeader>

        {!isSuccess && (
          <form
            className="mt-2 flex flex-col gap-3 md:gap-4"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="bg-destructive/10 text-destructive border-destructive/20 rounded-lg border p-3 text-center text-sm">
                {error}
              </div>
            )}
            {isAttend ? (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-foreground font-sans text-sm font-bold tracking-[0.4px]"
                  >
                    {t("nameLabel")}
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={t("namePlaceholder")}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="text-foreground placeholder:text-muted-foreground focus-visible:ring-ring h-12 rounded-[12px] border border-transparent bg-white/5 px-4 text-base transition-all outline-none hover:border-white/10 focus-visible:bg-white/10 focus-visible:ring-1"
                    disabled={isLoading}
                  />
                  {errors.fullName && (
                    <span className="text-destructive text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-foreground font-sans text-sm font-bold tracking-[0.4px]"
                  >
                    {t("emailLabel")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-foreground placeholder:text-muted-foreground focus-visible:ring-ring h-12 rounded-[12px] border border-transparent bg-white/5 px-4 text-base transition-all outline-none hover:border-white/10 focus-visible:bg-white/10 focus-visible:ring-1"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <span className="text-destructive text-sm">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-foreground font-sans text-sm font-bold tracking-[0.4px]"
                  >
                    {t("phoneLabel")}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("phonePlaceholder")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-foreground placeholder:text-muted-foreground focus-visible:ring-ring h-12 rounded-[12px] border border-transparent bg-white/5 px-4 text-base transition-all outline-none hover:border-white/10 focus-visible:bg-white/10 focus-visible:ring-1"
                    disabled={isLoading}
                  />
                  {errors.phone && (
                    <span className="text-destructive text-sm">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "mt-2 flex h-12 w-full items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-50",
                    "bg-gold text-primary-foreground",
                    "font-sans text-base leading-7 font-bold tracking-[0.9px] uppercase md:text-[18px]",
                    "transition-all duration-200 hover:brightness-90",
                    "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
                    "shadow-[0_4px_20px_rgba(227,170,49,0.3)] hover:shadow-[0_4px_25px_rgba(227,170,49,0.5)]",
                  )}
                >
                  {isLoading ? t("submitting") : t("confirmBtn")}
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-foreground font-sans text-sm font-bold tracking-[0.4px]"
                  >
                    {t("nameLabelDecline")}
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={t("namePlaceholder")}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="text-foreground placeholder:text-muted-foreground focus-visible:ring-ring h-12 rounded-[12px] border border-transparent bg-white/5 px-4 text-base transition-all outline-none hover:border-white/10 focus-visible:bg-white/10 focus-visible:ring-1"
                    required
                    disabled={isLoading}
                  />
                  {errors.fullName && (
                    <span className="text-destructive text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-foreground font-sans text-sm font-bold tracking-[0.4px]"
                  >
                    {t("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t("messagePlaceholder")}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-foreground placeholder:text-muted-foreground focus-visible:ring-ring min-h-24 resize-none rounded-[12px] border border-transparent bg-white/5 p-4 text-base transition-all outline-none hover:border-white/10 focus-visible:bg-white/10 focus-visible:ring-1"
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "mt-2 flex h-12 w-full items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-50",
                    "bg-gold text-primary-foreground",
                    "font-sans text-base leading-7 font-bold tracking-[0.9px] uppercase md:text-[18px]",
                    "transition-all duration-200 hover:brightness-90",
                    "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
                    "shadow-[0_4px_20px_rgba(227,170,49,0.3)] hover:shadow-[0_4px_25px_rgba(227,170,49,0.5)]",
                  )}
                >
                  {isLoading ? t("sending") : t("sendBtn")}
                </button>
              </>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
