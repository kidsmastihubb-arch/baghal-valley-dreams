import { createFileRoute } from "@tanstack/react-router";
import {
  Snowflake,
  CarFront,
  ConciergeBell,
  Clock,
  ArrowUp,
  Sun,
  Phone,
  Wifi,
  WashingMachine,
  Trees,
  UtensilsCrossed,
  ShieldCheck,
} from "lucide-react";

import corridorImg from "@/assets/corridor.png";
import hotelLobbyImg from "@/assets/hotel-lobby.png";
import exteriorSideImg from "@/assets/exterior-side.png";

import { Btn } from "@/components/site/Btn";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Policies } from "@/components/site/Policies";
import { WHATSAPP_URL } from "@/lib/hotel";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Hotel Baghal Valley, Arki" },
      {
        name: "description",
        content:
          "Air conditioning, free parking, 24-hour room service and reception, elevator, private balconies, wireless intercom, Wi-Fi, laundry, garden, on-site restaurant and security at Hotel Baghal Valley.",
      },
      { property: "og:title", content: "Amenities — Hotel Baghal Valley" },
      {
        property: "og:description",
        content:
          "Modern amenities at a 3-star hotel in Arki, Himachal Pradesh — everything for a comfortable stay.",
      },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

const amenities = [
  { icon: Snowflake, title: "Air Conditioning", text: "Climate control in every guest room and suite." },
  { icon: CarFront, title: "Free Parking", text: "On-site parking for all guests and road travellers." },
  { icon: ConciergeBell, title: "24-Hour Room Service", text: "Food and assistance available around the clock." },
  { icon: Clock, title: "24-Hour Reception", text: "Front desk staffed day and night for late arrivals." },
  { icon: ArrowUp, title: "Elevator / Lift", text: "Lift access to every floor of the property." },
  { icon: Sun, title: "Private Balconies", text: "Most rooms open onto a balcony with valley views." },
  { icon: Phone, title: "Wireless Intercom", text: "Wireless intercom connecting rooms to reception." },
  { icon: Wifi, title: "Free / Available Wi-Fi", text: "Internet access available for guests throughout the property." },
  { icon: WashingMachine, title: "Laundry Service", text: "On-site laundry service for longer stays." },
  { icon: Trees, title: "Garden / Outdoor Space", text: "Open-air garden and outdoor seating area." },
  { icon: UtensilsCrossed, title: "On-Site Restaurant", text: "Buffet and à la carte dining with local and Asian-inspired cuisine." },
  { icon: ShieldCheck, title: "Security", text: "On-site security for guest safety and peace of mind." },
];

function AmenitiesPage() {
  return (
    <>
      <PageHero
        image={hotelLobbyImg}
        alt="Hotel lobby interior at Hotel Baghal Valley with elegant decor and lighting"
        eyebrow="Amenities"
        title="Everything the stay includes"
        intro="From air conditioning and free parking to 24-hour room service and a garden with valley views — practical comforts arranged around long mountain drives."
      >
        <Btn href={WHATSAPP_URL} external variant="solid">
          Book Your Stay
        </Btn>
        <Btn href="/rooms" variant="light">
          View Rooms
        </Btn>
      </PageHero>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Facilities"
            title="Modern comforts, mountain setting"
            intro="Twelve amenities that make Hotel Baghal Valley a comfortable base for travellers in Arki and the Solan district."
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 40}
                className="group flex items-start gap-5 bg-background p-8 transition-colors duration-500 hover:bg-pine"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-white/15 group-hover:text-gold">
                  <a.icon className="size-6" strokeWidth={1.3} />
                </span>
                <div>
                  <h3 className="text-lg text-ink transition-colors duration-500 group-hover:text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/70">
                    {a.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
            <img
              src={corridorImg}
              alt="Elegant hotel corridor with warm lighting and architectural detail at Hotel Baghal Valley"
              className="img-zoom aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Around the Property"
              title="Designed for the road traveller"
              intro="Lift access to every floor, a 24-hour reception for late check-ins, wireless intercom connecting rooms to staff, and free on-site parking right at the door — every detail is built around convenience."
            />
            <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
              <Btn href={WHATSAPP_URL} external variant="whatsapp">
                Enquire on WhatsApp
              </Btn>
              <Btn href="/location" variant="outline">
                How to Reach Us
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-28 lg:py-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={exteriorSideImg}
            alt="Side view of Hotel Baghal Valley with balconies overlooking the Himachal hills"
            className="size-full scale-[1.12] object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-ink/55" />
        <div className="container-x text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-display text-[clamp(1.4rem,3.4vw,2.5rem)] leading-tight text-white text-shadow-hero">
              Free parking, a garden to sit in, and a restaurant that serves
              dinner late — the mountains feel effortless.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-9 flex flex-wrap justify-center gap-3">
            <Btn href="/dining" variant="light">
              Explore Dining
            </Btn>
          </Reveal>
        </div>
      </section>

      <Policies />
    </>
  );
}
