import React, { useState, useEffect, useRef } from 'react';
// avatar está em public/img
const botAvatar = '/img/botAvatar.png';

function Chatbot({ openChat = false, onOpen, onClose }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [stage, setStage] = useState('initial');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (openChat) setOpen(true);
  }, [openChat, onOpen, onClose]);

  useEffect(() => {
    if (open) {
      if (typeof onOpen === 'function') onOpen();
    } else {
      if (typeof onClose === 'function') onClose();
    }
  }, [open, onOpen, onClose]);

  useEffect(() => {
    if (open && chatLog.length === 0) {
      setChatLog([
        { sender: 'bot', text: 'UTFLORESTAL Empresa Júnior' },
        { sender: 'bot', text: 'Olá, bem‑vindo ao nosso site.' },
        { sender: 'bot', text: 'Como podemos te ajudar hoje? Escolha uma opção:' },
        { sender: 'bot', text: '1️⃣ Conhecer a UTFlorestal' },
        { sender: 'bot', text: '2️⃣ Ver nossos serviços' },
        { sender: 'bot', text: '3️⃣ Solicitar um orçamento' },
        { sender: 'bot', text: '4️⃣ Tirar dúvidas' },
        { sender: 'bot', text: '5️⃣ Falar com um membro da equipe' },
        { sender: 'bot', text: '6️⃣ Nossa Sede' }
      ]);
      setStage('awaitingMenu');
    }
  }, [open, chatLog.length]);

  useEffect(() => {
    const endEl = messagesEndRef.current;
    if (endEl && typeof endEl.scrollIntoView === 'function') {
      endEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatLog]);

  const servicesList = [
    '🌳 Inventário Florestal\n\n🔎 Levantamento quantitativo e qualitativo de vegetação, ideal para manejo, licenciamento ou estudos ambientais.',
    '📄 Cadastro Ambiental Rural (CAR)\n\n🛰️ Regularização ambiental de imóveis rurais com base na Lei de Proteção da Vegetação Nativa.',
    '🌱 Implantação de Florestas\n\n🌳 Planejamento e execução de plantios florestais, com escolha de espécies nativas ou exóticas conforme o objetivo.',
    '🌼 Projetos Paisagísticos\n\n🎨 Planejamento de áreas verdes com valorização estética e funcional, para ambientes urbanos ou rurais.',
    '📍 Georreferenciamento\n\n🗺️ Delimitação precisa de áreas com GPS e SIG para mapeamentos, levantamentos topográficos e regularização.',
    '🧪 Amostragem de Solos\n\n🌾 Coleta e análise para diagnóstico de fertilidade e orientações de manejo.',
    '📑 Licenciamento Ambiental\n\n📋 Apoio em estudos e documentos exigidos para atividades que demandam autorização ambiental.',
    '💧 Recuperação de Nascentes\n\n🌊 Diagnóstico e restauração ecológica de áreas de nascente degradadas, com uso de espécies nativas.',
    '🧩 Projetos personalizados sob demanda\n\n🔧 Desenvolvemos soluções técnicas adaptadas à necessidade do seu imóvel, comunidade ou empreendimento.'
  ];

  const serviceDetails = { /* ... */ };

  const renderMessageText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (urlRegex.test(part)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#08800c', textDecoration: 'underline' }}>
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const handleSend = () => {
    const text = message.trim();
    if (!text) return;
    setChatLog(prev => [...prev, { sender: 'user', text }]);
    setMessage('');

    setTimeout(() => {
      if (stage === 'awaitingMenu') {
        if (/^1$|^1️⃣|opção\s*1/i.test(text)) {
          setChatLog(prev => [
            ...prev,
            { sender: 'bot', text: `📘 Somos a UTFlorestal, empresa júnior de Engenharia Florestal da UTFPR – Campus Dois Vizinhos.

Atuamos com serviços ambientais e florestais com qualidade, comprometimento e responsabilidade social.

Nosso objetivo é oferecer soluções técnicas acessíveis enquanto desenvolvemos habilidades profissionais para o mercado.

👥 Nossa equipe é composta por:
1 Diretor Presidente
1 Diretora de Qualidade
1 Diretora de Projetos
1 Diretor de Vendas
1 Diretora de Recursos Humanos
1 Diretora Jurídico-Financeiro
1 Diretora Comercial

Além disso, contamos com 3 Gerentes que trabalham alinhados à Diretoria de Projetos para entregar o melhor produto para você.

📌 Na página “Sobre Nós” do nosso site, você encontra o organograma completo da equipe, pronta para te atender com excelência.

➕ Quer saber mais sobre como funciona uma empresa júnior?` }
          ]);
          setStage('option1Detail');
        } else if (/^2$|^2️⃣|opção\s*2/i.test(text)) {
          setChatLog(prev => [
            ...prev,
            { sender: 'bot', text: 'Aqui estão os serviços:' },
            ...servicesList.map(s => ({ sender: 'bot', text: s })),
            { sender: 'bot', text: '➕ Deseja saber mais sobre algum desses serviços?' }
          ]);
          setStage('option2Detail');
        } else if (/^3$|^3️⃣|opção\s*3/i.test(text)) {
          setChatLog(prev => [
            ...prev,
            { sender: 'bot', text: 'Claro! Para solicitar um orçamento, acesse nosso formulário no link abaixo:' },
            { sender: 'bot', text: '📝 https://utflorestalutfpr.com/#contact' }
          ]);
          setStage('completed');
        }
        
        else if (/^4$|^4️⃣|opção\s*4/i.test(text)) {
          setChatLog(prev => [
            ...prev,
            { sender: 'bot', text: 'Aqui estão algumas perguntas frequentes:' },
            { sender: 'bot', text: '❓ Quem pode contratar a UTFlorestal?\nQualquer pessoa física ou jurídica! Atendemos produtores rurais, empresas, prefeituras e instituições.' },
            { sender: 'bot', text: '❓ Os serviços são mais baratos por ser uma empresa júnior?\nSim! Trabalhamos com preços acessíveis porque nosso foco é o aprendizado, sempre mantendo a qualidade e sempre com acompanhamento do professor responsável credenciado no CREA.' },
            { sender: 'bot', text: '❓ Vocês emitem nota fiscal?\nComo empresa júnior, emitimos recibo ou contrato de prestação de serviço.' },
            { sender: 'bot', text: '❓ Meu imóvel precisa de um PRAD?\nO PRAD (Plano de Recuperação de Área Degradada) é exigido quando há algum tipo de impacto ambiental — como desmatamento, abertura de estradas, mineração ou obras em APPs.\nSe o seu imóvel passou ou passará por alguma dessas atividades, é provável que o órgão ambiental exija um PRAD.\n📞 Podemos te ajudar a avaliar essa necessidade e elaborar o plano, se for o caso.' },
            { sender: 'bot', text: '❓ Qual é o prazo para entrega dos serviços?\nO prazo depende do tipo e da complexidade do serviço.\nPor exemplo:\nInventário Florestal: 30 a 50 dias úteis\nProjeto Paisagístico: 30 dias úteis\nCAR: até 20 dias úteis\n📅 O prazo exato é combinado no contrato e atualizado conforme o andamento.' },
            { sender: 'bot', text: 'Tem mais alguma dúvida específica?' }
          ]);
          setStage('option4Detail');
        }

        else if (/^5$|^5️⃣|opção\s*5/i.test(text)) {
          setChatLog(prev => [
            ...prev,
            { sender: 'bot', text: 'Perfeito! Para falar sobre sua dúvida, vou te direcionar para a nossa equipe de vendas e projetos.' },
            { sender: 'bot', text: '📲 Você pode entrar em contato diretamente com:\nJoão Vitor - Diretor de Vendas\nWhatsApp: +55 (46) 9901-8058\nE-mail: utflorestal.utfpr@gmail.com' },
            { sender: 'bot', text: '📱 Clique aqui para abrir o WhatsApp: https://wa.me/5546999018058' }
          ]);
          setStage('completed');
        }

        else if (/^6$|^6️⃣|opção\s*6/i.test(text)) {
          setChatLog(prev => [
            ...prev,
            { sender: 'bot', text: '📍 Nossa Sede:\nEstr. p/ Boa Esperança, km 04 - Zona Rural, Dois Vizinhos-PR, 85660-000, Brasil' },
            { sender: 'bot', text: '🗺️ Veja no Google Maps: https://goo.gl/maps/Jb6yL9RXY3mgma9N9?g_st=aw' }
          ]);
          setStage('completed');
        }

      } else if (stage === 'option1Detail') {
        if (/^sim$/i.test(text)) {
          setChatLog(prev => [
            ...prev,
            { sender: 'bot', text: `Uma empresa júnior (EJ) é uma organização sem fins lucrativos, formada por estudantes de graduação com orientação de professores e profissionais.

Nosso principal objetivo é aliar teoria e prática, por meio da prestação de serviços reais, garantindo aprendizado e impacto positivo para a sociedade.

💡 Algumas características:

Os membros são voluntários e passam por um processo seletivo.

Toda a gestão é feita pelos próprios estudantes.

O dinheiro arrecadado é reinvestido na própria EJ, em capacitações, estrutura e desenvolvimento dos membros.

Trabalhamos com valores mais acessíveis, mantendo qualidade e responsabilidade técnica.

🤝 Fazemos parte do movimento Empresa Júnior Brasil, que incentiva o empreendedorismo jovem e a transformação do país por meio da educação prática.` }
          ]);
        }
        setStage('completed');
      } else if (stage === 'option2Detail') {
        const key = text.toLowerCase();
        const matched = Object.keys(serviceDetails).find(k => key.includes(k));
        if (matched) setChatLog(prev => [...prev, { sender: 'bot', text: serviceDetails[matched] }]);
        else setChatLog(prev => [...prev, { sender: 'bot', text: 'Serviço não reconhecido.' }]);
      }

// Agora, só vai verificar a resposta quando o usuário digitar algo
if (/^sim$/i.test(text)) {
  setChatLog(prev => [
    ...prev,
    { sender: 'bot', text: '🔗 Nosso WhatsApp para conversar com a equipe:' },
    { sender: 'bot', text: '📱 https://wa.me/5546999018058' }
  ]);
  setStage('completed'); // Finaliza o fluxo com o redirecionamento
} else if (/^(não|nao|n)$/i.test(text)) {
  setChatLog(prev => [...prev, { sender: 'bot', text: 'Ok, fico à disposição para ajudar!' }]);
  setStage('completed'); // Caso o usuário responda "não", encerra a conversa ou leva a outro estado
} else if (text.trim() === "") {
  setChatLog(prev => [...prev, { sender: 'bot', text: 'Por favor, digite uma resposta.' }]); // Se o campo for vazio
}

// else {
//   // Se a entrada for algo diferente de "sim" e "não", mostrar a dúvida
//   setChatLog(prev => [...prev, { sender: 'bot', text: 'Não Entendi. Pode detalhar melhor sua dúvida?' }]);
// }


      
    }, 200);
  };

  const toggleOpen = () => setOpen(o => !o);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      <button
        onClick={toggleOpen}
        style={{
          backgroundColor: '#08800c',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 50,
          height: 50,
          fontSize: 18,
          cursor: 'pointer'
        }}
      >
        💬
      </button>
      {open && (
        <div
          style={{
            marginTop: 10,
            width: 280,
            height: 460,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              backgroundColor: '#08800c',
              color: '#fff',
              padding: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 18,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24
            }}
          >
            UTFlorestal UTFPR
            <button
              onClick={toggleOpen}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: 20,
                padding: '0 4px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
          <div style={{ flex: 1, padding: '8px', overflowY: 'auto', fontSize: 12, lineHeight: 1.4 }}>
            {chatLog.map((e, i) => {
              const showAvatar = e.sender === 'bot' && (i === 0 || chatLog[i - 1].sender !== 'bot');
              return (
                <div
                  key={i}
                  style={{ display: 'flex', justifyContent: e.sender === 'user' ? 'flex-end' : 'flex-start', margin: '4px 0' }}
                >
                  {showAvatar && (
                    <img
                      src={botAvatar}
                      alt="bot"
                      style={{ width: 24, height: 24, borderRadius: '50%', marginRight: 6 }}
                    />
                  )}
                  <div
                    style={{
                      background: e.sender === 'user' ? '#dcf8c6' : '#eee',
                      padding: '6px 8px',
                      borderRadius: 6,
                      fontSize: 12,
                      maxWidth: '80%', wordBreak: 'break-word',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {renderMessageText(e.text)}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #ccc', padding: 6 }}>
            <input
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              style={{ flex: 1, padding: '6px', borderRadius: 4, border: '1px solid #ccc', fontSize: 12 }}
            />
            <button
              onClick={handleSend}
              style={{ marginLeft: 6, padding: '0 12px', borderRadius: 4, backgroundColor: '#08800c', color: '#fff', border: 'none', fontSize: 14 }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
