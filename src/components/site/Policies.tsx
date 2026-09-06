import { Clock, UserCheck, IdCard, Heart, Users, Ban, LogIn, LogOut } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const policies = [
  { icon: LogIn, label: "Check-in", value: "12:00 PM / 2:00 PM" },
  { icon: LogOut, label: "Check-out", value: "12:00 PM" },
  { icon: UserCheck, label: "Minimum guest age", value: "18+" },
  { icon: IdCard, label: "ID required", value: "Valid government ID required" },
  { icon: Heart, label: "Unmarried couples", value: "Allowed" },
  { icon: Users, label: "All-male groups", value: "Allowed" },
  { icon: Ban, label: "Pets", value: "Not allowed" },
];

export function Policies() {
  return (
    <section className="bg-pine-deep py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Hotel Policies"
          title="Before you arrive"
          intro="A few simple guidelines so your stay at Hotel Baghal Valley is smooth and comfortable."
          light
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 50}
              className="flex items-center gap-5 bg-pine-deep p-7"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-sm border border-white/15 text-gold">
                <p.icon className="size-5" strokeWidth={1.4} />
              </span>
              <div>
                <p className="text-[0.68rem] font-bold tracking-[0.18em] text-gold uppercase">
                  {p.label}
                </p>
                <p className="mt-1.5 text-base text-white">{p.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
