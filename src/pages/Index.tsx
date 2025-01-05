import { Navigation } from "@/components/Navigation";
import { MarketingSection } from "@/components/MarketingSection";
import { WebDevDashboard } from "@/components/WebDevDashboard";
import { MarketingDashboard } from "@/components/MarketingDashboard";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="inicio" 
        className="relative h-screen flex items-center justify-center overflow-hidden px-4"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto text-center z-10">
          <h1 
            className={`text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary font-['Orbitron'] tracking-tight transform transition-all duration-300 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ willChange: 'transform, opacity' }}
            translate="no" // Prevents translation of ITLI
          >
            ITLI
          </h1>
          <p 
            className={`text-2xl md:text-3xl mb-8 text-gray-300 font-light transform transition-all duration-300 delay-100 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            Internet Technologies & Leading Integrations
          </p>
          <p 
            className={`text-xl md:text-2xl mb-12 text-primary italic transform transition-all duration-300 delay-200 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            Innovamos tu mundo web
          </p>
          <a
            href="#servicios"
            className={`inline-flex items-center px-8 py-4 bg-[#1A1F2C] text-white rounded-full hover:bg-[#221F26] transition-all hover:scale-105 transform hover:shadow-lg hover:shadow-primary/50 ${
              heroInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            Descubre nuestros servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Dashboards */}
      <div id="servicios" className="bg-black">
        <WebDevDashboard />
        <MarketingDashboard />
      </div>

      {/* Marketing Section */}
      <div className="bg-black">
        <MarketingSection />
      </div>

      {/* Contact Section */}
      <section id="contacto" className="min-h-screen py-20 px-4 bg-gradient-to-t from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contáctanos</h2>
          <p className="text-gray-400 mb-8 text-xl">
            ¿Listo para llevar tu negocio al siguiente nivel? Contáctanos hoy mismo.
          </p>
          <a
            href="mailto:contacto@itli.com"
            className="inline-flex items-center px-8 py-4 bg-[#4A148C] text-white rounded-full hover:bg-[#6A1B9A] transition-all hover:scale-105 transform hover:shadow-lg hover:shadow-purple-500/20"
          >
            Enviar mensaje
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
