import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductCards } from "./components/ProductCards";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="w-[1440px] bg-black h-dvh">
      <Navbar />
      <Hero />
      <ProductCards />
      <Footer />
    </div>
  );
}
