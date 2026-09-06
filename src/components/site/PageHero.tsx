import type { ReactNode } from "react";
import { useParallax } from "./Reveal";

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  intro,
  children,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  const parallaxRef = useParallax(0.1);

  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden bg-ink pt-24 pb-14 sm:min-h-[62vh] sm:pt-28 lg:min-h-[68vh] lg:pb-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          ref={parallaxRef as never}
          src={image}
          alt={alt}
          className="size-full scale-[1.16] object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
      <div className="container-x">
        <span className="eyebrow eyebrow-line text-gold">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.03] text-white text-shadow-hero">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {intro}
          </p>
        ) : null}
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
