import React from 'react';
import { mount } from 'enzyme';
import Home from './index';

describe('<Home />', () => {
  describe('Rendering', () => {
    it('should render Home page correctly', () => {
        const component = mount(<Home />);
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(4)
    });
  });

})
