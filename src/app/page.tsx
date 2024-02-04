import Image from "next/image";
import Hero from "@/components/hero/hero";
import About from "@/components/about/page";
import Work from "@/components/work/page";
import Contact from "@/components/contact/page";
import "./globals.css"
export default function Home() {
  return (
    <div className="home">
    <Hero/>
      <About />
      <Work />
      <Contact/>
    </div>
  );
}
