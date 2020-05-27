import React from 'react'

import {addTodo, deleteTodo, editTodo} from '../actions/todoAction'
import {ADD_TODO, DELETE_TODO,UPDATE_TODO} from '../actions/types'

describe('AddItem', () => {
    it('should call AddItem action', () => {
        const newItem = 'Some new todo item';
        const action =()=> dispatch=> {
        dispatch({type: ADD_TODO,
        payload: newItem}),
  
      expect(addTodo(newItem)).toEqual(action);
    };
  });
})

describe('DeleteItem', () => {
    it('should call DeleteItem action', () => {
        const itemID = '0';
        const action =()=> dispatch=> {
        dispatch({type: DELETE_TODO,
        payload: itemID}),
  
      expect(deleteTodo(itemID)).toEqual(action);
    };
  });
})

describe('EditItem', () => {
    it('should call EditItem action', () => {
        const item = {
            id: '0',
            name: 'tour',
            desc: 'manali'
          };

        const action =()=> dispatch=> {
        dispatch({type: UPDATE_TODO,
        payload: item}),
  
      expect(editTodo(item)).toEqual(action);
    };
  });
})