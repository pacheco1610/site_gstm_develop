import React, { useEffect, useState } from 'react';
import imagen1 from '../assets/imagenslider1.png'
import disneyImagen1 from '../assets/imagen1.jpg'
import disneyImagen2 from '../assets/imagen2.jpg'
import flye from '../assets/maleta.png'
import palm from '../assets/palmera.png'
import Footer from '../components/footer'

const Home = () => {
  const [data, setData] = useState([]); 
  const [map, setMap] = useState(null);
  

  const handleSelectMenu = ( margin ) => {
    const component = document.getElementById('selectMenu')

    component.style.left = margin
  }

  const handleClick = (type) => {
    const slider = document.querySelector('.Home-sliderCarousel');
    const firsElement = document.querySelectorAll('.Home-sliderDescubreContainer')[0];
    const firstElementWidth = firsElement.clientWidth;
    slider.scrollLeft += type === "left" ? -firstElementWidth : firstElementWidth;
  }

  const handleClickDeals = (type) => {
    const slider = document.querySelector('.Home-sliderCarouselDeals');
    const firsElement = document.querySelectorAll('.Home-sliderDealsContainer')[0];
    const firstElementWidth = firsElement.clientWidth;
    slider.scrollLeft += type === "left" ? -firstElementWidth : firstElementWidth;
  }

  return (
    <div className='Home'>
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
        <div className="Home-wrapper Home-wrapperDescubre">
          <h1>Descubre nuestros destinos</h1>
          <div className='Home-sliderDescubre'>
            <div className="Home-sliderCarousel">
              <div className='Home-sliderDescubreContainer'>
                <img src={ imagen1 } alt="" />
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDescubreContainer'>
                <img src={ imagen1 } alt="" />
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDescubreContainer'>
                <img src={ imagen1 } alt="" />
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDescubreContainer'>
                <img src={ imagen1 } alt="" />
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDescubreContainer'>
                <img src={ imagen1 } alt="" />
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDescubreContainer'>
                <img src={ imagen1 } alt="" />
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
            </div>
            <div className="Home-DescubreCarouselControllers">
              <div onClick={() => handleClick('left')}><i className="fa-sharp fa-light fa-chevron-left"></i></div>
              <div onClick={() => handleClick('right')}><i className="fa-sharp fa-light fa-chevron-right"></i></div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-section'>
        <div className="Home-wrapper Home-wrapperBeneficios">
          <h1 className='Home-titleGrupos'>Vea algunos beneficios de unirse a nosotros</h1>
          <div className='Home-beneficiosWrapper'>
            <div className='Home-beneficiosContainer'>
              <div className='Home-beneficio'>
                <div className="Home-beneficioIcon">
                  <span>1</span>
                </div>
                <div className="Home-beneficioText">
                  <h1>Más de 20 años de experiencia</h1>
                  <span>Estamos orgullosos de nuestra experiencia en la industria, asi que podemos guiarte a ti y tu cliente en la mejor experiencia de viaje.</span>
                </div>
              </div>
              <div className='Home-beneficio'>
                <div className="Home-beneficioIcon">
                  <span>2</span>
                </div>
                <div className="Home-beneficioText">
                  <h1>Ofertas y descuentos exclusivos</h1>
                  <span>Contamos asociaciones con Atracciones, Tours ,Hoteles y otros proveedores de viajes.</span>
                </div>
              </div>
              <div className='Home-beneficio'>
                <div className="Home-beneficioIcon">
                  <span>3</span>
                </div>
                <div className="Home-beneficioText">
                  <h1>Tranquilidad y soporte</h1>
                  <span>Brindamos tranquilidad al ofrecer apoyo y asistencia en todo momento.</span>
                </div>
              </div>
            </div>
            <div className='Home-beneficioImagenWrapper'>
              <div className="Home-beneficioImagenContainer">
                <img src={ disneyImagen1 } alt="" />
                <img src={ disneyImagen2 } alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-section'>
        <div className="Home-wrapper Home-DestinationWrapper">
          <div className='Home-destinationsHeader'>
            <div>
              <h1>Explora nuestros destinos</h1>
              <span>Vamos a una aventura</span>
            </div>
            <div className='Home-destinationButtons'>
              <div>
                <button>Atracciones</button>
              </div>
              <div>
                <button>Tours</button>
              </div>
              <div>
                <button>Transporte</button>
              </div>
              <div>
                <button>Hoteles</button>
              </div>
            </div>
          </div>
          <div className='Home-destinationsBody'>
            <div className='Home-destinationContainer'>
              <div className='Home-destinationImagen' style={{backgroundImage:'URL("https://mexicorutamagica.mx/wp-content/uploads/2023/04/gran-canon-del-colorado-estados-unidos.jpg")'}}>

              </div>
              <div className='Home-destinationBody'>
                <div>
                  <h1>The beverly hills Hotel</h1>
                  <span><i className="fa-sharp fa-solid fa-location-dot"></i> Los Angeles, USA</span>
                </div>
                <div>
                  <h1>$125</h1><span>/per night</span>
                </div>
              </div>
            </div>
            <div className='Home-destinationContainer'>
              <div className='Home-destinationImagen' style={{backgroundImage:'URL("https://mexicorutamagica.mx/wp-content/uploads/2023/04/gran-canon-del-colorado-estados-unidos.jpg")'}}>

              </div>
              <div className='Home-destinationBody'>
                <div>
                  <h1>The beverly hills Hotel</h1>
                  <span><i className="fa-sharp fa-solid fa-location-dot"></i> Los Angeles, USA</span>
                </div>
                <div>
                  <h1>$125</h1><span>/per night</span>
                </div>
              </div>
            </div>
            <div className='Home-destinationContainer'>
              <div className='Home-destinationImagen' style={{backgroundImage:'URL("https://mexicorutamagica.mx/wp-content/uploads/2023/04/gran-canon-del-colorado-estados-unidos.jpg")'}}>

              </div>
              <div className='Home-destinationBody'>
                <div>
                  <h1>The beverly hills Hotel</h1>
                  <span><i className="fa-sharp fa-solid fa-location-dot"></i> Los Angeles, USA</span>
                </div>
                <div>
                  <h1>$125</h1><span>/per night</span>
                </div>
              </div>
            </div>
            <div className='Home-destinationContainer'>
              <div className='Home-destinationImagen' style={{backgroundImage:'URL("https://mexicorutamagica.mx/wp-content/uploads/2023/04/gran-canon-del-colorado-estados-unidos.jpg")'}}>

              </div>
              <div className='Home-destinationBody'>
                <div>
                  <h1>The beverly hills Hotel</h1>
                  <span><i className="fa-sharp fa-solid fa-location-dot"></i> Los Angeles, USA</span>
                </div>
                <div>
                  <h1>$125</h1><span>/per night</span>
                </div>
              </div>
            </div>
            <div className='Home-destinationContainer'>
              <div className='Home-destinationImagen' style={{backgroundImage:'URL("https://mexicorutamagica.mx/wp-content/uploads/2023/04/gran-canon-del-colorado-estados-unidos.jpg")'}}>

              </div>
              <div className='Home-destinationBody'>
                <div>
                  <h1>The beverly hills Hotel</h1>
                  <span><i className="fa-sharp fa-solid fa-location-dot"></i> Los Angeles, USA</span>
                </div>
                <div>
                  <h1>$125</h1><span>/per night</span>
                </div>
              </div>
            </div>
            <div className='Home-destinationContainer'>
              <div className='Home-destinationImagen' style={{backgroundImage:'URL("https://mexicorutamagica.mx/wp-content/uploads/2023/04/gran-canon-del-colorado-estados-unidos.jpg")'}}>

              </div>
              <div className='Home-destinationBody'>
                <div>
                  <h1>The beverly hills Hotel</h1>
                  <span><i className="fa-sharp fa-solid fa-location-dot"></i> Los Angeles, USA</span>
                </div>
                <div>
                  <h1>$125</h1><span>/per night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-section Home-sectionWork'>
        <div className="Home-wrapper Home-ItWork">
          <div className='Home-ItWorkHeader'>
            <h1>Como funciona</h1>
            <span>keep calm & travel on</span>
          </div>
          <div className='Home-ItWorkBody'>
            <div className="Home-ItWorkTarget">
              <div><i className="fa-duotone fa-calendar-days"></i></div>
              <div>
                <h1>Reserva y Relajate</h1>
                <span>Durante todo el viaje del cliente, la agencia de viajes le brindará apoyo.</span>
              </div>
            </div>
            <div className="Home-ItWorkTarget">
              <div><i className="fa-duotone fa-wallet"></i></div>
              <div>
                <h1>Pagos y Tarifas</h1>
                <span>Durante todo el viaje del cliente, la agencia de viajes le brindará apoyo.</span>
              </div>
            </div>
            <div className="Home-ItWorkTarget">
              <div><i className="fa-duotone fa-headset"></i></div>
              <div>
                <h1>Atención al cliente</h1>
                <span>Durante todo el viaje del cliente, la agencia de viajes le brindará apoyo.</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className='Home-section'>
        <div className="Home-wrapper Home-TopDeals">
          <div className='Home-TopDealsHeader'>
            <div className='Home-TopDealsTitle'>
              <h1>Las mejores ofertas de hoy</h1>
              <span>Vamos a una aventura</span>
            </div>
            <div className='Home-TopDealsButtons'>
              <div onClick={() => handleClickDeals('left')}>
                <i className="fa-sharp fa-light fa-chevron-left"></i>
              </div>
              <div onClick={() => handleClickDeals('right')}>
                <i className="fa-sharp fa-light fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div>
          <div className='Home-sliderDeals'>
            <div className="Home-sliderCarouselDeals">
              <div className='Home-sliderDealsContainer'>
                <div>
                  <img src={ imagen1 } alt="" />
                </div>
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDealsContainer'>
                <div>
                  <img src={ imagen1 } alt="" />
                </div>
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDealsContainer'>
                <div>
                  <img src={ imagen1 } alt="" />
                </div>
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDealsContainer'>
                <div>
                  <img src={ imagen1 } alt="" />
                </div>
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDealsContainer'>
                <div>
                  <img src={ imagen1 } alt="" />
                </div>
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
              <div className='Home-sliderDealsContainer'>
                <div>
                  <img src={ imagen1 } alt="" />
                </div>
                <div>
                  <h3>New York City</h3>
                  <span>150, 450 travellers</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-section Home-sectionWork'>
        <div className="Home-wrapper Home-TopDeals">
        <div className='Home-TopDealsHeader'>
          <div className='Home-TopDealsTitle Home-TitleTestimonios'>
            <h1>Testimonios</h1>
            <span>Que dicen de nosotros</span>
          </div>
          <div className='Home-TopDealsButtons Home-TitleTestimoniosButton'>
            <div onClick={() => handleClickDeals('left')}>
              <i className="fa-sharp fa-light fa-chevron-left"></i>
            </div>
            <div onClick={() => handleClickDeals('right')}>
              <i className="fa-sharp fa-light fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className='Home-sliderDeals'>
          <div className="Home-sliderCarouselTestimonials">
            <div className='Home-sliderTestimonialsContainer'>
              <div className='Home-sliderTestimonailsWrapper'>
                <div>
                  <div className='Home-sliderTestimonailsIcon'>😊</div>
                </div>
                <div>
                  <span>
                    "Booking with travel agency was the best decision i made for my solo trip. They made sure that"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className='Home-section Home-NewsLatter'>
        <div className="Home-wrapper Home-NewsLatterContainer">
          <div className='Home-NewsLatterHeader' >
            <h1>Your Travel Journey Starts Here</h1>
            <span>Subscribe to see secret deals prices drop moment you sign up!</span>
          </div>
          <div className='Home-NewsLatterBody'>
            <input type="text" placeholder='Enter you email address'/>
            <button>Subscribe</button>
          </div>
          <div className='Home-NewsLatterFlye'>
            <img src={ flye } alt="" />
          </div>
          <div className='Home-NewsLatterPalm'>
            <img src={ palm } alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;