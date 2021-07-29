import React from 'react';
import Logo from '../../assets/logoDux.png';
import './style.css';
import { Link } from 'react-router-dom';

import insta from '../../assets/instagram.png';
import face from '../../assets/facebook.png';


function Topo (){
    return(
        <div className="container">
        <div className="container-nav">
        
            <img src={Logo} alt="logo" className="logo" />;
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/sobre">HISTORIA</Link></li>  
                <li><Link to="/servico">SERVIÇOS</Link></li>    
                <li><Link to="/contato">CONTATO</Link></li>    
                <li><Link to="/parceria">PARCERIA</Link></li>    
                
            </ul>
            
        </div>
        <div className="container-sociais">
            <a href="https://www.instagram.com/dux.legalsolutions/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram link" className="insta" /></a>
            <a href="https://www.facebook.com/Dux-Legal-Solutions-103870414954742/" target="_blank" rel="noopener noreferrer"><img src={face} alt="facebook link" className="face" /></a>  
        </div>
                               
        </div>
        

    );
}

export default Topo;