import { MessageCircle, Phone } from "lucide-react";
import { CALL_URL, WHATSAPP_URL } from "@/lib/hotel";

export function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hotel Baghal Valley on WhatsApp"
        className="animate-fab-pulse fixed right-5 bottom-[86px] z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform duration-300 hover:scale-110 sm:bottom-6"
      >
        <MessageCircle className="size-6" />
      </a>

      {/* Mobile sticky booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-xl sm:hidden">
        <a
          href={CALL_URL}
          className="flex items-center justify-center gap-2 py-4 text-[0.72rem] font-bold tracking-[0.16em] uppercase"
        >
          <Phone className="size-4" /> Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent py-4 text-[0.72rem] font-bold tracking-[0.16em] text-accent-foreground uppercase"
        >
          Book Your Stay
        </a>
      </div>
    </>
  );
}
