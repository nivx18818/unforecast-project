import Image from "next/image";
import { TeamGrid } from "./team-grid";

const bgImage = "/images/backgrounds/discovery-bg-1.png";
const bgImage2 = "/images/backgrounds/discovery-bg-2.png";
const bgImage3 = "/images/backgrounds/discovery-bg-3.png";

const members = [
  {
    name: "Nguyen Phuong Thao",
    role: "Project Director",
    src: "/images/team/thao.png",
    bio: "I chose to start Unforecast Project because I cannot forecast how it will take shape. Yet perhaps that uncertainty is exactly what makes this journey meaningful. The more events I organize, the more I realize that unpredictability is always part of the process. This project gave me the courage to step into the unknown and try something different, while also inviting me to look back at my journey of learning and creating events. It is not only about completing a project for graduation, but also about understanding myself and the journey behind it.",
  },
  {
    name: "Nguyen Thi Minh Thu",
    role: "Operational Director",
    src: "/images/team/thu.png",
    bio: "As a final-year student, Unforecast Project is not only a graduation project for me but also a milestone that reflects my three-year journey of learning and growth at BUV. Being part of this project has helped me better understand the importance of responsibility, teamwork, and the ability to adapt to unpredictable situations in the event industry. Although there were many challenges along the way, those experiences helped me grow, learn valuable practical lessons, and create a truly memorable journey.",
  },
  {
    name: "Nguyen Thuy Bao Han",
    role: "Partnership Director",
    src: "/images/team/han.png",
    bio: "Becoming part of the Unforecast Project was something I never expected when I first entered BUV. True to its name, “Unforecast,” the project brought many surprises and challenges. Each challenge or spontaneous idea brought new experiences. The spontaneity and spirit of teamwork throughout the project created a memorable and unforgettable journey for me.",
  },
  {
    name: "Nguyen Phuong Ha",
    role: "Creative Director",
    src: "/images/team/ha.png",
    bio: "For me, the Unforecast Project is more than just an assignment. It represents our passion and the mark I hope to leave during my journey at BUV. Through the Unforecast Project, my team and I hope to transform the unexpected into something magical, creating meaningful moments and unforgettable memories throughout our three-year journey at BUV.",
  },
];

export default function DiscoverySection() {
  return (
    <section id="discovery" className="bg-background relative overflow-hidden">
      {/* ── Team Hero State ──────────────────────────────── */}
      <div className="relative flex min-h-[50vh] items-center justify-center px-6 py-24 lg:min-h-screen">
        {/* Background photo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <Image src={bgImage} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        {/* Gradient overlay */}
        <div
          className="from-background pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-linear-to-b to-transparent"
          aria-hidden="true"
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent"
          aria-hidden="true"
        />

        {/* Heading */}
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-foreground text-5xl leading-tight font-bold lg:text-[72px] lg:leading-18">
            The Hearts and Minds behind
            <br />
            <span className="text-primary mt-2 block font-normal italic">
              Unforecast Project
            </span>
          </h2>
          <div className="mt-8 flex flex-col items-center gap-2 lg:mt-4">
            <span className="eyebrow">Scroll to discover</span>
            <Image
              src="/images/backgrounds/scroll-arrow.svg"
              alt=""
              width={12}
              height={7}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* ── Team Grid State ──────────────────────────────── */}
      <div className="relative flex min-h-screen items-center justify-center px-6 py-24 lg:px-0 lg:py-0">
        {/* Background photo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <Image src={bgImage2} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div
          className="from-background pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-linear-to-b to-transparent"
          aria-hidden="true"
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent"
          aria-hidden="true"
        />

        {/* Member cards */}
        <TeamGrid members={members} />
      </div>

      {/* ── Our Story ──────────────────────────────────────── */}
      <div className="relative flex min-h-[50vh] items-center justify-center py-24 lg:min-h-screen">
        {/* Background photo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <Image src={bgImage3} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div
          className="from-background pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-linear-to-b to-transparent"
          aria-hidden="true"
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8 px-6 text-center lg:gap-12">
          <h2 className="font-display text-primary text-4xl leading-tight font-bold lg:text-[48px] lg:leading-12">
            Our Story
          </h2>
          <div className="divider-gold" aria-hidden="true" />
          <div className="text-foreground space-y-6 font-sans text-lg leading-relaxed font-normal lg:text-[20px] lg:leading-7">
            <p>
              We have created Unforecast Project as the final milestone of our
              journey as Events Management students at British University
              Vietnam. It thoughtfully brings together the knowledge,
              experiences, and lessons we have gained throughout three years of
              learning and practicing event management.
            </p>
            <p>
              By embracing uncertainty as an inherent aspect of event
              management, the &quot;Unforecast&quot; concept supports continuous
              learning and reflective practice, marking the organizers&apos;
              transition from academic learners to practice-ready event
              management professionals.
            </p>
          </div>
          <div className="divider-gold" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
