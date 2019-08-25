import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '@src/store';
import DashboardNavBar from './index';

describe('<DashboardNavBar />', () => {
  describe('Rendering', () => {
    it('should render DashboardNavBar correctly in debug mode', () => {
        const component = shallow(
          <Provider store={store}>
            <DashboardNavBar />
          </Provider>
        );
        expect(component).toMatchSnapshot();
    });
  })

})

