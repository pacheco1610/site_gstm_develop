import React from 'react'
import { useSelector } from 'react-redux';

const ContainerPrice = ({trip}) => {
  const user = useSelector((state) => state.user)

  return (
    <div className='containerPrice'>
      <div className='containerPrice-card'>
        { user.activeLogin ? 
          <div className='containerPrice-amount'>
            ${trip?.precio && trip?.precio} {trip?.moneda?.data?.attributes?.titulo && trip?.moneda.data.attributes.titulo}<span>/{trip?.unidad?.data?.attributes?.titulo && trip?.unidad?.data?.attributes?.titulo}</span>
          </div>
          : 
          <div className='containerPrice-amount'>
            <span>Inicia sesión para ver nuestros precios</span>
          </div>
        }
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
        { user.activeLogin ? 
          <a target='_blank' href={trip?.url_wetravel && trip?.url_wetravel} className='containerPrice-btn'>Book Now</a>
          :
          null
        }
        
      </div>
  </div>
  )
}

export default ContainerPrice