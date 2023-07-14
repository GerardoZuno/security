import React, {Fragment, useContext} from 'react';
import AuthStack from '../navigation/AuthStack';
import MainStack from '../navigation/MainStack';
import {AuthContext} from '../store/authContext';

const Navigation = () => {
  const {isLogged} = useContext(AuthContext);

  return <Fragment>{isLogged ? <MainStack /> : <AuthStack />}</Fragment>;
};

export default Navigation;
