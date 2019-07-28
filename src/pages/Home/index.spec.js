import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './index';

describe('<Home />', () => {
  describe('Rendering', () => {
    it('should render Home page correctly', () => {
      const component = shallow(
        <Router>
          <Home />
        </Router>
      );
      expect(component).toMatchSnapshot();
    });

    it('should render Home page correctly woth its children', () => {
        const component = mount(
          <Router>
            <Home />
          </Router>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(4)
    });
  });

})
