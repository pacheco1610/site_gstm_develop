import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import imagenHome from '../assets/Image.png'
import Logo from '../assets/Logo.png'
import imagen1 from '../assets/imagenslider1.png'
import imagen2 from '../assets/imagenslider2.png'
import imagen3 from '../assets/imagenslider3.png'
import axios from 'axios'
import key from '../scripts/apikey'
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-boundary-canvas";
import L from "leaflet";
import continenteMap from '../geojson/continente.geo.json'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import imagenFlag from '../assets/flag.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import travelIcon from '../assets/ustravel.png'
import clia from '../assets/clia.png'
import ccra from '../assets/ccra.png'
import tru from '../assets/tru.png'
import iita from '../assets/IITA.png'
import iconSend from '../assets/send.png'
import remolino from '../assets/remolino.png'
import estrella2 from '../assets/estrellas2.png'
import email from '../assets/email.png'
import Footer from '../components/footer'
import modelTrips from '../scripts/modeloTrips'

const Home = () => {
  const [data, setData] = useState([]); 
  const [map, setMap] = useState(null);
  
  useEffect(() => {
    getToken()
  }, [data]);

  useEffect(() => {
    if (!map) return;

    const fetchGeoJSON = async () => {
      const osm = L.TileLayer.boundaryCanvas(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          boundary: continenteMap,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      map.addLayer(osm);
      const ukLayer = L.geoJSON(continenteMap);
      map.fitBounds(ukLayer.getBounds());
    };
    fetchGeoJSON();

    setTimeout(() => {
      if (map) {
        map.setZoom(3)
      }
    }, 400)

  }, [map]);

 const getToken = async () => {
  await axios({
    method: 'POST',
    headers : {
      'Authorization':'Bearer ' + key
    },
    url: 'https://www.wetravel.com/v1/auth/tokens/access',
  }).then(response => 
    queryData(response.data.access_token)
  );
 } 
  const queryData = async (token) => {
    await axios({
      method: 'GET',
      headers : {
        'Authorization':'Bearer ' + token
      },
      url: 'https://www.wetravel.com/v1/draft_trips',
    }).then(response => {
      modelTrips(response.data)
    });
  }

  const position = [0, 0];
  const mapStyle = { width: "100%", backgroundColor:'#d5e8eb', height: '60vh', outlineStyle: 'none' };


  const handleScroll = (value) => {
    const element = document.getElementById('sliderCertificados')
    if (value==='next') {
      element.scrollLeft += 700
    } else {
      element.scrollLeft -= 700
    }
  }

  return (
    <div className='Home'>
      <Header/>
      <section className='Home-section'>
        <div className="Home-wrapper">
          <div className='Home-sliderText'>
            <div className='Home-logo'>
              <img src={ Logo } alt="" />
            </div>
            <div className='Home-subtitle'>
              <span>TOUR OPERADOR MAYORISTA</span>
            </div>
            <div className='Home-title'>
              <h3>
              Somos un receptivo basados en 
            Las Vegas expertos en Nevada, 
            pero con producto disponible con 
            las mejores tarifas para tu agencia 
            en todo Estado Unidos.
              </h3>
            </div>
            <div className='Home-descripcion'>
              <span>
              Trota Tourism tiene staff disponible en español todo el 
              tiempo para las agencias y asistencia personalizada para los 
              clientes, nuestras tarifas son negociadas directas con el proveedor 
              garantizando siempre la tarifa más baja disponible.
              </span>
            </div>
            <div className="Home-containerButtons">
              <div className='Home-buttonSlider'>REGISTRATE!</div>
              <div className='Home-buttonSlider Home-buttonSliderPlay'>
                <span className="material-symbols-outlined">
                  play_arrow
                </span>
                <label htmlFor="">PLAY</label>
              </div>
            </div>
          </div>
          <div className='Home-sliderImagen'>
            <img src={ imagenHome } alt="" />
          </div>
        </div>
      </section>
      <section className='Home-slider'>
        <div className="Home-wrapper">
          <div className="Home-sliderImages">
            <div className="Home-sliderImagenContainer">
              <img src={ imagen3 } alt="" />
              <div>Universal</div>
            </div>
            <div className="Home-sliderImagenContainer">
              <img src={ imagen1 } alt="" />
              <div>Xcaret</div>
            </div>
            <div className="Home-sliderImagenContainer">
              <img src={ imagen2 } alt="" />
              <div>Disney</div>
            </div>
          </div>
          <div className="Home-sliderButton"></div>
        </div>
      </section>
      <section className='Home-grupos'>
        <div className="Home-wrapper Home-wrapperGrupos">
          <h3 className='Home-titleGrupos'>Destinos</h3>
          <span>Selecciona un destino</span>
          <MapContainer
            center={position}
            style={mapStyle}
            zoom={50}
            ref={setMap}
            scrollWheelZoom={false}
            dragging={false}
            invalidateSize={true}
            id='map-container'
          />
        </div>
      </section>
      <section className='Home-section'>
        <div className="Home-wrapper Home-wrapperFlag">
          <div className='Home-containerTextFlag'>
            <div className='Home-titleFlag'>
              <span>Viaja</span>
              <h4>Con Trotatourism</h4>
            </div>
            <div className='Home-containerListFlag'>
              <div className='Home-containerItemFlag'>
                <div className='Home-containerIconFlag'>
                  <img src={ icon1 } alt="" />
                </div>
                <div className='Home-containerTextDescFlag'>
                  <h3>Más de 20 años de experiencia</h3>
                  <span>Estamos orgullosos de nuestra
                    experiencia en la industria, así que
                    podemos guiarte a ti y a tu cliente en la
                    mejor experiencia de viaje.
                  </span>
                </div>
              </div>
              <div className='Home-containerItemFlag'>
                <div className='Home-containerIconFlag'>
                  <img src={ icon2 } alt="" />
                </div>
                <div className='Home-containerTextDescFlag'>
                  <h3>Make Payment</h3>
                  <span>Estamos orgullosos de nuestra
                    experiencia en la industria, así que
                    podemos guiarte a ti y a tu cliente en la
                    mejor experiencia de viaje.
                  </span>
                </div>
              </div>
              <div className='Home-containerItemFlag'>
                <div className='Home-containerIconFlag'>
                  <img src={ icon3 } alt="" />
                </div>
                <div className='Home-containerTextDescFlag'>
                  <h3>Reach Airport on Selected Date</h3>
                  <span>Estamos orgullosos de nuestra
                    experiencia en la industria, así que
                    podemos guiarte a ti y a tu cliente en la
                    mejor experiencia de viaje.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='Home-containerTextImagen'>
            <img src={ imagenFlag } alt="" />
          </div>
        </div>
      </section>
      <section className='Home-section'>
        <div className="Home-wrapper Home-wrapperGrupos">
          <div className='Home-titleFlag'>
            <h4>Orgullosamente Certificados</h4>
          </div>
          <div className='Home-containerCertificate'>
            <div className='Home-logoTravel'>
              <img src={ travelIcon } alt="" />
            </div>
            <div className='Home-containerSlider'>
              <div className="Home-sliderCertificados" id='sliderCertificados'>
                <div className='Home-ContainerCertificados'>
                  <div>
                    <img src={ clia } alt="" />
                  </div>
                  <div>
                    <img src={ iita } alt="" />
                  </div>
                  <div>
                    <img src={ ccra } alt="" />
                  </div>
                </div>
                <div className='Home-ContainerCertificados'>
                  <div>
                    <img src={ tru } alt="" />
                  </div>
                </div>
              </div>
              <div className='Home-ContainerCertificadosControles'>
                <div onClick={() => handleScroll('before')}>
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>
                </div>
                <div onClick={() => handleScroll('next')}>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Home-section'>
        <div className="Home-wrapper Home-wrapperGrupos">
          <div className="Home-containerNewsletter">
            <div className='Home-titleNewsLetter'>
              Suscríbete a nuestro Newsletter
            </div>
            <div className='Home-inputNewsLetter'>
              <div className='Home-inputNewsLetterContainer'>
                <img src={ email } alt="" />
                <input type="text" placeholder='Your email' />
              </div>
              <button>Suscribe</button>
            </div>
            <div className='Home-icon'>
              <img src={ iconSend } alt="" />
            </div>
            <div className='Home-remolinoNewslatter'>
              <img src={ remolino } alt="" />
            </div>
            <div className='Home-remolinoNewslatter2'>
              <img src={ remolino } alt="" />
            </div>
            <div className='Home-estrellaNewsLatter'>
              <img src={ estrella2 } alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;