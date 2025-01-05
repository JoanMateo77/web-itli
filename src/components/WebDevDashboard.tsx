import { Code, Globe, Server } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const WebDevDashboard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 bg-gradient-to-br from-black via-blue-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ willChange: 'transform, opacity' }}>
          Servicios de Desarrollo Web
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`space-y-6 transform transition-all duration-1000 delay-100 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`} style={{ willChange: 'transform, opacity' }}>
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo Frontend</h3>
              <p className="text-gray-400">Creamos interfaces modernas y responsivas utilizando las últimas tecnologías.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo Backend</h3>
              <p className="text-gray-400">Implementamos APIs robustas y escalables para tu aplicación.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20 cursor-pointer">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Despliegue y Mantenimiento</h3>
              <p className="text-gray-400">Nos encargamos del hosting, dominio y mantenimiento continuo.</p>
            </div>

            <button 
              className={`w-full p-4 bg-[#0d2f5a]/90 text-white rounded-lg hover:bg-[#1a4980] hover:shadow-[0_0_15px_rgba(26,73,128,0.5)] transition-all duration-300 transform hover:scale-105 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ willChange: 'transform, opacity' }}
            >
              Cotizar
            </button>
          </div>
          
          <div className={`order-first md:order-last transform transition-all duration-1000 delay-200 ${
            inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ willChange: 'transform, opacity' }}>
            <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Desarrollo Web" 
                className="object-cover rounded-lg w-full h-full"
                loading="lazy"
              />
            </div>
            <button 
              className={`w-full mt-4 p-4 bg-[#0d2f5a]/90 text-white rounded-lg hover:bg-[#1a4980] hover:shadow-[0_0_15px_rgba(26,73,128,0.5)] transition-all duration-300 transform hover:scale-105 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ willChange: 'transform, opacity' }}
            >
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
