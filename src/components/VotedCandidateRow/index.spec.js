import React from 'react';
import { shallow } from 'enzyme';
import VotedCandidateRow from './index';

describe('<VotedCandidateRow />', () => {
  describe('Rendering', () => {
    const candidate = {
      officename: 'President',
      firstname: 'john',
      lastname: 'mark',
      partyname: 'All peoples party',
      logourl: 'https://app.com/logo'
    }
    it('should render VotedCandidateRow correctly in debug mode', () => {
        const component = shallow(<VotedCandidateRow candidate={candidate} />);
        expect(component).toMatchSnapshot();
    });
  })

})

