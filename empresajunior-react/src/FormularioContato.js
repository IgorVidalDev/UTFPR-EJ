import React, { useState, useEffect } from 'react';
import './App.css';


//console.log('API URL:', process.env.REACT_APP_API_URL);
function FormularioContato() {
  const activeHash = window.location.hash;

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    municipio: '',
    estado: '',
    assunto: '',
    email: '',
    tamanhoArea: '',
    necessidade: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Para controle do estado do envio

  useEffect(() => {
    //Verifica se a URL contém o hash "#contact"
    if (window.location.hash === '#contact') {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o e-mail');
      }

      const result = await response.json();
      alert(result.message);

      // Limpa os dados do formulário após o envio
      setFormData({
        nome: '',
        telefone: '',
        municipio: '',
        estado: '',
        assunto: '',
        email: '',
        tamanhoArea: '',
        necessidade: '',
      });

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário.');
    } finally {
      setIsSubmitting(false);
    }
  };

  //hash for "#contact", renderiza a versão com o iframe do Facebook
  if (activeHash === "#contact") {
    return (
      <div>
        <section id="contact" className="contact-section">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '1000px',
              width: '100%',
            }}
          >
            {/* Coluna Esquerda: Widget do Facebook */}
            <div className='div-widget-facebook'>
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
                  height="820"
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

            {/* Coluna Direita: Container com o texto e o formulário */}
            <div
              style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                position: 'relative',
                paddingTop: '100px',
              }}
            >
              <div className="form-text__container">
                <h4 className="form-text__title">
                  <span className="form-text__text">Nossos</span>
                  <span className="form-text__text" style={{ marginLeft: '5px' }} >
                    contatos
                  </span>
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

              <div className="quadrado-formulario">
                <h2
                  style={{
                    color: '#3f7652',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    textAlign: 'center',
                    marginBottom: '1em',
                  }}
                >
                  Entre em contato e solicite um(a) análise/orçamento
                </h2>
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Novo contato via formulário" />

                  <div className="div-form">
                    <div style={{ flex: '1' }}>
                      <label className="label-form" htmlFor="nome">
                        Nome Completo *
                      </label>
                      <input
                        className="input-form"
                        id="nome"
                        type="text"
                        name="nome"
                        required
                        placeholder="Digite seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: '1', textAlign: 'right' }}>
                      <label className="label-form" htmlFor="telefone">
                        Telefone *
                      </label>
                      <input
                        className="input-form"
                        id="telefone"
                        type="tel"
                        name="telefone"
                        required
                        placeholder="Digite seu telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="div-form">
                    <div style={{ flex: 1 }}>
                      <label className="label-form" htmlFor="municipio">Município *</label>
                      <input
                        className="input-form"
                        id="municipio"
                        type="text"
                        name="municipio"
                        required
                        placeholder="Digite o município"
                        value={formData.municipio}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: 1, textAlign: 'right' }}>
                      <label className="label-form" htmlFor="estado">Estado *</label>
                      <input
                        className="input-form"
                        id="estado"
                        type="text"
                        name="estado"
                        required
                        placeholder="Digite o estado"
                        value={formData.estado}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ flex: 1, width: '100%' }}>
                    <label className="label-form" htmlFor="tamanhoArea">
                      Tamanho estimado da área (hectares ou m²) *
                    </label>
                    <input
                      className="input-form"
                      id="tamanhoArea"
                      name="tamanhoArea"
                      type="text"
                      required
                      placeholder="Ex: 50 hectares ou 5000 m²"
                      value={formData.tamanhoArea}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="div-form">
                    <div style={{ flex: '1' }}>
                      <label className="label-form" htmlFor="assunto">
                        Assunto
                      </label>
                      <input
                        className="input-form"
                        id="assunto"
                        type="text"
                        name="assunto"
                        required
                        placeholder="Qual o assunto do seu contato?"
                        value={formData.assunto}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: '1' }}>
                      <label className="label-form" htmlFor="email">
                        Email (Não Obrigátorio)
                      </label>
                      <input
                        className="input-form"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ flex: '1', width: '100%' }}>
                    <label className="label-form" htmlFor="necessidade">
                      Descreva sua necessidade
                    </label>
                    <textarea
                      id="necessidade"
                      name="necessidade"
                      rows="5"
                      placeholder="Descreva sua necessidade detalhadamente"
                      value={formData.necessidade}
                      onChange={handleChange}
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
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Caso contrário, renderiza apenas o formulário padrão
  return (
    <section id="contact" className="contact-section">
      <div className="div-pai">
        <h2>
          Entre em contato e <br /> solicite um(a) análise/orçamento
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Novo contato via formulário" />

          <div className="div-form">
            <div style={{ flex: '1' }}>
              <label className="label-form" htmlFor="nome">
                Nome Completo *
              </label>
              <input
                className="input-form"
                id="nome"
                type="text"
                name="nome"
                required
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: '1', textAlign: 'right' }}>
              <label className="label-form" htmlFor="telefone">
                Telefone *
              </label>
              <input
                className="input-form"
                id="telefone"
                type="tel"
                name="telefone"
                required
                placeholder="Digite seu telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="div-form">
            <div style={{ flex: '1' }}>
              <label className="label-form" htmlFor="municipio">Município *</label>
              <input
                className="input-form"
                id="municipio"
                type="text"
                name="municipio"
                required
                placeholder="Digite o município"
                value={formData.municipio}
                onChange={handleChange}
              />
            </div>

            <div style={{ flex: '1', textAlign: 'right' }}>
              <label className="label-form" htmlFor="estado">Estado *</label>
              <input
                className="input-form"
                id="estado"
                type="text"
                name="estado"
                required
                placeholder="Digite o estado"
                value={formData.estado}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ flex: 1, width: '100%' }}>
            <label className="label-form" htmlFor="tamanhoArea">
              Tamanho estimado da área (hectares ou m²) *
            </label>
            <input
              className="input-form"
              id="tamanhoArea"
              name="tamanhoArea"
              type="text"
              required
              placeholder="Ex: 50 hectares ou 5000 m²"
              value={formData.tamanhoArea}
              onChange={handleChange}
            />
          </div>

          <div className="div-form">
            <div style={{ flex: '1' }}>
              <label className="label-form" htmlFor="assunto">
                Assunto
              </label>
              <input
                className="input-form"
                id="assunto"
                type="text"
                name="assunto"
                required
                placeholder="Qual o assunto do seu contato?"
                value={formData.assunto}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: '1' }}>
              <label className="label-form" htmlFor="email">
                Email (Não Obrigátorio)
              </label>
              <input
                className="input-form"
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ flex: '1', width: '100%' }}>
            <label className="label-form" htmlFor="necessidade">
              Descreva sua necessidade
            </label>
            <textarea
              id="necessidade"
              name="necessidade"
              rows="5"
              placeholder="Descreva sua necessidade detalhadamente"
              value={formData.necessidade}
              onChange={handleChange}
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
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Enviando...' : 'Enviar'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormularioContato;
