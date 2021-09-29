import "./App.css";

import React, { useState } from "react";

import * as ReactBootstrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Servico from "./components/Servico";
import Contato from "./components/Contato";
import Parceria from "./components/Parceria";
import Footer from "./components/Footer";

import Logo from "./assets/logoDux.png";
import translate from "./i18n/translate";

import Port from "./assets/port.jpeg";
import It from "./assets/it.jpeg";
import insta from "./assets/instagram.png";
import face from "./assets/facebook.png";

import { I18nProvider, LOCALES } from "./i18n";

const App: React.FC = () => {
  const [locale, setLocale] = useState(LOCALES.ITALIAN);

  return (
    <I18nProvider locale={locale}>
      <Router>
        <div className="container-nav">
          <ReactBootstrap.Navbar
            collapseOnSelect
            expand="lg"
            bg="white"
            variant="light"
          >
            <ReactBootstrap.Navbar.Brand as={Link} to={"/"}>
              <img src={Logo} alt="logo" className="logo" />
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootstrap.Nav className="me-auto"></ReactBootstrap.Nav>
              <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link as={Link} to={"/"}>
                  {translate("HOME")}
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link as={Link} to={"/sobre"}>
                  {translate("ABOUT")}
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link as={Link} to={"/servico"}>
                  {translate("SERVICE")}
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link as={Link} to={"/contato"}>
                  {translate("CONTACT")}
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Navbar>
        </div>
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
      </Router>
    </I18nProvider>
  );
};

export default App;
