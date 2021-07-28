import React from 'react';
import './style.css';


function CardInfo(props)  {
    return(
        <div className="container-card-info">
            <img className="image" src={props.image} />
            <h3 className="titulo-card-info">{props.titulo}</h3>
            <p className="texto-card-info">{props.texto}</p>

        </div>
    );
}

export default CardInfo;