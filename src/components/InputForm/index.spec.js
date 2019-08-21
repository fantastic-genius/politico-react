import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './index';

describe('<InputForm />', () => {
  describe('Rendering', () => {
    it('should render Footer correctly in debug mode', () => {
        const component = shallow(<InputForm debug/>);
        expect(component).toMatchSnapshot();
    });
  })

});
