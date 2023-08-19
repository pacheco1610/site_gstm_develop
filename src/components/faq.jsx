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

            <div className={ active === 1 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(1)}>
                <h5>Tarifas netas o comisionables?</h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
                <p className='Faq-p'>
                Todas nuestras tarifas son netas, nosotros no comisionamos a ninguna agencia. Al dar una tarifa neta la agencia tiene la libertad de incrementar su markupsin restricciones. 
                </p>
              </div>
            </div>

            <div className={ active === 2 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(2)}>
                <h5>Sus Tarifas son en dolares o pesos?</h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Nuestras tarifas son en dolares, si en algun momento requerimos hacer la conversion a pesos, usamos el tipo de cambio del dia por el Banco de Mexico
                </p>
              </div>
            </div>

            <div className={ active === 3 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(3)}>
                <h5>Cuales son sus metodos de pago?</h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Transferencia Internacional a un banco en Estados Unidos o por tarjeta de debito o credito por medio de un link con un cargo de 3.5% el cual se incluye en la tarifa
                </p>
              </div>
            </div>

            <div className={ active === 4 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(4)}>
                <h5>Dan facturas?</h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Nosotros no damos facturas como en Mexico con RFC ya que en Estados Unidos no facturamos de esta manera, lo que proporcionamos es un recibo (invoice) con el cual en Mexico el contador de cada empres puede pedir un CDFI y usarlo para deducion de impuestos.
                </p>
              </div>
            </div>
            <div className={ active === 5 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(5)}>
                <h5>Puedes hablar con mi cliente? </h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Lo podemos hacer, pero preferimos que no. Nosotros recomendamos que la agencia tenga la comunicacion directa con su cliente y no nosotros. Si en algun momento debe ser asi, tendria que ser alguna emergencia. 
                </p>
              </div>
            </div>
            <div className={ active === 6 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(6)}>
                <h5>Tus productos son rembolsables?</h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              No, todas las ventas son finales y no hay rembolso o devoluciones, la unica manera que se podria dar un rembolso es porque el servicio por alguna razon no se proporciono y ha sido responsabilidad de Trota Tourism
                </p>
              </div>
            </div>
            <div className={ active === 7 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(7)}>
                <h5>Las tarifas de los productos son diferentes de Mayoristas a minoristas? </h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Todas las agencias se tratan deacuerdo a la necesidad de sus clientes, para TROTA Tourism todas las egcias son clientes y se tratan de la misma manera, pero si hay negociaciones que una Mayorista puede soportar y una minorista no. Dinos que estas buscnado, que tipod e cliente tienes y podemos evealuar el tipo de negociacion que tu agencia ya sea minorista o mayorista puede tener. 
                </p>
              </div>
            </div>
            <div className={ active === 8 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(8)}>
                <h5>Como puedo comenzar a trabajar con TROTA Tourism? </h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Afililiate a nuestra plataforma en https://agencias.trotatourism.com/signup y puedes empezar a comprar inmediatamente
                </p>
              </div>
            </div>
            <div className={ active === 9 ? "question-isActive" : "Faq-item" }>
              <div className="Faq-itemTitle" onClick={()=> acordeon(9)}>
                <h5>Que destinos en Estados Unidos venden?  </h5>
                <div className="arrow"><img src={arrow} alt="" /></div>
              </div>
              <div className="Faq-itemContainer">
              <p className='Faq-p'>
              Tenemos producto en todo Estados Unidos,hay algunos destinos mas populares por ejemplo Las Vegas, Orlando, Nueva York, Chicago, Todo California, Reno y Todo Texas.
                </p>
              </div>
            </div>
          

          </div>
    </div>
  </section>
  )
}

export default Faq