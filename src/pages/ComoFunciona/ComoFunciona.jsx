import Container from 'react-bootstrap/Container';
import Contrato from '../../assets/img/contrato.jpg'


import '../../App.css'
import './ComoFunciona.css'

export default function ComoFunciona(){
  return (
      <>
      <Container fluid className='p-0 comoFunciona'>
        <div className='comoFuncionaContainer'>
          <div className='comoFuncionaTitle'>
            <h3>Como funciona:</h3>
          </div>
          <div className='comoFuncionaTextImg d-flex align-items-center '>
            <img src={Contrato} alt="" />
            <p className='m-5'>​Identificamos os seus desafios e os seus objetivos</p>
          </div>

          <div className='comoFuncionaTextImg d-flex flex-row-reverse align-items-center '>
            <img src={Contrato} alt="" />
            <p className='m-5'>​Analisamos o seu patrimônio</p>
          </div>


        </div>
      </Container>
      </>
  )
}