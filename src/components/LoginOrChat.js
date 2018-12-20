import React, {Component} from 'react';
import {connect} from 'react-redux';

import ChatUI from './ChatUI';
// import LoginUI from './LoginUI';

const LoginOrChat = connect(
  (state) => ({
    //   authorized: state.user.authorized
    authorized: true
  })
)(({ authorized }) => {
  if (authorized) {
      return (<ChatUI />);
  }else{
    dispatch(checkUserExists());
    return (<ChatUI />);
  }
});

export default LoginOrChat;
