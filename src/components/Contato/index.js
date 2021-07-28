import React from "react";
import './style.css';

function Contato() {
  return (
    <>
      <h1>CONTATO</h1>
      
      <div className="container-contato">
      <h3 className="container-texto">
        A DUX LEGALSOLUTIONS está sempre aberta para você e sua empresa. Envie
        uma mensagem para nosso e-mail ou entre em contato com o nosso
        escritório.
      </h3>
       <form>
           <div className="container-form">
           <label>
            NOME:
           <input type="text" />
           </label>

           <label>
            E-mail:
           <input type="email" />
           </label>

           <label>
            TELEFONE:
           <input type="text" />
           </label>

           <label>
            ASSUNTO:
           <input type="text" />
           </label>
            
            <label>
                MENSAGEM:
                <textarea type="text" rows="20"/>
            </label>

            <button type="submit">ENVIAR</button>
            
           </div>
                
        </form>

     
        
       
        

      </div>
    </>
  );
}

export default Contato;
