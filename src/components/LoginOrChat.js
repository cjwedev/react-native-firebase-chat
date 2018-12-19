
import {connect} from 'react-redux';

import ChatUI from './chatUI';
import LoginUI from './LoginUI';

const LoginOrChat = connect(
  (state) => ({
      authorized: state.user.authorized
  })
)(({ authorized }) => {
  if (authorized) {
      return (<ChatUI />);
  }else{
      return (<LoginUI />);
  }
});

export default LoginOrChat;
