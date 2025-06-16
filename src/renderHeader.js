import React, { useState } from 'react';
import './App.css';

const RenderHeader = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
    window.location.hash = `#${link}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header>
      <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
        <img className="logo" src="/img/logo.png" alt="Logo" />
      </a>
      
      {/* Botão do menu hambúrguer */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Menu de navegação */}
      <nav className={menuOpen ? 'open' : ''}>
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={activeLink === 'home' ? 'active' : ''}>Início</a>
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={activeLink === 'about' ? 'active' : ''}>Sobre nós</a>
        <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className={activeLink === 'services' ? 'active' : ''}>Serviços</a>
        <a href="#noticias" onClick={(e) => handleLinkClick(e, 'noticias')} className={activeLink === 'noticias' ? 'active' : ''}>Notícias</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className={activeLink === 'contact' ? 'active' : ''}>Contato</a>
      </nav>
      
      {/* Ícones sociais */}
      <div className="social-icons">
        <a href="tel:+554699901-8058" aria-label="Telefone">
          <img src="/img/telefone.png" alt="Ícone Telefone" />
        </a>
        <a href="https://wa.me/46999018058" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img src="/img/whatsapp.png" alt="Ícone WhatsApp" />
        </a>
        <a href="https://www.instagram.com/utflorestal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/img/instagram.png" alt="Ícone Instagram" />
        </a>
        <a href="https://www.facebook.com/utflorestal/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/img/facebook.png" alt="Ícone Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/utflorestal-empresa-j%C3%BAnior" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/img/LinkedIn.png" alt="Ícone LinkedIn" />
        </a>
      </div>
    </header>
  );
};

export default RenderHeader;