const messagesIcon =
  "https://www.figma.com/api/mcp/asset/478fb939-7706-4915-b3f2-7ffac22edcac";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtnDdkCqQ1uHVw-PB89fYbAp92MidpDF64LqiXnApFGmsnWQ/viewform?usp=sharing&ouid=109241048830103920557";

export default function SecretMessagesSection() {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-24 lg:px-48 bg-background w-full"
      aria-labelledby="messages-heading"
    >
      <div className="flex flex-col gap-12 items-center w-full max-w-4xl">
        {/* Heading group */}
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="relative w-8.25 h-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={messagesIcon}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              aria-hidden="true"
            />
          </div>
          <h2
            id="messages-heading"
            className="font-display font-bold text-[60px] leading-15 text-foreground text-center"
          >
            Secret Messages
          </h2>
          <div className="max-w-2xl pt-2">
            <p className="font-sans text-[20px] leading-7 text-muted-foreground text-center">
              Can&apos;t make it or just want to share some love? Send your
              wishes and
              <br className="hidden sm:inline" />
              secrets to the celebration.
            </p>
          </div>
        </div>

        {/* CTA Wrapper */}
        <div className="flex w-full justify-center">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 items-center justify-center px-12 rounded-full bg-primary border border-primary text-primary-foreground font-sans font-bold text-[18px] leading-7 tracking-[0.9px] uppercase shadow-[0_0_20px_rgba(227,170,49,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,170,49,0.5)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
          >
            Send a Secret Message
          </a>
        </div>
      </div>
    </section>
  );
}
