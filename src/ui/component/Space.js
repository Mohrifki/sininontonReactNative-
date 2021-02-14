import React from 'react';
import PropsTypes from 'prop-types'
import {View} from 'react-native';

const Space = ({height = 0, width = 0}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
      }}
    />
  );
};

export default Space;

Space.PropsTypes = {
  height: PropsTypes.number,
  width: PropsTypes.number,
};