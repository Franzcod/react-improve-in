import {GET_ALBUMS} from "./types"
import axios from "axios";



export default function getAlbums(id) {
  // console.log('body=>>', body)
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3000/albums?bandId=${id}` )

        // console.log('action albums => ', response.data)

        return dispatch({ type: GET_ALBUMS, payload: response.data });
   

        
      } catch (err) {
        console.log('Error en Login',err);
      }
    };
  }