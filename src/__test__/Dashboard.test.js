import React from 'react';
import Dashboard from '../components/dashboard/Dashboard'
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { Router } from 'react-router-dom';


afterEach(cleanup);
it('Renders a Chart', () => {
  const wrapper = jest.mock('react-chartjs-2', () => ({
    Dashboard: () => null,
  }))
  expect(wrapper).toMatchSnapshot()
})

