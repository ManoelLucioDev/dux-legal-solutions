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
        <h1>{translate('TITLE-FOUNDRESS-ABOUT')}</h1>

        <img src={foto} alt="fundadora" className="foto" />

        <p className="text-02">
          {translate('TEXT-FOUNDRESS-ABOUT')}
        </p>
      </section>
      <section className="container-03">
        <h1>{translate('TITLE-CODE-CONDUCT')}</h1>

        <p className="text-03">
          {translate('TEXT-CODE-CONDUCT')}
        </p>
      </section>
      <section className="container-04">
        
        <CardInfo 
          image={juridico}
          title={"TITLE-LEGAL"}
          text={"TEXT-LEGAL"}
        />

        <CardInfo
          image={solucao}
          title={"TITLE-SOLUTION"}
          text={"TEXT-SOLUTION"}
        />

        <CardInfo
          image={comunicacao}
          title={"TITLE-COMUNICATION"}
          text={"TEXT-COMUNICATION"}
        />

        <CardInfo
          image={etica}
          title={"TITLE-ETHICAL"}
          text={"TEXT-ETHICAL"}
        />
      </section>
    </>
  );
}

export default Home;
