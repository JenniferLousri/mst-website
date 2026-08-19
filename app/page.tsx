import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Clients from "@/components/Clients/Clients";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Contact from "@/components/Contacts/Contact"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      
      {/* About Us Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Clients Section */}
      <Clients />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}