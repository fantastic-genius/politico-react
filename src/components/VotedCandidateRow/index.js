import React from 'react';
import logo from '@src/assets/images/apc-logo.jpg';

const VotedCandidateRow = ({candidate}) => {
  const {
    officename,
    firstname,
    lastname,
    partyname,
    logourl
  } = candidate;

  return (
    <tr>
      <td>{officename}</td>
      <td>{`${firstname} ${lastname}`}</td>
      <td><img src={logourl || logo} alt="Logo" /></td>
      <td>{partyname}</td>
    </tr>
  );
};

export default VotedCandidateRow;
