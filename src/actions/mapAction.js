import {GET_MAP, LOADING} from './types'
import axios from 'axios'

export const getMap=()=>async dispatch=>{
    const res= await axios.get('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson');
    dispatch({
        type: GET_MAP,
        payload: res.data
    })
}

export const setLoading = () => {
    return {
      type: LOADING
    };
  };