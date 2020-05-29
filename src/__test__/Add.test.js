import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import{render,  cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Add from '../containers/add/Add'
import {ADD_TODO} from '../actions/types'
import renderer from 'react-test-renderer'


afterEach(cleanup)

const startingState={
    name:'',
    desc:''
};
function reducer(state=startingState, action){
  switch(action.type){
    case ADD_TODO:
            return{
                ...state,
                name: state.name.concat(action.payload),
                desc: state.desc.concat(action.payload)
            }
    default:
      return state
  }
}

function renderWithRedux(component, 
  {initialState, store=createStore(reducer, 
    initialState)}={}){
      return{
      ...render(<Provider store={store}>{component}</Provider>)
      }
}

it("renders heading correctly", ()=>{
  const{getByTestId}=render(
    <Provider store={createStore(reducer)}>
    <Add/>
  </Provider>)
  expect(getByTestId('heading')).toHaveTextContent('Add To-DO')
})

it("renders with redux",()=>{
  const{getByTestId}=renderWithRedux(<Add/>)
  expect(getByTestId('name')).toHaveTextContent('')
})

it("renders with redux",()=>{
  const{getByTestId}=renderWithRedux(<Add/>)
  expect(getByTestId('desc')).toHaveTextContent('')
})

it("renders with redux",()=>{
  const{getByTestId}=renderWithRedux(<Add/>)
  expect(getByTestId('button')).toHaveTextContent('Add')
})


it('matches snapshot', ()=>{
  const tree=renderer.create(
        <Provider store={createStore(reducer)}>
          <Add/>
        </Provider>).toJSON()
  expect(tree).toMatchSnapshot()
})









