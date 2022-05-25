import * as types from '../constants/redux_constants'

const initialState= {
    data:[]
}


const zonasReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.ZONA_OK:{
            console.log("DATA ZONAS OK");
            return{
                ...state,
                data:action.data
            }
        }
        case types.ZONA_ERROR:{
            console.log("DATA ZONAS ERROR");
            return{
                ...state,
                isLoading:false,
            }

        }
        case types.ZONA_REQUEST:{
            console.log("DATA ZONAS REQUEST");
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

export default zonasReducer;