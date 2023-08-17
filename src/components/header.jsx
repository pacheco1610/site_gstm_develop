import React, { useState } from 'react';
import logo from '../assets/logo-blue.png';
import classNames from 'classnames';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const classMenu = classNames({
    'Header-containerMenu': true,
    'Header-containerMenu--active':activeMenu,
  })

  const buttonClose = classNames({
    'Header-menuMobile': true,
    'Header-menuMobile--active':activeMenu,
  })

  return (
    <nav className='Header'>
      <div className="Header-container">
        <div className={ classMenu }>
          <div className='Header-agencias'>
            <button className='Header-agenciasButton'>
              Registra tu Agencia
            </button>
            <button className='Header-agenciasButton'>
              Ya estoy Registrado
            </button>
          </div>
          <ul className='Header-menu'>
            <li className='Header-li'>Destinios</li>
            <li className='Header-li'>Paquetes</li>
            <li className='Header-li'>Hoteles</li>
            <li className='Header-li'>Rentas</li>
            <li className='Header-li'>Transportación</li>
            <li className='Header-li'>Atracciones</li>
            <li className='Header-li'>Circuitos</li>
          </ul>
        </div>
        <div className="Header-logo">
          <img src={ logo } alt="" />
        </div>
        <div className={ buttonClose } onClick={ () => setActiveMenu(!activeMenu) }>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;