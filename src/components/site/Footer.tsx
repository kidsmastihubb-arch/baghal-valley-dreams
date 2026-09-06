import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Mountain } from "lucide-react";
import {
  CALL_URL,
  DIRECTIONS_URL,
  HOTEL_ADDRESS,
  NAV_LINKS,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/hotel";

export function Footer() {
  return (
    <footer className="bg-pine-deep text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-sm border border-white/25 text-gold">
              <Mountain className="size-5" strokeWidth={1.4} />
            </span>
            <span className="font-display text-2xl text-white">
              Hotel Baghal Valley
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            A 3-star hotel on Bakhalag-Arki Road in Arki, Solan district, Himachal
            Pradesh. Seventeen guest rooms, executive and family suites, an on-site
            restaurant and wide valley views — a comfortable base for travellers
            exploring Arki, Solan and the surrounding Himalayan routes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a
              href={CALL_URL}
              className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase transition hover:border-gold hover:text-gold"
            >
              <Phone className="size-4" /> Call
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-[0.72rem] font-bold tracking-[0.22em] text-gold uppercase">
            Explore
          </h3>
          <ul className="mt-6 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[0.72rem] font-bold tracking-[0.22em] text-gold uppercase">
            Reach Us
          </h3>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{HOTEL_ADDRESS}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={CALL_URL} className="hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-b border-gold/50 pb-1 text-[0.72rem] font-bold tracking-[0.16em] text-gold uppercase"
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hotel Baghal Valley, Arki, Himachal Pradesh.</p>
          <p>Check-in 12:00 PM / 2:00 PM • Check-out 12:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
