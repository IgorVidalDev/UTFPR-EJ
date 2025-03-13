import React, { useState, useEffect } from "react";
import "./carrosel.css"; // Certifique-se de importar o CSS correto

const Carrosel = () => {
  // Slides do carrossel
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
        "Desde 2014, transformando sua visão em realidade verde, juntos cultivando o \nfuturo sustentável e maximizando seus lucros.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSaibaMais, setShowSaibaMais] = useState(false);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowSaibaMais(false); // Esconde o conteúdo "Saiba Mais" ao trocar de slide
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowSaibaMais(false); // Esconde o conteúdo "Saiba Mais" ao trocar de slide
  };

  // Alterna a exibição do conteúdo "Saiba Mais"
  const toggleSaibaMais = () => {
    setShowSaibaMais(!showSaibaMais);
  };

  // Transição automática do carrossel a cada 6,5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, []);

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
                    // Botão do primeiro slide: SAIBA MAIS
                    <button className="carrosel-button" onClick={toggleSaibaMais}>
                      SAIBA MAIS
                    </button>
                  ) : (
                    // Botão do segundo slide: ENTRE EM CONTATO AGORA
                    <a
                      className="carrossel-button"
                      href="/#contact"
                      aria-label="ENTRE EM CONTATO AGORA"
                    >
                      ENTRE EM CONTATO AGORA
                    </a>
                  )}
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

      {/* Conteúdo "Saiba Mais" exibido quando acionado */}
      {showSaibaMais && (
        <div
          id="saiba-mais-content"
          style={{
            backgroundColor: "white",
            padding: "20px",
            margin: "20px 0",
          }}
        >
          <p>
            Oferecemos a Solução Ideal para projetos ambientais, com serviços
            especializados e personalizados para garantir a sustentabilidade e
            preservação dos recursos naturais. A UTFlorestal é uma empresa de
            consultoria ambiental que oferece uma ampla gama de serviços,
            incluindo soluções de Licenciamento / Regularização, Inventário
            Florestal, Georreferenciamento, Programa de Recuperação de Áreas
            Degradadas (PRAD), Recuperação de Nascentes, Projetos Paisagísticos e
            entre outros. Além disso, nossa empresa tem uma forte atuação na
            conservação, gestão e valorização dos recursos naturais.
          </p>
          <p>
            Nosso compromisso com a excelência é evidente em todos os nossos
            trabalhos e projetos, que se destacam pela alta qualidade técnica e
            pelas soluções inteligentes e inovadoras oferecidas por nossa equipe
            de profissionais experientes e altamente capacitados em serviços
            ambientais. Na UTFlorestal, acreditamos que é nossa responsabilidade
            preservar, manter e utilizar os recursos naturais de forma sustentável,
            e nossa equipe se dedica a cumprir essa missão com rigor
            técnico-científico e responsabilidade ambiental em todos os nossos
            serviços.
          </p>
          <p>
            Se você está buscando soluções ambientais eficazes e sustentáveis,
            a UTFlorestal é a escolha certa para atender às suas necessidades.
            Contate-nos hoje mesmo para saber mais sobre nossos serviços.
          </p>
        </div>
      )}
    </div>
  );
};

export default Carrosel;