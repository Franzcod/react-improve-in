import {GET_BAND_DETAIL} from "./types"
import axios from "axios";



export default function getBandDetail(id) {
  // console.log('body=>>', body)
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3000/bands/${id}` )

        // console.log(response.data)

        return dispatch({ type: GET_BAND_DETAIL, payload: response.data });
   

        
      } catch (err) {
        console.log('Error en Login',err);
      }
    };
  }