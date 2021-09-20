import React from 'react';
import Logo from '../../assets/logoDux.png';

import './style.css';
import { Link } from 'react-router-dom';






function Topo (){

    return(

        <div className="container">
        <div className="container-nav">

            <img src={Logo} alt="logo" className="logo" />

            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/sobre">HISTORIA</Link></li>
                <li><Link to="/servico">SERVIÇOS</Link></li>
                <li><Link to="/contato">CONTATO</Link></li>
                <li><Link to="/parceria">PARCERIA</Link></li>

            </ul>

        </div>
  
        </div>


    );
}

export default Topo;
