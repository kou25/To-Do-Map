import React from 'react'
import {getMap} from '../actions/mapAction'
import {GET_MAP} from '../actions/types'

describe('AddMap', () => {
    it('should call AddMap action', () => {
        const newItem = 'Some new map';
        const action =()=> dispatch=> {
        dispatch({type: GET_MAP,
        payload: newItem}),
  
      expect(getMap(newItem)).toEqual(action);
    };
  });
})