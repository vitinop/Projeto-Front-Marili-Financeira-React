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

      <Container fluid>
        {/* Sessão das seguradoras */}
        <section className="d-flex justify-content-center  mt-5 partner">
          <div className="partnerText">
            <h3>Nossas seguradoras parceiras</h3>
            <div className="partnerIcon">
              <Image fluid src={Partner} alt="" />
            </div>
          </div>
        </section>
      </Container>

      <Container fluid className="whyMariliContainer1 d-flex w-auto p-0">
        <section className="whyMarili d-flex mt-5 ">
          <div className="whyMariliContainer "></div>
          <div className="whyMariliTextRight ">
            <h3>
              Porque escolher <b>Marili Réquia?</b>
            </h3>
            <p>
              Oferecemos soluções de seguros para proteger suas conquistas de
              forma simples, rápida e econômica.
            </p>
            <span>
              <Button size="lg">Quero contratar</Button>
            </span>
          </div>

          <div className="whyMariliLeft">
            <div className="whyMariliTextLeft d-flex ">
              <img src={Favourite} alt="" />
              <p>
                Gestão de alta qualidade, credibilidade e confiança, excelência
                em atendimento.
              </p>
            </div>

            <div className="whyMariliTextLeft d-flex ">
              <img src={Chat} alt="" />
              <p>
                Temos especialistas disponíveis por chat ou telefone para tirar
                dúvidas, negociar e fechar o seguro ideal para você.
              </p>
            </div>
            <div className="whyMariliTextLeft d-flex ">
              <img src={Configuracoes} alt="" />
              <p>
                Os planos e assistências das seguradoras podem ser customizados
                de acordo com seu perfil e suas necessidades. Nada de cobertura
                que você não precisa.
              </p>
            </div>
          </div>
        </section>
      </Container>

      <Container fluid className="mt-5">
        {/* Sessão do Economize */}
        <section className=" sc1 d-flex">
          <div className="p1">
            <p>
              <small>
                Economize tempo e dinheiro, contrate seu seguro{" "}
                <b>100% online</b>
              </small>
            </p>
            <div className="p2">
              <p>
                Seguro personalizado do seu jeito é aqui! Sem papelada e sem
                sair de casa. São 17 seguradoras para comparar preços, planos,
                coberturas e fazer a melhor escolha para proteger o que é seu.
                Tudo em um só lugar!
              </p>
            </div>
          </div>
          <div className="carroBolha">
            <img src={CarroBolha} alt="" />
          </div>
        </section>
      </Container>

      <Container fluid className="p-0 d-flex mt-5">
        {/* Sessão como funciona */}
        <section className="howItWorksSection">
          <div className="textHowItWorks">
            <p>
              <b>Como </b>funciona?
            </p>
          </div>

          <ul
            className="nav nav-tabs d-flex justify-content-center colunm howItWorksList"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                <i className="bi bi-person"></i>Carros
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                <i className="bi bi-person"></i> Outros Serviços
              </button>
            </li>
          </ul>

          <div
            className="cardsSection tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          ></div>
        </section>
      </Container>
    </>
  );
}
