import React, { useState } from 'react';
import './App.css';
import Carrosel from './carrossel';

function App() {
  // Mantemos o estado para atualizar os inputs
  const [formData, setFormData] = useState({
    nome: '',
    assunto: '',
    telefone: '',
    email: '',
    necessidade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para tratar o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao enviar o email.');
      }
  
      const result = await response.json();
      alert(result.message);
      setFormData({
        nome: '',
        assunto: '',
        telefone: '',
        email: '',
        necessidade: '',
      });
    } catch (error) {
      console.error(error);
      alert(error.message || 'Erro ao enviar o email.');
    }
  };
  

  

  return (
    <div>
      {/* Header com Navbar */}
      <header>
        <img className="logo" src="/img/logo.png" alt="Logo" />
        <nav>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
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
      </header>

      {/* Carrossel */}
      <Carrosel />

      {/* Seções de conteúdo */}
      <section id="home">
        <div className="text">
          <h1>
            Equilíbrio entre <span style={{ fontWeight: 800 }}>conservar</span> e{' '}
            <span style={{ fontWeight: 800 }}>produzir</span>
          </h1>
          <p>
            Os profissionais da UTFlorestal são altamente capacitados para oferecer
            soluções vantajosas aos clientes e ao mesmo tempo, preservar o meio ambiente.
            Quando se trata de conceber um projeto, é crucial considerar os impactos
            socioambientais envolvidos. Não se trata apenas de cumprir as obrigações
            legais, mas de assumir a responsabilidade pela preservação, manutenção e
            uso sustentável dos recursos naturais em todas as etapas do empreendimento.
          </p>
          <p>
            Nosso trabalho é pautado em princípios éticos e sustentáveis, e buscamos
            sempre ir além do que está previsto em lei. Acreditamos que ao cuidar do
            meio ambiente estamos cuidando também do futuro das próximas gerações.
          </p>
          <p>
            Portanto, se você busca um parceiro para desenvolver projetos
            sustentáveis e eficazes, a UTFlorestal é a escolha certa. Conte conosco para
            trazer soluções vantajosas para sua propriedade, sem abrir mão da preservação e
            do uso sustentável dos recursos naturais.
          </p>
        </div>
        <div className="image">
          <img src="/img/image3.png" alt="Imagem" />
        </div>
      </section>

      {/* Seção com 3 divs coloridas */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          padding: '0',
          boxSizing: 'border-box',
          gap: '20px',
        }}
      >
        {/* CONTATO INICIAL */}
        <div
          style={{
            marginTop: window.innerWidth <= 768 ? '25vh' : '-8vh',
            backgroundColor: '#ececec',
            padding: window.innerWidth <= 768 ? '10px' : '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: window.innerWidth <= 768 ? '200px' : '300px',
            width: '100%',
            flex: '1 1 33.33%',
          }}
        >
          <span
            style={{
              fontFamily: 'avenir-lt-w01_85-heavy1475544, avenir-lt-w05_85-heavy, sans-serif',
              fontSize: '24px',
              fontWeight: '300',
              color: '#303030',
              marginBottom: '20px',
            }}
          >
            <b>CONTATO INICIAL</b>
          </span>
          <span
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#303030',
              textAlign: 'center',
            }}
          >
            Entre em contato conosco através do <br /> número de telefone fornecido ou
            <br /> preencha o formulário de contato. <br /> Conte-nos sobre suas
            necessidades e <br /> solicite um orçamento para nossa <br /> equipe
            especializada.
          </span>
          <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '10px' }}>
            <li>WhatsApp</li>
            <li>Telefones</li>
            <li>Formulário</li>
          </ul>
        </div>

        {/* PLANEJAMENTO */}
        <div
          style={{
            marginTop: window.innerWidth <= 768 ? '3vh' : '-8vh',
            backgroundColor: '#FFFFFF',
            padding: window.innerWidth <= 768 ? '10px' : '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: window.innerWidth <= 768 ? '200px' : '300px',
            width: '100%',
            flex: '1 1 33.33%',
          }}
        >
          <span
            style={{
              fontFamily: 'avenir-lt-w01_85-heavy1475544, avenir-lt-w05_85-heavy, sans-serif',
              fontSize: '24px',
              fontWeight: '300',
              color: '#303030',
              marginBottom: '20px',
            }}
          >
            <b>PLANEJAMENTO</b>
          </span>
          <span
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#303030',
              textAlign: 'center',
            }}
          >
            Conte com a expertise dos nossos <br /> acadêmicos de engenharia florestal, <br /> orientados por
            profissionais <br /> credenciados pelo CREA. Sendo uma <br /> equipe altamente qualificada para <br /> trabalhar
            em seu projeto de maneira <br /> transparente e ágil.
          </span>
        </div>

        {/* ENTREGA E EXECUÇÃO */}
        <div
          style={{
            marginTop: window.innerWidth <= 768 ? '0vh' : '-8vh',
            backgroundColor: '#ececec',
            padding: window.innerWidth <= 768 ? '10px' : '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: window.innerWidth <= 768 ? '200px' : '300px',
            width: '100%',
            flex: '1 1 33.33%',
          }}
        >
          <span
            style={{
              fontFamily: 'avenir-lt-w01_85-heavy1475544, avenir-lt-w05_85-heavy, sans-serif',
              fontSize: '24px',
              fontWeight: '300',
              color: '#303030',
              marginBottom: '20px',
            }}
          >
            <b>ENTREGA E EXECUÇÃO</b>
          </span>
          <span
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#303030',
              textAlign: 'center',
            }}
          >
            Nos comprometemos a resolver sua <br /> demanda integralmente dentro do <br /> prazo
            acordado, utilizando soluções <br /> sustentáveis e principalmente rentáveis.
          </span>
        </div>
      </section>

      {/* Linha verde escuro após o grid */}
      <div
        style={{
          width: '100%',
          height: '4px',
          backgroundColor: '#006400',
          marginTop: '0px',
        }}
      ></div>

      {/* Outras seções e footer... */}
      <section id="services">
        <h1>
          <span style={{ fontWeight: 500 }}>Nossos </span>
          <b>Serviços</b>
        </h1>
        <p>
          Nossas soluções são cuidadosamente desenvolvidas para serem viáveis em todos os
          aspectos, incluindo o meio ambiente, a economia e o bem-estar social.
        </p>
      </section>

      <section id="services" style={{ backgroundColor: '#ececec' }}>
        <h2>Licenciamento / Regularização Ambiental</h2>
        <p>
          Os serviços de licenciamento e regularização de um imóvel rural são essenciais para
          garantir a conformidade legal e ambiental da propriedade. Por isso, é importante contar
          com profissionais especializados nesse tipo de serviço para garantir que todos os
          procedimentos sejam realizados de forma correta e eficiente.
        </p>
        <button>SAIBA MAIS</button>
      </section>

      <section id="services">
        <h2>Georreferenciamento</h2>
        <p>
          Os serviços de georreferenciamento são essenciais para garantir a documentação precisa e
          atualizada do imóvel rural, permitindo a regularização do imóvel junto aos órgãos competentes
          e fornecendo informações precisas para a gestão da propriedade. É importante contar com
          profissionais especializados e equipamentos modernos para garantir a precisão e qualidade dos
          dados coletados.
        </p>
        <button>SAIBA MAIS</button>
      </section>

      <section id="services" style={{ backgroundColor: '#ececec' }}>
        <h2>Inventário Florestal</h2>
        <p>
          Os serviços de inventário florestal são essenciais para a gestão sustentável das florestas,
          permitindo a avaliação do estoque de recursos florestais, a identificação de áreas de
          preservação permanente e a elaboração de planos de manejo florestal. É importante contar com
          profissionais especializados e equipamentos modernos para garantir a precisão e qualidade dos
          dados coletados.
        </p>
        <button>SAIBA MAIS</button>
      </section>

      <section id="services">
        <h2>Programa de Recuperação de Áreas Degradadas (PRAD)</h2>
        <p>
          Os serviços de PRAD são essenciais para a recuperação de áreas degradadas, garantindo a
          conservação da biodiversidade e a promoção da sustentabilidade ambiental. É importante
          contar com profissionais especializados e equipamentos modernos para garantir a eficácia das
          medidas adotadas e a qualidade dos resultados alcançados.
        </p>
        <button>SAIBA MAIS</button>
      </section>

      <section id="services" style={{ backgroundColor: '#ececec' }}>
        <h2>Recuperação de Nascentes</h2>
        <p>
          Os serviços de recuperação de nascentes são fundamentais para a conservação do meio ambiente e
          a garantia da disponibilidade de água em regiões onde essa é escassa. É importante contar com
          profissionais especializados e experientes, que possam oferecer soluções personalizadas e
          adequadas às necessidades de cada caso.
        </p>
        <button>SAIBA MAIS</button>
      </section>

      <section id="services">
        <h2>Projetos Paisagísticos</h2>
        <p>
          Os serviços de projetos paisagísticos são ideais para quem deseja transformar ambientes externos
          em espaços aconchegantes e agradáveis, que valorizam o imóvel e promovem o bem-estar de seus
          usuários. É fundamental contar com profissionais capacitados e experientes, que possam oferecer
          soluções personalizadas e adequadas às necessidades de cada projeto.
        </p>
        <button>SAIBA MAIS</button>
      </section>

      {/* Formulário de Contato */}
      <section id="contact" className="contact-section">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
            border: '1px rgb(247, 34, 34)',
            borderRadius: '8px',
            backgroundColor: '#ececec',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              color: '#3f7652',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            Entre em contato e <br /> solicite um(a) análise/orçamento
          </h2>

          {/* Alteramos o formulário para usar onSubmit e remover action e method */}
          <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Campos ocultos (se desejar mantê-los) */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Novo contato via formulário" />

            {/* Nome e Telefone em uma linha */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '30px',
              }}
            >
              {/* Nome */}
              <div style={{ flex: '1' }}>
                <label
                  htmlFor="nome"
                  style={{
                    color: '#3f7652',
                    textAlign: 'left',
                    display: 'block',
                    marginBottom: '5px',
                  }}
                >
                  Nome Completo *
                </label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  required
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#e1e7e3',
                    width: '100%',
                    marginBottom: '15px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                  }}
                />
              </div>

              {/* Telefone */}
              <div style={{ flex: '1', textAlign: 'right' }}>
                <label
                  htmlFor="telefone"
                  style={{
                    color: '#3f7652',
                    textAlign: 'left',
                    display: 'block',
                    marginBottom: '5px',
                  }}
                >
                  Telefone *
                </label>
                <input
                  id="telefone"
                  type="tel"
                  name="telefone"
                  required
                  placeholder="Digite seu telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#e1e7e3',
                    width: '100%',
                    marginBottom: '15px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                  }}
                />
              </div>
            </div>

            {/* Assunto e Email em uma linha */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '30px',
              }}
            >
              {/* Assunto */}
              <div style={{ flex: '1' }}>
                <label
                  htmlFor="assunto"
                  style={{
                    color: '#3f7652',
                    textAlign: 'left',
                    display: 'block',
                    marginBottom: '5px',
                  }}
                >
                  Assunto
                </label>
                <input
                  id="assunto"
                  type="text"
                  name="assunto"
                  required
                  placeholder="Qual o assunto do seu contato?"
                  value={formData.assunto}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#e1e7e3',
                    width: '100%',
                    marginBottom: '15px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ flex: '1' }}>
                <label
                  htmlFor="email"
                  style={{
                    color: '#3f7652',
                    textAlign: 'left',
                    display: 'block',
                    marginBottom: '5px',
                  }}
                >
                  Email (Não Obrigátorio) 
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#e1e7e3',
                    width: '100%',
                    marginBottom: '15px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box',
                    textAlign: 'left',
                  }}
                />
              </div>
            </div>

            {/* Descreva sua necessidade */}
            <div style={{ flex: '1', width: '100%' }}>
              <label
                htmlFor="necessidade"
                style={{
                  color: '#3f7652',
                  textAlign: 'left',
                  display: 'block',
                  marginBottom: '5px',
                }}
              >
                Descreva sua necessidade
              </label>
              <textarea
                id="necessidade"
                name="necessidade"
                rows="5"
                placeholder="Descreva sua necessidade detalhadamente"
                value={formData.necessidade}
                onChange={handleChange}
                style={{
                  backgroundColor: '#e1e7e3',
                  width: '100%',
                  marginBottom: '15px',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  boxSizing: 'border-box',
                  textAlign: 'left',
                  height: '150px',
                  resize: 'none',
                }}
              ></textarea>
            </div>

            {/* Botão de Enviar */}
            <button className='button-enviar' type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
