import React from 'react';
import ReactDom from 'react-dom'
import SignUp from '../components/login/SignUp'
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);
it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(
  <SignUp/>,div);
})

it("renders heading correctly", ()=>{
    const{getByTestId}=render(
    <SignUp/>)
    expect(getByTestId('heading')).toHaveTextContent('Sign Up')
  })

 

  it("renders button correctly", ()=>{
    const{getByTestId}=render(
    <SignUp/>)
    expect(getByTestId('button')).toHaveTextContent('Sign Up')
  })

  it('matches snapshot', ()=>{
    const tree=renderer.create(
    <SignUp/>).toJSON()
    expect(tree).toMatchSnapshot()
  })