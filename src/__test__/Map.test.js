import React from 'react';
import Map from '../components/map/Map'
import { cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"




afterEach(cleanup);
it('Renders a Map', () => {
  const wrapper = jest.mock('react-map-gl', () => ({
    Map: () => null,
  }))
  expect(wrapper).toMatchSnapshot()
})

