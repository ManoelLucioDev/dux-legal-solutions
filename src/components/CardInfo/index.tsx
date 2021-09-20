import React from 'react';
import translate from '../../i18n/translate';
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
            <h3 className="titulo-card-info">{translate(props.title)}</h3>
            <p className="texto-card-info">{translate(props.text)}</p>
        </div>
    );
}

export default CardInfo;