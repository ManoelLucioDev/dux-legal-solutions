import React from "react";

function Parceria() {
  return (
    <>
      

      <div className="container-contato">
      <h1 className="container-texto">PARCERIA</h1>
        <h3 className="container-texto">
          SEJA VOCE TAMBEM O NOSSO PARCEIRO, SEJA UM CONSULTOR DUX LEGAL
          SOLUTIONS{" "}
        </h3 >
        <h4 className="container-texto">ATUAÇÃO COM AUTONOMA E INDEPENDENCIA FINANCEIRA</h4>
        <p className="container-texto">
          A Dux Legal Solutions nao para de crescer e busca constantemente
          expandir e fortalecer a sua rede de apoio e atuaçao geografica.
          Estamos sempre em busca de parceiros, profissionais liberais ou pessoa
          juridica, que possam contribuir na expansao dos nossos serviços em
          nossos terrirorios de atuacao. Se voce è advogado, administrador,
          contador ou tenha qualquer função que englobe uma carteira de clientes
          ou uma ampla rede social, poderá trabalhar em parceira conosco. O
          perfil que procuramos é de pessoas sérias, íntegras, comprometidas com
          o bom atendimento e respeito aos nossos principios e clientes.
          Qualquer que seja sua área de atuação, poderá nos apoiar em sua
          região, estado ou cidade. Caso haja interesse, favor preencher e
          enviar o formulário ao lado, então entraremos em contato para agendar
          uma videoconferencia, a fim de avaliar a possibilidade de aprofundar o
          conhecimento do seu perfil e fornecer as orientações gerais sobre
          nosso modo de atuação.
        </p>
        <form>
          <div className="container-form">
            <h2>FORMULÁRIO DE PROPOSTA DE PARCERIA</h2>
            <label>
              NOME:
              <input type="text" />
            </label>

            <label>
              E-MAIL:
              <input type="email" />
            </label>

            <label>
              TELEFONE:
              <input type="text" />
            </label>

            <label>
              CELULAR:
              <input type="text" />
            </label>

            

            <button type="submit">ENVIAR</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Parceria;
