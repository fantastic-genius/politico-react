import React from 'react';

const CandidateRow = ({candidate, onVote}) => {
  const {
    id,
    firstname,
    lastname,
    passportUrl,
    partyname,
    logourl
  } = candidate;

  const handleCheck = (e) => {
    const choice = e.target
    choice.checked = true;
    const choices = document.querySelectorAll('.choice');
    let parentTr = choice.closest('tr');
    let corBtn = parentTr.querySelectorAll('button');
    corBtn[0].classList.remove('hide');

    choices.forEach(choic => {
      if(choic !== choice){
        choic.checked = false;
        parentTr = choic.closest('tr');
        corBtn = parentTr.querySelectorAll('.btn');
        if(!corBtn[0].classList.contains('hide')){
            corBtn[0].classList.add('hide');
        }
      }
    })
  }

  return (
    <tr>
      <td><input type="checkbox" className="choice" name="choice" onClick={handleCheck} /></td>
      <td><img src={passportUrl} alt={firstname} /></td>
      <td><a>{`${firstname} ${lastname}`}</a></td>
      <td>{partyname}</td>
      <td><img src={logourl} alt="Logo" /></td>
      <td>
        <button className="btn btn-warning hide" data-candidateid={id} onClick={onVote}>Vote</button>
      </td>
    </tr>
  );
};

export default CandidateRow;
