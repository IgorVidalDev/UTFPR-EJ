const renderHeader = () => (
    <header>
      <img className="logo" src="/img/logo.png" alt="Logo" />
      <nav>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "#home";
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Início
        </a>
        <a href="#about">Sobre nós</a>
        <a href="#services">Serviços</a>
        <a href="#noticias">Notícias</a>
        <a href="#contact">Contato</a>
      </nav>

      <div className='social-icons'>
        {/* Telefone */}
        <a href="tel:+554699901-8058" aria-label="Telefone">
          <img src="./img/telefone.png" alt="Ícone Telefone" />
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/46999018058" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img src="/img/whatsapp.png" alt="Ícone WhatsApp"/>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/utflorestal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/img/instagram.png" alt="Ícone Instagram"/>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/utflorestal/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/img/facebook.png" alt="Ícone Facebook"/>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/utflorestal-empresa-j%C3%BAnior" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/img/LinkedIn.png" alt="Ícone LinkedIn"/>
        </a>
      </div>
    </header>
  );

  export default renderHeader;