import { Button, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Car from '../assets/icons/car.png'
import House from '../assets/icons/house.png'
import SeguroDeVida from '../assets/icons/qualidade-de-vida.png'
import Contrato from '../assets/icons/acordo.png'
import Doutor from '../assets/icons/doutor.png'
import Partner from '../assets/img/partner.png'
import './Home.css'


export default function Home() {
  return (
    <>
      <Container>
        <section className="WelcomeSection mt-5">
          <div className="d-flex flex-column">
            <h1 className="text-banner">
              <div>Atendimento Humanizado</div>
              <div>Segurança com Propósito</div>
              <div>Negócios Inteligentes</div>
            </h1>
            <spam>
              <Button size="lg">Cotar Grátis</Button>
            </spam>
          </div>
        </section>
      </Container>

      <Container fluid>
        {/* Sessão dos mini-cards */}
        <section className="figures-cards d-flex flex-column  mt-5">
          <div className="card-section">
            <div className="container-figures">
              <img src={Car}></img>
              <p>Seguro Auto</p>
            </div>
            <div className="container-figures">
              <img src={House}></img>
              <p>Seguro Residencial</p>
            </div>
            <div className="container-figures">
              <img src={SeguroDeVida}></img>
              <p>Seguro de Vida</p>
            </div>
            <div className="container-figures">
              <img src={Contrato}></img>
              <p>Garantia contratual</p>
            </div>
            <div className="container-figures">
              <img src={Doutor}></img>
              <p>RC Profissional</p>
            </div>
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

    </>


  );


}

