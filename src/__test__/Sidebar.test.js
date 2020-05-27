import React from 'react';
import ReactDom from 'react-dom'
import Sidebar from '../components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);
it("render nav without crashing",()=>{
    const nav= document.createElement("nav");
    ReactDom.render(
    <BrowserRouter>
    <Sidebar/>
    </BrowserRouter>,nav);
  })

it("render without crashing",()=>{
  const div= document.createElement("div");
  ReactDom.render(
  <BrowserRouter>
  <Sidebar/>
  </BrowserRouter>,div);
})

it("renders links correctly", ()=>{
    const{getByTestId}=render(
        <BrowserRouter>
        <Sidebar/>
        </BrowserRouter>)
    expect(getByTestId('list')).toHaveTextContent('Dashboard')
  })
  it("renders links correctly", ()=>{
    const{getByTestId}=render(
        <BrowserRouter>
        <Sidebar/>
        </BrowserRouter>)
    expect(getByTestId('list1')).toHaveTextContent('Add To-DO')
  })
  it("renders links correctly", ()=>{
    const{getByTestId}=render(
        <BrowserRouter>
        <Sidebar/>
        </BrowserRouter>)
    expect(getByTestId('list2')).toHaveTextContent('View To-DO')
  })
  it("renders links correctly", ()=>{
    const{getByTestId}=render(
        <BrowserRouter>
        <Sidebar/>
        </BrowserRouter>)
    expect(getByTestId('list3')).toHaveTextContent('View Map')
  })
  
  it('matches snapshot', ()=>{
    const tree=renderer.create(
        <BrowserRouter>
        <Sidebar/>
        </BrowserRouter>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  

