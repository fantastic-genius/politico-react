import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '@src/store';
import Signup from './index';

describe('<Signup />', () => {
  describe('Rendering', () => {
    it('should render signup page correctly', () => {
      const component = shallow(
        <Provider store={store}>
          <Router>
            <Signup/>
          </Router>
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it('should render signup page correctly with its children', () => {
        const component = mount(
          <Provider store={store}>
            <Router>
              <Signup store={store}/>
            </Router>
          </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(3);
        expect(component.find('input')).toHaveLength(7);
    });
  });

})
