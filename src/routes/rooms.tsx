import { createFileRoute } from "@tanstack/react-router";
import {
  Snowflake,
  Sun,
  ConciergeBell,
  ArrowUp,
  Phone,
  MessageCircle,
  Check,
} from "lucide-react";

import executiveImg from "@/assets/room-executive.png";
import familyImg from "@/assets/room-family.png";
import guestImg from "@/assets/room-guest.png";
import balconyImg from "@/assets/room-balcony.png";
import viewImg from "@/assets/room-view.png";
import corridorImg from "@/assets/corridor.png";

import { Btn } from "@/components/site/Btn";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reviews } from "@/components/site/Reviews";
import { Policies } from "@/components/site/Policies";
import { whatsappLink } from "@/lib/hotel";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Hotel Baghal Valley, Arki" },
      {
        name: "description",
        content:
          "Executive suites, family suites and comfortable guest rooms at Hotel Baghal Valley in Arki, Himachal Pradesh. Air-conditioned rooms with private balconies, 24-hour room service and lift access.",
      },
      { property: "og:title", content: "Rooms & Suites — Hotel Baghal Valley, Arki" },
      {
        property: "og:description",
        content:
          "Air-conditioned guest rooms, executive suites and family suites with private balconies in Arki, Himachal Pradesh.",
      },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    img: executiveImg,
    alt: "Executive suite with a large bed, modern lighting and balcony access at Hotel Baghal Valley",
    name: "Executive Suites",
    description:
      "Spacious suites with a separate sitting area, premium furnishings and a private balcony overlooking the valley.",
    facilities: ["Air conditioning", "Private balcony", "Sitting area", "Wireless intercom", "24-hour room service"],
  },
  {
    img: familyImg,
    alt: "Family suite with a king-sized bed, ceiling fan and mountain view at Hotel Baghal Valley",
    name: "Family Suites",
    description:
      "Extra room for families travelling together, with comfortable bedding, climate control and full room service.",
    facilities: ["Air conditioning", "Family-friendly layout", "Private balcony", "Wireless intercom", "24-hour room service"],
  },
  {
    img: guestImg,
    alt: "Modern guest room with a large bed, hot tub and scenic balcony view at Hotel Baghal Valley",
    name: "Comfortable Guest Rooms",
    description:
      "Well-appointed rooms across all floors, served by lift access and designed for a restful night after a day on the road.",
    facilities: ["Air conditioning", "Lift / elevator access", "Wireless intercom", "24-hour room service", "Private balcony"],
  },
];

const allFacilities = [
  { icon: Snowflake, label: "Air-Conditioned Rooms" },
  { icon: Sun, label: "Private Balconies" },
  { icon: ConciergeBell, label: "24-Hour Room Service" },
  { icon: Phone, label: "Wireless Intercom" },
  { icon: ArrowUp, label: "Elevator / Lift Access" },
];

function RoomsPage() {
  return (
    <>
      <PageHero
        image={corridorImg}
        alt="Elegant corridor of Hotel Baghal Valley with warm lighting and architectural details"
        eyebrow="Rooms & Suites"
        title="Comfort across every floor"
        intro="Seventeen guest rooms, executive suites and family suites — all air-conditioned, most with a private balcony, and all served by lift access and 24-hour room service."
      >
        <Btn href={whatsappLink("Hi, I would like to enquire about room availability and rates at Hotel Baghal Valley.")} external variant="solid">
          Enquire on WhatsApp
        </Btn>
        <Btn href="/gallery" variant="light">
          View Gallery
        </Btn>
      </PageHero>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Rooms"
            title="Space to settle in"
            intro="Every room category at Hotel Baghal Valley is designed for comfort on the road — climate control, balcony views and service around the clock."
          />

          <div className="mt-14 space-y-10">
            {rooms.map((room, i) => (
              <Reveal
                key={room.name}
                delay={i * 80}
                className={`lift grid overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)] lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="overflow-hidden [direction:ltr]">
                  <img
                    src={room.img}
                    alt={room.alt}
                    className="img-zoom aspect-4/3 w-full object-cover lg:aspect-auto lg:h-full"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12 [direction:ltr]">
                  <h3 className="text-2xl text-ink sm:text-3xl">{room.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {room.description}
                  </p>
                  <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {room.facilities.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Btn
                      href={whatsappLink(`Hi, I would like to enquire about the ${room.name} at Hotel Baghal Valley. Please share availability and booking details.`)}
                      external
                      variant="whatsapp"
                    >
                      <MessageCircle className="size-4" /> Enquire on WhatsApp
                    </Btn>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Room Facilities"
            title="In every room"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {allFacilities.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 50}
                className="flex flex-col items-center text-center"
              >
                <span className="grid size-16 place-items-center rounded-full bg-background shadow-[var(--shadow-soft)] text-accent">
                  <f.icon className="size-7" strokeWidth={1.3} />
                </span>
                <p className="mt-4 text-sm font-semibold text-ink">{f.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-28 lg:py-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={balconyImg}
            alt="Hotel room balcony with seating and a panoramic view"
            className="size-full scale-[1.12] object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-ink/55" />
        <div className="container-x text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-display text-[clamp(1.4rem,3.4vw,2.5rem)] leading-tight text-white text-shadow-hero">
              Open the door to a private balcony and the Baghal valley stretching
              out below.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-9 flex flex-wrap justify-center gap-3">
            <Btn
              href={whatsappLink("Hi, I would like to book a room with a private balcony at Hotel Baghal Valley.")}
              external
              variant="whatsapp"
            >
              <MessageCircle className="size-4" /> Book Your Stay
            </Btn>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
            <img
              src={viewImg}
              alt="Bedroom interior with plush pillows and a mountain vista at Hotel Baghal Valley"
              className="img-zoom aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The View"
              title="Mountains from your window"
              intro="Pine ridges, morning mist and the slow rhythm of valley life — visible from your room, your balcony and the restaurant."
            />
            <Reveal delay={120} className="mt-9">
              <Btn href="/gallery" variant="outline">
                See More Photos
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      <Reviews />
      <Policies />
    </>
  );
}
