import { GET_TODOS, DELETE_TODO,
     ADD_TODO,GET_TODO, UPDATE_TODO, LOADING } from './types';
import axios from 'axios'

export const getTodos=()=>async dispatch=>{
    const res= await axios.get('http://localhost:3333/todos');
    dispatch({
        type: GET_TODOS,
        payload: res.data
    })
}

export const deleteTodo=(id)=>async dispatch=>{
    try{
    await axios.delete(`http://localhost:3333/todos/${id}`)
    dispatch({
        type: DELETE_TODO,
        payload: id 
    })
}catch (e) {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  }
}

export const addTodo=(todo)=>async dispatch=>{
    const res=await axios.post('http://localhost:3333/todos', todo)
    dispatch({
        type: ADD_TODO,
        payload: res.data
    })
}

export const getTodo= id => async dispatch=>{
    const res = await axios.get(`http://localhost:3333/todos/${id}`)
    dispatch({
        type: GET_TODO,
        payload: res.data
    })
}

export const editTodo=todo=>async dispatch=>{
    const res = await axios.put(`http://localhost:3333/todos/${todo.id}`,todo)
    dispatch({
        type: UPDATE_TODO,
        payload: res.data
    })
}

export const setLoading = () => {
    return {
      type: LOADING
    };
  };