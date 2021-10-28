import React from "react";
import translate from "../../i18n/translate";

import './style.css';

const Sobre: React.FC = () =>{


  return (
    <>
   
    
      <div className="container-sobre">
      <h1 className="title">{translate('TITLE-ABOUT')}</h1>
      

      <p className="texto-sobre">
        {translate('TEXT-ABOUT')}
      </p>
    </div>
       </>
  );
}

export default Sobre;
