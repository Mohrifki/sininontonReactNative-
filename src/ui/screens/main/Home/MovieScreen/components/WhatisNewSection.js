import React from 'react';
import {
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View
} from 'react-native';
import PropTypes from 'prop-types';

import {Space} from '../../../../../component';
import {uiDimen, uiStyle} from '../../../../../constants';
import WhatisNewItem from './WhatisNewItem'

const WhatisNewSection = ({data}) => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTitle}>What's is New</Text>
      </View>
      <Space height={uiDimen.md} />

      <ScrollView vertical>
  
        {data.map((item, index) => {
          return <WhatisNewItem key = {index} data = {item} />
        })}
        <Space height={uiDimen.md} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
  },
  headingTitle: {...uiStyle.textSemiBold, fontSize: 16},
  
});

WhatisNewSection.propTypes = {
  data: PropTypes.array.isRequired,
};

export default WhatisNewSection;
