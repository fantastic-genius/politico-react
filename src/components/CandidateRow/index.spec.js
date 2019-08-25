import React from 'react';
import { shallow } from 'enzyme';
import CandidateRow from './index';

describe('<CandidateRow />', () => {
  describe('Rendering', () => {
    it('should render CandidateRow correctly', () => {
      const candidate = {
        id: 1,
        firstname: 'john',
        lastname: 'mark',
        passportUrl: 'https://w.pe./img',
        partyname: 'All peoples party',
        logourl: 'https://app.com/logo'
      }
      const mockOnVote = jest.fn(() => {});
      const component = shallow(<CandidateRow candidate={candidate} onVote={mockOnVote} />);
      expect(component).toMatchSnapshot();
    });
  })

})

