import React from "react";
import "./style.css";
import foto from "../../assets/foto-shirlei.jpg";
import CardInfo from "../CardInfo";

import juridico from "../../assets/juridico.png";
import solucao from "../../assets/solucao.jpg";
import comunicacao from "../../assets/comunicacao.jpg";
import etica from "../../assets/etica.png";
import translate from '../../i18n/translate'

const Home: React.FC = () => {
  return (
    <>
      <section className="container-01">
        <h1>{translate('WELCOME')}</h1>

        <h2>{translate('GOD')}</h2>

        <p className="text-01">
          {translate('SUBJECT')}
        </p>
      </section>

      <section className="container-02">
        <h1>A RESPEITO DA FUNDADORA</h1>

        <img src={foto} alt="fundadora" className="foto" />

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
          title="SERVIÇOS PERSONALIZADOS"
          text="Estratégias de trabalho personalizadas de acordo com as exigências e necessidades de cada cliente."
        />

        <CardInfo
          image={solucao}
          title="SOLUÇÃO EM 360 GRAUS"
          text="A ampla rede formada pelos nossos parceiros e as boas relações profissionais permite
          a DUX resolver mais diversas problemáticas."
        />

        <CardInfo
          image={comunicacao}
          title="COMUNICAÇÃO ASSERTIVA"
          text="Comunicação através de uma linguagem moderna, acessível e humanizada,
          fundamentais à cndução de um trrabalho ético e transparente."
        />

        <CardInfo
          image={etica}
          title="ATUAÇÃO ÉTICA"
          text="Garantia de um alto padrão, com colaboradores idôneos e de boa reputação no mercado profissional."
        />
      </section>
    </>
  );
}

export default Home;
