import React, { useContext, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {UserContext} from '../commons/contexts/user'

const AppContainer = () => {
  const {user, setUser} = useContext(UserContext);

  const handleAuthChanged = (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser)
    } else  {
      setUser(null);
    }
  };

  useEffect(() => {
    const listener = auth().onAuthStateChanged(handleAuthChanged);

    return listener; //unsub
  });

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
  // const isSignedIn = false;

  // return (
  //   <NavigationContainer>
  //     {isSignedIn ? <MainStack /> : <AuthStack />}
  //   </NavigationContainer>
  // );
};

export default AppContainer;
