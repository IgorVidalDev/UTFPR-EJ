    const renderFooter = () => (
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <span style={{ fontSize: '14px', letterSpacing: '0.05em' }}>UTFlorestal © 2021</span>
          </div>
          <div className="footer-center">
            <div className="footer-section">
              <h3>Institucional</h3>
              <ul>
                <li><a href="#">Inicío</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Serviços</h3>
              <ul>
                <li><a href="#services">Licenciamento/Regularização<br /> Ambiental</a></li>
                <li><a href="#services">Georreferenciamento <br />
                  Inventário Florestal</a></li>
                <li><a href="#services">Programa de Recuperação de<br /> Áreas Degradadas (PRAD)</a></li>
                <li><a href="#services">Recuperação de Nascentes <br />
                  Projetos Paisagisticos</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contatos</h3>
              <ul>
                <li><a href="#">utflorestal.utfpr@gmail.com</a></li>
                <br />
                <li><a href="#">+55 (46) 99973-0867</a></li>
                <br />
                <li><a href="#">UTFlorestal - Planejamento e Execução</a></li>
                <br />
                <li>Estrada P/ Boa Esperança Km 04. <br />
                  CEP 85660-000 – Dois Vizinhos, Paraná. <br />
                  Caixa Postal 157 Bloco A2, Sala S/N</li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <ul>
              {/* Telefone */}
              <li>
              <a href="tel:+554699901-8058" aria-label="Telefone">
                <img src="./img/telefone.png" alt="Ícone Telefone" style={{ width: '24px', height: '24px' }} />
              </a>
              </li>
              {/* WhatsApp */}
              <li>
              <a href="https://wa.me/46999018058" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <img src="/img/whatsapp.png" alt="Ícone WhatsApp" style={{ width: '24px', height: '24px' }} />
              </a>
              </li>
              {/* Instagram */}
              <li>
              <a href="https://www.instagram.com/utflorestal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/img/instagram.png" alt="Ícone Instagram" style={{ width: '24px', height: '24px' }} />
              </a>
              </li>
              {/* Facebook */}
              <li>
              <a href="https://www.facebook.com/utflorestal/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/img/facebook.png" alt="Ícone Facebook" style={{ width: '24px', height: '24px' }} />
              </a>
              </li>
              {/* LinkedIn */}
              <li>
              <a href="https://www.linkedin.com/company/utflorestal-empresa-j%C3%BAnior" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/img/LinkedIn.png" alt="Ícone LinkedIn" style={{ width: '24px', height: '24px' }} />
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

    export default renderFooter;