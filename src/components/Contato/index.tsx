import emailjs from 'emailjs-com';
import React from "react";
import translate from "../../i18n/translate";
import './style.css';

function Contato() {

  

  function enviarEmail(e: any){
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_t7ze1y2', e.target, 'user_dtkC4ch8LJM5Hn531jJQb')
    .then((result) => {
      console.log('Mensagem enviada com sucesso')
    },(error) => {
      console.log(error.message)
    });
    e.target.reset();
  }

  return (
    <>
      <h1>{translate("TITLE-CONTACT")}</h1>
      
      <div className="container-contato">
      <h3 className="container-texto">
        {translate("TEXT-CONTACT")}
      </h3>
       <form onSubmit={enviarEmail}>

       

           <div className="container-form">
           <label>
            {translate('NAME-CLIENT')}
           <input type="text" name="name"/>
           </label>

           <label>
            {translate('EMAIL-CLIENT')}
           <input type="email" name="email" />
           </label>

           <label>
            {translate('PHONE-CLIENT')}
           <input type="text" name="phone"/>
           </label>

           <label>
            {translate('ABOUT-CLIENT')}
           <input type="text" name="subject"/>
           </label>
            
            <label>
                {translate('MSG-CLIENT')}
                <textarea rows={20} name="message"/>
            </label>
            
            {/**<input type="hidden" name="redirectTo" value="https://example.com/contact/success"></input> */}   
            <button type="submit">{translate('BTN-SUBMIT')}</button>
            
           </div>
                
        </form>

     
        
       
        

      </div>
    </>
  );
}

export default Contato;
