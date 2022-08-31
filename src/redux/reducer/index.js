import { BUSCAR_CIUDAD, DETALLE_CIUDAD, ELIMINAR_CIUDAD, CLEAN_STATE } from "../actions"
import { toast } from 'react-hot-toast'

const initialState = {
    ciudades: [],
    detalle: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

  case BUSCAR_CIUDAD:
    if(state.ciudades.length >= 5){
      toast('Elimine al menos una ciudad')
    }else{
      return { 
        ...state,
        ciudades: [...state.ciudades, action.payload]
      }
    }
  case DETALLE_CIUDAD:
    return {
      ...state,
      detalle: action.payload
    }
  case ELIMINAR_CIUDAD:
    return {
      ...state,
      ciudades: state.ciudades.filter(ciudad => ciudad.id !== action.payload)
    }
  case CLEAN_STATE:
    return {
      ...state,
      detalle: {}
    }

  default:
    return state
  }
}

export default rootReducer;