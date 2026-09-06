import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const feedback = [
  {
    icon: Star,
    title: "Scenic Surroundings",
    text: "Guests frequently mention the valley views, pine-covered ridges and the quiet hillside setting above Arki.",
  },
  {
    icon: Quote,
    title: "Food Quality",
    text: "The on-site restaurant draws positive remarks for its home-style cooking and vegetarian breakfast options.",
  },
  {
    icon: Star,
    title: "Comfortable Stay",
    text: "Clean, air-conditioned rooms with private balconies and 24-hour room service are commonly highlighted.",
  },
  {
    icon: Quote,
    title: "Helpful Hospitality",
    text: "Reviewers appreciate the cooperative staff and the 24-hour reception that assists road travellers arriving late.",
  },
];

export function Reviews() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="What visitors appreciate"
          intro="Hotel Baghal Valley is rated 4.1 out of 5 across 65 Google reviews. Here's what guests commonly highlight."
          align="center"
        />

        <Reveal delay={120} className="mx-auto mt-12 flex max-w-md flex-col items-center">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i} className="size-7 fill-current" />
            ))}
            <Star className="size-7 fill-current opacity-50" />
          </div>
          <p className="mt-5 font-display text-5xl text-ink">4.1 / 5</p>
          <p className="mt-2 text-sm tracking-[0.14em] text-muted-foreground uppercase">
            65 Google Reviews
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {feedback.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className="lift rounded-sm bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <f.icon className="size-6 text-accent" strokeWidth={1.3} />
              <h3 className="mt-5 text-lg text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
