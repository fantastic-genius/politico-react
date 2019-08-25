import React from 'react';
import { shallow } from 'enzyme';
import UserDashboardSideBar from './index';

describe('<UserDashboardSideBar />', () => {
  describe('Rendering', () => {
    it('should render UserDashboardSideBar correctly in debug mode', () => {
        const component = shallow(<UserDashboardSideBar />);
        expect(component).toMatchSnapshot();
    });
  })

})

