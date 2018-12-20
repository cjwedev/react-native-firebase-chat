import React, {Component} from 'react';
import {connect} from 'react-redux';

import ChatUI from './ChatUI';
import LoginUI from './LoginUI';

import { checkUserExists } from '../actions';

const LoginOrChat = connect(
  (state) => ({
    authorized: state.user.authorized
  })
)(({ authorized, dispatch }) => {
  if (authorized) {
    return (<ChatUI />);
  }else{
    dispatch(checkUserExists());
    return (<LoginUI />);
  }
});

export default LoginOrChat;
