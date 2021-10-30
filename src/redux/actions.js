import {GET_BANDS} from "./types"
import axios from "axios";



export default function getBands(page) {
  // console.log('body=>>', page)
    return async function (dispatch) {
      try {
        let response;

        if(page.filterCountry) {
           response = await axios.get(`http://localhost:3000/bands?_page=${page.page}&_limit=${page.limit}&country=${page.filterCountry}`)
        }
        else if(page.filterGenre) {
          response = await axios.get(`http://localhost:3000/bands?_page=${page.page}&_limit=${page.limit}&genreCode=${page.filterGenre}`)
       }
        else{
           response = await axios.get(`http://localhost:3000/bands?_page=${page.page}&_limit=${page.limit}` )
        }
        

        // console.log(response.data)

        return dispatch({ type: GET_BANDS, payload: response.data });
   

        
      } catch (err) {
        console.log('Error en Login',err);
      }
    };
  }