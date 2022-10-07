import Container from 'react-bootstrap/Container';
import Contrato from '../../assets/img/contrato.jpg'


import '../../App.css'
import './ComoFunciona.css'

export default function ComoFunciona() {
  return (
    <>
      <Container fluid className='p-0 comoFunciona'>
        <div className='comoFuncionaContainer'>
          <div className='comoFuncionaTitle'>
            <h3>Como funciona:</h3>
          </div>
          <div></div>
          <div className='d-flex align-items-center flex-row flex-wrap '>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Identificamos os seus desafios e os seus objetivos</p>
            </div>
          </div>
          <div className='d-flex align-items-center flex-row-reverse flex-wrap '>
            <div className='comoFuncionaImg' style={{ backgroundImage: `url(${Contrato})` }}>
            </div>
            <div className='comoFuncionaText'>
              <p>​Identificamos os seus desafios e os seus objetivos</p>
            </div>
          </div>




        </div>
      </Container>
    </>
  )
}