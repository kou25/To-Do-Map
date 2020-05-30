import React from 'react';
import ReactDom from 'react-dom'
import Forget from '../components/login/Forget'
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);
it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(
  <Forget/>,div);
})



  it("renders button correctly", ()=>{
    const{getByTestId}=render(
    <Forget/>)
    expect(getByTestId('button')).toHaveTextContent('Reset')
  })

  it('matches snapshot', ()=>{
    const tree=renderer.create(
    <Forget/>).toJSON()
    expect(tree).toMatchSnapshot()
  })