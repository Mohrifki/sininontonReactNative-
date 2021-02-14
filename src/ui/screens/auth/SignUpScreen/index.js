import React, {useState} from 'react';
import {Image, Text, SafeAreaView, View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

import {Space, Input, Button} from '../../../component';
import { uiDimen, uiStyle } from '../../../constants';


const signUpscreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword]  = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    setError(null);

    if (name === '' || email === '' || password === '') {
      setError('all fields can not be empty');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          userCredential.user.updateProfile({displayName: name});
        })
        .catch((err) => {
          setError(err.message);
        }); 
    }
  };

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Space height={uiDimen.lg} />
          <View style={styles.logoContainer}>
            <Image source={require('../../../../assets/images/image-128.png')}></Image>
            <Space height={uiDimen.md} />
            <Text style={styles.title}>Sini Nonton</Text>
          </View>
          <Space height={uiDimen.sm * 5} />

          <Text style={styles.subtitle}>Sign Up Now</Text>
          <Space height={uiDimen.lg} />

          {error && (
            <>
              <View style={{padding: uiDimen.sm, backgroundColor: 'red'}}>
                <Text
                  style={{
                    ...uiStyle.textSemiBold,
                    fontSize: 14,
                  }}>
                  {error}
                </Text>
              </View>
              <Space height={uiDimen.sm} />
            </>
          )}

          <Text style={styles.label}>Name</Text>
          <Space height={uiDimen.sm} />
          <Input palceholder = "name" value={name} onChange={(v) => setName(v)} />
          <Space height={uiDimen.lg} />

          <Text style={styles.label}>Email</Text>
          <Space height={uiDimen.sm} />
          <Input palceholder = "Email" value={email} onChange={(v) => setemail(v)} />
          <Space height={uiDimen.lg} />

          <Text style={styles.label}>password</Text>
          <Space height={uiDimen.sm} />
          <Input palceholder = "password" value={password} onChange={(v) => setpassword(v)} />
          <Space height={uiDimen.lg} />

          <Space height = {uiDimen.sm} />
          <Button title={'Sign Up'} onPress={handleSignUp}/>
          <Space height = {uiDimen.md}  />

          <Text style= {styles.question}>Alredy have an account</Text>
          <Space height={uiDimen.md} />

          <Button
            outlined
            title={'Sign in'} 
            onPress ={() => {
              navigation.navigate('SignIn');
            }}
          />
          <Space height= {uiDimen.lg} /> 
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>

  );
};

export default signUpscreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: uiDimen.lg,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {...uiStyle.textBold, fontSize: 24},
  content: {marginHorizontal: 24},
  subtitle: {...uiStyle.textRegular, fontSize: 20},
  label: {...uiStyle.textSemiBold, fontSize: 16},
  question : {...uiStyle.textRegular, fontSize: 16, textAlign: 'center'},
});