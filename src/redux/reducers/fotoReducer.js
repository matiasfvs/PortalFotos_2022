import * as types from '../constants/redux_constants'

const initialState= {
    data:[]
}


const fotoReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.FOTO_OK:{
           console.log("DATA FOTO OK");
            return{
                ...state,
                data:action.data
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
                isLoading:false,
            }

        }
        default: {
            return state;
          }
    }

}

export default fotoReducer;