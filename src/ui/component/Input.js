import React from 'react';
import PropsTypes from 'prop-types';
import { StyleSheet, TextInput, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

import {uiColor, uiDimen, uiStyle} from '../constants'
import {Space} from '.';

const Input = ({
    value, 
    onChange, 
    fullCircle = false, 
    palceholder, 
    placeholderleftIcon
}) => {
    return (
        <View style= {styles.container({fullCircle})}>
            {placeholderleftIcon}
            {/* <IconM name ="search" color = {uiColor.placeholder} size={16} /> */}
            <Space width={uiDimen.sm / 2} />
            <TextInput
                // secureTextEntry={secure}
                placeholder = {palceholder}
                placeholderTextColor={uiColor.placeholder} 
                value = {value} 
                onChangeText= {onChange} 
                style= {styles.input}
                keyboardType="default" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container : ({fullCircle}) => ({
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: uiColor.accent1,
        borderWidth : 1,
        borderColor : uiColor.border,
        borderRadius: fullCircle ? uiDimen.xl : uiDimen.sm,
        paddingHorizontal: uiDimen.md,
        paddingVertical: uiDimen.sm / 2,
    }),
    input: {
        flex : 1,
        ...uiStyle.textRegular,
        fontSize: 16,
    },
});

Input.propsTypes= {
    value: PropsTypes.string.isRequired,
    onChange: PropsTypes.func.isRequired,
    fullCircle: PropsTypes.bool,
    placeholder: PropsTypes.string,
    placeholderleftIcon: PropsTypes.object,
};
export default Input;