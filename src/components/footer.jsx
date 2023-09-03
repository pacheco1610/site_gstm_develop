import React from 'react'
import logo from '../assets/logo-2.png';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
          <nav className='footer-nav'>
            <ul>
              <li>Nosotros</li>
              <li><a href="">A cerca de</a></li>
              <li><a href="">Bolsa de Trabajo</a></li>
              <li><a href="">Aviso de Confidencialidad</a></li>
            </ul>
          </nav>
        <div className="footer-redes">
          <div>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer