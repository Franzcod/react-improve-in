import {GET_BANDS_FOR_COUNTRY} from "./types"
import axios from "axios";



export default function getCountryFilter(country) {
  // console.log('body=>>', body)
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3000/bands?country=${country}` )

        console.log('POR PAISES =>',response.data)

        return dispatch({ type: GET_BANDS_FOR_COUNTRY, payload: response.data });
   

        
      } catch (err) {
        console.log('Error en Login',err);
      }
    };
  }