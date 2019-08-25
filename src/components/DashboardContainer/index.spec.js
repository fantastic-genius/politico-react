import React from 'react';
import { shallow } from 'enzyme';
import DashboardContainer from './index';

describe('<DashboardContainer />', () => {
  describe('Rendering', () => {
    it('should render DashboardContainer correctly in debug mode', () => {
        const component = shallow(<DashboardContainer />);
        expect(component).toMatchSnapshot();
    });
  })

})

