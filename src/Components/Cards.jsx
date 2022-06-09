import React from 'react'
import Card from './Card'
import style from '../Styles/Cards.module.css'
import { useSelector } from 'react-redux'

export default function Cards() {

  const cities = useSelector((state) => state.ciudades);

  return (
    <div className={style.contenedor}>
      {
        cities && cities?.map(elem =>
          <Card
            nombre= {elem.name}
            temp= {elem.temp}
            min= {elem.min}
            max= {elem.max}
            img= {elem.img}
            key= {elem.id}
            id= {elem.id}
          />
        )
      }
    </div>
  )
}


