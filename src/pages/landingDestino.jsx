import React, { useEffect, useState } from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
import axios from 'axios'
import qs from 'qs'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Moment from 'moment'
import { useNavigate  } from "react-router-dom";
import modelDestino from '../scripts/modelDestinos';
import modelServicios from '../scripts/modelServicios'
import modelTipos from '../scripts/modelTipos'
import imagen from '../assets/home-slider.jpg'
import plurales from 'plurales';
import { useSelector } from 'react-redux';

const LandingDestino = () => {
  const [loading, setLoading] = useState(true)
  const [typeSelect, setTypeSelect] = useState('atraccion')
  const [address, setAddress] = useState("")
  const [ciudad, setCiudad] = useState('')
  const [pais, setPais] = useState('')
  const [destino, setDestino] = useState(false)
  const [dataFilter, setDataFilter] = useState([])
  const [paramFiltro, setParamfiltro] = useState([])
  const navigate = useNavigate();
  const [tiposServicios, setTiposServicios] = useState([])
  const [data, setData] = useState({
    titulo: 'Encuentra las mejores tarifas con nosotros',
    subtitle: 'Nuestras tarifas son negociadas directas con el provedor garantizando la tarifa mas baja disponible',
    background: imagen,
  })
  const [servicios, setServicios] = useState([])
  const user = useSelector((state) => state.user)
  
  useEffect(() => {
    axios.get('https://cms.trotatourism.com/api/tipo-servicios')
    .then(response => {
      setTiposServicios(response.data.data)
    })
    
    let url = new URL(window.location)
    const ciudad = url.searchParams.get('ciudad')
    const pais = url.searchParams.get('pais')
    const tipo = url.searchParams.get('tipo')

    if (ciudad && pais) {
      let objFilter = {
        locacion: {
          $contains: ciudad
        }
      }

      if (tipo) {
        objFilter.tipo_servicio = {
          titulo: {
            $in: JSON.parse(tipo)
          }
        }
      }

      const queryCity = qs.stringify({
        filters: {
          locacion: {
            $contains: ciudad
          }
        }
      })

      const query = qs.stringify({
        filters: objFilter
      })

      axios.get(`https://cms.trotatourism.com/api/servicios?populate=*&${queryCity}`).then(response => {
        const tipos = new modelTipos(response.data)
        setDataFilter(tipos)
      })
      

      axios.get(`https://cms.trotatourism.com/api/servicios?populate=*&${query}`)
      .then(response => {
        if (response?.data?.data?.length > 0) {
          const destino = new modelDestino(response.data)
          setDestino(destino[0])
          const searchImagen = destino[0]?.details?.photos.find(imagen => imagen.width > 2000)
          setData({...data, 
            background: (searchImagen ? searchImagen.url : imagen),
            titulo: `${ciudad}, ${pais}`, subtitle: '' 
          })
          const servicios = new modelServicios(response.data.data)
          setServicios(servicios.servicios)
        } else {
          console.log('no tenemos viajes viajes')
        }
      })
      setLoading(false)
    } else {
      let objFilter={}

      if (tipo) {
        objFilter.tipo_servicio = {
          titulo: {
            $in: JSON.parse(tipo)
          }
        }
      }
      
      const query = qs.stringify({
        filters: objFilter
      })

      axios.get(`https://cms.trotatourism.com/api/servicios?populate=*&`).then(response => {
        const tipos = new modelTipos(response.data)
        setDataFilter(tipos)
      })
      

      axios.get(`https://cms.trotatourism.com/api/servicios?populate=*&${query}`)
      .then(response => {
        if (response?.data?.data?.length > 0) {
          const servicios = new modelServicios(response.data.data)
          setServicios(servicios.servicios)
        } else {
          console.log('no tenemos viajes viajes')
        }
      })
      setLoading(false)
    }

  }, [paramFiltro]);

  const handleSelectMenu = ( margin ) => {
    const component = document.getElementById('selectMenu')
    component.style.left = margin
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
    window.location.reload()
  }

  const handleSelectFilter = (e,item) => {
    let url = new URL(window.location)
    const tipo = url.searchParams.get('tipo')
    
    if (tipo) {
      const tipos = JSON.parse(tipo);
      if (e.target.checked) {
        tipos.push(item.titulo)
        url.searchParams.set('tipo',JSON.stringify(tipos))
      } else {
        const filterTipos = tipos.filter(tipo => tipo !== item.titulo)
        if (filterTipos.length > 0) {
          url.searchParams.set('tipo',JSON.stringify(filterTipos))
        } else {
          url.searchParams.delete('tipo')
        }
        
      }
    } else {
      const tipos = [item.titulo]
      if (e.target.checked) {
        url.searchParams.set('tipo',JSON.stringify(tipos))
      }
    }
    setParamfiltro(tipo)
    navigate(`/destino${url.search}`)
  }

  const searchCheck = (item) => {
    let url = new URL(window.location)
    const tipo = url.searchParams.get('tipo')

    if (tipo) {
      const tipos = JSON.parse(tipo);
      const filterTipos = tipos.find(tipo => tipo === item.titulo)
      if (filterTipos) {
        return true
      } else {
        return false
      }
    } else {
      return false;
    }
  }

  if (loading) {
    return (
      <div>Cargando...</div>
    )
  } else {
    return (
      <div className='Home'>
        <Header/>
        <section className='Home-section Home-background' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${data.background}")`}}>
          <div className="Home-wrapper">
            <div className="Home-containerTitle">
              <h1>{ data.titulo }</h1>
              <span>{ data.subtitle }</span>
            </div>
            <div className="Home-containerSearch">
              <div className="Home-SearchWrapper">
                <div className="Home-SearchHeader">
                  {(tiposServicios && tiposServicios.length > 0) && tiposServicios.map((servicio,index)=> {
                    const margin = (100 / tiposServicios.length) * index
                    return (
                      <div onClick={() => handleSelectMenu(`${margin}%`, servicio?.attributes?.titulo)}>{servicio?.attributes?.titulo === 'Tour' ? 'tours' :plurales(servicio?.attributes?.titulo)}</div>
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
        <section className='Home-section'>
          <div className="Home-wrapper Destino-wrapper">
            <div className='Destino-sideBar'>
              <div>
                <h1>Categoria</h1>
                <ul>
                  {(dataFilter && dataFilter.length) && 
                    dataFilter.map(tipo => {
                      let valueCheck = searchCheck(tipo);

                      return(
                        <li>
                          <div>
                            <input type="checkbox" defaultChecked={valueCheck} onClick={(e) => handleSelectFilter(e,tipo)} />
                            <span>{tipo.titulo}</span></div> <div>{tipo.numeroTipos}
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className='Destino-tours'>
              {destino && <div className='Destino-toursHeader'>
                <h1>{servicios.length} aventuras</h1><span>en {destino?.locality}</span>
              </div>}
              <div className='Destinos-toursWrapper'>
                {servicios.length > 0 ? servicios.map(servicio => {
                    return(
                      <div className='Destinos-tourContainer'>
                        <img src={`https://cms.trotatourism.com/${servicio.portada}`} alt="" />
                        <div className='Destinos-tourContainerText'>
                          <div className='Destinos-tourContainerText-header'>
                            <span>{servicio.tipo}</span>
                          </div>
                          <div className='Destinos-tourContainerText-body'>
                            <h1>{servicio.titulo}</h1>
                            <p><i className="fa-sharp fa-solid fa-location-dot"></i> <span>{servicio.locacion?.locality}, {servicio.locacion.country}</span></p>
                          </div>
                          <div className='Destinos-tourContainerText-footer'>
                            { user.activeLogin ? 
                              <div>
                                <h1>${servicio.precio}</h1><span className='Destinos-tourContainerText-per'>/por {servicio.unidad}</span>
                              </div>
                              :
                              <div>
                                <span>Inicia sesión para ver nuestros precios</span>
                              </div>
                            }
                            <div className='Header-Login' onClick={() => navigate(`/landingTour/${servicio.id}`)}>
                              <span>Más detalles</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                  : <div>No encontramos</div>
                  }
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
};

export default LandingDestino;