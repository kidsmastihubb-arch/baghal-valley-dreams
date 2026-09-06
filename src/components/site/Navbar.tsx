import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";
import { CALL_URL, NAV_LINKS, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/hotel";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="hidden bg-pine-deep text-white/75 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[0.72rem] tracking-[0.14em] uppercase">
          <span>3-Star Hotel • Bakhalag-Arki Road, Arki, Himachal Pradesh</span>
          <a href={CALL_URL} className="transition-colors hover:text-gold">
            Reservations {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/88 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="container-x flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span
              className={cn(
                "grid size-10 shrink-0 place-items-center rounded-sm border transition-colors",
                scrolled
                  ? "border-accent/40 text-accent"
                  : "border-white/40 text-white",
              )}
            >
              <Mountain className="size-5" strokeWidth={1.4} />
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  "block truncate font-display text-[1.05rem] leading-none tracking-tight",
                  scrolled ? "text-ink" : "text-white",
                )}
              >
                Hotel Baghal Valley
              </span>
              <span
                className={cn(
                  "mt-1 block text-[0.6rem] tracking-[0.28em] uppercase",
                  scrolled ? "text-muted-foreground" : "text-white/70",
                )}
              >
                Arki • Himachal
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className={cn(
                    "relative rounded-sm px-3 py-2 text-[0.78rem] font-semibold tracking-[0.08em] uppercase transition-colors",
                    scrolled
                      ? "text-foreground/70 hover:text-accent"
                      : "text-white/85 hover:text-white",
                  )}
                  activeProps={{
                    className: scrolled ? "!text-accent" : "!text-gold",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-sm bg-accent px-5 py-3 text-[0.72rem] font-bold tracking-[0.16em] text-accent-foreground uppercase transition hover:brightness-110 lg:inline-block"
            >
              Book on WhatsApp
            </a>
            <a
              href={CALL_URL}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className={cn(
                "grid size-10 place-items-center rounded-sm border transition-colors xl:hidden",
                scrolled
                  ? "border-border text-foreground hover:border-accent hover:text-accent"
                  : "border-white/40 text-white",
              )}
            >
              <Phone className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "grid size-10 place-items-center rounded-sm border transition-colors xl:hidden",
                scrolled
                  ? "border-border text-foreground hover:border-accent hover:text-accent"
                  : "border-white/40 text-white",
              )}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[70] transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        />
        <div
          className={cn(
            "absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <span className="font-display text-lg">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-sm border border-border"
            >
              <X className="size-4" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-3 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  className="block border-b border-border/60 px-3 py-4 font-display text-[1.15rem] text-ink transition-colors hover:text-accent"
                  activeProps={{ className: "!text-accent" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid gap-2 border-t border-border p-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-whatsapp py-3.5 text-center text-[0.75rem] font-bold tracking-[0.16em] text-white uppercase"
            >
              WhatsApp Booking
            </a>
            <a
              href={CALL_URL}
              className="rounded-sm border border-border py-3.5 text-center text-[0.75rem] font-bold tracking-[0.16em] uppercase"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
