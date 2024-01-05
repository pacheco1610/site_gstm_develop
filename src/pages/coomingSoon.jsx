import React, { useEffect, useState} from 'react';
import img from '../assets/cominsoon.jpg'
import logo from '../assets/gstm-logo-blanco.png'

const CoomingSoon = () => {
  const [days, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=> {
    const countdowDate = new Date('Jan 20, 2024 00:00:00').getTime();

    setInterval(() => {
      const now = new Date().getTime();
      let distance = countdowDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 *24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / (1000));
      console.log(hours)
      setDay(days >= 10 ? days : `0${days}`)
      setHours(hours >= 10 ? hours : `0${hours}`)
      setMinutes(minutes >= 10 ? minutes : `0${minutes}`)
      setSeconds(seconds >= 10 ? seconds : `0${seconds}`)
    }, 1000);
  },[])
  return (
    <div className='coomingsoonContainer' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), URL(${img})`,}}>
      <div className='coomingsoonWrapper'>
        <img src={logo}/>
        <h1>PRÓXIMAMENTE</h1>
        <span>¡Estamos trabajando en una gran aventura!</span>
        <div className='coomingsoonReloj'>
          <div className='coomingsoon'>
            <p>{days}</p>
            <span>Días</span>
          </div>
          <div className='coomingsoon'>
            <p>{hours}</p>
            <span>Horas</span>
          </div>
          <div className='coomingsoon'>
            <p>{minutes}</p>
            <span>Minutos</span>
          </div>
          <div className='coomingsoon'>
            <p>{seconds}</p>
            <span>Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoomingSoon;