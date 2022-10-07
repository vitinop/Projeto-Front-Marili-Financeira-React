import { Button, Container } from "react-bootstrap";
import InstagramIcon from "../../assets/icons/instagram_logo_icon.svg";
import FacebookIcon from "../../assets/icons/facebook_logo_icon.svg";
import LinkedinIcon from "../../assets/icons/linkedin_logo_icon.svg";
import {BsPhone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Container fluid className="footerGlobal">
        <footer>
          <div className="footerGlobalDescription d-flex flex-column align-items-center text-center">
            <h3>Marili Réquia Corretora de Seguros</h3>
            <div className="footerGlobalContact text-center">
              <p><AiOutlineMail/>  negocios@marilirequia.com.br</p>
              <p>+55 (51) 3366.3366 /<BsPhone/> (51) 9 9951.5486</p>
              <span>
                Endereço:
                <br />
                Rua Souza Lobo, 786 - Vila Jardim
                <br />
                Porto Alegre - RS <br />
                CEP:91320-320
              </span>
            </div>
            <div className="footerGlobalSocialIcons d-flex justify-content-center">
              <Button variant="link" href="/">
                <img src={InstagramIcon} alt="" />
              </Button>
              <Button variant="link" href="/">
                <img src={LinkedinIcon} alt="" />
              </Button>
              <Button variant="link" href="/">
                <img src={FacebookIcon} alt="" />
              </Button>
            </div>
            <div className="footerCopyright mt-4 w-75 text-center">
              <h6>
                ©2022 por Marili Réquia Corretora de Seguros A marca Marili
                Réquia é de propriedade da Flight Corretora de Seguros Ltda.
                Todas as operações realizadas pela Marili Requia Corretora de
                Seguros são executadas pela Flight Corretora de Seguros Ltda,
                autorizada a funcionar pela Susep, autarquia vinculada ao
                Ministério da Fazenda, Órgão do governo brasileiro responsável
                pelo controle e fiscalização dos mercados de seguros.
              </h6>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}
