import React, { useEffect, useState } from 'react';
import { connect } from  'react-redux';
import DashboardContainer from '@components/DashboardContainer';
import { getVotedCandidates, getOfficeCandidates, voteCandidate, cleanUp } from '@actions/Vote';
import getOffices from '@actions/Office';
import CandidateRow from '@components/CandidateRow';
import { callToast } from '@components/Toast'

const Vote = (props) => {

  const {
    voted,
    offices,
    votedCandidates,
    candidates,
    candidatesLoading,
    candidatesLoaded,
    error,
    token,
    userId
  } = props;
  const [officeId, setOfficeId] = useState(null);
  const loadOffices = offices ? 
      offices.map(office => {
        if(votedCandidates && votedCandidates.length > 0){
            let isOfficeVoted = false
            votedCandidates.forEach(votedCandidate => {
                if(votedCandidate.officeid === office.id){
                  isOfficeVoted = true
                }
            })

            if(isOfficeVoted !== true){
                return (<option value={office.id} key={office.id}>{office.name}</option>)
            }
        }else{
            return (<option value={office.id} key={office.id}>{office.name}</option>);
        }
    }) : '';

  const onVote = (e) => {
    e.preventDefault();
    const button = e.target;
    const candidateId = button.dataset.candidateid;
    const values = {
      office: officeId,
      candidate: candidateId
    }
    props.voteCandidate(token, values);
  }

  const loadCandidates = candidatesLoaded && candidates.length ?
    candidates.map(candidate => (
      <CandidateRow key={candidate.id} candidate={candidate} onVote={onVote} />
      )) : (<tr></tr>);
  
  const onChange = (e) => {
    e.persist();
    const officId = e.target.value;
    setOfficeId(officId);
    /* istanbul ignore next */
    props.getOfficeCandidates(token, officId)
  }
  useEffect(() => {
    props.cleanUp();
    if(userId){
      /* istanbul ignore next */
      props.getVotedCandidates(userId, token)
      props.getOffices(token);
    }

    if (voted) {
      /* istanbul ignore next */
      callToast('success', 'You have successfully voted');
    }else if(error){
      /* istanbul ignore next */
      callToast('error', error);
    }
  },[userId, voted])

  return (
    <DashboardContainer>
      <article>
        <div className="title-con">
          <h3>Vote Choice Candidate</h3>
          <hr />
        </div>
        <div id="alert"></div>
        <div className="select-con">
          <label htmlFor="office">Political Office</label>
          <select name="office" id="office-select" onChange={onChange}>
            <option>Select an Office</option>
            {loadOffices}
          </select>
        </div>
        <div>
          {candidatesLoading ? <h3>loading...</h3> :
          <table id="candidates-table">
            <thead>
              <tr>
                <td></td>
                <td>Photo</td>
                <td>Politician Name</td>
                <td>Party</td>
                <td>Party Logo</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {loadCandidates}
            </tbody>
          </table>
          }
          {!candidates.length && !candidatesLoading ? (<h4>No Candidate for this office</h4>) : ''}
        </div>    
      </article>
    </DashboardContainer>
  )
}

const mapStateToProps = state => ({
  voted: state.vote.voted,
  candidatesLoading: state.vote.candidatesLoading,
  candidatesLoaded: state.vote.candidatesLoaded,
  votedCandidates: state.vote.votedCandidates,
  candidates: state.vote.candidates,
  error: state.vote.error,
  token: state.auth.token,
  userId: state.auth.user.id,
  offices: state.office.offices
});

export default connect(mapStateToProps, {
  getVotedCandidates, getOfficeCandidates, voteCandidate, getOffices, cleanUp
})(Vote);
