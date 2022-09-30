import { Button, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <section className="WelcomeSection mt-5">
          <div className="d-flex flex-column">
            <h1 className="">
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
    </>
  );
}
