import React from 'react';
import ReactDom from 'react-dom'
import Spinner from '../containers/view/Spinner';
import renderer from 'react-test-renderer'
import {cleanup} from '@testing-library/react'

afterEach(cleanup)
it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(<Spinner/>,div);
})

it("image render without crashing",()=>{
    const img = document.createElement("img");
    ReactDom.render(<Spinner/>,img);
  })
  

it('matches snapshot', ()=>{
  const tree=renderer.create(
  <Spinner/>).toJSON()
  expect(tree).toMatchSnapshot()
})
