import * as types from '../constants/redux_constants'

const initialState= {
    data:[],
    isLoading: true,
}


const fotoReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.FOTO_OK:{
           console.log("DATA FOTO OK");
            return{
                ...state,
                data:action.data,
                isLoading: false,
            }
        }
        case types.FOTO_ERROR:{
            //console.log("DATA FOTO ERROR");
            return{
                ...state,
                isLoading:false,
            }
        }
        case types.FOTO_REQUEST:{
           // console.log("DATA FOTO REQUEST");
            return{
                ...state,
                isLoading:true,
            }

        }
        default: {
            return state;
          }
    }

}

export default fotoReducer;