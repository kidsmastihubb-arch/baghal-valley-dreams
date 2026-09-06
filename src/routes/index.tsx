import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BedDouble,
  Crown,
  Users,
  Snowflake,
  Sun,
  ConciergeBell,
  CarFront,
  UtensilsCrossed,
  Star,
  MapPin,
  ArrowRight,
  MessageCircle,
  Phone,
  Navigation,
} from "lucide-react";

import heroImg from "@/assets/exterior-front.png";
import aerialImg from "@/assets/aerial-view.png";
import valleyImg from "@/assets/valley-view.png";
import receptionImg from "@/assets/reception.png";
import loungeImg from "@/assets/lounge.png";
import corridorImg from "@/assets/corridor.png";
import diningImg from "@/assets/dining-food.png";
import sideImg from "@/assets/exterior-side.png";
import mountainsImg from "@/assets/mountains.webp";

import { Btn } from "@/components/site/Btn";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reviews } from "@/components/site/Reviews";
import { Policies } from "@/components/site/Policies";
import {
  CALL_URL,
  DIRECTIONS_URL,
  HOTEL_ADDRESS,
  WHATSAPP_URL,
  whatsappLink,
} from "@/lib/hotel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Baghal Valley — 3 Star Hotel in Arki, Himachal Pradesh" },
      {
        name: "description",
        content:
          "Hotel Baghal Valley, a 3 star hotel on Bakhalag Arki Road in Arki, Himachal Pradesh. 17 guest rooms, executive and family suites, private balconies, on-site restaurant and free parking. Book on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Hotel Baghal Valley — 3 Star Hotel in Arki, Himachal Pradesh",
      },
      {
        property: "og:description",
        content:
          "Your comfortable stay in the heart of Himachal — executive suites, family suites, valley views and an on-site restaurant in Arki, near Solan.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const highlights = [
  { icon: BedDouble, title: "17 Guest Rooms", text: "Comfortable rooms across the property." },
  { icon: Crown, title: "Executive Suites", text: "Extra space for longer, slower stays." },
  { icon: Users, title: "Family Suites", text: "Room for families travelling together." },
  { icon: Snowflake, title: "Air Conditioning", text: "Climate control in the guest rooms." },
  { icon: Sun, title: "Private Balconies", text: "Open-air views over the Baghal valley." },
  { icon: ConciergeBell, title: "24-Hour Room Service", text: "Assistance around the clock." },
  { icon: CarFront, title: "Free Parking", text: "On-site parking for road travellers." },
  { icon: UtensilsCrossed, title: "On-Site Restaurant", text: "Buffet and à la carte dining." },
];

