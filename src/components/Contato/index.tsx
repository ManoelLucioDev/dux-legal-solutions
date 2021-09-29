import { Form, InputGroup, Row, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import * as yup from "yup";
import translate from "../../i18n/translate";

import './style.css';

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
    message: ""
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
      <div className="form-container">
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="validationCustom01">
          <Form.Label>{translate("NAME-CLIENT")}</Form.Label>
          <Form.Control required type="text" name="name" />
          <Form.Control.Feedback type="invalid">
            Please choose a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom02">
          <Form.Label>{translate("PHONE-CLIENT")}</Form.Label>
          <Form.Control required type="number" name="phone" />
          <Form.Control.Feedback type="invalid">
            Please choose a telephone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustomUsername">
          <Form.Label>{translate("EMAIL-CLIENT")}</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              name="email"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="validationCustom02">
          <Form.Label>{translate("ABOUT-CLIENT")}</Form.Label>
          <Form.Control required type="text" name="subject" />
          <Form.Control.Feedback type="invalid">
            Please choose a about.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom02">
        <Form.Label>{translate("MSG-CLIENT")}</Form.Label>
        <Form.Control
        
          name="message"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
        </Form.Group>
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default Contato;
