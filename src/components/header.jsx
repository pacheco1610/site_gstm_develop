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
        <div className="Header-logo">
            <img src={ logo } alt="" />
        </div>
        <div className={ classMenu }>
          <ul className='Header-menu'>
            <li className='Header-li'>Inicio</li>
            <li className='Header-li'>Destinos</li>
            <li className='Header-li'>Servicios</li>
            <li className='Header-li'>Contacto</li>
          </ul>
        </div>
        <div className='Header-Login'>
          <span>Iniciar Sesion</span>
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