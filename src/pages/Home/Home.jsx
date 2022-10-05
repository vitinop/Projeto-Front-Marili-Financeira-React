import { Button, Container, Figure } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";

import videobg from "../../assets/bgvideo.mp4";
import Familia from "../../assets/img/familia_feliz_1.jpg";
import Carro from "../../assets/img/carro-bolha.png";

import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="w-100">
        <video
          className="videobg position-absolute mw-100"
          src={videobg}
          autoPlay
          loop
          muted
        />
        <div className="overlay position-absolute w-100 h-100"></div>
        <div className="position-relative p-5 d-flex flex-column align-items-center text-center text-light">
          <h1>
            O que é Sustentabilidade
            <br />
            Financeira?
          </h1>
          <h3>Bem vindo (a)!</h3>
          <p className="mt-5 w-75">
            O valor da sustentabilidade financeira se traduz no uso dos recursos de forma equilibrada.<br/> 
            Isso significa objetivar a garantia da segurança financeira do seu patrimônio por meio do uso eficiente <br/>  dos
            recursos que temos, sempre com uma visão de longo prazo.
          </p>
        </div>
      </section>

      <Container fluid className="p-0 mt-5 position-relative">
        <section className="purposeSection mt-5 d-flex justify-content-center">
          <div className="purposeText d-flex row flex-wrap justify-content-center text-center">
            <h3 className="p-1">​Consultoria com Propósito</h3>
            <p className="p-2 w-85">
              ​A MR surgiu da necessidade de proteger a segurança patrimonial
              dos nossos clientes.
              <br />
              Atuamos com atendimento personalizado, traçando um planejamento
              estratégico de sustentabilidade financeira para o seu patrimônio.
              <br />
              Ajudamos nossos clientes a viabilizar seus objetivos e transformar
              seus desafios em tranquilidade.
            </p>

            <Carousel className="purposeImg">
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={Familia}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={Familia}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={Familia}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      </Container>

      <Container className="mt-5">
        <section>
          <div className="imgCardContainer d-flex">
            <img src={Carro} alt="" />

            <div className="imgCardContainerText">
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
