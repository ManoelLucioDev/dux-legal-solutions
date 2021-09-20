import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topo from "./components/Topo";

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Servico from "./components/Servico";
import Contato from "./components/Contato";
import Parceria from "./components/Parceria";
import Footer from "./components/Footer";
import { I18nProvider, LOCALES } from "./i18n";

import Port from "./assets/port.jpeg";
import It from "./assets/it.jpeg";
import insta from './assets/instagram.png';
import face from './assets/facebook.png';

const App: React.FC = () => {
  const [locale, setLocale] = useState(LOCALES.ITALIAN);

  return (
    <I18nProvider locale={locale}>
      <BrowserRouter>
        <Topo />
        <div className="wraper-social-idiomas">
          <div className="idiomas">
            <img
              src={Port}
              alt="port"
              onClick={() => setLocale(LOCALES.PORTUGUESE)}
            />
            <img
              src={It}
              alt="ita"
              onClick={() => setLocale(LOCALES.ITALIAN)}
            />
          </div>

          <div className="container-sociais">
            <a
              href="https://www.instagram.com/dux.legalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="instagram link" className="insta" />
            </a>
            <a
              href="https://www.facebook.com/Dux-Legal-Solutions-103870414954742/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={face} alt="facebook link" className="face" />
            </a>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Sobre">
            <Sobre />
          </Route>
          <Route path="/Servico">
            <Servico />
          </Route>
          <Route path="/Contato">
            <Contato />
          </Route>
          <Route path="/Parceria">
            <Parceria />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
