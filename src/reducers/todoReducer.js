 import {GET_TODOS, DELETE_TODO,
     ADD_TODO,
     UPDATE_TODO,GET_TODO,LOADING } from '../actions/types'
const initialstate={
    todos:[],
    todo:{},
    loading: false
};

export default function(state = initialstate, action){
    switch(action.type){
        case GET_TODOS:
            return{
                ...state,
                todos: action.payload,
                loading: false
            };
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo=>
                    todo.id === action.payload ? false: true),
                    loading: false
            }
        case ADD_TODO:
            return{
                ...state,
                todos: state.todos.concat(action.payload),
                loading: false
            }
        case GET_TODO:
            return {
                ...state,
                todo: action.payload,
                loading: false
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(
                todo =>
                    todo.id === action.payload.id
                    ? (todo = action.payload)
                    : todo
                ),
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