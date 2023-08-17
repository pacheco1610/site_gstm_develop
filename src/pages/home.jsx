import React from 'react';
import Header from '../components/header'
import imagenHome from '../assets/Image.png'
import Logo from '../assets/Logo.png'

const home = () => {
  return (
    <div className='Home'>
      <Header/>
      <section className='Home-section Home-slider'>
        <div className="Home-wrapper">
          <div className='Home-sliderText'>
            <div className='Home-logo'>
              <img src={ Logo } alt="" />
            </div>
            <div className='Home-subtitle'>
              <span>TOUR OPERADOR MAYORISTA</span>
            </div>
            <div className='Home-title'>
              <h3>
              Somos un receptivo basados en 
            Las Vegas expertos en Nevada, 
            pero con producto disponible con 
            las mejores tarifas para tu agencia 
            en todo Estado Unidos.
              </h3>
            </div>
            <div className='Home-descripcion'>
              <span>
              Trota Tourism tiene staff disponible en español todo el 
              tiempo para las agencias y asistencia personalizada para los 
              clientes, nuestras tarifas son negociadas directas con el proveedor 
              garantizando siempre la tarifa más baja disponible.
              </span>
              <div></div>
            </div>
          </div>
          <div className='Home-sliderImagen'>
            <img src={ imagenHome } alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;