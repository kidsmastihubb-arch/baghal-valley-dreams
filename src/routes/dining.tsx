import { createFileRoute } from "@tanstack/react-router";
import { UtensilsCrossed, ChefHat, Leaf, Soup, MessageCircle, Clock } from "lucide-react";

import diningFoodImg from "@/assets/dining-food.png";
import diningThaliImg from "@/assets/dining-thali.png";
import diningSpreadImg from "@/assets/dining-spread.png";
import receptionImg from "@/assets/reception.png";

import { Btn } from "@/components/site/Btn";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reviews } from "@/components/site/Reviews";
import { whatsappLink } from "@/lib/hotel";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — Hotel Baghal Valley, Arki" },
      {
        name: "description",
        content:
          "On-site restaurant at Hotel Baghal Valley serving buffet and à la carte meals, local and Asian-inspired cuisine, and a vegetarian breakfast in Arki, Himachal Pradesh.",
      },
      { property: "og:title", content: "Dining — Hotel Baghal Valley" },
      {
        property: "og:description",
        content:
          "Home-style food, vegetarian breakfast and comfortable dining at Hotel Baghal Valley in Arki.",
      },
      { property: "og:url", content: "/dining" },
    ],
    links: [{ rel: "canonical", href: "/dining" }],
  }),
  component: DiningPage,
});

const features = [
  { icon: UtensilsCrossed, title: "On-Site Restaurant", text: "A dedicated dining room serving guests throughout the day." },
  { icon: ChefHat, title: "Buffet & À la Carte", text: "Choose from a buffet spread or order à la carte from the kitchen." },
  { icon: Soup, title: "Local & Asian-Inspired", text: "Home-style local dishes alongside Asian-inspired flavours." },
  { icon: Leaf, title: "Vegetarian Breakfast", text: "A vegetarian breakfast to start the day right." },
];

function DiningPage() {
  return (
    <>
      <PageHero
        image={diningFoodImg}
        alt="Home-style curry served with steamed rice at the Hotel Baghal Valley restaurant"
        eyebrow="Dining"
        title="Warm food, unhurried mornings"
        intro="The on-site restaurant at Hotel Baghal Valley serves buffet and à la carte meals with local and Asian-inspired dishes, plus a vegetarian breakfast to start the day."
      >
        <Btn
          href={whatsappLink("Hi, I would like to enquire about dining at Hotel Baghal Valley. Please share the restaurant timings and menu details.")}
          external
          variant="solid"
        >
          Enquire About Dining
        </Btn>
        <Btn href="/rooms" variant="light">
          View Rooms
        </Btn>
      </PageHero>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Restaurant"
            title="Comfortable dining, every day"
            intro="Whether you're stopping in for a quick breakfast or settling down for dinner after a long drive, the restaurant at Hotel Baghal Valley keeps things simple and satisfying."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 60}
                className="lift rounded-sm bg-card p-8 text-center shadow-[var(--shadow-soft)]"
              >
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent/10 text-accent">
                  <f.icon className="size-7" strokeWidth={1.3} />
                </span>
                <h3 className="mt-6 text-lg text-ink">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="From the Kitchen"
            title="A taste of the hills"
            intro="Local ingredients, home-style cooking and the comfort of a hot meal after a day in the mountains."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal className="lift overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={diningThaliImg}
                alt="Traditional Indian thali with chapati, rice, dal and vegetables at Hotel Baghal Valley"
                className="img-zoom aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={80} className="lift overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={diningSpreadImg}
                alt="Array of authentic Indian curries, naan and biryani at Hotel Baghal Valley"
                className="img-zoom aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={160} className="lift overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={diningFoodImg}
                alt="Home-style curry served in a kadhai with rice at Hotel Baghal Valley"
                className="img-zoom aspect-4/3 w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
          <Reveal delay={200} className="mt-12 flex flex-wrap gap-3">
            <Btn
              href={whatsappLink("Hi, I would like to enquire about dining at Hotel Baghal Valley. Please share the restaurant timings and menu details.")}
              external
              variant="whatsapp"
            >
              <MessageCircle className="size-4" /> Enquire About Dining
            </Btn>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 overflow-hidden rounded-sm shadow-[var(--shadow-lift)] lg:order-1">
            <img
              src={receptionImg}
              alt="Warm interior of Hotel Baghal Valley near the dining area"
              className="img-zoom aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The Experience"
              title="Eat well, rest easy"
              intro="The restaurant is open through the day with 24-hour room service for guests who arrive late or prefer to dine in their room. A vegetarian breakfast is served each morning, and the kitchen accommodates local and Asian-inspired preferences."
            />
            <Reveal delay={120} className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="size-5 shrink-0 text-accent" strokeWidth={1.4} />
                <span>Restaurant open through the day; room service available 24 hours.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Leaf className="size-5 shrink-0 text-accent" strokeWidth={1.4} />
                <span>Vegetarian breakfast served daily.</span>
              </div>
            </Reveal>
            <Reveal delay={180} className="mt-9 flex flex-wrap gap-3">
              <Btn href="/amenities" variant="outline">
                All Amenities
              </Btn>
              <Btn href="/gallery" variant="ghost">
                View Gallery
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
