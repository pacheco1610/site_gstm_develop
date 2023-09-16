import React,{ useState } from 'react';
import img from '../assets/login.jpg'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/userSlice'

const ModalLogin = ({ activeModal, closeModal }) => {
  const [formLogin, setFormLogin] = useState({})
  const [formSignUp, setSignUp] = useState({})
  const dispatch = useDispatch();
  const [typeForm, setTypeFaorm] = useState(true)
  const [registerSuccess, setRegisterSuccess] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('https://cms.trotatourism.com/api/auth/local', formLogin)
    .then(response => {
      const data = response.data.user ? response.data.user : false
      if (data) {
        dispatch(loginUser({email:data.email, password:'', activeLogin: true}))
        closeModal(false);
      } else {
        closeModal(false);
      }
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    axios.post('https://cms.trotatourism.com/api/auth/local/register', formSignUp, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      const data = response.data.user ? response.data.user : false
      if (data) {
        dispatch(loginUser({email:data.email, password:'', activeLogin: true}))
        setRegisterSuccess(true)
        setTimeout(() => {
          setRegisterSuccess(false)
          setTypeFaorm(true)
          closeModal(false);
        }, 1000);

      } else {
        closeModal(false);
      }
    })
  }

  const closeModalHandle = () => {
    setTypeFaorm(true)
    setRegisterSuccess(false)
    closeModal(false);
  }

  if (activeModal) {
    if (typeForm) {
      return (
        <div className='ModalLogin-Wrapper'>
          <div className="ModalLogin-Container">
            <div className="ModalLogin-close">
              <i className="fa-regular fa-xmark" onClick={() =>  closeModalHandle()}></i>
            </div>
            <div className='ModalLogin-Cover' style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img}")`}}>
              <span>Iniciemos Sesión</span>
            </div>
            <form className='ModalLogin-ContainerInputs' onSubmit={(e) => handleLogin(e)}>
              <div>
                <input type="email" placeholder='Email' required onChange={(e) => setFormLogin({...formLogin, identifier:e.target.value})}/>
              </div>
              <div>
                <input type="password" placeholder='Contraseña' required onChange={(e) => setFormLogin({...formLogin, password:e.target.value})}/>
              </div>
              <div>
                <button>
                  Inciar sesion
                </button>
              </div>
              <div className='ModalLogin-Registrate'>
                <span>¿Aun no tienes cuenta?</span> <span onClick={() => setTypeFaorm(false)}>Regitrate</span>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className='ModalLogin-Wrapper'>
          <div className="ModalLogin-Container">
            <div className="ModalLogin-close">
              <i className="fa-regular fa-xmark" onClick={() =>  closeModalHandle()}></i>
            </div>
            {
              registerSuccess ?<div className='ModalSignUp-Success'>
                <i className="fa-light fa-location-smile"></i> <span>Tu registro fue exitoso, ¡Bienvenido!</span>
              </div> : null
            }

            <div className='ModalLogin-Cover' style={{backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img}")`}}>
              <span>Registrate</span>
            </div>
            <form className='ModalLogin-ContainerInputs' onSubmit={(e) => handleSignUp(e)}>
              <div>
                <input type="text" placeholder='Nombre' required onChange={(e) => setSignUp({...formSignUp, nombre:e.target.value})}/>
              </div>
              <div>
                <input type="text" placeholder='Nombre de tu agencia' required onChange={(e) => setSignUp({...formSignUp, nombre_agencia:e.target.value})}/>
              </div>
              <div>
                <input type="text" placeholder='Telefono' required onChange={(e) => setSignUp({...formSignUp, telefono:e.target.value})}/>
              </div>
              <div>
                <input type="email" placeholder='Email' required onChange={(e) => setSignUp({...formSignUp, email:e.target.value, username:e.target.value})}/>
              </div>
              <div>
                <input type="password" placeholder='Contraseña' required onChange={(e) => setSignUp({...formSignUp, password:e.target.value})}/>
              </div>
              <div>
                <button>
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    }
    
  } else {
    return null
  }
  
};

export default ModalLogin;