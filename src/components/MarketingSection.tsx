import { useEffect } from "react"; 
import { useInView } from "react-intersection-observer";

export const MarketingSection = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Activar cuando el 50% del elemento sea visible
    rootMargin: "200px", // Activar un poco antes de que el elemento entre en el viewport
  });

  useEffect(() => {
    const cardsContainer = document.querySelector(".cards");
    const cards = Array.from(document.querySelectorAll(".card"));
    const overlay = document.querySelector(".overlay");

    if (!cardsContainer || !overlay) return;

    const applyOverlayMask = (e: MouseEvent) => {
      const overlayEl = overlay as HTMLElement;
      const x = e.pageX - cardsContainer.getBoundingClientRect().left;
      const y = e.pageY - cardsContainer.getBoundingClientRect().top;

      overlayEl.style.setProperty("--opacity", "1");
      overlayEl.style.setProperty("--x", `${x}px`);
      overlayEl.style.setProperty("--y", `${y}px`);
    };

    const removeOverlayMask = () => {
      const overlayEl = overlay as HTMLElement;
      overlayEl.style.setProperty("--opacity", "0");
    };

    const createOverlayCta = (overlayCard: HTMLElement, ctaEl: Element) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("cta");
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute("aria-hidden", "true");
      overlayCard.append(overlayCta);
    };

    let resizeTimeout: NodeJS.Timeout;
    const observer = new ResizeObserver((entries) => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        entries.forEach((entry) => {
          const cardIndex = cards.indexOf(entry.target as HTMLElement);
          if (cardIndex >= 0 && overlay.children[cardIndex]) {
            const width = entry.contentBoxSize[0]?.inlineSize || entry.contentRect.width;
            const height = entry.contentBoxSize[0]?.blockSize || entry.contentRect.height;

            requestAnimationFrame(() => {
              if (overlay.children[cardIndex]) {
                (overlay.children[cardIndex] as HTMLElement).style.width = `${width}px`;
                (overlay.children[cardIndex] as HTMLElement).style.height = `${height}px`;
              }
            });
          }
        });
      }, 100); // Debounce resize operations by 100ms
    });

    const initOverlayCard = (cardEl: Element) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      createOverlayCta(overlayCard, cardEl.lastElementChild!);
      overlay.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    cardsContainer.addEventListener("mousemove", applyOverlayMask);
    cardsContainer.addEventListener("mouseleave", removeOverlayMask);

    return () => {
      clearTimeout(resizeTimeout);
      observer.disconnect();
      cardsContainer.removeEventListener("mousemove", applyOverlayMask);
      cardsContainer.removeEventListener("mouseleave", removeOverlayMask);
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className="main flow min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black"
      id="marketing"
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        width: "100%",
        margin: 0,
        padding: "4rem 1rem",
      }}
    >
      <h1
        className={`main__heading transform transition-all duration-2000 delay-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        Seguimos con los precios de 2024. ¡Compra ahora!
      </h1>
      <div className="main__cards cards">
        <div className="cards__inner">
          {/* Card 1 */}
          <div
            className={`cards__card card transform transition-all duration-2000 delay-1000 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="card__heading">Básico</h2>
            <p className="card__price">$300.000</p>
            <ul role="list" className="card__bullets flow">
              <li>Redes Sociales</li>
              <li>Integración: Meta Business, Facebook, Instagram y WhatsApp</li>
              <li>Mantenimiento Sitio web **Servicio de mantenimiento exclusivo para nuestros clientes**</li>
            </ul>
            <a
              href="#basic"
              className="card__cta cta bg-[#0d2f5a]/90 hover:bg-[#1a4980] hover:shadow-[0_0_15px_rgba(26,73,128,0.5)] transition-all duration-300"
            >
              ¡Contrátalo!
            </a>
          </div>

          {/* Card 2 */}
          <div
            className={`cards__card card transform transition-all duration-2000 delay-1100 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="card__heading">Más Popular</h2>
            <p className="card__price">$600.000</p>
            <ul role="list" className="card__bullets flow">
              <li>Acceso a planes avanzados de marketing</li>
              <li>Soporte prioritario por correo electrónico</li>
              <li>Acceso exclusivo a sesiones de Q&A en vivo</li>
            </ul>
            <a
              href="#pro"
              className="card__cta cta bg-[#0d2f5a]/90 hover:bg-[#1a4980] hover:shadow-[0_0_15px_rgba(26,73,128,0.5)] transition-all duration-300"
            >
              Actualizar a Pro
            </a>
          </div>

          {/* Card 3 */}
          <div
            className={`cards__card card transform transition-all duration-2000 delay-1200 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="card__heading">Premium</h2>
            <p className="card__price">$900.000</p>
            <ul role="list" className="card__bullets flow">
              <li>Acceso a todos los planes premium</li>
              <li>Soporte prioritario 24/7</li>
              <li>Sesión de coaching virtual mensual</li>
              <li>Contenido exclusivo y acceso anticipado a nuevas funciones</li>
            </ul>
            <a
              href="#ultimate"
              className="card__cta cta bg-[#0d2f5a]/90 hover:bg-[#1a4980] hover:shadow-[0_0_15px_rgba(26,73,128,0.5)] transition-all duration-300"
            >
              Ir a Ultimate
            </a>
          </div>
        </div>
        <div className="overlay cards__inner"></div>
      </div>
    </main>
  );
};
