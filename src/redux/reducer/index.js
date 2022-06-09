import { BUSCAR_CIUDAD, DETALLE_CIUDAD, ELIMINAR_CIUDAD, CLEAN_STATE } from "../actions"


const initialState = {
    ciudades: [],
    detalle: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

  case BUSCAR_CIUDAD:
    return { 
        ...state,
        ciudades: [...state.ciudades, action.payload]
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