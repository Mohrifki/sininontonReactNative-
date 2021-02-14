import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import PropTypes from 'prop-types';

import { Space } from '../../../../../component';
import { uiDimen, uiStyle } from '../../../../../constants';
import PopularItem from './PopularItem';

const PopularSection = ({data}) => {
  return (
    <>
      <View style= {styles.headingContainer}>
        <Text style= {styles.headingTitle}>Popular</Text>
        <TouchableOpacity onPress={() =>{}}>
          <Text style= {styles.headingLinkText}> View All</Text>
        </TouchableOpacity>
      </View>
      <Space height={uiDimen.md} />

      <ScrollView horizontal>
        <Space width= {uiDimen.md} />
        {data.map((item, index) => {
          return <PopularItem key={index} data={item} />;
        })}
        <Space width={uiDimen.md} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create ({
  headingContainer: {
    flexDirection: 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingTitle: {...uiStyle.textSemiBold, fontSize: 16},
  headingLinkText: {...uiStyle.textRegularBold, fontSize: 13},
});

PopularSection.propTypes = {
  data: PropTypes.array.isRequired,
}

export default PopularSection;