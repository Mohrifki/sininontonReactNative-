import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';
import { TMDB_IMG_URL } from '@env';

import IconM from 'react-native-vector-icons/MaterialIcons';
import { Space } from '../../../../../component';
import { uiColor, uiDimen, uiStyle } from '../../../../../constants';

const WhatisNewItem = ({data}) => {
  return (
    <TouchableOpacity onPress = {() => {}} style ={styles.imageContainer}> 
      <View style = {styles.metaContainer}>
        <IconM name ="star" color= {uiColor.star} size={14} />
        <Text style = {styles.metaRatingText}>{data.vote_average}</Text>
        <Text style={styles.metaTitle}>
          {data.title}
        </Text>
        <Text numberOfLines={3} style = {styles.headingLinkText}>
          {data.overview}
        </Text>
      </View>
      <Image 
        source= {{uri: `${TMDB_IMG_URL}${data.poster_path}`}}
        style= {styles.image}
        resizeMode = "center"
      />
    </TouchableOpacity>
  );
};

const styles= StyleSheet.create({
  imageContainer: {
    width: 319,
    height: 170,
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.md+5,
    // backgroundColor: 'white'
  },
  image: {
    width: 120, 
    height: 150, 
    borderRadius: uiDimen.sm,
    marginHorizontal: uiDimen.sm,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  metaContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 10,
    width: 319,
    height: 140,
    paddingLeft: uiDimen.xl+100,
    paddingTop: 20,
    paddingEnd: 10,
    backgroundColor: uiColor.accent1,
    opacity: 0.8,
    justifyContent: 'flex-start',
    borderRadius: uiDimen.sm,
  },
  metaTitle: {...uiStyle.textSemiBold, fontSize: 12},
  metaRatingText: {...uiStyle.textSemiBold, fontSize: 12},
  headingLinkText: {...uiStyle.textRegular, fontSize: 13},
});

WhatisNewItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WhatisNewItem;