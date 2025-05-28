// Noticias.js
import React from "react";
import "./Noticias.css";

// Array com os itens de notícias
const noticias = [
  {
    category: "Assembleia",
    subtitle: "Gestão 2023",
    description:
      "Definida após assembleia, a gestão para 2023, contando com 16 membros e orientação dos Professores Doutores Eleandro Brun e Álvaro Boson",
    date: "18 de nov. de 2022",
    image: "./img/assembleia.jpg",
  },
  {
    category: "Assembleia",
    subtitle: "Gestão 2019",
    description:
      "Definida após assembleia, a gestão para 2019, contando com 14 membros.",
    date: "15 de fev. de 2019",
    image: "./img/gestao-2019.jpg",
  },

  {
    category: "Assembleia",
    subtitle: "Abertura da Empresa",
    description:
      "A empresa UTFlorestal foi aberta oficialmente em 2014, contendo 8 membros e o Professor Orientador Edgar Vismara.",
    date: "2014",
    image: "./img/abertura-empresa.jpg",
  },

  {
    category: "Reuniões",
    subtitle: "Última Reunião Anual NURSE-DV",
    description:
      "A UTFlorestal participou durante o ano nas reuniões quinzenais da NURSE (Núcleo de Responsabilidade Social e Empresarial de Dois Vizinhos), que conta com os representantes das principais entidades da cidade.",
    date: "17 de nov. de 2022",
    image: "./img/reuniao.jpg",
  },
  {
    category: "Evento",
    subtitle: "Vendaval",
    description:
      "A UTFlorestal participou do evento Vendaval, evento organizado pelo núcleo de empresas juniores do Centro-Sul.",
    date: "08 de nov. de 2022",
    image: "./img/vendaval.jpg",
  },

  {
    category: "Evento",
    subtitle: "Live UTFlorestal",
    description:
      'Em termos de pandemia, a UTFlorestal realizou um encontro online com ex-membros da empresa, com a temática "Ser Júnior, para ser Gigante!"',
    date: "10 de ago. de 2020",
    image: "./img/live-utflorestal.jpg",
  },

  {
    category: "Evento",
    subtitle: "EXPOUT UTFPR",
    description:
      "O evento teve como intuito divulgar a universidade para os estudantes presentes na região de Dois Vizinhos. A UTFlorestal demonstrou o lado empreendedor presente no curso de Engenharia Florestal.",
    date: "19 de abril de 2019",
    image: "./img/expout.jpg",
  },

  {
    category: "Evento",
    subtitle: "Evento Ponta Júnior",
    description:
      "A UTFlorestal participou do evento Ponta Júnior, evento organizado pelo núcleo de empresas juniores de Ponta Grossa.",
    date: "07 de abr. de 2019",
    image: "./img/evento-ponta-junior.jpg",
  },

  {
    category: "Evento",
    subtitle: "Prêmio FEJEPAR",
    description:
      "A UTFlorestal participou do evento Prêmio FEJEPAR, evento que premia as empresas juniores destaques no estado do Paraná.",
    date: "15 de dez. de 2018",
    image: "./img/premio-fejepare.jpg",
  },

  {
    category: "Curso",
    subtitle: "Curso de Capacitação em Produção de Bambu",
    description:
      'A UTFlorestal, juntamente com parceiros, está oferecendo curso GRATUITO "Produção de mudas de bambu e sua utilização prática". O curso é focado principalmente em produtores rurais interessados em aprender sobre a cultura do Bambu. Terão módulos remotos e experiências práticas em propriedade modelo.',
    date: "07 de nov. de 2022",
    image: "./img/curso-bambu.jpg",
  },

  {
    category: "Curso",
    subtitle: "Mini Curso sobre Canvas",
    description:
      "A UTFlorestal disponibilizou aos acadêmicos de Engenharia Florestal um mini curso de planejamento, utilizando o método CANVAS.",
    date: "24 de mai. de 2019",
    image: "./img/mini-curso-canvas.jpg",
  },

  {
    category: "Parceria",
    subtitle: "Parceria com a SEBRAE",
    description:
      "Novos negócios estão sendo potencializados por meio da parceria firmada entre a UTFPR - Campus Dois Vizinhos e o Sebrae/PR. O programa Operação Early Stage teve início em agosto passado com duração até o fim deste ano.",
    date: "21 de out. de 2019",
    image: "./img/parceria-sebrae.jpg",
  },

  {
    category: "Parceria",
    subtitle: "Plano de Arborização Urbana de Dois Vizinhos",
    description:
      "A prefeitura iniciou os trabalhos para elaboração do plano de arborização urbana. O engenheiro florestal Ciro Costa foi contratado e, em parceria com a Empresa Júnior UTFlorestal.",
    date: "21 de ago. de 2018",
    image: "./img/arborizacao.jpg",
  },

  {
    category: "Solidariedade",
    subtitle: "Páscoa Solidário",
    description: 'Hoje viemos aqui para agradecer a cada doação, cada compartilhamento feito por vocês que fizeram que fosse possível, por mais um ano, a realização dessa linda ação! Pelo segundo ano consecutivo conseguimos entregar uma doação de mais de 130 ovos para as crianças da Casa da Paz de Dois Vizinhos. Vocês fizeram inúmeras crianças mais felizes nessa Páscoa, muito obrigado! 25 de abr. de 2022',
    date: "07 de nov. de 2022",
    image: "./img/pascoa-solidaria-2021.jpg"
  },
  {
    category: "Solidariedade",
    subtitle: "Natal Solidário",
    description:
      "Foi um ano difícil, mesmo assim não deixamos de realizar essa ação, sabemos que muitas famílias não têm boas condições financeiras, e foi pensando nelas que nossa empresa se mobilizou, acreditamos que isso faz a diferença.",
    date: "23 de dez. de 2021",
    image: "./img/natal-solidario.jpg",
  },
  {
    category: "Solidariedade",
    subtitle: "Páscoa Solidária",
    description:
      "Nós sabíamos que esta atitude iria resultar em vários rostinhos felizes, mesmo assim ficamos surpreendidos, foi um momento notoriamente admirável e emocionante, fizemos algo marcante na vida de cada criança. E você, que nos ajudou a consolidar esse momento, nós UTFlorestal juntamente com a Casa da Paz agradecemos.",
    date: "05 de abr. de 2021",
    image: "./img/pascoa-solidaria.jpg",
  },
  {
    category: "Solidariedade",
    subtitle: "Natal Solidário",
    description:
      "O natal solidário teve como objetivo arrecadar alimentos a serem doados para famílias carentes na cidade de Dois Vizinhos.",
    date: "20 de dez. de 2020",
    image: "./img/natal-solidario-2020.jpg",
  },

  {
    category: "Solidariedade",
    subtitle: "Natal Solidário",
    description:
      "O natal solidário teve como objetivo arrecadar alimentos a serem doados para famílias carentes na cidade de Dois Vizinhos.",
    date: "20 de dez. de 2019",
    image: "./img/natal-solidario-2019.jpg",
  },

  {
    category: "Premiação",
    subtitle: "Associação no Núcleo Centro-Sul",
    description:
      "A presidente Rarine Camargo e o Diretor Jurídico Financeiro Rodrigo Quirino oficializaram a Empresa Júnior perante ao Brasil Junior, obtendo todos os requisitos para registro e acompanhamento do núcleo dedicado a nossa região.",
    date: "25 de abr. de 2021",
    image: "./img/premiacao.jpg",
  },
];

const Noticias = () => {
  return (
    <div className="noticias-container">
      {noticias.map((noticia, index) => (
        <div key={index} className="noticia-item">
          <div className="noticia-content">
            <div className="image-container">
              <img
                src={noticia.image}
                alt={`${noticia.category} - ${noticia.subtitle}`}
              />
            </div>
            <div className="text-container">
              <h3>{noticia.category}</h3>
              <h4>{noticia.subtitle}</h4>
              <p>{noticia.description}</p>
              <span>{noticia.date}</span>
            </div>
          </div>
          <div className="separator" />
        </div>
      ))}
    </div>
  );
};

export default Noticias;
