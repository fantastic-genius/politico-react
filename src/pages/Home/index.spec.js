import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '@src/store';
import Home from './index';

describe('<Home />', () => {
  describe('Rendering', () => {
    it('should render Home page correctly', () => {
      const component = shallow(
        <Provider store={store}>
          <Router>
            <Home isAuthenticated={false}/>
          </Router>
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it('should render Home page correctly woth its children', () => {
        const component = mount(
          <Provider store={store}>
            <Router>
              <Home isAuthenticated={false}/>
            </Router>
          </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(4)
    });
  });

})
