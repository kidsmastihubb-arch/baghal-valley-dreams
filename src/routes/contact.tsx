import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Navigation, Clock, UserCheck, IdCard, Heart, Users, Ban } from "lucide-react";
import exteriorImg from "@/assets/exterior-front.png";
import receptionImg from "@/assets/reception.png";
import { Btn } from "@/components/site/Btn";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Policies } from "@/components/site/Policies";
import { CALL_URL, DIRECTIONS_URL, HOTEL_ADDRESS, PHONE_DISPLAY, WHATSAPP_URL, whatsappLink } from "@/lib/hotel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hotel Baghal Valley, Arki" },
      { name: "description", content: "Contact Hotel Baghal Valley on the Bakhalag-Arki Road in Arki, Himachal Pradesh 173235. Call or WhatsApp +91 98166 28080 for bookings and enquiries." },
      { property: "og:title", content: "Contact Hotel Baghal Valley, Arki" },
      { property: "og:description", content: "Call or WhatsApp +91 98166 28080 to book a room at Hotel Baghal Valley in Arki, Himachal Pradesh." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const quickPolicies = [
  { icon: Clock, label: "Check-in / Check-out", value: "12:00 PM / 2:00 PM — 12:00 PM" },
  { icon: UserCheck, label: "Minimum age", value: "18+" },
  { icon: IdCard, label: "ID", value: "Valid government ID required" },
  { icon: Heart, label: "Couples", value: "Unmarried couples allowed" },
  { icon: Users, label: "Groups", value: "All-male groups allowed" },
  { icon: Ban, label: "Pets", value: "Not allowed" },
];

const enquiries = [
  ["Book Now", "Hi, I would like to enquire about booking a room at Hotel Baghal Valley. Please share room availability, rates and booking details."],
  ["Room Enquiry", "Hi, I would like to enquire about the rooms and suites at Hotel Baghal Valley. Please share details and availability."],
  ["Dining Enquiry", "Hi, I would like to enquire about dining at Hotel Baghal Valley. Please share the restaurant timings and menu details."],
  ["General Enquiry", "Hi, I have a general enquiry about Hotel Baghal Valley. Could you please assist?"],
] as const;

function ContactPage() {
  return (
    <>
      <PageHero image={exteriorImg} alt="Hotel Baghal Valley exterior on a forested hillside in Arki" eyebrow="Contact" title="Get in touch" intro="All booking, room enquiry, dining and general enquiry requests go straight to WhatsApp — the fastest way to reach us.">
        <Btn href={WHATSAPP_URL} external variant="solid">Book Your Stay</Btn>
        <Btn href={CALL_URL} variant="light"><Phone className="size-4" /> Call Now</Btn>
      </PageHero>
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x"><SectionHeading eyebrow="Reach Us" title="Three ways to connect" align="center" /><div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lift rounded-sm bg-card p-8 text-center shadow-[var(--shadow-soft)]"><Phone className="mx-auto size-10 text-accent" strokeWidth={1.3} /><h3 className="mt-6 text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">Phone</h3><p className="mt-2 text-lg text-ink">{PHONE_DISPLAY}</p><div className="mt-6"><Btn href={CALL_URL} variant="outline">Call Now</Btn></div></Reveal>
          <Reveal delay={80} className="lift rounded-sm bg-card p-8 text-center shadow-[var(--shadow-soft)]"><MessageCircle className="mx-auto size-10 text-whatsapp" strokeWidth={1.3} /><h3 className="mt-6 text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">WhatsApp Booking</h3><p className="mt-2 text-lg text-ink">{PHONE_DISPLAY}</p><div className="mt-6"><Btn href={WHATSAPP_URL} external variant="whatsapp">Chat on WhatsApp</Btn></div></Reveal>
          <Reveal delay={160} className="lift rounded-sm bg-card p-8 text-center shadow-[var(--shadow-soft)]"><Navigation className="mx-auto size-10 text-accent" strokeWidth={1.3} /><h3 className="mt-6 text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">Directions</h3><p className="mt-2 text-lg text-ink">{HOTEL_ADDRESS}</p><div className="mt-6"><Btn href={DIRECTIONS_URL} external variant="solid">Get Directions</Btn></div></Reveal>
        </div></div>
      </section>
      <section className="bg-secondary/60 py-20 lg:py-28"><div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20"><Reveal className="overflow-hidden rounded-sm shadow-[var(--shadow-lift)]"><img src={receptionImg} alt="Reception desk at Hotel Baghal Valley" className="img-zoom aspect-4/3 w-full object-cover" loading="lazy" /></Reveal><div><SectionHeading eyebrow="The Address" title="Hotel Baghal Valley" intro={HOTEL_ADDRESS} /><Reveal delay={100} className="mt-8 space-y-4"><div className="flex items-start gap-3 text-sm text-muted-foreground"><Phone className="mt-0.5 size-5 shrink-0 text-accent" /><span><a href={CALL_URL} className="font-semibold text-ink hover:text-accent">{PHONE_DISPLAY}</a> — Phone / WhatsApp Booking</span></div><div className="flex items-start gap-3 text-sm text-muted-foreground"><MapPin className="mt-0.5 size-5 shrink-0 text-accent" /><span>On the Bakhalag-Arki Road in Arki, Solan district, Himachal Pradesh.</span></div></Reveal><Reveal delay={160} className="mt-9 flex flex-wrap gap-3"><Btn href={WHATSAPP_URL} external variant="whatsapp"><MessageCircle className="size-4" /> WhatsApp Booking</Btn><Btn href={DIRECTIONS_URL} external variant="outline"><Navigation className="size-4" /> Get Directions</Btn></Reveal></div></div></section>
      <section className="bg-background py-20 lg:py-28"><div className="container-x"><SectionHeading eyebrow="Enquiries" title="What can we help with?" intro="Every enquiry goes to WhatsApp with a pre-filled message — just tap and send." align="center" /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{enquiries.map(([label, message], i) => <Reveal key={label} delay={i * 60}><Btn href={whatsappLink(message)} external variant={i === 0 ? "solid" : "outline"} className="w-full">{label}</Btn></Reveal>)}</div></div></section>
      <section className="bg-secondary/60 py-16 lg:py-20"><div className="container-x"><SectionHeading eyebrow="At a Glance" title="Quick policies" align="center" /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{quickPolicies.map((p) => <Reveal key={p.label} className="flex items-center gap-4 rounded-sm bg-background p-5 shadow-[var(--shadow-soft)]"><span className="grid size-10 shrink-0 place-items-center rounded-sm bg-accent/10 text-accent"><p.icon className="size-5" /></span><div><p className="text-[0.66rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">{p.label}</p><p className="mt-0.5 text-sm text-ink">{p.value}</p></div></Reveal>)}</div></div></section>
      <Policies />
    </>
  );
}
