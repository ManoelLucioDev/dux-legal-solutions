import "./App.css";

import React, { useState } from "react";

import { Navbar, Nav } from "react-bootstrap";
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
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="white"
            variant="light"
            
          >
            <Navbar.Brand as={Link} to={"/"} >
              <img src={Logo} alt="logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto" ></Nav>
              <Nav  style={{ paddingLeft:' 30px' }} >
                <Nav.Link  as={Link} to={"/"} style={{ color: '#150760', fontWeight: 'bold' }} >
                  {translate("HOME")}
                </Nav.Link>
                <Nav.Link as={Link} to={"/sobre"} style={{ color: '#150760', fontWeight: 'bold' }}>
                  {translate("ABOUT")}
                </Nav.Link>
                <Nav.Link as={Link} to={"/servico"} style={{ color: '#150760', fontWeight: 'bold' }}>
                  {translate("SERVICE")}
                </Nav.Link>
                <Nav.Link as={Link} to={"/contato"} style={{ color: '#150760', fontWeight: 'bold',  }}>
                  {translate("CONTACT")}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
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


