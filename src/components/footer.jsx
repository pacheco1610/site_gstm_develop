import React from 'react'
import logo from '../assets/logo-2.png';
const Footer = () => {
  return (
    <section className='footer'>
      <div className="footer-wrapper">
        <div className='footer-body'>
          <div className='footer-item'>
            <h1>Contactanos</h1>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Soporte al cliente</span>
              <h1>(239) 555-0108</h1>
            </div>
            <div className='footer-ItemContacto footer-itemContactNumber'>
              <span>Soporte en vivo</span>
              <h1>hi@trotatourism.com</h1>
            </div>
            <div className='footer-ItemContacto'>

            </div>
          </div>
          <div className='footer-item'>
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
          </div>
        </div>
        <div className='footer-second'>
          <div>©2023 by Axioma, All rights reserved</div>
          <div>
            <h1>Scroll To Top</h1> 
            <i className="fa-light fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer