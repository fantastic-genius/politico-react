import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './index';

describe('<NavBar />', () => {
  describe('Rendering', () => {
    it('should render Footer correctly in debug mode', () => {
        const component = shallow(<NavBar debug/>);
        expect(component).toMatchSnapshot();
        expect(component.find('button')).toHaveLength(2)
    });
  })

})
