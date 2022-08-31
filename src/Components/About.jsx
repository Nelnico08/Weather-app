import React from 'react'
import style from '../Styles/About.module.css'
import { MdOutlineMail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'


export default function About() {
  return (
    <div className={style.contenedor}>
      <div className={style.tarjeta}>
        <div className={style.aboutText}>
          <h3>
            Welcome to my Weather App, My name is Nelson Escurra, Full Stack Developer. If you like this app and you want to contact me, click one of the following icons 
          </h3>
        </div>
        <div className={style.iconsContenedor}>
          <a href='mailto:nelnico008@gmail.com' target="_blank" rel="noopener noreferrer" >
            <div className={style.iconDiv}><MdOutlineMail size={50} style={{color: "red"}}/></div>
          </a>
          <a href='https://github.com/Nelnico08' target="_blank" rel="noopener noreferrer" >
            <div className={style.iconDiv}><FaGithub size={50} style={{color: "black"}}/></div>
          </a>
        </div>
      </div>
    </div>
    
  )
}
