import React,{useEffect,useState} from 'react'
import HeaderSecundary from '../components/headerSecundary';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import key from '../scripts/apikey'
import Footer from '../components/footer';
import img from '../assets/lasvegas.jpg';

const Landing = () => {

    let { packageId } = useParams();
    const [info,setData] = useState({})

    useEffect(() => {
      getToken();
    }, [])
    
 const getToken = async () => {
    await axios({
      method: 'POST',
      headers : {
        'Authorization':'Bearer ' + key
      },
      url: 'https://www.wetravel.com/v1/auth/tokens/access',
    }).then(response => 
      queryTrip(response.data.access_token)
    );
    
   } 
   const queryTrip = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1/draft_trips/09076285',
    }).then(response => 
      setData({...info, trip: response.data.data})
      )
  }
  const queryDescription = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1//draft_trips/09076285/paragraph',
    }).then(response => 
      setData({...info, description: response.data.data})
      );
  }
  const queryItineraries = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1//draft_trips/09076285/itineraries',
    }).then(response => 
      setData({...info, itineraries: response.data.data})
      );

  }
  const queryGallery = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1//draft_trips/09076285/images',
    }).then(response => 
      setData({...info, gallery: response.data.data})
      );

  }
  const queryInclusiones = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1//draft_trips/09076285/included_items',
    }).then(response => setData({...info, inclusiones: response.data.data}));

  }
  const queryNoInclusiones = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1//draft_trips/09076285/not_included_items',
    }).then(response => response =>setData({...info, NoInclusiones: response.data.data}));

  }


  return (
    <div className='landing'>
      {      console.log(info.trip)}
        <HeaderSecundary  title="Atardecer en el Gran Cañón" subtitle="Las Vegas, NV, USA" />
        <section className='landing-container'>
            <div className='landing-info'>
                <div className='landing-seccion'>
                  <span className='landing-span'>Acerca del viaje:</span>
                  <p>Suba a bordo de un lujoso helicóptero y despegue hacia Grand Canyon West en nuestro tour Sunset Grand Celebration. Su helicóptero estará equipado con asientos lujosos y ventanas panorámicas para disfrutar de vistas espectaculares y opciones de fotografía de la presa Hoover y el lago Mead en ruta hacia su destino. Vuele hacia el salvaje azul allá cuando el piloto comience este recorrido aéreo por el oeste del Gran Cañón y los acantilados rojos cercanos. Vuele sobre el puente Skywalk y pase Eagle Point mientras continúa sobre el cañón.</p>
                </div>
                <div className='landing-seccion'>
                  <span className='landing-span'>Que esta incluido:</span>
                  <div className='landing-inclusiones'>
                    <ul>
                      <li>
                        <div><i class=" landing-green fa-sharp fa-light fa-circle-check"></i> Vuelo</div>
                        <p>Helicóptero Aterrizaje en el suelo del cañón champán Vistas del atardecer</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='landing-seccion'>
                  <span className='landing-span'>No incluido:</span>
                  <div>
                    <ul>
                      <li>
                        <div><i class=" landing-red fa-duotone fa-circle-xmark"></i>Cargo Extra</div>
                        <p>está vigente un recargo temporal por combustible de $30.00 por asiento y se cobra en el momento del check-in.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='landing-gallery'>

                </div>
            </div>
            <div className='landing-containerPrice'>
              <div className='landing-card'>
                <div className='landing-price'>$455</div>
                <div className='landing-calendar'>
                  <i class="fa-light fa-calendar"></i>
                  <div className='landing-date'><p>Jul 20</p>-<p>Dec 31</p></div>
                </div>
                <div className='landing-group'>
                  <i class="fa-regular fa-user"></i>
                  <div>Group size:</div>
                  <div>1-6</div>
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

export default Landing