function Home() {
  const heroRef = useParallax(0.08);
  const bandRef = useParallax(0.12);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            ref={heroRef as never}
            src={heroImg}
            alt="Hotel Baghal Valley, a white four-storey hotel with a red roof on a forested hillside in Arki, Himachal Pradesh"
            className="animate-slow-pan size-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/85 via-ink/45 to-ink/75" />

        <div className="container-x pt-28 pb-24 sm:pb-28">
          <Reveal>
            <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.68rem] font-bold tracking-[0.2em] text-white/90 uppercase">
              <Star className="size-3.5 fill-gold text-gold" /> 3-Star Hotel • Arki, Himachal Pradesh
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,8vw,5.6rem)] leading-[0.98] text-white text-shadow-hero">
              Hotel Baghal Valley
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 max-w-2xl font-display text-[clamp(1.15rem,2.6vw,1.75rem)] leading-snug text-white/85">
              Your Comfortable Stay in the Heart of Himachal
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Btn href={WHATSAPP_URL} external variant="solid">
                Book Your Stay
              </Btn>
              <Btn href={WHATSAPP_URL} external variant="whatsapp">
                <MessageCircle className="size-4" /> WhatsApp Us
              </Btn>
              <Btn href={CALL_URL} variant="light">
                <Phone className="size-4" /> Call Now
              </Btn>
              <Btn href={DIRECTIONS_URL} external variant="light">
                <Navigation className="size-4" /> Get Directions
              </Btn>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-12 flex items-start gap-2 text-sm text-white/65">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              {HOTEL_ADDRESS}
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Welcome"
              title={
                <>
                  A calm hillside address on the{" "}
                  <span className="text-accent">Bakhalag-Arki Road</span>
                </>
              }
              intro="Established in 2020, Hotel Baghal Valley sits above the Baghal valley in Arki, Solan district. Seventeen guest rooms, executive and family suites, private balconies and an on-site restaurant make it an easy, comfortable base for travellers moving between Arki, Solan, Shimla and the Himalayan routes beyond."
            />
            <Reveal delay={120} className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {[
                ["17", "Guest Rooms"],
                ["4.1", "Google Rating"],
                ["24 h", "Room Service"],
                ["2020", "Established"],
              ].map(([n, l]) => (
                <div key={l as string} className="border-l-2 border-accent/50 pl-4">
                  <div className="font-display text-3xl text-ink">{n}</div>
                  <div className="mt-1 text-[0.7rem] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                    {l}
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={180} className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 border-b border-accent/50 pb-2 text-[0.76rem] font-bold tracking-[0.16em] text-accent uppercase"
              >
                Our Story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={100} className="relative">
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
              <img
                src={aerialImg}
                alt="Aerial view of Hotel Baghal Valley surrounded by pine-covered hills in Arki"
                className="img-zoom aspect-4/5 w-full object-cover sm:aspect-16/11 lg:aspect-4/5"
                loading="lazy"
              />
            </div>
            <div className="card-soft absolute -bottom-8 left-4 hidden max-w-[15rem] rounded-sm p-5 sm:block lg:-left-10">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
                <Star className="size-3.5" />
              </div>
              <p className="mt-3 font-display text-2xl text-ink">4.1 / 5</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Rated by 65 Google reviews
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hotel Highlights"
            title="Everything the stay includes"
            intro="Practical comforts, arranged around long mountain drives and slow valley mornings."
            align="center"
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal
                as="li"
                key={h.title}
                delay={i * 55}
                className="group bg-background p-8 transition-colors duration-500 hover:bg-pine"
              >
                <h.icon
                  className="size-7 text-accent transition-colors duration-500 group-hover:text-gold"
                  strokeWidth={1.3}
                />
                <h3 className="mt-6 text-lg text-ink transition-colors duration-500 group-hover:text-white">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/70">
                  {h.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ROOMS TEASER */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <SectionHeading
              eyebrow="Rooms & Suites"
              title="Space to settle in"
              intro="Executive suites, family suites and comfortable guest rooms — all air-conditioned, most opening onto a private balcony."
            />
            <Reveal delay={120}>
              <Btn href="/rooms" variant="outline">
                View All Rooms
              </Btn>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                img: loungeImg,
                alt: "Wooden sofa set and glass-topped table in an executive suite sitting area at Hotel Baghal Valley",
                name: "Executive Suites",
                text: "A separate sitting area in teak-toned wood, air conditioning and a private balcony.",
              },
              {
                img: corridorImg,
                alt: "Guest room corridor with wooden flooring and window seating at Hotel Baghal Valley",
                name: "Family Suites",
                text: "Extra room for families, with 24-hour room service and wireless intercom.",
              },
              {
                img: sideImg,
                alt: "Balconies along the side of Hotel Baghal Valley overlooking the Himachal hills",
                name: "Comfortable Guest Rooms",
                text: "Seventeen rooms in total, served by lift access on every floor.",
              },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 100} className="lift group overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
                <div className="overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.alt}
                    className="img-zoom aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl text-ink">{r.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                  <Link
                    to="/rooms"
                    className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-accent uppercase"
                  >
                    Details <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX BAND */}
      <section className="relative isolate overflow-hidden bg-ink py-28 lg:py-40">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            ref={bandRef as never}
            src={mountainsImg}
            alt="Steep Himalayan rock face and pine slopes along the mountain road near Arki"
            className="size-full scale-[1.16] object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-ink/65" />
        <div className="container-x text-center">
          <Reveal>
            <p className="mx-auto max-w-3xl font-display text-[clamp(1.5rem,3.6vw,2.7rem)] leading-tight text-white text-shadow-hero">
              Wake up to pine ridges, valley mist and a quiet road that carries on
              towards the mountains.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-10 flex flex-wrap justify-center gap-3">
            <Btn href={WHATSAPP_URL} external variant="whatsapp">
              <MessageCircle className="size-4" /> Check Availability
            </Btn>
            <Btn href="/gallery" variant="light">
              Explore the Gallery
            </Btn>
          </Reveal>
        </div>
      </section>

      {/* DINING + PUBLIC SPACES */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <img
              src={diningImg}
              alt="Home-style curry served in a kadhai with steamed rice at the Hotel Baghal Valley restaurant"
              className="col-span-2 aspect-16/10 w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
              loading="lazy"
            />
            <img
              src={receptionImg}
              alt="Reception desk at Hotel Baghal Valley with a painted Himalayan mural behind it"
              className="aspect-4/5 w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
              loading="lazy"
            />
            <img
              src={valleyImg}
              alt="View of forested ridges and scattered village homes across the Baghal valley"
              className="aspect-4/5 w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
              loading="lazy"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Dining & Spaces"
              title="Warm food, unhurried mornings"
              intro="The on-site restaurant serves buffet and à la carte meals with local and Asian-inspired dishes, plus a vegetarian breakfast to start the day. Beyond the dining room there's a reception open around the clock, a lift to every floor, a garden and outdoor space, and parking right at the door."
            />
            <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
              <Btn
                href={whatsappLink(
                  "Hi, I would like to enquire about dining at Hotel Baghal Valley. Please share the restaurant timings and menu details.",
                )}
                external
                variant="solid"
              >
                Enquire About Dining
              </Btn>
              <Btn href="/amenities" variant="outline">
                All Amenities
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      <Reviews />

      {/* LOCATION TEASER */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Easy to reach, easy to leave from"
              intro="On the Bakhalag-Arki Road in Arki, Teh, Himachal Pradesh 173235 — close to the Lutru Mahadev Cave Temple and within reach of Shimla and Chandigarh airports."
            />
            <ul className="mt-9 space-y-4">
              {[
                ["Lutru Mahadev Cave Temple", "~1.6 km"],
                ["Shimla Airport (Jubbarhatti)", "~14 km"],
                ["Jutogh Railway Station", "~44.7 km"],
                ["Chandigarh International Airport", "~56 km"],
              ].map(([place, dist], i) => (
                <Reveal
                  as="li"
                  key={place}
                  delay={i * 70}
                  className="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm"
                >
                  <span className="text-foreground">{place}</span>
                  <span className="shrink-0 font-bold tracking-[0.1em] text-accent">{dist}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="mt-9 flex flex-wrap gap-3">
              <Btn href={DIRECTIONS_URL} external variant="solid">
                <Navigation className="size-4" /> Get Directions
              </Btn>
              <Btn href="/location" variant="outline">
                Location Details
              </Btn>
            </Reveal>
          </div>
          <Reveal delay={100} className="overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
            <img
              src={valleyImg}
              alt="Wide view of the Baghal valley from Hotel Baghal Valley in Arki"
              className="img-zoom aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <Policies />
    </>
  );
}
