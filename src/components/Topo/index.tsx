
import Logo from '../../assets/logoDux.png';
import translate from "../../i18n/translate";

import './style.css';
import { Link } from 'react-router-dom';






function Topo (){

    return(

        <div className="container">
        <div className="container-nav">

            <img src={Logo} alt="logo" className="logo" />

            <ul>
                <li><Link to="/">{translate('HOME')}</Link></li>
                <li><Link to="/sobre">{translate('ABOUT')}</Link></li>
                <li><Link to="/servico">{translate('SERVICE')}</Link></li>
                <li><Link to="/contato">{translate('CONTACT')}</Link></li>
                <li><Link to="/parceria">{translate('PARTNERSHIP')}</Link></li>

            </ul>

        </div>
  
        </div>


    );
}

export default Topo;
