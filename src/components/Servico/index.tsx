import React, { useState } from 'react';
import './style.css';


import adm from '../../assets/multa-administrativa.png';
import administrativo from '../../assets/administrativo.png';
import cidadania from '../../assets/cidadania.png';
import advogado from '../../assets/advogado.png';
import documento from '../../assets/documentos-oficiais.png';
import CardServico from '../CardServico';
import Modal from "../Modal";



function Servico(){

    const [modalVisible, setModalVisible] = useState(false);

    const handleIconClick = () => {
        setModalVisible(true);
    }

    return(
        <>
       
        <div className="container-servico">
        <h1 className="titulo-servico">SERVIÇOS</h1>

            <div onClick={handleIconClick} className="icon">
            <CardServico
            serviceImage= {adm}
            title = "ADMINISTRATIVOS / CONSULARES E JURÍDICOS"
            />
            </div> 
            <Modal visible= {modalVisible} setVisible={setModalVisible}> 
                <p>
                    1.     ASSISTÊNCIA ÀS ATIVIDADES BUROCRÁTICAS <br></br>

                    2.     SOLICITAÇÃO E ENTREGA DE DOCUMENTOS PERANTE A ADMINISTRAÇÃO PÚBLICA <br></br>

                    3.     PETIÇÕES, REQUERIMENTOS E RECURSOS A ADMINISTRAÇÃO PÚBLICA <br></br>

                    4.     TRADUÇÃO OFICIAL DE DOCUMENTOS <br></br>

                    5.     SOLICITAÇÃO E ENTREGA DE APOSTILA <br></br>

                    6.     DOCUMENTOS PARA MATRIMÔNIO <br></br>

                    7.     PROCURAÇÕES NACIONAIS E INTERNACIONAIS <br></br>

                    8.  MUDANÇA DE NOME E SOBRENOME <br></br>

                    9.     CASSETTO FISCALE <br></br>

                    10. CRIF/CR <br></br>
                
                </p>
                
            </Modal>
                
            


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