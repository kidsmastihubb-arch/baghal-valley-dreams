import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "whatsapp" | "light";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const variants: Record<Variant, string> = {
  solid:
    "bg-accent text-accent-foreground shadow-[0_10px_30px_-12px] shadow-accent/70 hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
  light:
    "border border-white/45 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-ink",
  ghost: "text-foreground/80 hover:text-accent",
  whatsapp:
    "bg-whatsapp text-white shadow-[0_10px_30px_-12px] shadow-whatsapp/80 hover:brightness-110 hover:-translate-y-0.5",
};

export function Btn({
  href,
  children,
  variant = "solid",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}
