import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  describe('Rendering', () => {
    it('should render Footer correctly in debug mode', () => {
        const component = shallow(<Button debug/>);
        expect(component).toMatchSnapshot();
    });
  })

})