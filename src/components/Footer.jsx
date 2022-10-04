import React from 'react'
import { Button, Container } from "react-bootstrap";
import InstagramIcon from '../assets/icons/instagram_logo_icon.svg'
import FacebookIcon from '../assets/icons/facebook_logo_icon.svg'
import LinkedinIcon from '../assets/icons/linkedin_logo_icon.svg'

import '../components/Footer.css'
import '../App.css'
export default function Footer(){
    return (
        <>
            <Container fluid className=' mt-5 p-0 ' >
                <footer  className='footerGlobal d-flex flex-wrap justify-content-center'>
                    <div className="footerGlobalDescription ">
                        <h3>Marili Réquia Corretora de Seguros</h3>
                        <div className='footerGlobalContact'>
                            <p>negocios@marilirequia.com.br</p>
                            <p>+55 (51) 3366.3366 / (51) 9 9951.5486</p>
                            <p>Rua Souza Lobo, 786 - Vila Jardim, Porto Alegre - RS, 91320-320</p>
                        </div>
                        <div className="footerGlobalSocialIcons d-flex flex-wrap flex-direction-row justify-content-center">
                            <Button variant="link" href='/'><img src={InstagramIcon} alt="" /></Button>
                            <Button variant="link" href='/'><img src={LinkedinIcon} alt="" /></Button>
                            <Button variant="link" href='/'><img src={FacebookIcon} alt="" /></Button>
                        </div>
                        <div className="footerCopyright d-flex w-75">
                            <p>©2022 por Marili Réquia Corretora de Seguros
                                A marca Marili Réquia é de propriedade da Flight Corretora de Seguros Ltda.
                                Todas as operações realizadas pela Marili Requia Corretora de Seguros são executadas pela Flight Corretora de Seguros Ltda, autorizada a funcionar pela Susep,
                                autarquia vinculada ao Ministério da Fazenda, Órgão do governo brasileiro responsável pelo controle e fiscalização dos mercados de seguros.</p>
                        </div>
                    </div>

                </footer>
            </Container>
        </>
    )
}

