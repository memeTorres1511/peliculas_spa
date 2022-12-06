import React from 'react';
import ReactDOM from 'react-dom/client';
import Peliculas from './Components/Pelicula/peliculas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Peliculas></Peliculas>
  </React.StrictMode>,
);
