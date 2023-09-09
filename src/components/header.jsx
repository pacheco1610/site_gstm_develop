import React, { useState } from 'react';
import logo from '../assets/trotatourism-logo.png';
import classNames from 'classnames';
import { useNavigate  } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const navigate = useNavigate();

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
        <div className="Header-logo" onClick={() => navigate('/')}>
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