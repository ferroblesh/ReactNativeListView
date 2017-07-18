import axios from 'axios';

import {
  FETCH_RESULTS,
  SET_RESULTS
} from './types';

const API_URL = 'http://hiztegia.bilbozaharra.eus/api.php';

export const fetchResults = (text, callback) => async (dispatch) => {
  console.log('Fetch text:' + text);
  try {
    let params = {
      accion: 'terminos',
      seccion: 'diccionario',
      diccionario: 'EU_ES',
      token: 'c37c32a9196fa57b19db85f3cf33583e',
      termino: text
    };
    params = JSON.stringify(params);
    console.log(params);
    let {data} = await axios.post(API_URL,params);
    console.log(data);
    dispatch({type: SET_RESULTS, libraries: data});

  } catch(e) {
    console.error(e);
  }
}
