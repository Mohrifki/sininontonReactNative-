import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../ui/screens/auth/SignScreen';
import SignUpScreen from '../ui/screens/auth/SignUpScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
