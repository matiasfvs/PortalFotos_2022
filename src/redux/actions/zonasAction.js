import * as types from "../constants/redux_constants";
import { API_TIMEOUT, API_URL } from "../../config/config";
import axios from "axios";


axios.defaults.baseURL = API_URL;
axios.defaults.timeout = API_TIMEOUT;

  //AQUI COMIENZA LA CONEXION PARA INSERTAR EXCEL

  const zonasRequest = () => {
    return {
      type: types.ZONA_REQUEST,
    };
  };
  
  const zonasError = (error) => {
    console.log(error)
    return {
      type: types.ZONA_ERROR,
      error: error,
    };
  };
  
  const zonasOk = (data) => {
    return {
      type: types.ZONA_OK,
      data: data,
    };
  };
  
 export const getZonas = (token) => {
   //console.log('nombre tabla en el action')
    return async (dispatch) => {
      dispatch(zonasRequest());
      try {
        const { data: res } = await axios.get("/portalzonas",{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        //console.log('res antes del if:',res)
        if (res) {
          dispatch(zonasOk(res));
          //console.log(res)
          //alert("Carga Enviada con Exito")
        } else {
          //console.log(res)
          dispatch(zonasError({ message: "Sin datos" }));
          //alert("Error en el envío de la data")
        }
      } catch (error) {
        dispatch(zonasError(error));
        throw error;
      }
    };
  };
