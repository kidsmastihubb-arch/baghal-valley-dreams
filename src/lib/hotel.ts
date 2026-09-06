export const HOTEL_NAME = "Hotel Baghal Valley";
export const HOTEL_TAGLINE = "Your Comfortable Stay in the Heart of Himachal";
export const HOTEL_ADDRESS =
  "Bakhalag-Arki Road, Teh, Arki, Himachal Pradesh 173235";
export const PHONE_DISPLAY = "+91 98166 28080";
export const PHONE_TEL = "+919816628080";
export const WHATSAPP_NUMBER = "919816628080";

const DEFAULT_MESSAGE =
  "Hi, I would like to enquire about booking a room at Hotel Baghal Valley. Please share room availability, rates and booking details.";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappLink();
export const CALL_URL = `tel:${PHONE_TEL}`;
export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel+Baghal+Valley+Bakhalag+Arki+Road+Arki+Himachal+Pradesh+173235";

export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.9814009094366!2d76.93920181085177!3d31.165791264468446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39056f51b1360815%3A0x62b4dec82370f912!2sHotel%20Baghal%20Valley!5e0!3m2!1sen!2sin!4v1788666619741!5m2!1sen!2sin";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms & Suites" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/dining", label: "Dining" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: HOTEL_NAME,
  description:
    "Hotel Baghal Valley is a 3-star hotel in Arki, Solan district, Himachal Pradesh, offering 17 guest rooms, executive and family suites, an on-site restaurant and scenic Himalayan valley views.",
  starRating: { "@type": "Rating", ratingValue: "3" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bakhalag-Arki Road, Teh",
    addressLocality: "Arki",
    addressRegion: "Himachal Pradesh",
    postalCode: "173235",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.1657912, longitude: 76.9392018 },
  telephone: PHONE_DISPLAY,
  numberOfRooms: 17,
  petsAllowed: false,
  checkinTime: "12:00",
  checkoutTime: "12:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    reviewCount: "65",
  },
  amenityFeature: [
    "Air Conditioning",
    "Free Parking",
    "24-Hour Room Service",
    "24-Hour Reception",
    "Elevator / Lift",
    "Private Balconies",
    "Wireless Intercom",
    "Wi-Fi",
    "Laundry Service",
    "Garden / Outdoor Space",
    "On-Site Restaurant",
    "Security",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
};
