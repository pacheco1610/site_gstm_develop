import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss'
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about';
import Landing from './pages/landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },  {
    path: "/about",
    element: <About/>,
  },
  {
    path:"/landing",
    element: <Landing/>,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
