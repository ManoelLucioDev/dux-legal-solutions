import React, { useState } from "react";
import "./style.css";
import foto from "../../assets/foto-shirlei.jpg";
import CardInfo from "../CardInfo";

import juridico from "../../assets/juridico.png";
import solucao from "../../assets/solucao.jpg";
import comunicacao from "../../assets/comunicacao.jpg";
import etica from "../../assets/etica.png";

function Home() {
  return (
    <>
      <section className="container-01">
        <h1>Seja bem vindo à DUX LEGAL SOLUTIONS</h1>

        <h2>Porque é maravilhoso realizar os sonhos com apoio!</h2>

        <p className="text-01">
          Oferecemos assistência e consultoria jurídica para o imigrante em 360
          graus; do planejamento do processo de imigração à consolidação da vida
          civil, bem como; consultoria e assistência administrativa, serviços
          jurídicos e advocacia. Nossas atividades são personalizadas e
          desenvolvidas a partir da necessidade pessoal de cada cliente, com
          toda responsabilidade, objetividade e segurança jurídica necessária,
          prezando por uma comunicação assertiva e, acima de tudo, uma relação
          ética, transparente e colaborativa entre os envolvidos.   Lembre-se de
          que seu desejo de iniciar uma vida nova e de consolidá-la em outro
          país não precisa se tornar um pesadelo. Conte a Dux Legal Solutions
          para facilitar este processo de modo cômodo, ético e seguro. Conte com
          o nosso acolhimento!
        </p>
      </section>

      <section className="container-02">
        <h1>A RESPEITO DA FUNDADORA</h1>

        <img src={foto} className="foto" />

        <p className="text-02">
          Shirlei Soares, advogada brasileira e consultora jurídica habilitada,
           residente na Itália.  Em Portugal, é advogada inscrita no Conselho de
          Lisboa da Ordem dos Advogados Portugueses. No Brasil tem uma
          experiência consolidada em matéria de gestão pública, direito
          administrativo e processos de gestão, foi também docente universitária
          de direito, por mais de sete anos. Atualmente, ocupa-se na prestação
          de consultoria jurídica em um importante escritório de advocacia na
          província de Treviso e é a idealizadora e fundadora da Dux Legal
          Solutions.
        </p>
      </section>
      <section className="container-03">
        <h1>NOSSO CÓDIGO DE CONDUTA</h1>

        <p className="text-03">
          Contamos com uma rede de colaboradores e parceiros localizados no
          Brasil e na Itália, composto de profissionais liberais que seguem os
          nossos valores e garantem o fornecimento de serviços eficientes e de
          alto nível.
        </p>
      </section>
      <section className="container-04">
        <CardInfo
          image={juridico}
          titulo="SERVIÇOS PERSONALIZADOS"
          texto="Estratégias de trabalho personalizadas de acordo com as exigências e necessidades de cada cliente."
        />

        <CardInfo
          image={solucao}
          titulo="SOLUÇÃO EM 360 GRAUS"
          texto="A ampla rede formada pelos nossos parceiros e as boas relações profissionais permite 
          a DUX resolver mais diversas problemáticas."
        />

        <CardInfo
          image={comunicacao}
          titulo="COMUNICAÇÃO ASSERTIVA"
          texto="Comunicação através de uma linguagem moderna, acessível e humanizada, 
          fundamentais à cndução de um trrabalho ético e transparente."
        />

        <CardInfo
          image={etica}
          titulo="ATUAÇÃO ÉTICA"
          texto="Garantia de um alto padrão, com colaboradores idôneos e de boa reputação no mercado profissional."
        />
      </section>
    </>
  );
}

export default Home;
