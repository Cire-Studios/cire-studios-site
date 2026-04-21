import type { Metadata } from "next";
import CaravanLandingPage from "@/components/caravan/caravan-landing-page";

export const metadata: Metadata = {
  title: "Caravan | Cire Studios",
  description:
    "Caravan is a coordination product for real-world group activities, built to help people turn messy plans into clear shared momentum.",
};

export default function CaravanPage() {
  return <CaravanLandingPage />;
}
