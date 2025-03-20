import React, { useState, useEffect } from "react";
import "./carrosel.css";

const Carrosel = () => {
  const slides = [
    {
      src: "/img/image1.jpg",
      alt: "Imagem 1",
      title: "Nossos Serviços",
      description: "Confira abaixo os principais serviços ofertados pela UTFlorestal",
    },
    {
      src: "/img/image2.jpg",
      alt: "Imagem 2",
      subtitle: "UTFlorestal - Planejamento e Execução",
      title: "Consultoria Ambiental",
      description:
        "Desde 2014, transformando sua visão em realidade verde, juntos cultivando o futuro sustentável e maximizando seus lucros.",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSaibaMais, setShowSaibaMais] = useState(false);

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
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMouseOver = () => {
    console.log("Mouse passou por cima do botão!");
  };

  const handleSaibaMaisClick = () => {
    console.log("Saiba mais clicado!");
    window.location.href = "#services";
    // ou
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  useEffect(() => {
    console.log(`Slide atual: ${currentSlide}`);
    const interval = setInterval(nextSlide, 6500);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div>
      <div className="carrossel-container">
        <div className="carrossel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carrossel-slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide.src} alt={slide.alt} />
              {index === currentSlide && (
                <div className="carrossel-text">
                  {slide.subtitle && (
                    <p className="carrossel-subtitle">{slide.subtitle}</p>
                  )}
                  <h1 className="carrossel-title">{slide.title}</h1>
                  <p className="carrossel-description">{slide.description}</p>
                  {index === 0 ? (
  <button
    className="carrosel-button"
    onMouseOver={handleMouseOver}
    onClick={handleSaibaMaisClick} // Adiciona a navegação ao clicar
  >
    Saiba Mais
  </button>
) : (
  <button className="carrosel-button" onClick={scrollToContact}>
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
          style={{
            backgroundColor: "white",
            padding: "20px",
            margin: "20px 0",
          }}
        >
          {/* Conteúdo adicional */}
        </div>
      )}
    </div>
  );
};

export default Carrosel;
