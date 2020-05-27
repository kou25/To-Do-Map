import React from 'react';
import ReactDom from 'react-dom'
import App from '../App';
import renderer from 'react-test-renderer'
import {cleanup} from '@testing-library/react'

afterEach(cleanup)
it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(<App/>,div);
  ReactDom.unmountComponentAtNode(div);
})

it('matches snapshot', ()=>{
  const tree=renderer.create(
  <App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
