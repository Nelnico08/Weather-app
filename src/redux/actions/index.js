import { toast } from 'react-hot-toast'

export const BUSCAR_CIUDAD = 'BUSCAR_CIUDAD';
export const DETALLE_CIUDAD = 'DETALLE_CIUDAD';
export const ELIMINAR_CIUDAD = 'ELIMINAR_CIUDAD';
export const CLEAN_STATE = 'CLEAN_STATE';

const apiKey = process.env.REACT_APP_API_KEY;

export function buscarCiudad(ciudad){
  return function(dispatch) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
      .then(respuesta => respuesta.json())
      .then(json =>{
        if (json.main !== undefined){
          const ciudad = {
            name: json.name,
            temp: Math.round(json.main.temp),
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            id:json.id,
          };
          dispatch({type:BUSCAR_CIUDAD, payload: ciudad})
        }else{
          toast.error('No se encontro la ciudad')
        }
      })
  }
};

export function detalleCiudad(id) {
  return function(dispatch){
    return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric&lang=es`)
      .then(respuesta => respuesta.json())
      .then(json => {
        if(json.main !== undefined){
          const ciudad = {
            name: json.name,
            temp: Math.round(json.main.temp),
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            sensacion: Math.round(json.main.feels_like),
            humedad: json.main.humidity,
            descripcion: json.weather[0].description,
            img: json.weather[0].icon,
            viento: json.wind.speed,
            id:json.id,
          };
          dispatch({type:DETALLE_CIUDAD, payload: ciudad});
        }
      })
  }
};

export const eliminarCiudad = (id) => ({
  type: ELIMINAR_CIUDAD,
  payload: id
});

export const cleanState = () => ({
  type: CLEAN_STATE
});



