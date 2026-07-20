import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import About from "@/components/About";
import Framework from "@/components/Framework";
import Programs from "@/components/Programs";
import WhoWeServe from "@/components/WhoWeServe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <About />
        <Framework />
        <Programs />
        <WhoWeServe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
