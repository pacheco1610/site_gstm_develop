import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'

const landingDestino = () => {

  const handleSelectMenu = ( margin ) => {
    const component = document.getElementById('selectMenu')

    component.style.left = margin
  }
  return (
    <div className='Home'>
      <Header/>
      <section className='Home-section Home-background'>
        <div className="Home-wrapper">
          <div className="Home-containerTitle">
            <h1>Encuentra las mejores tarifas con nosotros</h1>
            <span>Nuestras tarifas son negociadas directas con el provedor garantizando la tarifa mas baja disponible</span>
            <button>Explore Now</button>
          </div>
          <div className="Home-containerSearch">
            <div className="Home-SearchWrapper">
              <div className="Home-SearchHeader">
                <div onClick={() => handleSelectMenu('0%')}>Atracciones</div>
                <div onClick={() => handleSelectMenu('25%')}>Tours</div>
                <div onClick={() => handleSelectMenu('50%')}>Transporte</div>
                <div onClick={() => handleSelectMenu('75%')}>Hoteles</div>
                <div className='Home-SearchHeaderSelect' id='selectMenu'></div>
              </div>
              <div className="Home-SearchBody">
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-location-dot"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">Locación</label>
                    <input type="text" placeholder='¿A dónde vas?' onLoad={() => console.log('prueba')} />
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-calendar"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">Fecha</label>
                    <input type="text" placeholder='¿Cuando?' />
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-user-vneck"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">Personas</label>
                    <input type="text" placeholder='¿Cuantos van?' />
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <button>
                      <span>Buscar</span>
                     <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-section'>
        <div className="Home-wrapper Destino-wrapper">
          <div className='Destino-sideBar'>
            <div>
              <h1>Categoria</h1>
              <ul>
                <li><div><input type="checkbox" /><span>Atracciones</span></div> <div>3</div></li>
                <li><div><input type="checkbox" /><span>Tours</span></div> <div>2</div></li>
                <li><div><input type="checkbox" /><span>Transportes</span></div> <div>5</div></li>
                <li><div><input type="checkbox" /><span>Hoteles</span></div> <div>2</div></li>
              </ul>
            </div>
          </div>
          <div className='Destino-tours'>
            <div className='Destino-toursHeader'>
              <h1>2 aventuras</h1><span>en Canada</span>
            </div>
            <div className='Destinos-toursWrapper'>
              <div className='Destinos-tourContainer'>
                <img src="https://cms.trotatourism.com/uploads/large_vancouver_66115e2a6f.jpg" alt="" />
                <div className='Destinos-tourContainerText'>
                  <div className='Destinos-tourContainerText-header'>
                    <span>Tour</span>
                  </div>
                  <div className='Destinos-tourContainerText-body'>
                    <h1>VANCOUVER, VICTORIA Y WHISTLER EN 5 DIAS</h1>
                    <p><i className="fa-sharp fa-solid fa-location-dot"></i> <span>Los Angeles, USA</span></p>
                  </div>
                  <div className='Destinos-tourContainerText-footer'>
                    <div>
                      <h1>$125</h1><span className='Destinos-tourContainerText-per'>/per night</span>
                    </div>
                    <div className='Header-Login'>
                      <span>Más detalles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default landingDestino;