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
            imageServico= {adm}
            titulo = "ADMINISTRATIVOS / CONSULARES E JURÍDICOS"
            />
            <CardServico
            imageServico= {administrativo}
            titulo = "CONSULTORIA"
            />
            <CardServico
            imageServico= {cidadania}
            titulo = "CIDADANIA ITALIANA"
            />
            <CardServico
            imageServico= {advogado}
            titulo = "ADVOCACIA"
            />
            <CardServico
            imageServico= {documento}
            titulo = "ADVOCACIA"
            />
        </div>
        </>
    );

}

export default Servico;