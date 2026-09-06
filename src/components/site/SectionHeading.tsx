import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  const Title = as;
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow eyebrow-line", light && "text-gold")}>
          {eyebrow}
        </span>
      ) : null}
      <Title
        className={cn(
          "mt-5 text-[clamp(1.9rem,4.2vw,3.35rem)] leading-[1.08]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Title>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-[1.05rem]",
            light ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
