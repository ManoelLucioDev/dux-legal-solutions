import React, { useState } from 'react';
import './style.css';


import adm from '../../assets/multa-administrativa.png';
import consultoria from '../../assets/administrativo.png';
import cidadania from '../../assets/cidadania.png';
import advogado from '../../assets/advogado.png';
import documento from '../../assets/documentos-oficiais.png';
import CardServico from '../CardServico';

import translate from '../../i18n/translate';




function Servico(){

    

    

    return(
        <>
       
      
       
        <h1 className="titulo-servico">{translate('TITLE-SERVICE')}</h1>
            
            <div className="container-servico">

                <div  className="data-services">
                    <CardServico
                        serviceImage= {adm}
                        title = {"TITLE-ADM"}
                    />
                
                </div>


                <div  className="data-services">
                    <CardServico
                        serviceImage= {consultoria}
                        title = {"TITLE-CONSULTANCY"}
                    />

                
                </div>

                <div  className="data-services">
                    <CardServico
                        serviceImage= {cidadania}
                        title = {"TITLE-CITIZENSHIP"}
                    />
                
                </div>

                <div  className="data-services">
                    <CardServico
                        serviceImage= {advogado}
                        title = {"TITLE-ADVOCACY"}
                    />



                
                </div>

                <div  className="data-services">
                    <CardServico
                        serviceImage= {documento}
                        title = {"TITLE-DOCUMENT"}
                    />
                
                </div>
           
        </div>        
        </>
    );

}

export default Servico;