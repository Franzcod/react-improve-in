import {GET_NEWS_BAND} from "./types"
import axios from "axios";


export default function getNewsBand(band) {


  

    var options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: `${band}`, lang: 'en', sort_by: 'relevancy', page: '1'},
        headers: {
          'x-api-key': '0eh6JoyzXCnFGdH_EjxjeecTn496yWm91v0Bb4nNDgU'
        }
      };
  // console.log('body=>>', body)
    return async function (dispatch) {
      try {
      
        axios.request(options).then(function (response) {
            // console.log('Action Data => ',response.data)
            return dispatch({ type: GET_NEWS_BAND, payload: response.data });
        }).catch(function (error) {
            console.error(error);
        });
        
      } catch (err) {
        console.log('Error en Login',err);
      }
    };
  }