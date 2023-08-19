import React from 'react'
import HeaderSecundary from '../components/headerSecundary'
import Gallery from '../components/gallery'
import Faq from '../components/faq'
import Contact from '../components/contact'
import Footer from '../components/footer'

const About = () => {
  return (
    <div className='about'>
      <HeaderSecundary title="Nosotros" subtitle="Receptivo Oficial del Estado de Nevada" />
      <section className='about-ContentTexto'>
        <div className="InfoAbout-textContainer">
              <div className="InfoAbout-text">
                  <div className="InfoAbout-title">
                      <h4 className="InfoAbout-h4">About</h4>
                      <h5 className="InfoAbout-h5">Somos receptivo OFICIAL</h5>
                  </div>
                  <div className="InfoAbout-paragraphs">
                      <p className="InfoAbout-p">Somos un receptivo basados en Las Vegas expertos en Nevada, pero con producto disponible con las mejores tarifas para tu agencia en todo Estado Unidos.Trota Tourism nació en 2020 durante la pandemia, fundado por mujeres mexicanas con más de 20 años de experiencia en el ramo turístico TROTA Tourism está hecho como un recurso para las agencias B2B que busca que sus clientes lleguen a su destino con la mejor experiencia, tenemos todo tipo de producto desde shows, transportación, atracciones, tickets para conciertos, deportes, Hoteles y más.Trota Tourism tiene staff disponible en español todo el tiempo para las agencias y asistencia personalizada para los clientes, nuestras tarifas son negociadas directas con el proveedor garantizando siempre la tarifa más baja disponible.Esperamos poder hacer negocio juntos y así atraer mas clientes a los destinos principales de Estados Unidos.</p>
                  </div>
              </div>
              <div className="InfoAbout-paragraphs">
                          <h6 className='InfoAbout-h6'>MISION</h6>
                          <p className="InfoAbout-p">Trota Toursim surgio de la necesidad de las agencias es poder encontrar un recpetivo en el que confiar para sus clientes, porteriormente evolucionamos y tuvimos la oprtunidad no solo de recibir a los clientes de las agencias, si no poder ofrecerles tarifas en diferntes productos de esta manera ahora nuestra mision principal es ser el aliado principal de agencias mayoristas y minoristas en la expansion hacia el mercado Estado Unidense, donde seamos una conexion directa del producto que necesitan, asi como ser el puente para empezar a generar relaciones comerciales con proveedores directos. </p>
              </div>
              <div className="InfoAbout-paragraphs">
                      <h6 className='InfoAbout-h6'>VISION</h6>
                      <p className="InfoAbout-p">Nuestras Visión es seguir creciendo en México y tener presencia en Latinoamérica, sumando mas socios comerciales que quieran expandir sus ventas hacia Estados Unidos. Pulir día a día nuestro servicio al cliente siempre sobrepasando las expectativas de nuestros clientes, además de seguir sumando producto con tarifas competitivas. En cuanto a direccion fisica te habia dado la de la oficina virtual esa esta bien ponerla y vas a sacar un numero generico ese vamos a poner, mañana ya lo debemos tener. </p>
              </div>
              
          </div>
      </section>
      <Gallery/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default About