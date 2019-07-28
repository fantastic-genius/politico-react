import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './index';

describe('<NavBar />', () => {
  describe('Rendering', () => {
    it('should render NavBar correctly', () => {
        const component = shallow(
        <Router>
          <NavBar />
        </Router>
        );
        expect(component).toMatchSnapshot();
    });
  })

  describe('Rendering of NavBar and children', () => {
    it('should render NavBar correctly in debug mode', () => {
        const component = mount(
          <Router>
            <NavBar />
          </Router>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(2)
    });
  })

})
