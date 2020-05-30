import React from 'react';
import ReactDom from 'react-dom'
import Signin from '../components/login/Signin'
import { BrowserRouter } from 'react-router-dom';
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);
it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(
  <BrowserRouter>
  <Signin/>
  </BrowserRouter>,div);
})


  

  it("renders button correctly", ()=>{
    const{getByTestId}=render(
    <BrowserRouter>
      <Signin/>
      </BrowserRouter>)
    expect(getByTestId('button')).toHaveTextContent('Sign In')
  })

  it("renders button correctly", ()=>{
    const{getByTestId}=render(
    <BrowserRouter>
      <Signin/>
      </BrowserRouter>)
    expect(getByTestId('button1')).toHaveTextContent('Sign Up')
  })

  it("renders button correctly", ()=>{
    const{getByTestId}=render(
    <BrowserRouter>
      <Signin/>
      </BrowserRouter>)
    expect(getByTestId('button2')).toHaveTextContent('Forget')
  })

  it('matches snapshot', ()=>{
    const tree=renderer.create(
    <BrowserRouter>
      <Signin/>
      </BrowserRouter>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  