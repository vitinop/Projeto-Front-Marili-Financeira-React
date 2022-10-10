import Container from 'react-bootstrap/Container';
import Contrato from '../../assets/img/contrato.jpg'


import '../../App.css'
import './ComoFunciona.css'

export default function ComoFunciona() {
  return (
    <>
      <Container fluid className='p-0 d-flex flex-column comoFunciona'>
        <div className='comoFuncionaContainer'>
          <div className='comoFuncionaTitle'>
            <h3>Como funciona:</h3>
          </div>

            <div className='d-flex align-items-center justify-content-center flex-row flex-wrap flex-lg-nowrap '>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Identificamos os seus desafios e os seus objetivos</p>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-row-reverse flex-wrap flex-lg-nowrap'>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Analisamos o seu patrimônio</p>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-center flex-row flex-wrap flex-lg-nowrap '>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Identificamos sua viabilidade financeira</p>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-row-reverse flex-wrap flex-lg-nowrap'>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Traçamos o planejamento estratégico</p>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-center flex-row flex-wrap flex-lg-nowrap '>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Garantimos sua sustentabilidade financeira</p>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-row-reverse flex-wrap flex-lg-nowrap'>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Suporte em tempo integral</p>
            </div>
          </div>

          <div className='d-flex align-items-center justify-content-center flex-row flex-wrap flex-lg-nowrap '>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Você fica tranquilo</p>
            </div>
          </div>







        </div>
      </Container>
    </>
  )
}