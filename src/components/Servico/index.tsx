import React from 'react';
import './style.css';


import adm from '../../assets/multa-administrativa.png';
import administrativo from '../../assets/administrativo.png';
import cidadania from '../../assets/cidadania.png';
import advogado from '../../assets/advogado.png';
import documento from '../../assets/documentos-oficiais.png';
import CardServico from '../CardServico';


function Servico(){
    return(
        <>
       
        <div className="container-servico">
        <h1 className="titulo-servico">SERVIÇOS</h1>
            <CardServico
            serviceImage= {adm}
            title = "ADMINISTRATIVOS / CONSULARES E JURÍDICOS"
            />
            <CardServico
            serviceImage= {administrativo}
            title = "CONSULTORIA"
            />
            <CardServico
            serviceImage= {cidadania}
            title = "CIDADANIA ITALIANA"
            />
            <CardServico
            serviceImage= {advogado}
            title = "ADVOCACIA"
            />
            <CardServico
            serviceImage= {documento}
            title = "ADVOCACIA"
            />
        </div>
        </>
    );

}

export default Servico;