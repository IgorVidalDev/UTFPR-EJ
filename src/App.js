import React, { useState, useEffect } from 'react';
import './App.css';
import Carrosel from './carrossel';
import renderFooter from './renderFooter';
import renderHeader from './renderHeader';
import Noticias from './Noticias';
import FormularioContato from './FormularioContato';
import Chatbot from './Chatbot';

function App() {

  // Estado para armazenar o hash atual (por exemplo, "#contact")
  const [activeHash, setActiveHash] = useState(window.location.hash);

  // Estado para controlar abertura do chatbot via botão
  const [openChat, setOpenChat] = useState(false);

  // Atualiza o estado quando o hash da URL muda
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // dispara abertura do chatbot
  const handleOpenChat = () => setOpenChat(true);

  // helper para renderizar chatbot em todas as rotas
  const renderChatbot = () => (
    <Chatbot openChat={openChat} onOpen={() => setOpenChat(false)} />
  );

  if (activeHash === "#about") {
    return (
      <div >
        {renderHeader()}
        <main className='quem-somos'>
          <section style={{ width: '68%' }}>
            <h4 >Quem somos</h4>
          </section>

          <div className='quem-somos-descricao'>
            <div className='quem-somos-desc-esquerda'>
              <h5>
                Em 2014, entusiasmados com a ideia e com apoio dos professores e da coordenação do curso, um grupo de graduandos do curso de Engenharia Florestal da UTFPR do Câmpus Dois Vizinhos, decidiram fundar em 15 de dezembro do mesmo ano, a Empresa Júnior UTFlorestal de Planejamento e Execução Florestal.
                <br />
                <br />
                Mediante a necessidade de se criar uma entidade própria, vinculada a Universidade Tecnológica Federal do Paraná, com o objetivo de tornar legal a realização de projetos, contratos e convênios ligados à Área Florestal, bem como, capacitar os estudantes para o mercado de trabalho.
                <br />
                <br />
                A UTFlorestal é uma empresa sem fins lucrativos de caráter educacional, constituída por estudantes de Engenharia Florestal da UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ, preparados para lidar com projetos relacionados à área Florestal e Ambiental.
              </h5>
            </div>
            <div className='quem-somos-desc-direita'>
              <h5>
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
              <br />
            </div>
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



          <div className='div-3-conjuntos'>
            <div className='sub-div-3-conjuntos'>
              <h6>
                MISSÃO
              </h6>
              <h5>
                Garantir a satisfação do cliente com a
                qualidade e execução do trabalho, que
                superem suas expectativas.
              </h5>
            </div>


            <div className='sub-div-3-conjuntos'>
              <h6>
                VISÃO
              </h6>
              <h5>
                Ser empresa de referência em prestação
                de serviços de caráter inovador e
                atuação global, reconhecida como a
                melhor opção por clientes,
                colaboradores, pela qualidade de
                nossos serviços e relacionamento.
              </h5>
            </div>

            <div className='sub-div-3-conjuntos'>
              <h6>
                VALORES
              </h6>
              <ul>
                <li style={{ marginBottom: '0.5em' }}>Estabelecer relações de confiança</li>
                <li style={{ marginBottom: '0.5em' }}>Ética e responsabilidade na tomada de decisões</li>
                <li style={{ marginBottom: '0.5em' }}>Comprometimento</li>
                <li style={{ marginBottom: '0.5em' }}>Superar resultados</li>
                <li style={{ marginBottom: '0.5em' }}>Capacitar os estudantes para o mercado de trabalho</li>
                <li style={{ marginBottom: '0.5em' }}>Sustentabilidade</li>
                <li>Inovação</li>
              </ul>
            </div>
          </div>


          <div className="div-equipe">
  <div className="equipe-texto">
    <h1>Equipe</h1>
    <div className="div-equipe-descricao">
      Nosso time é formado por 10 membros, sendo distribuídos em:<br />
      <div className="div-equipe-span">- 1 Presidente;<br /></div>
      <div className="div-equipe-span">- 6 Diretores;<br /></div>
      <div className="div-equipe-span">- 3 Gerentes.<br /></div>
      Além disso, é orientada por 1 professor doutor, sendo ele:<br /><br />
      - Prof. Dr. Eleandro José Brun;
    </div>
  </div>
  <div className="equipe-imagem">
    <img src="./img/equipe.png" alt="Equipe" />
  </div>
</div>

          {/* FORMULÁRIO #SEPARAR O FORMULÁRIO PARA NÃO SE REPETIR DIVERSAS VEZES */}
        <FormularioContato />      
        </main>
        {renderFooter()}
        <Chatbot />
      </div>
    );
  }

  if (activeHash === "#services") {
    return (
      <div >
        {renderHeader()}
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
        <main >
          <section className='services' id='services'>
            <h4 className = 'Oferecemos-h4'>Oferecemos a Solução Ideal para projetos ambientais, com serviços
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
            <button onClick={handleOpenChat}>SAIBA MAIS</button>
          </section>
          <section className='services'>
            <h2>Georreferenciamento</h2>
            <p>
              Os serviços de georreferenciamento garantem a documentação precisa e atualizada do imóvel rural, permitindo sua regularização junto aos órgãos competentes.
            </p>
            <button onClick={handleOpenChat}>SAIBA MAIS</button>
          </section>
          <section className='services' style={{ backgroundColor: '#ececec' }}>
            <h2>Inventário Florestal</h2>
            <p>
              Essencial para a gestão sustentável das florestas, o inventário avalia o estoque de recursos e identifica áreas de preservação.
            </p>
            <button onClick={handleOpenChat}>SAIBA MAIS</button>
          </section>
          <section className='services'>
            <h2>Programa de Recuperação de Áreas Degradadas (PRAD)</h2>
            <p>
              Focado na recuperação de áreas degradadas, garantindo a conservação da biodiversidade e a sustentabilidade ambiental.
            </p>
            <button onClick={handleOpenChat}>SAIBA MAIS</button>
          </section>
          <section className='services' style={{ backgroundColor: '#ececec' }}>
            <h2>Recuperação de Nascentes</h2>
            <p>
              Fundamental para a conservação do meio ambiente, assegurando a disponibilidade de água em regiões escassas.
            </p>
            <button onClick={handleOpenChat}>SAIBA MAIS</button>
          </section>
          <section className='services'>
            <h2>Projetos Paisagísticos</h2>
            <p>
              Projetos que transformam ambientes externos em espaços aconchegantes e funcionais, valorizando o imóvel e promovendo o bem-estar.
            </p>
            <button onClick={handleOpenChat}>SAIBA MAIS</button>
          </section>
        </main>
        {renderFooter()}
        {renderChatbot()}
      </div>
    );
  }

  if (activeHash === "#noticias") {
    return (
      <>
        {renderHeader()}
        <Noticias />
        {renderFooter()}
        <Chatbot />
      </>
    );
  }


  //hash for "#contact", renderiza apenas o header e a seção de contato isolada
  if (activeHash === "#contact") {
    return (
      <div>
        {renderHeader()}
        <FormularioContato />
        {renderFooter()}
        <Chatbot />
      </div>
    );
  }

  //hash não for "#contact", renderiza a página completa
  return (
    <div>
      {renderHeader()}
      <Carrosel />
      <div>
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
      </div>
      {/* Blocos adicionais (CONTATO INICIAL, PLANEJAMENTO, ENTREGA E EXECUÇÃO) */}
      <div>
        <section className="steps-section">
          <div className="step-box step-initial">
            <h3>CONTATO INICIAL</h3>
            <p>
              Entre em contato conosco através do<br />
              número de telefone fornecido ou<br />
              preencha o formulário de contato.<br />
              Conte-nos sobre suas necessidades e<br />
              solicite um orçamento para nossa<br />
              equipe especializada.
            </p>
            <ul className="contato-container">
            <li>
                <a href="https://wa.me/46999018058" aria-label="WhatsApp">
                  <img
                    src="/img/whatsapp2.png"
                    alt="Ícone WhatsApp"
                    className="icones"
                  />
                </a>
              </li>
              <li>
                <a href="tel:+554699901-8058" aria-label="Telefone">
                  <img
                    src="/img/telefone2.png"
                    alt="Ícone Telefone"
                    className="icones"
                  />
                </a>
              </li>
              <li>
                <button
                  className='form-button'
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  FORMULÁRIO
                </button>
              </li>
            </ul>


          </div>

          <div className="step-box step-planning">
            <h3>PLANEJAMENTO</h3>
            <p>
              Conte com a expertise dos nossos<br />
              acadêmicos de engenharia florestal,<br />
              orientados por profissionais<br />
              credenciados pelo CREA. Sendo uma<br />
              equipe altamente qualificada para<br />
              trabalhar em seu projeto de maneira<br />
              transparente e ágil.
            </p>
          </div>

          <div className="step-box step-delivery">
            <h3>ENTREGA E EXECUÇÃO</h3>
            <p>
              Nos comprometemos a resolver sua<br />
              demanda integralmente dentro do<br />
              prazo acordado, utilizando soluções<br />
              sustentáveis e principalmente rentáveis.
            </p>
          </div>
        </section>
      </div>
      <section id='nossos-servicos' className='services' style={{ borderTop: '4px solid #27331B', paddingTop: '10px', width: '100%', paddingLeft: '0px' }}>
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
          <button onClick={handleOpenChat}>SAIBA MAIS</button>
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
        <button onClick={handleOpenChat}>SAIBA MAIS</button>
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
        <button onClick={handleOpenChat}>SAIBA MAIS</button>
      </section>
      <section id='Recuperação' className='services'>
        <h2>Programa de Recuperação de Áreas Degradadas (PRAD)</h2>
        <p>
          Os serviços de PRAD são essenciais para a recuperação de áreas degradadas, garantindo a
          conservação da biodiversidade e a promoção da sustentabilidade ambiental. É importante
          contar com profissionais especializados e equipamentos modernos para garantir a eficácia das
          medidas adotadas e a qualidade dos resultados alcançados.
        </p>
        <button onClick={handleOpenChat}>SAIBA MAIS</button>
      </section>
      <section id='Nascentes' className='services' style={{ backgroundColor: '#ececec' }}>
        <h2>Recuperação de Nascentes</h2>
        <p>
          Os serviços de recuperação de nascentes são fundamentais para a conservação do meio ambiente e
          a garantia da disponibilidade de água em regiões onde essa é escassa. É importante contar com
          profissionais especializados e experientes, que possam oferecer soluções personalizadas e
          adequadas às necessidades de cada caso.
        </p>
        <button onClick={handleOpenChat}>SAIBA MAIS</button>
      </section>
      <section className='services'>
        <h2>Projetos Paisagísticos</h2>
        <p>
          Os serviços de projetos paisagísticos são ideais para quem deseja transformar ambientes externos
          em espaços aconchegantes e agradáveis, que valorizam o imóvel e promovem o bem-estar de seus
          usuários. É fundamental contar com profissionais capacitados e experientes, que possam oferecer
          soluções personalizadas e adequadas às necessidades de cada projeto.
        </p>
        <button onClick={handleOpenChat}>SAIBA MAIS</button>
      </section>
      <FormularioContato />
      {renderFooter()}
      {renderChatbot()}
    </div>



  );
}

export default App;
