import React from 'react';
import { connect } from 'react-redux';
import userImg from '../../assets/images/user.jpg'

const UserInfo = ({user: { firstname, lastname, passportUrl}}) => {
  return (
    <div className="user">
      <div className="photo">
        <img id="user-img" src={passportUrl || userImg} alt="User" />
      </div>
      <div className="username">
        <p id="user-name">{`${firstname} ${lastname}`}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {})(UserInfo);
