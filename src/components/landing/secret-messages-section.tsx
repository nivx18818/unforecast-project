import { MailLock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtnDdkCqQ1uHVw-PB89fYbAp92MidpDF64LqiXnApFGmsnWQ/viewform?usp=sharing&ouid=109241048830103920557";

export default function SecretMessagesSection() {
  const t = useTranslations("secretMessages");

  return (
    <section
      className="bg-background flex w-full flex-col items-center justify-center px-6 py-24 lg:px-48"
      aria-labelledby="messages-heading"
    >
      <div className="flex w-full max-w-4xl flex-col items-center gap-12">
        {/* Heading group */}
        <div className="flex w-full flex-col items-center gap-4">
          <div className="relative">
            <HugeiconsIcon icon={MailLock01Icon} size={32} className="text-gold" />
          </div>
          <h2
            id="messages-heading"
            className="font-display text-foreground text-center text-[60px] leading-15 font-bold"
          >
            {t("heading")}
          </h2>
          <div className="max-w-2xl pt-2">
            <p className="text-muted-foreground text-center font-sans text-[20px] leading-7">
              {t("body")}
            </p>
          </div>
        </div>

        {/* CTA Wrapper */}
        <div className="flex w-full justify-center">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary border-primary text-primary-foreground focus-visible:outline-ring inline-flex h-16 items-center justify-center rounded-full border px-12 font-sans text-[18px] leading-7 font-bold tracking-[0.9px] uppercase shadow-[0_0_20px_rgba(227,170,49,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,170,49,0.5)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
