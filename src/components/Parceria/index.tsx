import React from "react";
import translate from "../../i18n/translate";
import emailjs from 'emailjs-com';

function Parceria() {


  function enviarEmail(e: any){
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_zua2zai', e.target, 'user_dtkC4ch8LJM5Hn531jJQb')
    .then((result) => {
      console.log('Mensagem enviada com sucesso')
    },(error) => {
      console.log(error.message)
    });
    e.target.reset();
  }

  return (
    <>
      

      <div className="container-contato">
      <h1 className="container-texto">{translate('TITLE-PARTNERSHIP')}</h1>
        <h3 className="container-texto">
          {translate('SUBTITLE-PARTNERSHIP-01')}
        </h3 >
        <h4 className="container-texto">{translate('SUBTITLE-PARTNERSHIP-02')}</h4>
        <p className="container-texto">
          {translate('TEXT-PARTNERSHIP')}
        </p>
        
      
        <form onSubmit={enviarEmail}>
        <div className="container-form">
            <h2 >{translate("TITLE-FORM")}</h2>
            <label>
              NOME:
              <input type="text" name= 'name' />
            </label>

            <label>
              E-MAIL:
              <input type="email" name= 'email' />
            </label>

            <label>
              CELULAR:
              <input type="text" name='phone' />
            </label>

            

            <button type="submit">ENVIAR</button>
            </div>
        </form>
        </div>
     
    </>
  );
}

export default Parceria;
