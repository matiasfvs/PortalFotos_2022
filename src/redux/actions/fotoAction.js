import * as types from "../constants/redux_constants";
import { API_TIMEOUT, API_URL } from "../../config/config";
import axios from "axios";


axios.defaults.baseURL = API_URL;
axios.defaults.timeout = API_TIMEOUT;

  //AQUI COMIENZA LA CONEXION PARA INSERTAR EXCEL

  const fotoRequest = () => {
    return {
      type: types.FOTO_REQUEST,
    };
  };
  
  const fotoError = (error) => {
    console.log(error)
    return {
      type: types.FOTO_ERROR,
      error: error,
    };
  };
  
  const fotoOk = (data) => {
    return {
      type: types.FOTO_OK,
      data: data,
    };
  };
  
 export const getFoto = () => {
   //console.log('nombre tabla en el action')
    return async (dispatch) => {
      dispatch(fotoRequest());
      try {
        const { data: res } = await axios.get("/portalfotospdv",{

        })
        //console.log('res antes del if:',res)
        if (res) {
          dispatch(fotoOk(res));
          //console.log(res)
          //alert("Carga Enviada con Exito")
        } else {
          //console.log(res)
          dispatch(fotoError({ message: "Sin datos" }));
          //alert("Error en el envío de la data")
        }
      } catch (error) {
        dispatch(fotoError(error));
        throw error;
      }
    };
  };
