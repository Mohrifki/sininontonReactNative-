import React, {useContext, useEffect, useState} from 'react';
import {
  Image, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth'
import {TMDB_API_KEY} from '@env';

import { uiColor, uiDimen, uiStyle } from '../../../../constants';
import {Input, Space} from '../../../../component'
import PopularSection from './components/PopularSection';
import TopRatedSection from './components/TopRatedSection'
import WhatisNewSection from './components/WhatisNewSection';
import {UserContext} from '../../../../../commons/contexts/user'
import api from '../../../../../helpers';


const MovieScreen = () => {
  const {user} = useContext(UserContext);
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [upComingData, setUpComingData] = useState([]);

  useEffect(() => {
    api
      .get(`/movie/popular?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setPopularData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
    
      api
      .get(`/movie/top_rated?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setTopRatedData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });

      api
      .get(`/movie/upcoming?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setUpComingData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  return (
    <SafeAreaView style = {uiStyle.baseContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Space height= {uiDimen.md} />
        <View style = {styles.logoContainer}>
          <Image 
            source = {require('../../../../../assets/images/image-128.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>SINI NONTON</Text>
        </View>
        <Space height={uiDimen.md} />

        <View style ={{marginHorizontal: uiDimen.lg}}>
          <Input 
            fullCircle
            palceholder = "Search..."
            placeholderleftIcon={
              <IconM name="search" color={uiColor.placeholder} size={16} />
            }
            value = ""
            onChange = {() => {}}
          />
        </View>
        <Space height={uiDimen.lg} />

        <Text style = {styles.headingText}>Movies</Text>
        <Space height={uiDimen.md} />

        <PopularSection data = {popularData}  />
        <Space height = {uiDimen.lg} />

        <TopRatedSection data = {topRatedData} />

        <Space height = {uiDimen.lg} />
        <WhatisNewSection data = {upComingData} />
        <Space height = {uiDimen.md} />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer :{
    flexDirection : 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center'
  },
  logoImage: {width: 40, height:40},
  logoText: {...uiStyle.textBold, fontSize: 18},
  headingText : {...uiStyle.textBold, fontSize: 20, textAlign: 'center'},
});

export default MovieScreen;