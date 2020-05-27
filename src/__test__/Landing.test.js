import React from 'react';
import ReactDom from 'react-dom'
import Landing from '../components/Landing/Landing'
import { BrowserRouter } from 'react-router-dom';
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);

it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(
  <BrowserRouter>
  <Landing/>
  </BrowserRouter>,div);
})

it("renders button correctly", ()=>{
  const{getByTestId}=render(
  <BrowserRouter>
    <Landing/>
    </BrowserRouter>)
  expect(getByTestId('button')).toHaveTextContent('Get Started')
})
it("renders heading correctly", ()=>{
  const{getByTestId}=render(
  <BrowserRouter>
    <Landing/>
    </BrowserRouter>)
  expect(getByTestId('heading')).toHaveTextContent('Create your own To-Dos')
})

it('matches snapshot', ()=>{
  const tree=renderer.create(
  <BrowserRouter>
    <Landing/>
    </BrowserRouter>).toJSON()
  expect(tree).toMatchSnapshot()
})
