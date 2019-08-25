import React from 'react';
import { shallow } from 'enzyme';
import store from '@src/store';
import UserInfo from './index';

describe('<UserInfo />', () => {
  describe('Rendering', () => {
    const user = {
      firstname: 'john',
      lastname: 'mark',
      passportUrl: 'https://w.pe./img',
    }
    it('should render UserInfo correctly in debug mode', () => {
        const component = shallow(<UserInfo store={store} user={user} />);
        expect(component).toMatchSnapshot();
    });
  })

})

