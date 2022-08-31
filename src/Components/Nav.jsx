import React from 'react'
import style from '../Styles/Nav.module.css'
import SearchBar from './SearchBar'
import cloudy from '../Imagenes/cloudy.png'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export default function Nav() {
  return (
    <div className={style.navBar}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className={style.tituloLogo}>
        <img className={style.imagenLogo} src={cloudy} alt='logo clima'/>
        <h3>Weather App</h3>
      </div>
      <Link to='/' className={style.links}>Home</Link>
      <Link to='/about'>
        <div className={style.links}>About</div>
      </Link>
      <SearchBar />
    </div>
  )
}
