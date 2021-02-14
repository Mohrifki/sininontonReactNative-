import React, { useContext } from 'react';
import {SafeAreaView, Text} from 'react-native';
import {UserContext} from '../../../../../commons/contexts/user'
import {Button} from '../../../../component'
import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
  const {user} = useContext(UserContext);

  const handleSignOut = () => {
    auth().signOut();
  };
   return (
    <SafeAreaView>
      <Text>halo {user?.displayName}</Text>
      <Button title= "Sign Out" onPress= {handleSignOut} />
    </SafeAreaView>
  );
};

export default AccountScreen;