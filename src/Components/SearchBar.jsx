import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { buscarCiudad } from '../redux/actions';
import style from '../Styles/SearchBar.module.css'

export default function SearchBar() {

  const [ciudad, setCiudad] = useState('');
  const dispatch = useDispatch()
  const history = useHistory()

  const handleInputChange = (e) => {
    e.preventDefault()
    setCiudad(e.target.value)
  }

  return (
    <form 
      className={style.contenedor}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(buscarCiudad(ciudad));
        setCiudad('');
        history.push("/");
      }}
    >
        <input 
            type='text' 
            placeholder='Ciudad...'
            className={style.input}
            onChange={(e) => handleInputChange(e)}
            value={ciudad}
        />
        <input 
            type='submit'
            value='Buscar'
            className={style.btnSearch}
        />
    </form>
  )
}
