import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import imagenHome from '../assets/Image.png'
import Logo from '../assets/Logo.png'
import imagen1 from '../assets/imagenslider1.png'
import imagen2 from '../assets/imagenslider2.png'
import imagen3 from '../assets/imagenslider3.png'
import axios from 'axios'
import key from '../scripts/apikey'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json"



const Home = () => {
  const [data, setData] = useState([]); 
  useEffect(() => {
    getToken()
  }, [data]);

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
    }).then(response => console.log(response));
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
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
        </div>
      </section>
    </div>
  );
};

export default Home;