import React from 'react';
import './App.css';

const renderFooter = () => {
  // Função que realiza o scroll para o topo e, depois, para a seção desejada
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // aguarda um pouco para garantir que a página subiu antes de tentar rolar
      setTimeout(() => {
        window.location.hash = sectionId;
        const sectionAfterScroll = document.getElementById(sectionId);
        if (sectionAfterScroll) {
          sectionAfterScroll.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // reduzindo mais o tempo pra ter uma melhor fluidez
    }
  };


  return (
    <footer className="footer">
        <div className="footer-left">
          <span style={{ fontSize: '14px', letterSpacing: '0.05em' }}>
            UTFlorestal © 2021
          </span>
        </div>
      <div className="footer-container">
        <div className="footer-center">
          <div className="footer-section">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Inicío</a></li>
              <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('about');
                  }}
                >
                  Sobre nós
                </a>

              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('services');
                  }}
                >
                  Serviços
                </a>
                <br />
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection('contact');
                  }}
                >
                  Contato
                </a>

              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Serviços</h3>
            <ul>
              <li>
                <a href="#Licenciamento">
                  Licenciamento/Regularização
                  <br /> Ambiental
                </a>
              </li>
              <li>
                <a href="#Georreferenciamento">
                  Georreferenciamento <br />
                  Inventário Florestal
                </a>
              </li>
              <li>
                <a href="#Recuperação">
                  Programa de Recuperação de
                  <br /> Áreas Degradadas (PRAD)
                </a>
              </li>
              <li>
                <a href="#Nascentes">
                  Recuperação de Nascentes <br />
                  Projetos Paisagisticos
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contatos</h3>
            <ul>
              <li>
                <a href="mailto:utflorestal.utfpr@gmail.com">utflorestal.utfpr@gmail.com</a>
              </li>
              <br />
              <li>
                <b>+55 (46) 99973-0867</b>
              </li>
              <br />
              <li>
                UTFlorestal - Planejamento e Execução
              </li>
              <br />
              <li>
                Estrada P/ Boa Esperança Km 04. <br />
                CEP 85660-000 – Dois Vizinhos, Paraná. <br />
                Caixa Postal 157 Bloco A2, Sala S/N
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <ul>
            {/* Telefone */}
            <li>
              <a href="tel:+554699901-8058" aria-label="Telefone">
                <img src="./img/telefone.png" alt="Ícone Telefone" />
              </a>
            </li>
            {/* WhatsApp */}
            <li>
              <a
                href="https://wa.me/46999018058"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img src="/img/whatsapp.png" alt="Ícone WhatsApp" />
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/utflorestal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/img/instagram.png" alt="Ícone Instagram" />
              </a>
            </li>
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/utflorestal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/img/facebook.png" alt="Ícone Facebook" />
              </a>
            </li>
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/company/utflorestal-empresa-j%C3%BAnior"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/img/LinkedIn.png" alt="Ícone LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>UTFlorestal | 2023 Todos direitos reservados</span>
      </div>
    </footer>
  );
};

export default renderFooter;
