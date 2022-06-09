// import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cards from './Components/Cards';
import Ciudad from './Components/Ciudad';
import Nav from './Components/Nav';

function App() {

  // const [ciudades, setCiudades] = useState([]);

  // const apiKey = process.env.REACT_APP_API_KEY;
  // const apiKey = "cb5414378eebbbc8b1352cc24081ea27"

  // function onSearch(ciudad){
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
  //     )
  //     .then(r => r.json())
  //     .then((respuesta)=>{
  //       if(respuesta.main !== undefined){
  //         const ciudad = {
  //           min: Math.round(respuesta.main.temp_min),
  //           max: Math.round(respuesta.main.temp_max),
  //           img: respuesta.weather[0].icon,
  //           id: respuesta.id,
  //           wind: respuesta.wind.speed,
  //           temp: respuesta.main.temp,
  //           name: respuesta.name,
  //           weather: respuesta.weather[0].main,
  //           clouds: respuesta.clouds.all,
  //           latitud: respuesta.coord.lat,
  //           longitud: respuesta.coord.lon,
  //           sensacion: respuesta.main.feels_like,
  //           humedad: respuesta.main.humidity,
  //         };
  //         setCiudades(estadoPrevio => {
  //           if(estadoPrevio.some(c => c.name === ciudad.name)){   //si la ciudad buscada se encuentra en mi estado previo, devuelve 
  //             return estadoPrevio;                                       //el estado previo
  //           }else{      
  //             return [...estadoPrevio, ciudad]                    //si la ciudad es nueva, la agrega al array de ciudades
  //           }
  //         });
  //       }else{
  //         alert("No se encontro la ciudad")
  //       }
  //     })
    
    
  // }

  // const onClose = (id) => {
  //   setCiudades(estadoPrevio => estadoPrevio.filter(c => c.id !== id))
  // }

  // function onFilter(ciudadId){
  //   let cities = ciudades.filter(c => c.id === parseInt(ciudadId));
  //   if (cities.length > 0){
  //     return cities[0];
  //   }else{
  //     return null;
  //   }
  // }

  return (
    <div className="App">
      <Nav path='/'/>
      <Route exact path='/ciudad/:id' component={Ciudad}/>
      <Route exact path='/' component={Cards}/>
      <Route exact path="/about" component={About}/>
    </div>
  );
}

export default App;
