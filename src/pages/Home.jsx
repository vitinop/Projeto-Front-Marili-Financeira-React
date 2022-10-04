import { Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import Nav from "react-bootstrap/Nav";
import Car from "../assets/icons/car.png";
import House from "../assets/icons/house.png";
import SeguroDeVida from "../assets/icons/qualidade-de-vida.png";
import Contrato from "../assets/icons/acordo.png";
import Doutor from "../assets/icons/doutor.png";
import Partner from "../assets/img/partner.png";
import Favourite from "../assets/icons/favourite.png";
import Chat from "../assets/icons/chat.png";
import Configuracoes from "../assets/icons/configuracoes.png";

import CarroBolha from "../assets/img/carro-bolha.png";
import "./Home.css";
import "../App.css";

export default function Home() {
  return (
    <>
      <Container>
        <section className="mt-5 d-flex justify-content-center">
          <div className="d-flex flex-column w-50">
            <h1 className="text-banner">
              ​O que é Sustentabilidade Financeira?
            </h1>
            <h3>Bem vindo (a)!</h3>
            <h2 className="text-break">
              O valor da sustentabilidade financeira se traduz no uso dos
              recursos de forma equilibrada. Isso significa objetivar a garantia
              da segurança financeira do seu patrimônio por meio do uso
              eficiente dos recursos que temos, sempre com uma visão de longo
              prazo.
            </h2>
          </div>
        </section>
      </Container>

      <Container>
        <section className="mt-5 d-flex justify-content-center">
          <div className="d-flex flex-column w-50">
            <h1 className="text-banner">Consultoria com Propósito</h1>

            <h2 className="text-break">
              A MR surgiu da necessidade de proteger a segurança patrimonial dos
              nossos clientes. Atuamos com atendimento personalizado, traçando
              um planejamento estratégico de sustentabilidade financeira para o
              seu patrimônio. Ajudamos nossos clientes a viabilizar seus
              objetivos e transformar seus desafios em tranquilidade.
            </h2>
          </div>
        </section>
      </Container>
    </>
  );
}
