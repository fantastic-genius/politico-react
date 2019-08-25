import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '@src/store';
import Signin from './index';

describe('<Signin />', () => {
  describe('Rendering', () => {
    it('should render signin page correctly', () => {
      const component = shallow(
        <Router>
          <Signin/>
        </Router>
      );
      expect(component).toMatchSnapshot();
    });

    it('should render signin page correctly with its children', () => {
        const component = mount(
          <Provider store={store}>
            <Router>
              <Signin store={ store }/>
            </Router>
          </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(3);
        expect(component.find('input')).toHaveLength(2);
    });
  });

})
