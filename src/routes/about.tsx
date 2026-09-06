import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Star, MapPin, Mountain, Heart, Car, Sun, Users } from "lucide-react";

import exteriorImg from "@/assets/exterior-front.png";
import aerialImg from "@/assets/aerial-view.png";
import valleyImg from "@/assets/valley-view.png";
import receptionImg from "@/assets/reception.png";

import { Btn } from "@/components/site/Btn";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reviews } from "@/components/site/Reviews";
import { WHATSAPP_URL } from "@/lib/hotel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hotel Baghal Valley, Arki" },
      {
        name: "description",
        content:
          "Established in 2020, Hotel Baghal Valley is a 3-star hotel in Arki, Solan district, Himachal Pradesh — a comfortable base for travellers exploring Arki, Solan and the surrounding Himalayan routes.",
      },
      { property: "og:title", content: "About Hotel Baghal Valley, Arki" },
      {
        property: "og:description",
        content:
          "A 3-star hotel in Arki, Himachal Pradesh with scenic surroundings, comfortable rooms and helpful hospitality.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const reasons = [
  { icon: Mountain, title: "Scenic Surroundings", text: "Set above the Baghal valley with pine-covered ridges and open views in every direction." },
  { icon: Star, title: "3-Star Comfort", text: "Seventeen well-maintained rooms and suites with air conditioning and private balconies." },
  { icon: Heart, title: "Helpful Hospitality", text: "A cooperative team and a 24-hour reception ready to assist road travellers arriving late." },
  { icon: Car, title: "Road Connectivity", text: "On the Bakhalag-Arki Road with free on-site parking — easy to reach and easy to leave from." },
  { icon: Sun, title: "Private Balconies", text: "Most rooms open onto a balcony, so the valley is never more than a door away." },
  { icon: Users, title: "Family Friendly", text: "Family suites and a welcoming policy for unmarried couples and all-male groups." },
];

function AboutPage() {
  const storyRef = useParallax(0.08);

  return (
    <>
      <PageHero
        image={exteriorImg}
        alt="Hotel Baghal Valley, a white hotel building on a forested hillside in Arki, Himachal Pradesh"
        eyebrow="About Us"
        title="A hillside hotel on the Bakhalag-Arki Road"
        intro="Established in 2020, Hotel Baghal Valley is a 3-star property in Arki, Solan district, Himachal Pradesh — a comfortable base for travellers exploring the region."
      >
        <Btn href={WHATSAPP_URL} external variant="solid">
          Book Your Stay
        </Btn>
        <Btn href="/rooms" variant="light">
          View Rooms
        </Btn>
      </PageHero>

      <section className="relative bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
              <img
                src={aerialImg}
                alt="Aerial view of Hotel Baghal Valley surrounded by pine-covered hills in Arki"
                className="img-zoom aspect-4/5 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="card-soft absolute -bottom-8 right-4 hidden max-w-[16rem] rounded-sm p-5 sm:block lg:-right-10">
              <div className="flex items-center gap-3">
                <Calendar className="size-6 text-accent" strokeWidth={1.3} />
                <div>
                  <p className="font-display text-2xl text-ink">2020</p>
                  <p className="text-[0.68rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                    Established
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Comfort in the heart of Himachal"
              intro="Hotel Baghal Valley opened its doors in 2020 as a 3-star property on the Bakhalag-Arki Road in Arki, Solan district. What began as a comfortable stopover for road travellers has grown into a trusted address for visitors exploring Arki, Solan and the surrounding Himalayan routes."
            />
            <Reveal delay={100} className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                The hotel sits above the Baghal valley, surrounded by pine-covered
                hills and the quiet rhythm of village life. Seventeen guest rooms,
                executive suites and family suites are spread across the property —
                all air-conditioned, most with a private balcony, and all served by
                lift access and 24-hour room service.
              </p>
              <p>
                Beyond the rooms, the on-site restaurant serves buffet and à la
                carte meals with local and Asian-inspired dishes, plus a vegetarian
                breakfast to start the day. A 24-hour reception, on-site parking,
                a garden and outdoor space, and a cooperative team make every stay
                straightforward — whether you're passing through or settling in.
              </p>
            </Reveal>
            <Reveal delay={160} className="mt-8 flex flex-wrap gap-3">
              <Btn href={WHATSAPP_URL} external variant="whatsapp">
                Enquire on WhatsApp
              </Btn>
              <Btn href="/contact" variant="outline">
                Contact Us
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-28 lg:py-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            ref={storyRef as never}
            src={valleyImg}
            alt="Wide view of the Baghal valley from Hotel Baghal Valley in Arki"
            className="size-full scale-[1.16] object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-ink/60" />
        <div className="container-x text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-display text-[clamp(1.4rem,3.4vw,2.5rem)] leading-tight text-white text-shadow-hero">
              A convenient road address, a scenic hillside setting, and a team that
              makes the mountains feel close.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Stay With Us?"
            title="Reasons travellers choose Baghal Valley"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 60}
                className="lift group rounded-sm bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <span className="grid size-14 place-items-center rounded-sm bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                  <r.icon className="size-7" strokeWidth={1.3} />
                </span>
                <h3 className="mt-6 text-xl text-ink">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Around the Property"
              title="More than just a room"
              intro="A 24-hour reception, a lift to every floor, a garden and outdoor space, free on-site parking and a restaurant serving home-style food — everything a road traveller needs, under one roof."
            />
            <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
              <Btn href="/amenities" variant="outline">
                All Amenities
              </Btn>
              <Btn href="/dining" variant="ghost">
                Dining Details
              </Btn>
            </Reveal>
          </div>
          <Reveal delay={80} className="order-1 overflow-hidden rounded-sm shadow-[var(--shadow-lift)] lg:order-2">
            <img
              src={receptionImg}
              alt="Reception desk at Hotel Baghal Valley with a warm wooden interior"
              className="img-zoom aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <Reviews />
    </>
  );
}
