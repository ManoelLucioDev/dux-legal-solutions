import React from 'react';
import './style.css';

interface CardServicoProps {
    serviceImage: string;
    title: string;
}

function CardServico(props: CardServicoProps){
    return(
       <>
       <div className="container-image">
           <img className="imageServico" alt={props.title} src={props.serviceImage} />
        </div>
        <div className="container-cardServico"> 
        <h3 className="titulo">{props.title}</h3>
        </div>
        </>
    );
}

export default CardServico;