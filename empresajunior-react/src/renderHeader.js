import React, { useState } from 'react';

const RenderHeader = () => {
  // Estado para armazenar o link ativo
  const [activeLink, setActiveLink] = useState('home');

  // Função para atualizar o link ativo e realizar a rolagem suave
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
    window.location.hash = `#${link}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <img className="logo" src="/img/logo.png" alt="Logo" />
      <nav>
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className={activeLink === 'home' ? 'active' : ''}
        >
          Início
        </a>
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, 'about')}
          className={activeLink === 'about' ? 'active' : ''}
        >
          Sobre nós
        </a>
        <a
          href="#services"
          onClick={(e) => handleLinkClick(e, 'services')}
          className={activeLink === 'services' ? 'active' : ''}
        >
          Serviços
        </a>
        <a
          href="#noticias"
          onClick={(e) => handleLinkClick(e, 'noticias')}
          className={activeLink === 'noticias' ? 'active' : ''}
        >
          Notícias
        </a>
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, 'contact')}
          className={activeLink === 'contact' ? 'active' : ''}
        >
          Contato
        </a>
      </nav>

      <div className="social-icons">
        {/* Telefone */}
        <a href="tel:+554699901-8058" aria-label="Telefone">
          <img src="./img/telefone.png" alt="Ícone Telefone" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/46999018058"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src="/img/whatsapp.png" alt="Ícone WhatsApp" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/utflorestal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="/img/instagram.png" alt="Ícone Instagram" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/utflorestal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img src="/img/facebook.png" alt="Ícone Facebook" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/utflorestal-empresa-j%C3%BAnior"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/img/LinkedIn.png" alt="Ícone LinkedIn" />
        </a>
      </div>
    </header>
  );
};

export default RenderHeader;
