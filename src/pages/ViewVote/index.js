/* eslint-disable no-useless-constructor */
/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { connect } from  'react-redux';
import DashboardContainer from '@components/DashboardContainer';
import { getVotedCandidates} from '@actions/Vote';
import VotedCandidateRow from '@components/VotedCandidateRow';

class ViewVote extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { userId, token } = this.props;
    this.props.getVotedCandidates(userId, token)
  }

  loadVotedCandidates = () => {
    const { votedCandidates , votedCandidatesLoaded } = this.props;
    return votedCandidatesLoaded  && votedCandidates.length ?
      votedCandidates.map((votedCandidate, index) => (
        <VotedCandidateRow key={index} candidate={votedCandidate} />
      )) : (<tr></tr>);
  }

  render () {
      return (
        <DashboardContainer>
          <article>
            <div className="title-con">
              <h3>Candidates Voted For</h3>
              <hr />
            </div>
            <table>
              <thead>
                <tr>
                  <td>Political Office</td>
                  <td>Politician</td>
                  <td>Party Logo</td>
                  <td>Party</td>
                </tr>
              </thead>
              <tbody>
                {this.loadVotedCandidates()}
              </tbody>
            </table>
            {!this.props.votedCandidates.length ? (<h4>You have not make any vote yet</h4>) : ''}
          </article>
        </DashboardContainer>
    );
  }
}

const mapStateToProps = state => ({
  votedCandidates: state.vote.votedCandidates,
  error: state.vote.error,
  token: state.auth.token,
  userId: state.auth.user.id,
  votedCandidatesLoaded: state.vote.votedCandidatesLoaded,
});

export default connect(mapStateToProps, {
  getVotedCandidates
})(ViewVote);
