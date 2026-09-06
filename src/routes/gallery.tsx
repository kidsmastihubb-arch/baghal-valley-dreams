import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import exteriorFrontImg from "@/assets/exterior-front.png";
import exteriorSideImg from "@/assets/exterior-side.png";
import aerialImg from "@/assets/aerial-view.png";
import valleyImg from "@/assets/valley-view.png";
import mountainsImg from "@/assets/mountains.webp";
import receptionImg from "@/assets/reception.png";
import loungeImg from "@/assets/lounge.png";
import corridorImg from "@/assets/corridor.png";
import hallImg from "@/assets/hall.png";
import diningFoodImg from "@/assets/dining-food.png";
import diningThaliImg from "@/assets/dining-thali.png";
import diningSpreadImg from "@/assets/dining-spread.png";
import roomExecutiveImg from "@/assets/room-executive.png";
import roomFamilyImg from "@/assets/room-family.png";
import roomGuestImg from "@/assets/room-guest.png";
import roomBalconyImg from "@/assets/room-balcony.png";
import roomViewImg from "@/assets/room-view.png";
import hotelLobbyImg from "@/assets/hotel-lobby.png";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Btn } from "@/components/site/Btn";
import { WHATSAPP_URL } from "@/lib/hotel";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hotel Baghal Valley, Arki" },
      {
        name: "description",
        content:
          "Photo gallery of Hotel Baghal Valley — rooms, suites, dining, reception, corridors and scenic valley views in Arki, Himachal Pradesh.",
      },
      { property: "og:title", content: "Gallery — Hotel Baghal Valley" },
      {
        property: "og:description",
        content:
          "Explore the rooms, dining, public spaces and valley views of Hotel Baghal Valley in Arki.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const galleryItems = [
  { img: exteriorFrontImg, alt: "Hotel Baghal Valley exterior — a white hotel on a forested hillside in Arki", span: "lg:col-span-2 lg:row-span-2" },
  { img: roomExecutiveImg, alt: "Executive suite with a large bed, modern lighting and balcony access", span: "" },
  { img: diningFoodImg, alt: "Home-style curry served with steamed rice at the restaurant", span: "" },
  { img: valleyImg, alt: "Wide view of the Baghal valley from the hotel", span: "lg:col-span-2" },
  { img: corridorImg, alt: "Elegant hotel corridor with warm lighting", span: "" },
  { img: receptionImg, alt: "Reception desk with a warm wooden interior", span: "" },
  { img: roomBalconyImg, alt: "Hotel room balcony with seating and panoramic valley view", span: "lg:col-span-2" },
  { img: diningThaliImg, alt: "Traditional Indian thali with chapati, rice, dal and vegetables", span: "" },
  { img: aerialImg, alt: "Aerial view of Hotel Baghal Valley surrounded by pine-covered hills", span: "" },
  { img: mountainsImg, alt: "Snow-capped Himalayan peaks near Arki", span: "lg:col-span-2" },
  { img: roomFamilyImg, alt: "Family suite with a king-sized bed and mountain view", span: "" },
  { img: exteriorSideImg, alt: "Side view of the hotel with balconies overlooking the hills", span: "" },
  { img: hotelLobbyImg, alt: "Hotel lobby with elegant decor and chandelier", span: "" },
  { img: diningSpreadImg, alt: "Array of authentic Indian curries, naan and biryani", span: "" },
  { img: loungeImg, alt: "Stylish hotel room with a cozy sofa and natural light", span: "" },
  { img: roomViewImg, alt: "Bedroom interior with plush pillows and a mountain vista", span: "" },
  { img: roomGuestImg, alt: "Modern guest room with a large bed and scenic balcony view", span: "" },
  { img: hallImg, alt: "Spacious hall at Hotel Baghal Valley", span: "" },
];

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length));
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <PageHero
        image={aerialImg}
        alt="Aerial view of Hotel Baghal Valley surrounded by pine-covered hills"
        eyebrow="Gallery"
        title="A look around Baghal Valley"
        intro="Rooms, suites, dining, public spaces and the valley views that surround Hotel Baghal Valley in Arki, Himachal Pradesh."
      >
        <Btn href={WHATSAPP_URL} external variant="solid">
          Book Your Stay
        </Btn>
        <Btn href="/rooms" variant="light">
          View Rooms
        </Btn>
      </PageHero>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Photos"
            title="The hotel in pictures"
            intro="Click any image to open a full-screen preview. Use arrow keys to navigate and Escape to close."
            align="center"
          />

          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4 lg:auto-rows-[280px]">
            {galleryItems.map((item, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 50}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]",
                  item.span,
                )}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="block size-full"
                  aria-label={`Open image: ${item.alt}`}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30">
                    <span className="grid size-12 scale-50 place-items-center rounded-full bg-white/90 text-ink opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                      <ZoomIn className="size-5" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close preview"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
          <img
            src={galleryItems[lightboxIndex].img}
            alt={galleryItems[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-sm object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 max-w-[80vw] -translate-x-1/2 text-center text-sm text-white/70">
            {galleryItems[lightboxIndex].alt} — {lightboxIndex + 1} / {galleryItems.length}
          </p>
        </div>
      )}
    </>
  );
}
