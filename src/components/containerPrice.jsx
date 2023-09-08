import React from 'react'

const ContainerPrice = ({trip}) => {
  return (
    <div className='containerPrice'>
      <div className='containerPrice-card'>
        <div className='containerPrice-amount'>${trip?.precio && trip?.precio}<span>/{trip?.unidad.data.attributes.titulo && trip?.unidad.data.attributes.titulo}</span></div>
        <div className='containerPrice-group'>
          <div className='containerPrice-item'>
            <div className='containerPrice-info'>
              <h4>Fecha:</h4>
              <span>{trip?.fecha_de_incio && trip?.fecha_de_incio} - {trip?.fecha_fin && trip?.fecha_fin}</span>
            </div>
            <div><i className="fa-light fa-calendar-days"></i></div>
          </div>
          <div className='containerPrice-item'>
            <div className='containerPrice-info'>
              <h3>Contactanos</h3>
              <div>
                <h4>Email:</h4>
                <span>contacto@trotatourism.com</span>
              </div>
              <div>
                <h4>Telefono:</h4>
                <span>(239) 555-0108</span>
              </div>
            </div>
          </div>
        </div>
        <a target='_blank' href={trip?.url_wetravel && trip?.url_wetravel} className='containerPrice-btn'>Book Now</a>
      </div>
  </div>
  )
}

export default ContainerPrice