import React, {useEffect, useState} from 'react';
import {Image, Text, SafeAreaView, View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

import {Space, Input, Button} from '../../../component';
import {uiDimen, uiColor, uiStyle} from '../../../constants';

const SignInScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState(null);
  const [isPassing, setIsPassing] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('i am called');
    if (counter >= 5) {
      setIsPassing(true);
    }
  }, [counter]);

  const handleSignIn = () => {
    setError(null);

    if (email === '' || password === '') {
      setError('all fields can not be empty');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('sukses login');
        })
        .catch((err) => {
          // console.log(typeof err.message);
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
            <Image
              source={require('../../../../assets/images/image-128.png')}></Image>
            <Space height={uiDimen.md} />
            <Text style={styles.title}>Sini Nonton</Text>
          </View>
          <Space height={uiDimen.sm * 5} />

          <Text style={styles.subtitle}>Sign in to your Account</Text>
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

          <Text style={styles.label}>Email</Text>
          <Space height={uiDimen.sm} />
          <Input value={email} onChange={(v) => setemail(v)} />
          <Space height={uiDimen.lg} />

          <Text style={styles.label}>password</Text>
          <Space height={uiDimen.sm} />
          <Input value={password} onChange={(v) => setpassword(v)} />
          <Space height={uiDimen.lg} />

          <Space height={uiDimen.sm} />
          <Button
            title={'sign In'}
            onPress= {handleSignIn} />
          <Space height={uiDimen.md} />

          <Text style={styles.question}>Don't Have an Account? </Text>
          <Space height={uiDimen.md} />

          <Button
            outlined
            title={'Sign Up'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
          <Space height={uiDimen.lg} />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
  question: {...uiStyle.textRegular, fontSize: 16, textAlign: 'center'},
});
