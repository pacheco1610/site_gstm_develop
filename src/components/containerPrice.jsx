import React from 'react'

const ContainerPrice = () => {
  return (
    <div className='containerPrice'>
      <div className='containerPrice-card'>
        <div className='containerPrice-amount'>$200<span>/Por persona</span></div>
        <div className='containerPrice-group'>
          <div className='containerPrice-item'>
            <div className='containerPrice-info'>
              <h4>Fecha:</h4>
              <span>02/10/2023 - 09/10/2023</span>
            </div>
            <div><i className="fa-light fa-calendar-days"></i></div>
          </div>
          <div className='containerPrice-item'>
            <div className='containerPrice-info'>
              <h4>Adultos:</h4>
              <span>Mayor 18+</span>
            </div>
            <div className='containerPrice-controls'>
              <div><i class="fa-light fa-dash"></i></div>
              <div>3</div>
              <div><i class="fa-solid fa-plus"></i></div>
              </div>
          </div>
          <div className='containerPrice-item'>
            <div className='containerPrice-info'>
              <h4>Niños:</h4>
              <span>Menores 12</span>
            </div>
            <div className='containerPrice-controls'>
              <div><i class="fa-light fa-dash"></i></div>
              <div>2</div>
              <div><i class="fa-solid fa-plus"></i></div>
              </div>
          </div>
        </div>
        <div className='containerPrice-btn'>Book Now</div>
      </div>
  </div>
  )
}

export default ContainerPrice