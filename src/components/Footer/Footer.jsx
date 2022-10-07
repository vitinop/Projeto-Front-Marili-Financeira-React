import { Container } from "react-bootstrap";
import { BsPhone, BsTelephoneForward, BsPinMap } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi"
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      { }
      <Container fluid className="footerGlobal pt-5">
        <footer>
          <div className="footerGlobalDescription d-flex flex-column align-items-center text-center">
            <h3>Marili Réquia Corretora de Seguros</h3>
            <div className="footerGlobalContact text-center">
              <div className="d-flex flex-column align-items-center mb-4">


              </div>
              <p>
                <AiOutlineMail /> negocios@marilirequia.com.br
              </p>
              <p>
                <BsTelephoneForward />
                +55 (51) 3366.3366 /<BsPhone /> (51) 9 9951.5486
              </p>

              <p>
                <BsPinMap /> Rua Souza Lobo, 786 - Vila Jardim Porto Alegre - RS, 91320-320
              </p>
            </div>
            <div className="SocialMidia d-flex flex-row align-items-lg-center">
              <Link className="socialIco nav-link" to="#">
                <FiFacebook />
              </Link>
              <Link className="socialIco nav-link" to="#">
                <FiInstagram />
              </Link>
              <Link className="socialIco nav-link" to="#">
                <FiLinkedin />
              </Link>
            </div>
            <div className="footerCopyright m-4  w-75 text-center">
              <p>
                ©2020 por MR Sustentabilidade Financeira <br />
                A marca Marili Réquia é de propriedade da Flight Corretora de Seguros Ltda.<br />
                Todas as operações realizadas pela Marili Requia Corretora de Seguros são executadas pela Flight Corretora de Seguros Ltda, autorizada a funcionar pela Susep,<br/>
                autarquia vinculada ao Ministério da Fazenda, Órgão do governo brasileiro responsável pelo controle e fiscalização dos mercados de seguros.
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}
