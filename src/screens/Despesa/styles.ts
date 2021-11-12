import React from "react";

import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: getStatusBarHeight(),
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 32,
        color: colors.green,
        marginTop: 50
    },
    imputform :{
        marginTop: 60,
        width: '85%'
    },
    imput: {
        height: 53,
        textAlign: 'center',
        fontSize: 17,  
        backgroundColor: colors.shape,
        color: colors.body,
    },
    button :{
        width: '85%',
        marginTop: 55,
    },
    gestaobutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 100,
        height: 53,
        backgroundColor: colors.shape,
        marginBottom: 10,
        borderRadius: 20
    },
    textbutton: {
        textAlign: 'center',
        fontSize: 17,  
        color: colors.body,
    }
});
