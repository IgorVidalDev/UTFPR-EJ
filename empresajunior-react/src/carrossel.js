import React, { useState, useEffect } from "react";
import "./carrosel.css"; // Certifique-se de importar o CSS correto

const Carrosel = () => {
  // Definindo as imagens do Carrossel com título e descrição separados
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
      description: "Desde 2014, transformando sua visão em realidade verde, juntos cultivando o \nfuturo sustentável e maximizando seus lucros.",
    },
    // Adicione mais slides conforme necessário
  ];

  // Estado para controlar o slide atual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Função para voltar para a imagem anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // O carrossel troca automaticamente de imagem a cada 5 segundos
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
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
                <p className="carrossel-subtitle">{slide.subtitle}</p>
                <h1 className="carrossel-title">{slide.title}</h1>
                <p className="carrossel-description">{slide.description}</p>
               <button className="carrosel-button">
                ENTRE EM CONTATO
               </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Setas de navegação */}
      <button className="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carrosel;
