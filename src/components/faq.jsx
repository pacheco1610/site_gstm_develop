import React,{useState} from 'react'
import arrow from '../assets/arrow.png';

const Faq = () => {
    const [active, setActive] = useState(1);

    const acordeon = (item) =>{
      setActive(item);
  }
  return (
    <section className="Faq">
    <div className="Faq-main">
          <div className="Faq-title">
            <div className="Faq-h3">FAQ</div>
            <div className="Faq-h4">Frequently Asked Faq</div>
          </div>
          <div className="Faq-acordeon">
            <div className={ active === 1 ? "Faq-item question-isActive" : "Faq-item"}>
              <div className="Faq-itemTitle" onClick={()=> acordeon(1)}>
                <span>             
                  <i className="fa-solid fa-comment-question"></i>
                  <h5>Tarifas netas o comisionables?</h5>
                </span>
                <div className="arrow"><i class="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className="Faq-itemContainer">
                <p className='Faq-p'>
                Todas nuestras tarifas son netas, nosotros no comisionamos a ninguna agencia. Al dar una tarifa neta la agencia tiene la libertad de incrementar su markupsin restricciones. 
                </p>
              </div>
            </div>

            <div className={ active === 2 ? "Faq-item question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(2)}>
                <span>             
                  <i className="fa-solid fa-comment-question"></i>
                  <h5>Sus Tarifas son en dolares o pesos?</h5>
                </span>
                <div className="arrow"><i class="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Nuestras tarifas son en dolares, si en algun momento requerimos hacer la conversion a pesos, usamos el tipo de cambio del dia por el Banco de Mexico
                </p>
              </div>
            </div>

            <div className={ active === 3 ? "Faq-item question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(3)}>
                <span>
                  <i className="fa-solid fa-comment-question"></i>
                  <h5>Cuales son sus metodos de pago?</h5>
                </span>
                <div className="arrow"><i class="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Transferencia Internacional a un banco en Estados Unidos o por tarjeta de debito o credito por medio de un link con un cargo de 3.5% el cual se incluye en la tarifa
                </p>
              </div>
            </div>
          </div>
    </div>
  </section>
  )
}

export default Faq