import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanState, detalleCiudad } from '../redux/actions';
import style from '../Styles/Ciudad.module.css'

export default function Ciudad() {

  const city = useSelector((state) => state.detalle);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detalleCiudad(id))
  },[dispatch,id]);

  useEffect(() =>{
    return () => {
      dispatch(cleanState())
    }
  },[dispatch]);

  let backgroundCard = '';  //define una clase segun el clima de la ciudad
                            //para dar estilos diferentes
  switch (city.img){
    case("01d"):
      backgroundCard = style.soleado;
      break
    case("02d"):
      backgroundCard = style.nubesSol;
      break
    case("03d"):
    case("04d"):
    case("03n"):
    case("04n"):
      backgroundCard = style.nublado;
      break
    case("01n"):
      backgroundCard = style.noche;
      break
    case("02n"):
      backgroundCard = style.nubesNoche;
      break
    case("09d"):
    case("10d"):
    case("09n"):
    case("10n"):
      backgroundCard = style.lluvia;
      break
    case("11d"):
    case("11n"):
      backgroundCard = style.tormenta;
      break
    case("13d"):
    case("13n"):
      backgroundCard = style.nieve;
      break
    case("50d"):
    case("50n"):
      backgroundCard = style.niebla;
      break
    default:
      backgroundCard= null;
  }

  return (
    
    <header className={style.contenedor}>
      <div className={`${style.minicontenedor} ${backgroundCard}`}>
        <h2>{city.name}</h2>
        <p>Temperatura: {city.temp}ºC</p>
        <p>Sensacion termica: {city.sensacion}ºC</p>
        <p>Minima: {city.min}ºC</p>
        <p>Maxima: {city.max}ºC</p>
        <p>{city.descripcion}</p>
        <p>Humedad: {city.humedad}%</p>
        <p>Vel. del viento: {city.viento}m/s</p>
      </div>
        
    </header>
  )
}
