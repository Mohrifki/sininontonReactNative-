import React from 'react';
import PropsTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { uiColor, uiDimen, uiStyle } from '../constants';

const Button = ({title, onPress, outlined = false}) => {
    return (
        <TouchableOpacity onPress = {onPress} style= {styles.conteiner({outlined})}>
            <Text style={styles.title({outlined})}>{title}</Text>
        </TouchableOpacity> 
    );
};

const styles= StyleSheet.create({
    conteiner: ({outlined}) => ({
        backgroundColor: outlined ? uiColor.bg : uiColor.primary,
        alignItems: 'center',
        paddingVertical: uiDimen.md,
        borderRadius: uiDimen.sm,
        borderWidth: 2,
        borderColor: uiColor.primary,
    }),

    title: ({outlined}) => ({
        ...uiStyle.textBold,
        color: outlined ? uiColor.primary : uiColor.text,
    }),
});

Button.propsTypes = {
    title: PropsTypes.string.isRequired,
    onPress: PropsTypes.func.isRequired,
    outlined: PropsTypes.bool,
};

export default Button;