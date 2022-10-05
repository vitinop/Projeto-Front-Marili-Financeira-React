import { Button, Container, Figure } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";

import videobg from "../../assets/bgvideo.mp4";
import Familia from "../../assets/img/familia_feliz_1.jpg";
import Carro from "../../assets/img/carro-bolha.png";
import Quote from '../../assets/icons/quote.png'

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

        {/* Sessão dos card (img a definir) */}
        <Container className="mt-5">
        <section className="d-flex flex-wrap row justify-content-center align-items-end p-3">
          <div className="imgCardContainer d-flex colunm flex-nowrap justify-content-lg-end align-items-end  ">
            <p className="p-2">Conselhos de um consultor de Nova...</p>
          </div>

          <div className="imgCardContainer d-flex colunm flex-nowrap justify-content-lg-end align-items-end ">
            <p className="p-2">8 razões para fazer anotações de uma...</p>
          </div>

          <div className="imgCardContainer d-flex colunm flex-nowrap justify-content-lg-end align-items-end ">
            <p className="p-2">Por que trabalhos de Consultoria estão em...</p>
          </div>
        </section>
      </Container>


      {/* Sessaõ dos depoimentos */}
      <Container className="mt-5">
        <section className="d-flex flex-wrap justify-content-center">
          <div className="titleDepositions">
            <h3>
              Depoimentos de Clientes
            </h3>
          <h4 className="p-3">
          O que dizem por aí?
          </h4>
          <p>​Desde 1998 meus serviços de consultoria profissional conquistam clientes fiéis. 
            Como consultora de sustentabilidade financeira em Porto Alegre, orientei clientes em decisões e mudanças importantes. 
            Consegui transformar suas vidas prestando diversos serviços de acordo com suas
             necessidades específicas. Leia o que meus clientes têm a dizer e mande uma mensagem.</p>
          </div>

        <div className="card-container d-flex justify-content-center row flex-wrap align-items-center ">
          {/* Definir svg pro Quote */}
        <img src={Quote} alt="" />
        
        <p>
        ​Muito mais que uma corretora. Sou cliente há + ou - 2 anos.
         Esse ano tive um sinistro. Para minha segurança, eu estava realmente segura! Agilidade, 
         confiança e muito comprometimento de toda a equipe.
         Recomendo à todos olhar muito mais do que o valor da cotação, observem as coberturas.
        </p>
        <p className="nameClient">Lisiane Xiaia Silva, Porto Alegre/RS</p>
        
        </div>

        <div className="card-container d-flex justify-content-center row flex-wrap align-items-center">
        <img src={Quote} alt="" />
        
        <p>
        ​Há vinte anos realizo as contratações de seguros com a Marili Réquia e sempre tive atendimento qualificado e pontual, 
        não me preocupando com vencimento das apólices e todas essas inquietações com renovação dos seguros. 
        Quero cumprimentar os dirigentes da OAB.RS pela iniciativa de conveniar-se com a referida corretora, recomendando a
         sua preferência pelos serviços que presta, 
        razão de tanto tempo a ela vinculado sem nunca ter-me trazido qualquer ou eventual contratempo.
        </p>
        <p className="nameClient">Advogado Isolde Favaretto - OAB.RS 11.259</p>
        
        </div>

        <div className="card-container d-flex justify-content-center row flex-wrap align-items-center">
        <img src={Quote} alt="" />
        
        <p>
        ​Marili Réquia admirável pela sua força e determinação quando trata-se de
         partir em defesa de seus clientes! Conte sempre com meu apoio! Forte abraço!
        </p>
        <p className="nameClient">​Estela de Moura Rey, Porto Alegre/RS</p>
        
        </div>

        <div className="card-container d-flex justify-content-center row flex-wrap align-items-center">
        <img src={Quote} alt="" />
        
        <p>
        ​Recomendo à todos mesmo, sou cliente há mais de 10 anos e o atendimento sempre foi fantástico, parabéns à esta excelente empresa.
        </p>
        <p className="nameClient">​Carina Reis, Gravataí/RS</p>
        
        </div>

        <div className="card-container d-flex justify-content-center row flex-wrap align-items-center">
        <img src={Quote} alt="" />
        
        <p>
        ​O serviço foi ágil e eficiente. Recomendo à todos.
        </p>
        <p className="nameClient">​José, Viamão/RS</p>
        
        </div>

        <div className="card-container d-flex justify-content-center row flex-wrap align-items-center">
        <img src={Quote} alt="" />
        
        <p>
        ​Estou bastante satisfeito com o atendimento. Ágil e descomplicado!
        </p>
        <p className="nameClient">​Roberto, Porto Alegre/RS</p>
        
        </div>

    
        </section>
      </Container>
    </>
  );
}
