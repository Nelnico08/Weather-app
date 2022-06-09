import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { eliminarCiudad } from '../redux/actions';
import style from '../Styles/Card.module.css'

export default function Card({temp, min, max, id, nombre, img}) {

  let backgroundCard = '';  //define una clase segun el clima de la ciudad
                            //para dar estilos diferentes
  switch (img){
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
      break;
    case("50d"):
    case("50n"):
      backgroundCard = style.niebla;
      break
    default:
      backgroundCard= null;
  }
  
  const dispatch = useDispatch();

  const onClose = (e,id) => {
    e.preventDefault();
    dispatch(eliminarCiudad(id));
  }

  return (
    <div  className={`${style.contenedor} ${backgroundCard}`} key={id}>
        <button className={style.btn} onClick={(e) => onClose(e,id)}>X</button>
        <div className={style.miniContenedor}>
          <Link to={`/ciudad/${id}`}>
            <h3 className={style.ciudad}>{nombre}</h3>
          </Link>
          <p>Temperatura: {temp}ºC</p>
          <p>Minima: {min}ºC</p>
          <p>Maxima: {max}ºC</p>
        </div>
        
        {/* <img 
          src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
          alt='foto de clima'
          className={style.imagen}
        /> */}
    </div>
  )
}
