import { Button, Container, Figure } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';

import Nav from "react-bootstrap/Nav";
import Familia from '../../assets/img/familia_feliz_1.jpg'
import Carro from '../../assets/img/carro-bolha.png'

import "./Home.css";


export default function Home() {
  return (
    <>
      <Container>
        <section className=" mt-5 d-flex justify-content-center">
          <div className="whySustainability p-1 d-flex flex-column w-50">
            <h1 className="text-banner">
              O que é Sustentabilidade Financeira?
            </h1>
            <h3>Bem vindo (a)!</h3>
            <p className="text-break">
              O valor da sustentabilidade financeira se traduz no uso dos
              recursos de forma equilibrada. Isso significa objetivar a garantia
              da segurança financeira do seu patrimônio por meio do uso
              eficiente dos recursos que temos, sempre com uma visão de longo
              prazo.
            </p>
          </div>
        </section>
      </Container>

      <Container fluid className="p-0 mt-5">
        <section className="purposeSection mt-5 d-flex justify-content-center">
          <div className="purposeText d-flex row flex-wrap justify-content-center">
            <h3 className="p-1">​Consultoria com Propósito</h3>
            <p className="p-2 w-85">​A MR surgiu da necessidade de proteger a segurança patrimonial dos nossos clientes.<br />

              Atuamos com atendimento personalizado, traçando um planejamento estratégico de sustentabilidade financeira para o seu patrimônio.<br />

              Ajudamos nossos clientes a viabilizar seus objetivos e transformar seus desafios em tranquilidade.</p>


            <Carousel className="purposeImg">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={Familia}
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={Familia}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Familia}
                  alt="Third slide"
                />

              </Carousel.Item>

              <Carousel.Item interval={200}>
                <img
                  className="d-block w-100"
                  src={Familia}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>

          </div>
        </section>
      </Container>

      <Container className="mt-5">
        <section>
          <div className="imgCardContainer d-flex">
          <img src={Carro} alt=""/>
           
       
          <div className="imgCardContainerText">
          <p>Lorem Ipsum</p>
          </div>
            
          </div>
        </section>

      </Container>
    </>
  );
}
