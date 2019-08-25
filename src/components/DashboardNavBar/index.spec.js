import React from 'react';
import { shallow } from 'enzyme';
import DashboardNavBar from './index';

describe('<DashboardNavBar />', () => {
  describe('Rendering', () => {
    it('should render DashboardNavBar correctly in debug mode', () => {
        const component = shallow(<DashboardNavBar />);
        expect(component).toMatchSnapshot();
    });
  })

})

