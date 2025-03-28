import React, { useState, useEffect } from 'react';
import './App.css';
import Carrosel from './carrossel';
import renderFooter from './renderFooter';
import renderHeader from './renderHeader';

function App() {
  // Estado para os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    assunto: '',
    telefone: '',
    email: '',
    necessidade: '',
  });

  // Estado para armazenar o hash atual (por exemplo, "#contact")
  const [activeHash, setActiveHash] = useState(window.location.hash);

  // Atualiza o estado quando o hash da URL muda
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  if (activeHash === "#about") {
    return (
      <div >
        {renderHeader()}
        <main >
          <section style={{ width: '68%' }}>
            <h4 style={{
              width: '50%',
              fontSize: '35px',
              textAlign: 'left',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color: '#000000',
              fontWeight: 'bold',
              marginBottom: '0px',
              marginLeft: '33.5vh',
            }}>Quem somos</h4>
          </section>

          <div style={{
            display: 'flex',  // Usando flexbox para alinhar os elementos lado a lado
            justifyContent: 'center', // Garante que o espaço entre os elementos seja distribuído
            alignItems: 'flex-start', // Alinha os itens no topo
            width: '100%', // Garante que o contêiner ocupe toda a largura disponível
          }}>
            <h5 style={{
              width: '50%',  // Aumente a largura para expandir para a direita
              textAlign: 'justify',      // Alinha o texto
              paddingRight: '0px',
              fontSize: '18px',      // Adiciona espaço à direita, ajustando conforme necessário
              marginLeft: '35.7vh',
              lineHeight: '1.6em',
              letterSpacing: '0.05em',
              fontWeight: 'normal',
              marginTop: '0px',
            }}>
              Em 2014, entusiasmados com a ideia e com apoio dos professores e da coordenação do curso, um grupo de graduandos do curso de Engenharia Florestal da UTFPR do Câmpus Dois Vizinhos, decidiram fundar em 15 de dezembro do mesmo ano, a Empresa Júnior UTFlorestal de Planejamento e Execução Florestal.
              <br />
              <br />
              Mediante a necessidade de se criar uma entidade própria, vinculada a Universidade Tecnológica Federal do Paraná, com o objetivo de tornar legal a realização de projetos, contratos e convênios ligados à Área Florestal, bem como, capacitar os estudantes para o mercado de trabalho.
              <br />
              <br />
              A UTFlorestal é uma empresa sem fins lucrativos de caráter educacional, constituída por estudantes de Engenharia Florestal da UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ, preparados para lidar com projetos relacionados à área Florestal e Ambiental.
            </h5>

            <h5 style={{
              width: '50%',  // Defina a largura do segundo h5
              textAlign: 'justify', // Alinha o texto no centro, mas você pode ajustar conforme necessário
              paddingLeft: '3vh',
              fontSize: '18px',
              marginRight: '30vh',
              lineHeight: '1.6em',
              letterSpacing: '0.05em',
              fontWeight: 'normal',
              marginTop: '0px',
            }}>
              Conta com o apoio de Professores e Profissionais credenciados pelo
              CREA, desenvolvendo a capacidade empreendedora de seus Consultores,
              que tem a possibilidade de atuar profissionalmente, ainda dentro da
              Universidade.

              <br />
              <br />
              A UTFlorestal supre a necessidade dos clientes através de excelentes
              resultados, comprometendo-se com aspectos sociais, ambientais e
              econômicos, trabalhando sempre com ética e dedicação.

              <br />
              <br />
              Nos comprometemos a atender nossos clientes de maneira responsável,
              produzindo resultados excelentes e considerando os aspectos sociais,
              ambientais e econômicos. Tudo isso é feito com ética e dedicação em
              cada etapa do processo.

              <br />
              <br />
              Estamos localizados na cidade de Dois Vizinhos, a 156 km de Cascavel e a
              78 km de Pato Branco, no sudoeste do Paraná.
            </h5>
          </div>
          <div>
            <div
              style={{
                position: 'relative',
                height: '30vh',
                overflow: 'hidden',
                backgroundImage: "url('/img/image2.jpg')",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: '0 20%'
              }}
            ></div>
          </div>



          <div style={{
            display: 'flex',                // Usando flexbox para alinhar os elementos
            justifyContent: 'space-between', // Garante que os itens sejam distribuídos igualmente
            width: '100%',                  // Garante que o contêiner ocupe toda a largura disponível
            marginTop: '20px',              // Ajuste o espaçamento superior se necessário
          }}>
            <div style={{ textAlign: 'center', width: '33.33%' }}>
              <h6 style={{
                marginBottom: '0',
                marginTop: '0',
                fontSize: '20px',
                color: '#27331B',
                lineHeight: '1.0em',
                letterSpacing: '0.1em',
                fontFamily: 'lulo-clean-w01-one-bold, lulo-clean-w05-one-bold, sans-serif',
                fontWeight: 900,
              }}>
                MISSÃO
              </h6>
              <h5 style={{
                width: '50%',
                margin: '0 auto', // centraliza horizontalmente o h5
                textAlign: 'justify',
                fontSize: '18px',
                lineHeight: '1.6em',
                letterSpacing: '0.05em',
                fontWeight: 'normal',
                marginTop: '10px',
                marginBottom: '5vh',
              }}>
                Garantir a satisfação do cliente com a
                qualidade e execução do trabalho, que
                superem suas expectativas.
              </h5>
            </div>


            <div style={{ textAlign: 'center', width: '33.33%' }}>
              <h6 style={{
                marginBottom: '0',
                marginTop: '0',
                fontSize: '20px',
                color: '#27331B',
                lineHeight: '1.0em',
                letterSpacing: '0.1em',
                fontFamily: 'lulo-clean-w01-one-bold, lulo-clean-w05-one-bold, sans-serif',
                fontWeight: 900,
              }}>
                VISÃO
              </h6>
              <h5 style={{
                width: '50%',
                margin: '0 auto', // centraliza horizontalmente o h5
                textAlign: 'justify',
                fontSize: '18px',
                lineHeight: '1.6em',
                letterSpacing: '0.05em',
                fontWeight: 'normal',
                marginTop: '10px',
                marginBottom: '5vh',
              }}>
                Ser empresa de referência em prestação
                de serviços de caráter inovador e
                atuação global, reconhecida como a
                melhor opção por clientes,
                colaboradores, pela qualidade de
                nossos serviços e relacionamento.
              </h5>
            </div>

            <div style={{ textAlign: 'center', width: '33.33%' }}>
              <h6 style={{
                marginBottom: '10vh',
                marginTop: '0',
                fontSize: '20px',
                color: '#27331B',
                lineHeight: '1.0em',
                letterSpacing: '0.1em',
                fontFamily: 'lulo-clean-w01-one-bold, lulo-clean-w05-one-bold, sans-serif',
                fontWeight: 900,
              }}>
                VALORES
              </h6>
              <ul style={{
                width: '50%',
                margin: '10px auto 5vh auto',
                textAlign: 'left', // Alinha o texto à esquerda para a lista
                fontSize: '18px',
                lineHeight: '1.6em',
                letterSpacing: '0',
                fontWeight: 'normal',
                listStyleType: 'none', // Remove os marcadores padrão, se preferir
                padding: 0,
              }}>
                <li style={{ marginBottom: '0.5em' }}>🤝 Estabelecer relações de confiança</li>
                <li style={{ marginBottom: '0.5em' }}>⚖️ Ética e responsabilidade na tomada de decisões</li>
                <li style={{ marginBottom: '0.5em' }}>🔥 Comprometimento</li>
                <li style={{ marginBottom: '0.5em' }}>🚀 Superar resultados</li>
                <li style={{ marginBottom: '0.5em' }}>🎓 Capacitar os estudantes para o mercado de trabalho</li>
                <li style={{ marginBottom: '0.5em' }}>🌱 Sustentabilidade</li>
                <li>💡 Inovação</li>
              </ul>
            </div>
          </div>


          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 3vh' }}>
  <div style={{ flex: 1, textAlign: 'left' }}>
    <h1 style={{
      textAlign: 'left',
      fontFamily: 'lulo-clean-w01-one-bold, lulo-clean-w05-one-bold, sans-serif',
      color: '#2F2E2E',
      textAlign: 'justify',
      marginLeft: '20vh',
      marginBottom: '15vh',
      marginTop: '-13vh',
    }}>
      Equipe
      <br />
      <span style={{ fontSize: '18px', fontWeight: 1, textAlign: 'justify' }}>
        Nosso time é formado por 15 membros, sendo distribuídos em:
        <br />
        - 1 Presidente;
        <br />
        - 6 Diretores;
        <br />
        - 8 Gerentes.
        <br />
        Além disso, é orientada por 1 professor doutor, sendo ele:
        <br />
        - Prof. Dr. Eleandro José Brun;
      </span>
    </h1>
  </div>
  <div style={{ flex: 1.2, display: 'flex', justifyContent: 'flex-start', marginRight: '20vh', marginBottom: '15vh' }}>
    <img 
      src="./img/equipe.png" 
      alt="Equipe" 
      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
    />
  </div>
</div>


{/* FORMULÁRIO #SEPARAR O FORMULÁRIO PARA NÃO SE REPETIR DIVERSAS VEZES */}
<section className="contact-section" style={{ backgroundColor: '#FFFFFF' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
            border: '1px rgb(255, 255, 255)',
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

          <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Novo contato via formulário" />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '30px',
              }}
            >
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

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '30px',
              }}
            >
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

            <button
              className="button-enviar"
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#3f7652',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Enviar
            </button>
          </form>
        </div>

      </section>

        </main>
        {renderFooter()}
      </div>
    );
  }

  if (activeHash === "#services") {
    return (
      <div >
        {renderHeader()}
        <img src='/img/image2.jpg' style={{ width: '100%', height: '30vh', objectPosition: '0 20%', objectFit: 'cover' }}></img>
        <main >
          <section className='services' id='services'>
            <h4 style={{
              width: '70%',
              fontSize: '35px',
              textAlign: 'justify',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color: '#000000',
              fontWeight: 700,
              marginBottom: '0px'
            }}>Oferecemos a Solução Ideal para projetos ambientais, com serviços
              especializados e personalizados para garantir a sustentabilidade e
              preservação dos recursos naturais.</h4>

            <h5>A UTFlorestal é uma empresa de consultoria ambiental que oferece uma ampla gama de serviços, incluindo soluções de Licenciamento / Regularização,
              Inventário Florestal, Georreferenciamento, Programa de Recuperação de Áreas Degradadas (PRAD), Recuperação de Nascentes, Projetos Paisagísticos e
              entre outros. Além disso, nossa empresa tem uma forte atuação na conservação, gestão e valorização dos recursos naturais.</h5>

            <h5>Nosso compromisso com a excelência é evidente em todos os nossos trabalhos e projetos, que se destacam pela alta qualidade técnica e pelas soluções
              inteligentes e inovadoras oferecidas por nossa equipe de profissionais experientes e altamente capacitados em serviços ambientais. Na UTFlorestal,
              acreditamos que é nossa responsabilidade preservar, manter e utilizar os recursos naturais de forma sustentável, e nossa equipe se dedica a cumprir essa
              missão com rigor técnico-científico e responsabilidade ambiental em todos os nossos serviços.

            </h5>

            <h5 style={{ marginBottom: '70px' }}>Se você está buscando soluções ambientais eficazes e sustentáveis, a UTFlorestal é a escolha certa para atender às suas necessidades. Contate-nos hoje
              mesmo para saber mais sobre nossos serviços.</h5>
          </section>
          <section className='services' style={{ backgroundColor: '#ececec' }}>
            <h2>Licenciamento / Regularização Ambiental</h2>
            <p>
              Os serviços de licenciamento e regularização de um imóvel rural são essenciais para
              garantir a conformidade legal e ambiental da propriedade. Por isso, é importante contar
              com profissionais especializados para que todos os procedimentos sejam realizados de forma correta e eficiente.
            </p>
            <button>SAIBA MAIS</button>
          </section>
          <section className='services'>
            <h2>Georreferenciamento</h2>
            <p>
              Os serviços de georreferenciamento garantem a documentação precisa e atualizada do imóvel rural, permitindo sua regularização junto aos órgãos competentes.
            </p>
            <button>SAIBA MAIS</button>
          </section>
          <section className='services' style={{ backgroundColor: '#ececec' }}>
            <h2>Inventário Florestal</h2>
            <p>
              Essencial para a gestão sustentável das florestas, o inventário avalia o estoque de recursos e identifica áreas de preservação.
            </p>
            <button>SAIBA MAIS</button>
          </section>
          <section className='services'>
            <h2>Programa de Recuperação de Áreas Degradadas (PRAD)</h2>
            <p>
              Focado na recuperação de áreas degradadas, garantindo a conservação da biodiversidade e a sustentabilidade ambiental.
            </p>
            <button>SAIBA MAIS</button>
          </section>
          <section className='services' style={{ backgroundColor: '#ececec' }}>
            <h2>Recuperação de Nascentes</h2>
            <p>
              Fundamental para a conservação do meio ambiente, assegurando a disponibilidade de água em regiões escassas.
            </p>
            <button>SAIBA MAIS</button>
          </section>
          <section className='services'>
            <h2>Projetos Paisagísticos</h2>
            <p>
              Projetos que transformam ambientes externos em espaços aconchegantes e funcionais, valorizando o imóvel e promovendo o bem-estar.
            </p>
            <button>SAIBA MAIS</button>
          </section>
        </main>
        {renderFooter()}
      </div>
    );
  }

  // Se o hash for "#contact", renderiza apenas o header e a seção de contato isolada
  if (activeHash === "#contact") {
    return (
      <div>
        {renderHeader()}
        <section
          id="contact"
          className="contact-section"
          style={{
            backgroundColor: 'white',
            padding: '20px', // Reduzi o padding
            margin: '0vh',  // Reduzi a margem
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 80px)', // Subtrai a altura da navbar para centralizar corretamente
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center', // Alinha o conteúdo ao centro verticalmente
              gap: '10px', // Gap reduzido para aproximar a coluna da direita do widget
              maxWidth: '1000px',
              width: '100%',
            }}
          >
            {/* Coluna Esquerda: Widget do Facebook */}
            <div
              style={{
                flex: '0 0 300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '35px',
                paddingBottom: '8.7vh', // Espaço superior reduzido para o widget
              }}
            >
              <div
                className="fb-page"
                data-href="https://www.facebook.com/utflorestal?ref=embed_page"
                data-width="300"
                data-height="680"
                data-show-posts="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <iframe
                  title="Facebook"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Futflorestal&tabs=timeline&width=300&height=780&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="300"
                  height="780"
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>

            {/* Coluna Direita: Container com o texto acima e o quadrado do formulário */}
            {/* Coluna Direita: Container com o texto acima e o quadrado do formulário */}
            <div
              style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                position: 'relative', // Necessário para posicionamento absoluto dos elementos internos
                paddingTop: '100px', // Espaço reservado para o formulário
              }}
            >
              {/* Texto acima do formulário, posicionado absolutamente */}
              <div className="form-text__container">
                <h4 className="form-text__title">
                  <span className="form-text__text">Nossos</span>
                  <span className="form-text__text" style={{ marginLeft: '5px' }}>contatos</span>
                </h4>

                <h1>
                  <span className="form-text__text">Tel: (46)</span>
                  <span className="form-text__phone">99973-0867</span>
                </h1>

                <span style={{ fontSize: '21px' }}>
                  <span className="form-text__text">
                    E-mail:&nbsp;
                    <a
                      href="mailto:utflorestal.utfpr@gmail.com"
                      className="form-text__email-link"
                    >
                      utflorestal.utfpr@gmail.com
                    </a>
                  </span>
                </span>
              </div>


              {/* Quadrado do Formulário */}
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#ececec',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '300px',
                }}
              >
                <h2
                  style={{
                    color: '#3f7652',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    textAlign: 'center',
                    marginBottom: '20px',
                  }}
                >
                  Entre em contato e solicite um(a) análise/orçamento
                </h2>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                  }}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Novo contato via formulário" />

                  {/* Nome e Telefone */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '20px', // Reduzi o gap entre os inputs
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ flex: '1' }}>
                      <label
                        htmlFor="nome"
                        style={{
                          color: '#3f7652',
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
                        }}
                      />
                    </div>
                    <div style={{ flex: '1' }}>
                      <label
                        htmlFor="telefone"
                        style={{
                          color: '#3f7652',
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
                        }}
                      />
                    </div>
                  </div>

                  {/* Assunto e Email */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '20px', // Reduzi o gap
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ flex: '1' }}>
                      <label
                        htmlFor="assunto"
                        style={{
                          color: '#3f7652',
                          display: 'block',
                          marginBottom: '5px',
                        }}
                      >
                        Assunto *
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
                        }}
                      />
                    </div>
                    <div style={{ flex: '1' }}>
                      <label
                        htmlFor="email"
                        style={{
                          color: '#3f7652',
                          display: 'block',
                          marginBottom: '5px',
                        }}
                      >
                        Email (Não Obrigatório)
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
                        }}
                      />
                    </div>
                  </div>

                  {/* Necessidade */}
                  <div style={{ width: '100%' }}>
                    <label
                      htmlFor="necessidade"
                      style={{
                        color: '#3f7652',
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
                        resize: 'none',
                        height: '150px',
                      }}
                    ></textarea>
                  </div>

                  {/* Botão de Enviar */}
                  <button
                    className="button-enviar"
                    type="submit"
                    style={{
                      padding: '12px 22vh', // Ajusta o tamanho do botão
                      backgroundColor: '#3f7652',
                      color: 'white',
                      border: 'none',
                      borderRadius: '9px',
                      cursor: 'pointer',
                      justifyContent: 'center',
                      display: 'flex', // Centraliza o conteúdo dentro do botão
                      alignItems: 'center',
                      textAlign: 'center',
                      width: 'auto', // Ajusta o tamanho automaticamente com base no conteúdo
                      maxWidth: '200px', // Limita o tamanho máximo do botão
                      marginTop: '20px', // Espaçamento acima do botão
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {renderFooter()}
      </div>
    );
  }







  // Se o hash não for "#contact", renderiza a página completa
  return (
    <div>
      {renderHeader()}
      <Carrosel />
      <section id="home">
        <div className="text">
          <h1>
            Equilíbrio entre <span>conservar</span> e <span>produzir</span>
          </h1>
          <p>
            Os profissionais da UTFlorestal são altamente capacitados para oferecer
            soluções vantajosas aos clientes e, ao mesmo tempo, preservar o meio ambiente.
            Quando se trata de conceber um projeto, é crucial considerar os impactos
            socioambientais envolvidos. Não se trata apenas de cumprir as obrigações
            legais, mas de assumir a responsabilidade pela preservação, manutenção e
            uso sustentável dos recursos naturais em todas as etapas do empreendimento.
          </p>
          <p>
            Nosso trabalho é pautado em princípios éticos e sustentáveis, e buscamos
            sempre ir além do que está previsto em lei. Acreditamos que, ao cuidar do
            meio ambiente, estamos cuidando também do futuro das próximas gerações.
          </p>
          <p>
            Portanto, se você busca um parceiro para desenvolver projetos
            sustentáveis e eficazes, a UTFlorestal é a escolha certa. Conte conosco para
            trazer soluções vantajosas para sua propriedade, sem abrir mão da preservação e
            do uso sustentável dos recursos naturais.
          </p>
          <br />
          <br />
        </div>
        <div className="image">
          <img src="/img/image3.png" alt="Imagem" />
        </div>
      </section>
      {/* Blocos adicionais (CONTATO INICIAL, PLANEJAMENTO, ENTREGA E EXECUÇÃO) */}
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
            marginTop: window.innerWidth <= 768 ? '36vh' : '-8vh',
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
              fontFamily:
                'avenir-lt-w01_85-heavy1475544, avenir-lt-w05_85-heavy, sans-serif',
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
              fontFamily:
                "avenir-lt-w01_85-heavy1475544, avenir-lt-w05_85-heavy, sans-serif",
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
            marginBottom: window.innerWidth <= 768 ? '0vh' : '-8vh',
            backgroundColor: '#ececec',
            padding: window.innerWidth <= 768 ? '10px' : '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: window.innerWidth <= 768 ? '200px' :
              window.innerWidth <= 1024 ? '445px' : '300px',
            width: '100%',
            flex: '1 1 33.33%',
          }}
        >
          <span
            style={{
              fontFamily:
                "avenir-lt-w01_85-heavy1475544, avenir-lt-w05_85-heavy, sans-serif",
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
      <section className='services'>
        <h1>
          <span style={{ fontWeight: 500, backgroundColor: 'white' }}>Nossos </span>
          <b>Serviços</b>
        </h1>
        <p style={{ textAlign: "center" }}>
          Nossas soluções são cuidadosamente desenvolvidas para serem viáveis em todos os
          aspectos, incluindo o meio<br /> ambiente, a economia e o bem-estar social.
        </p>
      </section>
      <section id='Licenciamento' className='services' style={{ backgroundColor: '#ececec' }}>
        <h2>Licenciamento / Regularização Ambiental</h2>
        <p>Os serviços de inventário florestal são essenciais para a gestão
          sustentável das florestas, permitindo a avaliação do estoque de
          recursos florestais, a identificação de áreas de preservação
          permanente e a elaboração de planos <br /> de manejo florestal. É
          importante contar com profissionais especializados e
          qualidade dos dados coletados.</p>
        <button>SAIBA MAIS</button>
      </section>
      <section id='Georreferenciamento' className='services'>
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
      <section className='services' style={{ backgroundColor: '#ececec' }}>
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
      <section id='Recuperação' className='services'>
        <h2>Programa de Recuperação de Áreas Degradadas (PRAD)</h2>
        <p>
          Os serviços de PRAD são essenciais para a recuperação de áreas degradadas, garantindo a
          conservação da biodiversidade e a promoção da sustentabilidade ambiental. É importante
          contar com profissionais especializados e equipamentos modernos para garantir a eficácia das
          medidas adotadas e a qualidade dos resultados alcançados.
        </p>
        <button>SAIBA MAIS</button>
      </section>
      <section id='Nascentes' className='services' style={{ backgroundColor: '#ececec' }}>
        <h2>Recuperação de Nascentes</h2>
        <p>
          Os serviços de recuperação de nascentes são fundamentais para a conservação do meio ambiente e
          a garantia da disponibilidade de água em regiões onde essa é escassa. É importante contar com
          profissionais especializados e experientes, que possam oferecer soluções personalizadas e
          adequadas às necessidades de cada caso.
        </p>
        <button>SAIBA MAIS</button>
      </section>
      <section className='services'>
        <h2>Projetos Paisagísticos</h2>
        <p>
          Os serviços de projetos paisagísticos são ideais para quem deseja transformar ambientes externos
          em espaços aconchegantes e agradáveis, que valorizam o imóvel e promovem o bem-estar de seus
          usuários. É fundamental contar com profissionais capacitados e experientes, que possam oferecer
          soluções personalizadas e adequadas às necessidades de cada projeto.
        </p>
        <button>SAIBA MAIS</button>
      </section>
      <section className="contact-section" style={{ backgroundColor: '#FFFFFF' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
            border: '1px rgb(255, 255, 255)',
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

          <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Novo contato via formulário" />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '30px',
              }}
            >
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

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                gap: '30px',
              }}
            >
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

            <button
              className="button-enviar"
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#3f7652',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Enviar
            </button>
          </form>
        </div>

      </section>
      {renderFooter()}
    </div>



  );
}

export default App;
