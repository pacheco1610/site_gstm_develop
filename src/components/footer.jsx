import React from 'react'
import logo from '../assets/logo-2.png';
const Footer = () => {
  return (
    <section className='footer' id="footer">
      <div className="footer-wrapper">
        <div className='footer-body'>
          <div className='footer-item'>
            <h1>Contactanos</h1>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Soporte al cliente</span>
              <h1><a href="tel:7026903000">702-690-3000 Ext. 1002</a></h1>
            </div>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Dirección</span>
              <h1>1550 W Horizon Ridge Pkwy Henderson Nevada, 89012</h1>
            </div>
          </div>
          <div className='footer-item'>
            <h1>Escríbenos</h1>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Para mayor información</span>
              <h1>info@trotatourism.com</h1>
            </div>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Redes</span>
              <div className='footer-redes'>
                <a href="https://www.facebook.com/trotatourism" target='_blank'><i class="fa-brands fa-square-facebook"></i></a>
                <a href="https://www.instagram.com/trotatourism/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-square-x-twitter"></i></a>
              </div>
            </div>
          </div>
          {/* <div className='footer-item'>
            <h1>Menu</h1>
            <span className='footer-ItemMenu'>
              About Us
            </span>
            <span className='footer-ItemMenu'>
              Community blog
            </span>
            <span className='footer-ItemMenu'>
              Career
            </span>
            <span className='footer-ItemMenu'>
              Privacy Policy
            </span>
            <span className='footer-ItemMenu'>
              Tearms of service
            </span>
          </div> 
          <div className='footer-item'>
            <h1>Soporte</h1>
            <span className="footer-ItemSoporte">Contact</span>
            <span className="footer-ItemSoporte">Legal Notice</span>
            <span className="footer-ItemSoporte">Site map</span>
            <span className="footer-ItemSoporte">FAQ</span>
          </div>
          <div className='footer-item'>
            <h1>Servicios</h1>
            <span className="footer-ItemServicio">Tour list</span>
            <span className="footer-ItemServicio">Flight Finder</span>
            <span className="footer-ItemServicio">Cruise Ticket</span>
            <span className="footer-ItemServicio">Travel Agents</span>
            <span className="footer-ItemServicio">Car Hire</span>
          </div>*/}
        </div>
        <div className='footer-second'>
        <div>©2023 by<a href="https://axioma.network/" target='_blank'> Axioma</a>, All rights reserved</div>
          <div>
            <a href="#home">
              <h1>Scroll To Top</h1> 
              <i className="fa-light fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer