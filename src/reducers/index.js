import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import mapReducer from "./mapReducer";


export default combineReducers({
    todo: todoReducer,
    map: mapReducer
}); 