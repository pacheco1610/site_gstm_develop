import React from 'react'
import HeaderSecundary from '../components/headerSecundary';
import Footer from '../components/footer';
import img from '../assets/lasvegas.jpg';

const LandingTour = () => {
  return (
    <div className='landing'>
        <HeaderSecundary title={trip?.title && trip?.title} subtitle={trip?.destination && trip?.destination} img={itineraries[0]?.photo_url && itineraries[0]?.photo_url } />
        <section className='landing-container'>
            <div className='landing-info'>
                <div className='landing-seccion'>
                  <span className='landing-span'>Acerca del viaje:</span>
                    {description && description.length && description.map ( item =>(
                      <p key={item.id}>{item?.text.replace("<p>", '')}</p>
                      )
                    )}
                  
                </div>
                <div className='landing-seccion'>
                  <span className='landing-span'>Que esta incluido:</span>
                  <div className='landing-inclusiones'>
                    <ul>
                    {inclusiones && inclusiones.length && inclusiones.map ( item =>(
                      <li key={item.id}>
                        <div><i class=" landing-green fa-sharp fa-light fa-circle-check"></i>{item.title}</div>
                        <p>{item.description}</p>
                      </li>
                      )
                    )       
                    }
                    </ul>
                  </div>
                </div>
                <div className='landing-seccion'>
                  <span className='landing-span'>No incluido:</span>
                  <div className='landing-inclusiones'>
                    <ul>
                    {noInclusiones && noInclusiones.length && noInclusiones.map ( item =>(
                      <li key={item.id}>
                        <div><i class="landing-red fa-duotone fa-circle-xmark"></i>{item.title}</div>
                        <p>{item.description}</p>
                      </li>
                      )
                    )       
                    }
                    </ul>
                  </div>
                </div>
            </div>
            <div className='landing-containerPrice'>
              <div className='landing-card'>
                <div className='landing-price'>$455</div>
                <div className='landing-calendar'>
                  <i class="fa-light fa-calendar"></i>
                  <div className='landing-date'><p>{trip?.start_date}</p> a <p>{trip?.end_date}</p></div>
                </div>
                <div className='landing-group'>
                  <i class="fa-regular fa-user"></i>
                  <div>Group size:</div>
                  <div>{trip?.group_min}-{trip?.group_max}</div>
                </div>
                <div className='landing-btn'>Book Now</div>
              </div>
            </div>
        </section>
        <section className='landing-gallery'>
          <div className='landing-photoPrincipal'>
            <div className='landing-img'><img src={img} alt="" /></div>
          </div>
          <div className='landing-photos'>
            <div className='landing-photo'>
              <div className='landing-img'><img src={img} alt="" /></div>
              <div className='landing-img'><img src={img} alt="" /></div>
            </div>
            <div className='landing-photo'>
              <div className='landing-img'><img src={img} alt="" /></div>
              <div className='landing-img'><img src={img} alt="" /></div>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  )
}

export default LandingTour