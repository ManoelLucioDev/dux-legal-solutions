import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Topo from './components/Topo';

import Home from './components/Home';
import Sobre from './components/Sobre';
import Servico from './components/Servico';
import Contato from './components/Contato';
import Parceria from './components/Parceria';
import Footer from './components/Footer';
import { I18nProvider } from './i18n';





function App() {
  return (

    

    <BrowserRouter>
      


      <Topo />
      
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

    );
}

export default App;
