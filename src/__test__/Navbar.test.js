import React from 'react';
import ReactDom from 'react-dom'
import Navbar from '../components/navbar/Navbar'
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);
it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(<Navbar/>,div);
})

it("renders links correctly", ()=>{
  const{getByTestId}=render(
  <Navbar/>)
  expect(getByTestId('img')).toHaveTextContent('TO DO')
})

it('matches snapshot', ()=>{
  const tree=renderer.create(
  <Navbar/>).toJSON()
  expect(tree).toMatchSnapshot()
})