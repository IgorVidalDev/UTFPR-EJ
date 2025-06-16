import React, { useState, useEffect } from "react";
import "./carrosel.css";

// inicializa fora do componente para manter a mesma referência
const initialSlides = [
  {
    src: "/img/image1.jpg",
    alt: "Imagem 1",
    title: "Nossos Serviços",
    description:
      "Confira abaixo os principais serviços ofertados pela UTFlorestal",
  },
  {
    src: "/img/image2.jpg",
    alt: "Imagem 2",
    subtitle: "UTFlorestal - Planejamento e Execução",
    title: "Consultoria Ambiental",
    description:
      "Desde 2014, transformando sua visão em realidade verde, juntos cultivando o futuro sustentável e maximizando seus lucros.",
  },
];

const Carrosel = () => {
  const [slides, setSlides] = useState(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSaibaMais, setShowSaibaMais] = useState(false);

  // roda só no mount e em resize, não depende de nenhuma variável recriada
  useEffect(() => {
    const updateSlidesForViewport = () => {
      const isMobile = window.innerWidth <= 768;
      setSlides(() => {
        const copy = initialSlides.map((s) => ({ ...s }));
        if (isMobile) {
          copy[0].src = "/img/image1celular.jpg";
          copy[1].src = "/img/image2celular.jpg";
        }
        return copy;
      });
    };

    updateSlidesForViewport();
    window.addEventListener("resize", updateSlidesForViewport);
    return () => {
      window.removeEventListener("resize", updateSlidesForViewport);
    };
  }, []);  // <<-- array de dependências VAZIO

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowSaibaMais(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowSaibaMais(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection)
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSaibaMaisClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "#services";
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div>
      <div className="carrossel-container">
        <div className="carrossel">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`carrossel-slide ${
                idx === currentSlide ? "active" : ""
              }`}
            >
              <img src={slide.src} alt={slide.alt} />
              {idx === currentSlide && (
                <div className="carrossel-text">
                  {slide.subtitle && (
                    <p className="carrossel-subtitle">{slide.subtitle}</p>
                  )}
                  <h1 className="carrossel-title">{slide.title}</h1>
                  <p className="carrossel-description">
                    {slide.description}
                  </p>
                  {idx === 0 ? (
                    <button
                      className="carrosel-button"
                      onClick={handleSaibaMaisClick}
                    >
                      Saiba Mais
                    </button>
                  ) : (
                    <button
                      className="carrosel-button"
                      onClick={scrollToContact}
                    >
                      ENTRE EM CONTATO AGORA
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      {showSaibaMais && (
        <div
          id="services"
          style={{ backgroundColor: "white", padding: "20px", margin: "20px 0" }}
        >
          {/* Conteúdo adicional... se precisar */}
        </div>
      )}
    </div>
  );
};

export default Carrosel;
