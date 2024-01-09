import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss'
import 'leaflet/dist/leaflet.css';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about';
import Destino from './pages/landingDestino';
import LandingTour from './pages/landingTour';
import { store } from './redux/store'
import CoomingSoon from './pages/coomingSoon'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },  {
    path: "/about/:id",
    element: <About/>,
  },
  {
    path:"/landingTour/:packageId",
    element: <LandingTour/>,
  },
  {
    path:"/destino",
    element: <Destino/>
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
