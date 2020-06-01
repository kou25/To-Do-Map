import React from 'react';
import ReactDom from 'react-dom'
import Docs from '../components/navbar/Docs'
import { cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);
it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(<Docs/>,div);
})

it('matches snapshot', ()=>{
  const tree=renderer.create(
  <Docs/>).toJSON()
  expect(tree).toMatchSnapshot()
})