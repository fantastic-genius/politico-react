import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '@src/store';
import NavBar from './index';

describe('<NavBar />', () => {
  describe('Rendering', () => {
    it('should render NavBar correctly', () => {
        const component = shallow(
          <Provider store={store}>
            <Router>
              <NavBar isAuthenticated={false} />
            </Router>
          </Provider>
        );
        expect(component).toMatchSnapshot();
    });
  })

  describe('Rendering of NavBar and children', () => {
    it('should render NavBar correctly in debug mode', () => {
        const component = mount(
          <Provider store={store}>
            <Router>
              <NavBar isAuthenticated={false} />
            </Router>
          </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(2)
    });
    it('should render NavBar correctly in debug mode', () => {
      const component = mount(
        <Provider store={store}>
          <Router>
            <NavBar isAuthenticated={true} />
          </Router>
        </Provider>
      );
      expect(component).toMatchSnapshot();
      expect(component.find('button')).toHaveLength(2)
  });
  })

})
