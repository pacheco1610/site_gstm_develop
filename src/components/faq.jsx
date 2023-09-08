import React,{useState} from 'react'
import arrow from '../assets/arrow.png';

const Faq = ({trip}) => {
    const [active, setActive] = useState(1);

    const acordeon = (item) =>{
      setActive(item);
  }
  return (
    <section className="Faq">
    <div className="Faq-main">
          <div className="Faq-title">
            <div className="Faq-h4">Frequently Asked Faq</div>
          </div>
          <div className="Faq-acordeon">

            {
            trip?.preguntas_frecuentes && trip?.preguntas_frecuentes.length && trip?.preguntas_frecuentes.map ( item =>(
              <div className={ active === item.id ? "Faq-item question-isActive" : "Faq-item"}>
              <div className="Faq-itemTitle" onClick={()=> acordeon(item.id)}>
                <span>             
                  <i className="fa-solid fa-comment-question"></i>
                  <h5>{item.pregunta}?</h5>
                </span>
                <div className="arrow"><i class="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className="Faq-itemContainer">
                <p className='Faq-p'>
                {item.respuesta}
                </p>
              </div>
            </div>
                )
                )       
            }
          </div>
    </div>
  </section>
  )
}

export default Faq