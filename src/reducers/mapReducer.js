import {GET_MAP,LOADING} from '../actions/types'

const initialstate={
    data:'',
    loading: false
};

export default function(state = initialstate, action){
    switch(action.type){
        case GET_MAP:
            return{
                ...state,
                data: action.payload,
                loading: false
            }
        case LOADING:
          return {
              ...state,
              loading: true
              };
            default:
                return state;
        }
    }