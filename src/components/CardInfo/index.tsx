import React from 'react';
import './style.css';

interface CardInfoProps {
    image: string;
    title: string;
    text: string;
}

function CardInfo(props: CardInfoProps)  {
    return(
        <div className="container-card-info">
            <img className="image" alt={props.title} src={props.image} />
            <h3 className="titulo-card-info">{props.title}</h3>
            <p className="texto-card-info">{props.text}</p>
        </div>
    );
}

export default CardInfo;