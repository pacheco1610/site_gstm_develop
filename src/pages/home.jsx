import React, { useEffect, useState } from 'react';
import disneyImagen1 from '../assets/imagen1.jpg'
import disneyImagen2 from '../assets/imagen2.jpg'
import flye from '../assets/maleta.png'
import palm from '../assets/palmera.png'
import Footer from '../components/footer'
import Header from '../components/header'
import axios from 'axios'
import modelDestino from '../scripts/modelDestinos';
import modelServicios from '../scripts/modelServicios';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Moment from 'moment'
import { useNavigate  } from "react-router-dom";
import imagen from '../assets/home-slider.jpg'
import qs from 'qs'
import plurales from 'plurales';
import { useSelector } from 'react-redux';

const Home = () => {
  const [dataDestinos, setDataDestinos] = useState(false)
  const [ciudad, setCiudad] = useState('')
  const [pais, setPais] = useState('')
  const [typeSelect, setTypeSelect] = useState('atraccion')
  const [address, setAddress] = useState("")
  const [tipos, setTipos] = useState([])
  const [testimonios, setTestimonios] = useState([])
  const [selectOption, setSelectOption] = useState('Atracción')
  const [dataServicios, setDataServicios] = useState([])
  const [tiposServicios, setTiposServicios] = useState([])
  const [emailNewsLatter, setNewsLatter] = useState('')
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('https://cms.trotatourism.com/api/servicios?populate=*&')
    .then(response => {
        const totalServices = response.data.meta.pagination.total;
        axios.get(`https://cms.trotatourism.com/api/servicios?pagination[pageSize]=${totalServices}&populate=*&`)
        .then(response => {
          const data = new modelDestino(response.data)
          setTipos(tipos)
          setDataDestinos(data)
          handleSendServiceFilter(selectOption)
        })
    })
    axios.get('https://cms.trotatourism.com/api/tipo-servicios')
    .then(response => {
      setTiposServicios(response.data.data)
    })
    axios.get('https://cms.trotatourism.com/api/testimonios')
    .then(response => {
      setTestimonios(response.data.data)
    })
  }, []);

  const handleSendServiceFilter = (selectOption) => {
    const query = qs.stringify({
      filters: {
        tipo_servicio: {
          titulo: {
            $eq: selectOption
          }
        }
      }
    })
    axios.get(`https://cms.trotatourism.com/api/servicios?populate=*&${query}`)
    .then(response => {
      const servicios = new modelServicios(response.data.data)
        setDataServicios(servicios.servicios)
    })
  }

  const handleSelectMenu = ( margin, selectItem ) => {
    const component = document.getElementById('selectMenu')
    setTypeSelect(selectItem)

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

  const handleClickTestimonails = (type) => {
    const slider = document.querySelector('.Home-sliderCarouselTestimonials');
    const firsElement = document.querySelectorAll('.Home-sliderTestimonialsContainer')[0];
    const firstElementWidth = firsElement.clientWidth;
    slider.scrollLeft += type === "left" ? -firstElementWidth : firstElementWidth;
  }

  const handleSelect = async (value) => {
    const result = await geocodeByAddress(value);
    setAddress(value);
    result[0]?.address_components.map(address => {
      const types = address.types;
      if (types.find(type => type === 'locality')) {
        let locality = types.find(type => type === 'locality') ? address.long_name : '';
        setCiudad(locality)
      } else if (types.find(type => type === 'country')) {
        let country = types.find(type => type === 'country') ? address.long_name : '';
        setPais(country)
      }
    })
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    const tipos = [typeSelect]
    let url = new URL(window.location)
    url.searchParams.set('ciudad',ciudad)
    url.searchParams.set('pais',pais)
    url.searchParams.set('tipo',JSON.stringify(tipos))
    navigate(`/destino${url.search}`)
  }

  const handleDestino = (value) => {
    let url = new URL(window.location)
    url.searchParams.set('ciudad',value.locality)
    url.searchParams.set('pais',value.country)
    navigate(`/destino${url.search}`)
  }

  const handleSelectServicios = (type) => {
    setSelectOption(type)
    handleSendServiceFilter(type)
  }

  const handleNewsLatter = (e) => {
    e.preventDefault()
    console.log(emailNewsLatter)
    axios.post('https://a.klaviyo.com/client/subscriptions/?company_id=WHkBzF', 
      {
        data: {
          type: 'subscription',
          attributes: {
            profile: {
              data: {
                type: 'profile',
                attributes: {
                  email: emailNewsLatter,
                }
              }
            }
          },
          relationships: {list: {data: {type: 'list', id: 'XtBaJz'}}}
        }
      }, 
      {
        headers: {
          "Authorization": 'Klaviyo-API-Key pk_feac6c2c4a38753658bec5eba0bfb78c99',
          "revision": Moment().format('YYYY-MM-DD'),
          "Content-Type": "application/json",
        }
    })
    .then(response => {
      console.log(response)
    })
  }

  return (
    <div className='Home'>
      <Header/>
      <section id="home" className='Home-section Home-background' style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${imagen}")`}}>
        <div className="Home-wrapper">
          <div className="Home-containerTitle">
            <h1>Encuentra las mejores tarifas con nosotros</h1>
            <span>Nuestras tarifas son negociadas directas con el provedor garantizando la tarifa mas baja disponible</span>
            <button className='Home-explore' onClick={() => navigate('/destino')}>Explore Now</button>
          </div>
          <div className="Home-containerSearch">
            <div className="Home-SearchWrapper">
              <div className="Home-SearchHeader">
                {(tiposServicios && tiposServicios.length > 0) && tiposServicios.map((servicio,index)=> {
                  const margin = (100 / tiposServicios.length) * index
                  console.log(servicio?.attributes?.titulo)
                  return (
                    <div onClick={() => handleSelectMenu(`${margin}%`, servicio?.attributes?.titulo)}>{servicio?.attributes?.titulo === 'Tour' ? 'tours' : plurales(servicio?.attributes?.titulo)}</div>
                  )
                })}
                <div className='Home-SearchHeaderSelect' style={{width:`${100/tiposServicios.length}%`}} id='selectMenu'></div>
              </div>
              <form className="Home-SearchBody" onSubmit={(e) => handleSubmitSearch(e)}>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-location-dot"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">Locación</label>
                    <PlacesAutocomplete value={ address } onChange={setAddress} onSelect={handleSelect}>
                      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                      <div>
                        <input {...getInputProps({placeholder:'¿A dónde vas?'})} required={true}/>

                        {(suggestions && suggestions.length > 0) && <div className='suggestionsContainer'>
                          {loading ? <div>...cargando</div> : null }
                          {suggestions.map(suggestion => {
                            const style = {
                              backgroundColor: suggestion.active ? '#e3e3e6' : "#fff"
                            }

                            return (
                              <div {...getSuggestionItemProps(suggestion, { style })}>
                                {suggestion?.description}
                              </div>
                            )
                          })}
                        </div>}
                      </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-calendar"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">¿Cuando?</label>
                    <input type="date" min={Moment().format('YYYY-MM-DD')} required={true}/>
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <i className="fa-light fa-user-vneck"></i>
                  <div className='Home-SearchInput'>
                    <label htmlFor="">Personas</label>
                    <input type="number" placeholder='¿Cuantos van?' required={true} />
                  </div>
                </div>
                <div className='Home-SearchInputContainer'>
                  <button>
                      <span>Buscar</span>
                     <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-section' id="destinos">
        <div className="Home-wrapper Home-wrapperDescubre">
          <h1>Descubre nuestros destinos</h1>
          <div className='Home-sliderDescubre'>
            <div className="Home-sliderCarousel">
              {(dataDestinos && dataDestinos.length > 0) && dataDestinos.map(item => {
                return (
                  <div className='Home-sliderDescubreContainer' onClick={() => handleDestino(item)}>
                    <img src={item.details?.photos[0]?.url} alt="" />
                    <div>
                      <h3>{ item?.locality }</h3>
                      <span>{ item.numberTrips } Aventuras</span>
                    </div>
                  </div>
                  )
              })}
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
      <section className='Home-section' id="servicios">
        <div className="Home-wrapper Home-DestinationWrapper">
          <div className='Home-destinationsHeader'>
            <div>
              <h1>Explora nuestros Servicios</h1>
              <span>Vamos a una aventura</span>
            </div>
            <div className='Home-destinationButtons'>
              {(tiposServicios && tiposServicios.length > 0) && tiposServicios.map((servicio,index)=> {
                  return (
                    <div className={selectOption === servicio?.attributes?.titulo ? 'Home-destinationButton-active' : ''}>
                      <button onClick={() => handleSelectServicios(servicio?.attributes?.titulo)}>{servicio?.attributes?.titulo === 'Tour' ? 'tours' :plurales(servicio?.attributes?.titulo)}</button>
                    </div>
                  )
                }
              )}
            </div>
          </div>
          <div className='Home-destinationsBody'>
            {(dataServicios && dataServicios.length > 0) && dataServicios.map((servicio, index) => {
              return (
                index <= 5 ?
                <div className='Home-destinationContainer' onClick={() => navigate(`/landingTour/${servicio.id}`)}>
                  <div className='Home-destinationImagen' style={{backgroundImage:`URL('https://cms.trotatourism.com/${servicio.portada}')`}}>
    
                  </div>
                  <div className='Home-destinationBody'>
                    <div>
                      <h1>{servicio.titulo}</h1>
                      <span><i className="fa-sharp fa-solid fa-location-dot"></i>{servicio.locacion.locality}, {servicio.locacion.country}</span>
                    </div>
                    { user.activeLogin ? 
                      <div>
                        <h1>${servicio.precio} {servicio.moneda}</h1><span>/por {servicio.unidad}</span>
                      </div>
                      :
                      <div>
                        <span>Inicia sesión para ver nuestros precios</span>
                      </div>
                    }
                  </div>
                </div> : null
              )
            })}

          </div>
        </div>
      </section>
      {/*<section className='Home-section Home-sectionWork'>
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
      </section>*/}
      {/*<section className='Home-section'>
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
                  <div className="Home-sliderDealsDiscount">
                    20% OFF
                  </div>
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
      </section> */}
      {
        /*
        <section className='Home-section Home-sectionWork'>
        <div className="Home-wrapper Home-TopDeals">
        <div className='Home-TopDealsHeader'>
          <div className='Home-TopDealsTitle Home-TitleTestimonios'>
            <h1>Testimonios</h1>
            <span>Que dicen de nosotros</span>
          </div>
          <div className='Home-TopDealsButtons Home-TitleTestimoniosButton'>
            <div onClick={() => handleClickTestimonails('left')}>
              <i className="fa-sharp fa-light fa-chevron-left"></i>
            </div>
            <div onClick={() => handleClickTestimonails('right')}>
              <i className="fa-sharp fa-light fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className='Home-sliderDeals'>
          <div className="Home-sliderCarouselTestimonials">
            {(testimonios && testimonios.length > 0) && testimonios.map(item => {
              return (
                <div className='Home-sliderTestimonialsContainer'>
                <div className='Home-sliderTestimonailsWrapper' key={item.id}>
                <div>
                  <div className='Home-sliderTestimonailsIcon'>😊</div>
                </div>
                <div>
                  <span>
                    {item.attributes.testimonio}
                  </span>
                </div>
                <div>
                  <h1>{item.attributes.autor}</h1>
                </div>
              </div>
              </div>
              )
            })}
          </div>
        </div>
        </div>
      </section>
      */
      }
      <section className='Home-section Home-NewsLatter'>
        <form className="Home-wrapper Home-NewsLatterContainer" onSubmit={(e) => handleNewsLatter(e)}>
          <div className='Home-NewsLatterHeader' >
            <h1>Your Travel Journey Starts Here</h1>
            <span>Subscribe to see secret deals prices drop moment you sign up!</span>
          </div>
          <div className='Home-NewsLatterBody'>
            <input type="text" placeholder='Enter you email address' onChange={(e) => setNewsLatter(e.target.value)} required/>
            <button>Subscribe</button>
          </div>
          <div className='Home-NewsLatterFlye'>
            <img src={ flye } alt="" />
          </div>
          <div className='Home-NewsLatterPalm'>
            <img src={ palm } alt="" />
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;