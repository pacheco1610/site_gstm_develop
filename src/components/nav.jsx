import React,{useState} from 'react';
import logo from '../assets/logo-blanco.png';

const Nav = ( {Fontcolor} ) => {
  const [menu,setMenu] = useState(true);

  const handleMenu = () => {
      setMenu(!menu);
  }
  return (
    <nav className='Nav'>
        <div className='Nav-logo'><img src={logo} alt="" /></div>
        <div className='Nav-icon' onClick={() => handleMenu()}><i className="fa-solid fa-bars"></i></div>
        <ul className={menu ? ' Nav-ul Nav-ulIshidden ' : 'Nav-ul' }>
            <li className='Nav-btnClose' onClick={() => handleMenu()}>x</li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"}>Home</li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} >Destinos</li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} >¿Quienes somos?</li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} >Productos</li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-loginBlack Nav-fontBlack":"Nav-li Nav-login"} ><a href="https://agencias.trotatourism.com/login">Login</a></li>
            <li className={Fontcolor === '#000' ? "Nav-li Nav-fontBlack":"Nav-li"} ><a href="https://agencias.trotatourism.com/signup">Sign up</a> </li>
        </ul>
    </nav>
  )
}

export default Nav