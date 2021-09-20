
import translate from '../../i18n/translate';
import './style.css';

interface CardServicoProps {
    serviceImage: string;
    title: string;
}

function CardServico(props: CardServicoProps){
    return(
       <>
        
            <div className='wraper-service'>
                
                    <img className="imageServico" alt={props.title} src={props.serviceImage} />
                
                
                    <h3 className="titulo">{translate(props.title)}</h3>
                

            </div>
            



       
       
        </>
    );
}

export default CardServico;