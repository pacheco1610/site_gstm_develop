import React,{useEffect,useState} from 'react'
import HeaderSecundary from '../components/headerSecundary';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import key from '../scripts/apikey'
import Footer from '../components/footer';
import img from '../assets/lasvegas.jpg';

const Landing = () => {

    let { packageId } = useParams();
    const [trip,setTrip] = useState({})
    const [description,setDescription] = useState({})
    const [itineraries,setItineraries] = useState({})
    const [gallery,setGallery] = useState({})
    const [inclusiones,setInclusiones] = useState({})
    const [noInclusiones,setNoInclusiones] = useState({})

    const [token,setToken] = useState(null)

    useEffect(() => {
        getToken()  
    }, [])

    useEffect(() => {
      if(!token) return
      queryTrip(token)
      queryDescription(token)
      queryItineraries(token)
      queryGallery(token)
      queryInclusiones(token)
      queryNoInclusiones(token)
    }, [token])
    
    
 const getToken = async () => {
    await axios({
      method: 'POST',
      headers : {
        'Authorization':'Bearer ' + key
      },
      url: 'https://www.wetravel.com/v1/auth/tokens/access',
    }).then(response => {
      setToken( response.data.access_token);
    }
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
      setTrip(response.data.data)
      )
  }
  const queryDescription = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1/draft_trips/09076285/paragraphs',
      
    }).then(response => 
      setDescription(response.data.data)
      );
      console.log(description)
  }
  const queryItineraries = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1/draft_trips/09076285/itineraries',
    }).then(response => 
      setItineraries(response.data.data)
      );

  }
  const queryGallery = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1/draft_trips/09076285/images',
    }).then(response => 
      setGallery(response.data.data)
      );

  }
  const queryInclusiones = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1/draft_trips/09076285/included_items',
    }).then(response => setInclusiones(response.data.data));

  }
  const queryNoInclusiones = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1/draft_trips/09076285/not_included_items',
    }).then(response => setNoInclusiones(response.data.data));

  }


  return (
    <div className='landing'>
      
        <HeaderSecundary title={trip?.title && trip?.title} subtitle="Las Vegas, NV, USA" />
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
                  <div>
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
                <div className='landing-gallery'>

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

export default Landing