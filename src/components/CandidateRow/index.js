import React from 'react';
import userImg from '../../assets/images/user.jpg'

const CandidateRow = ({candidate, onVote}) => {
  const {
    id,
    firstname,
    lastname,
    passportUrl,
    partyname,
    logourl
  } = candidate;

  /* istanbul ignore handleCheck */
  const handleCheck = (e) => {
    /* istanbul ignore next */
    const choice = e.target
    /* istanbul ignore next */
    choice.checked = true;
    /* istanbul ignore next */
    const choices = document.querySelectorAll('.choice');
    /* istanbul ignore next */
    let parentTr = choice.closest('tr');
    /* istanbul ignore next */
    let corBtn = parentTr.querySelectorAll('button');
    /* istanbul ignore next */
    corBtn[0].classList.remove('hide');

    /* istanbul ignore next */
    choices.forEach(choic => {
      /* istanbul ignore if */
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
      <td><img src={passportUrl || userImg} alt={firstname} /></td>
      <td>{`${firstname} ${lastname}`}</td>
      <td>{partyname}</td>
      <td><img src={logourl} alt="Logo" /></td>
      <td>
        <button className="btn btn-warning hide" data-candidateid={id} onClick={onVote}>Vote</button>
      </td>
    </tr>
  );
};

export default CandidateRow;
