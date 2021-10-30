import {GET_BANDS, GET_BAND_DETAIL, GET_ALBUMS,GET_NEWS_BAND,GET_BANDS_FOR_COUNTRY} from "./types"
// import { loadState } from "../localStorage";

// const persistedState = loadState(); //Javi

const initialState = {
    // persistedState,
    bands: [],
    bandDetail: [],
    activeUser : [],
    albums: [],
    news: []
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BANDS:
        return {
          ...state,
          bands: action.payload
        }
      case GET_BAND_DETAIL:
        return {
          ...state,
          bandDetail: action.payload
        }
      case GET_ALBUMS:
        return {
          ...state,
          albums: action.payload
        }
      case GET_NEWS_BAND:
        return {
          ...state,
          news: action.payload
        }
      case GET_BANDS_FOR_COUNTRY:
        return {
          ...state,
          bands: action.payload
        }
    default:
        return state;
    }
}