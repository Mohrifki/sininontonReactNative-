import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieDetailScreen from '../ui/screens/main/global/MovieDetailScreen'
import HomeBottomTab from './HomeBottomTab'

const Stack =createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator headerMode = "none">
            <Stack.Screen
                name= "DetailMove"
                component = {HomeBottomTab}></Stack.Screen>
            <Stack.Screen
            name = "Home" component ={MovieDetailScreen}></Stack.Screen>
        </Stack.Navigator>
    );
};
export default MainStack;