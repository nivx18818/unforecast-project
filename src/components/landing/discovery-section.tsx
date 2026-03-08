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
    <section id="discovery" className="relative bg-background overflow-hidden">
      {/* ── Team Hero State ──────────────────────────────── */}
      <div className="relative flex min-h-[50vh] lg:min-h-screen py-24 items-center justify-center px-6">
        {/* Background photo */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          aria-hidden="true"
        >
          <Image src={bgImage} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        {/* Gradient overlay */}
        <div
          className="absolute top-0 inset-x-0 h-[40%] bg-linear-to-b from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 inset-x-0 h-[40%] bg-linear-to-t from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Heading */}
        <div className="relative z-10 flex flex-col gap-4 items-center text-center max-w-4xl">
          <h2 className="font-display font-bold text-5xl lg:text-[72px] leading-tight lg:leading-18 text-foreground">
            The Hearts and Minds behind
            <br />
            <span className="font-normal italic text-primary mt-2 block">
              Unforecast Project
            </span>
          </h2>
          <div className="mt-8 lg:mt-4 flex flex-col items-center gap-2">
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
      <div className="relative flex min-h-screen py-24 lg:py-0 items-center justify-center px-6 lg:px-0">
        {/* Background photo */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          aria-hidden="true"
        >
          <Image src={bgImage2} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div
          className="absolute top-0 inset-x-0 h-[40%] bg-linear-to-b from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 inset-x-0 h-[40%] bg-linear-to-t from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Member cards */}
        <TeamGrid members={members} />
      </div>

      {/* ── Our Story ──────────────────────────────────────── */}
      <div className="relative flex min-h-[50vh] lg:min-h-screen py-24 items-center justify-center">
        {/* Background photo */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          aria-hidden="true"
        >
          <Image src={bgImage3} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
        <div
          className="absolute top-0 inset-x-0 h-[40%] bg-linear-to-b from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 inset-x-0 h-[40%] bg-linear-to-t from-background to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-8 lg:gap-12 items-center max-w-3xl px-6 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-[48px] leading-tight lg:leading-12 text-primary">
            Our Story
          </h2>
          <div className="divider-gold" aria-hidden="true" />
          <div className="font-sans font-normal text-lg lg:text-[20px] leading-relaxed lg:leading-7 text-foreground space-y-6">
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
