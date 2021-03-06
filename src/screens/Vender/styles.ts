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
    gestao: {
        width: '100%',
        height: 53,
        backgroundColor: colors.shape,
        borderRadius: 20,
        marginBottom: 10
    },
    gestaobutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 80,
        marginTop: 8,
        marginLeft: 50
    },
    textbutton: {
        textAlign: 'center',
        fontSize: 17,  
        color: colors.body,
    }
});
