import React from 'react';
import { shallow } from 'enzyme';
import { Toast } from './index';

describe('<Toast />', () => {
  describe('Rendering', () => {
    it('should render Toast correctly', () => {
        const component = shallow(<Toast />);
        expect(component).toMatchSnapshot();
    });
  });
});
