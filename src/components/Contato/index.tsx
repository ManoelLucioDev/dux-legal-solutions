import emailjs from "emailjs-com";

import * as yup from "yup";
import translate from "../../i18n/translate";



import "./style.css";

function handleSubmit(schema: any) {
  schema.preventDefault();
  emailjs.sendForm(
    "gmailMessage",
    "template_t7ze1y2",
    schema.target,
    "user_dtkC4ch8LJM5Hn531jJQb"
  );
  schema.target.reset();
}

const schema = yup.object().shape({
  name: yup.string().min(2).required(),

  email: yup.string().email(),
});
schema
  .isValid({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  .then(
    (result) => {
      console.log("Mensagem enviada com sucesso");
    },
    (error) => {
      console.log(error.message);
    }
  );

function Contato() {
  return (
    <>
      

      <div className="container-contato">

        <h1>CONTATO</h1>

        <h3 className="container-texto">
          A DUX LEGALSOLUTIONS está sempre aberta para você e sua empresa. Envie
          uma mensagem para nosso e-mail ou entre em contato com o nosso
          escritório.
        </h3>

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit} >
            
            <label >{translate("NAME-CLIENT")} </label>

            <input required type="text" name="name"  id="name"/>
            

            <label>{translate("PHONE-CLIENT")}</label>

            <input required type="tel" name="phone"   />

            <label>{translate("EMAIL-CLIENT")} </label>

            <input type="email" name="email" required />

            <label>{translate("ABOUT-CLIENT")} </label>

            <input required type="text" name="subject" />

            <label>{translate("MSG-CLIENT")} </label>

            <textarea
              name="message"
              
              rows={10}
            ></textarea>

            <div className="btn"><button  type="submit"  >{translate('BTN-SUBMIT')}</button></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contato;
