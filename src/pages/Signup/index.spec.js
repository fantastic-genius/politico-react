import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import store from '@src/store';
import Signup from './index';

describe('<Signup />', () => {
  describe('Rendering', () => {
    it('should render signup page correctly', () => {
      const component = shallow(
        <Router>
          <Signup/>
        </Router>
      );
      expect(component).toMatchSnapshot();
    });

    it('should render signup page correctly woth its children', () => {
        const component = mount(
          <Router>
            <Signup store={ store }/>
          </Router>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(3);
        expect(component.find('input')).toHaveLength(7);
    });
  });

})
