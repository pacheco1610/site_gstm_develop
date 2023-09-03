import React,{useEffect,useState} from 'react'
import HeaderSecundary from '../components/headerSecundary';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import key from '../scripts/apikey'
import Footer from '../components/footer';
import img from '../assets/lasvegas.jpg';
import ContainerPrice from '../components/containerPrice';

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
        <HeaderSecundary title={trip?.title && trip?.title} subtitle={trip?.destination && trip?.destination} img={itineraries[0]?.photo_url && itineraries[0]?.photo_url } />
        <section className='landing-container'>
            <div className='landing-about'>
            <div className='landing-info'>
              <div className='landing-item'>
                <div className='landing-itemIcon'><i className="fa-light fa-clock"></i></div>
                <div className='landing-itemInfo'>
                  <h6>Duracion</h6>
                  <span>3 dias</span>
                </div>
              </div>
              <div className='landing-item'>
                <div className='landing-itemIcon'><i className="fa-light fa-user-group"></i></div>
                <div className='landing-itemInfo'>
                  <h6>Grupo</h6>
                  <span>6 personas</span>
                </div>
              </div>
              <div className='landing-item'>
                <div className='landing-itemIcon'><i className="fa-sharp fa-light fa-earth-americas"></i></div>
                <div className='landing-itemInfo'>
                  <h6>Tipo Tour</h6>
                  <span>Aventura</span>
                </div>
              </div>
              <div className='landing-item'>
                <div className='landing-itemIcon'><i className="fa-light fa-language"></i></div>
                <div className='landing-itemInfo'>
                  <h6>Lenguaje</h6>
                  <span>Español</span>
                </div>
              </div>
            </div>
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
                    <ul className='landing-ul'>
                    {inclusiones && inclusiones.length && inclusiones.map ( item =>(
                      <li key={item.id} className='landing-li'>
                        <div><i class=" landing-green fa-sharp fa-light fa-circle-check"></i>{item.title}</div>
                        <p>{item.description}</p>
                      </li>
                      )
                    )       
                    }
                    <li className='landing-li'>
                      <div><i class=" landing-green fa-sharp fa-light fa-circle-check"></i>Prueba</div>
                      <p>asjnjsnadjnsadnskldmklsamdsmadkmaspdmkasmdksld</p>
                    </li>
                    <li className='landing-li'>
                      <div><i class=" landing-green fa-sharp fa-light fa-circle-check"></i>Prueba</div>
                      <p>asjnjsnadjnsadnskldmklsamdsmadkmaspdmkasmdksld</p>
                    </li>
                    <li className='landing-li'>
                      <div><i class=" landing-green fa-sharp fa-light fa-circle-check"></i>Prueba</div>
                      <p>asjnjsnadjnsadnskldmklsamdsmadkmaspdmkasmdksld</p>
                    </li>
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
            <ContainerPrice/>
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