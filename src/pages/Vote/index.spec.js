import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '@src/store';
import Vote from './index';

describe('<Vote />', () => {
  describe('Rendering', () => {
    it('should render Vote page correctly', () => {
      const component = shallow(
        <Router>
          <Vote/>
        </Router>
      );
      expect(component).toMatchSnapshot();
    });

    it('should render Vote page correctly with its children when candidates is loading', () => {
        const component = mount(
          <Provider store={store}>
            <Router>
              <Vote candidatesLoading />
            </Router>
          </Provider>
        );
        expect(component).toMatchSnapshot();
        expect(component.find('select')).toHaveLength(1);
    });

    it('should render Vote page correctly with its children when candidates is loaded', () => {
      const candidates = [{
        id: 1,
        firstname: 'john',
        lastname: 'mark',
        passportUrl: 'https://w.pe./img',
        partyname: 'All peoples party',
        logourl: 'https://app.com/logo'
      }];

      const component = mount(
        <Provider store={store}>
          <Router>
            <Vote candidatesLoaded={true} candidates={candidates} />
          </Router>
        </Provider>
      );
      expect(component).toMatchSnapshot();
      const select = component.find('select');
      expect(select).toHaveLength(1);
      select.simulate('change', { preventDefault() { }})

    });
  });

})
