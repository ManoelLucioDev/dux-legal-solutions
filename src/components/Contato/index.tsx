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
       <form action="https://api.staticforms.xyz/submit" method="POST">

       <input type="hidden" name="accessKey" value="c9093100-a626-46b7-8f67-5b86afedea3f" />
       <input type="hidden" name="redirectTo" value=""></input>

           <div className="container-form">
           <label>
            NOME:
           <input type="text" name="name"/>
           </label>

           <label>
            E-mail:
           <input type="email" name="email" />
           </label>

           <label>
            TELEFONE:
           <input type="text" name="phone"/>
           </label>

           <label>
            ASSUNTO:
           <input type="text" name="subject"/>
           </label>
            
            <label>
                MENSAGEM:
                <textarea rows={20} name="message"/>
            </label>
            {/**<input type="hidden" name="redirectTo" value="https://example.com/contact/success"></input> */}   
            <button type="submit">ENVIAR</button>
            
           </div>
                
        </form>

     
        
       
        

      </div>
    </>
  );
}

export default Contato;
