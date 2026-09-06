import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Plane, Train, Navigation, Phone, MessageCircle, Landmark } from "lucide-react";
import valleyImg from "@/assets/valley-view.png";
import exteriorSideImg from "@/assets/exterior-side.png";
import { Btn } from "@/components/site/Btn";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CALL_URL, DIRECTIONS_URL, HOTEL_ADDRESS, MAP_EMBED_SRC, WHATSAPP_URL } from "@/lib/hotel";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Hotel Baghal Valley, Arki" },
      { name: "description", content: "Hotel Baghal Valley is on the Bakhalag-Arki Road in Arki, Himachal Pradesh 173235. Near Lutru Mahadev Cave Temple, Shimla Airport and Chandigarh International Airport." },
      { property: "og:title", content: "Location — Hotel Baghal Valley, Arki" },
      { property: "og:description", content: "Easy to reach on the Bakhalag-Arki Road in Arki, Himachal Pradesh." },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const nearby = [
  { icon: Landmark, name: "Lutru Mahadev Cave Temple", distance: "~1.6 km" },
  { icon: Plane, name: "Shimla Airport (Jubbarhatti)", distance: "~14 km" },
  { icon: Train, name: "Jutogh Railway Station", distance: "~44.7 km" },
  { icon: Train, name: "Summer Hill Railway Station", distance: "~45.9 km" },
  { icon: Plane, name: "Chandigarh International Airport", distance: "~56 km" },
];

function LocationPage() {
  return (
    <>
      <PageHero image={valleyImg} alt="Wide view of the Baghal valley from Hotel Baghal Valley in Arki" eyebrow="Location" title="Easy to reach, easy to leave from" intro="On the Bakhalag-Arki Road in Arki, Teh, Himachal Pradesh 173235 — close to the Lutru Mahadev Cave Temple and within reach of Shimla and Chandigarh airports.">
        <Btn href={DIRECTIONS_URL} external variant="solid"><Navigation className="size-4" /> Get Directions</Btn>
        <Btn href={CALL_URL} variant="light"><Phone className="size-4" /> Call Hotel</Btn>
      </PageHero>
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="The Address" title="Hotel Baghal Valley" intro={HOTEL_ADDRESS} />
            <Reveal delay={100} className="mt-8 flex flex-wrap gap-3">
              <Btn href={DIRECTIONS_URL} external variant="solid"><Navigation className="size-4" /> Get Directions</Btn>
              <Btn href={CALL_URL} variant="outline"><Phone className="size-4" /> Call Hotel</Btn>
              <Btn href={WHATSAPP_URL} external variant="whatsapp"><MessageCircle className="size-4" /> WhatsApp Booking</Btn>
            </Reveal>
            <Reveal delay={160} className="mt-12">
              <h3 className="text-[0.72rem] font-bold tracking-[0.22em] text-accent uppercase">Nearby & Connectivity</h3>
              <ul className="mt-6 space-y-4">
                {nearby.map((n) => <li key={n.name} className="flex items-center justify-between gap-4 border-b border-border pb-4"><span className="flex items-center gap-3 text-sm text-foreground"><n.icon className="size-5 shrink-0 text-accent" strokeWidth={1.3} />{n.name}</span><span className="shrink-0 text-sm font-bold tracking-[0.08em] text-accent">{n.distance}</span></li>)}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={100} className="overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
            <div className="flex items-center gap-2 bg-pine-deep px-5 py-4 text-white"><MapPin className="size-5 text-gold" /><span className="text-sm font-semibold tracking-wide">Hotel Baghal Valley on Google Maps</span></div>
            <iframe src={MAP_EMBED_SRC} width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Google Maps location of Hotel Baghal Valley, Arki" />
          </Reveal>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-ink py-28 lg:py-36">
        <div className="absolute inset-0 -z-10 overflow-hidden"><img src={exteriorSideImg} alt="Side view of Hotel Baghal Valley with balconies" className="size-full scale-[1.12] object-cover" loading="lazy" /></div>
        <div className="absolute inset-0 -z-10 bg-ink/55" />
        <div className="container-x text-center"><Reveal><p className="mx-auto max-w-3xl font-display text-[clamp(1.4rem,3.4vw,2.5rem)] leading-tight text-white text-shadow-hero">On the Bakhalag-Arki Road with free parking at the door — pull in, check in, and the valley is right there.</p></Reveal><Reveal delay={140} className="mt-9 flex flex-wrap justify-center gap-3"><Btn href={WHATSAPP_URL} external variant="whatsapp"><MessageCircle className="size-4" /> Book on WhatsApp</Btn><Btn href="/contact" variant="light">Contact Us</Btn></Reveal></div>
      </section>
    </>
  );
}
