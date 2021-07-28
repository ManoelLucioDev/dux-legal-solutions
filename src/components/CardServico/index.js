import React from 'react';
import './style.css';

function CardServico(props){
    return(
       <>
       <div className="container-image"><img className="imageServico" src={props.imageServico} /></div>
        
        <div className="container-cardServico"> 
        <h3 className="titulo">{props.titulo}</h3>
        </div>
        </>
    );
}

export default CardServico;