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
    header: {
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 50,
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 32,
        color: colors.green
    },
    rebanho:{
        width: 110,
        height: 87,
    },
    button: {
        width: '90%',
        height: 80,
        backgroundColor: colors.shape,
        marginTop: 8,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    alitext : {
        alignItems: 'center'
    },
    texttitle :{
        fontFamily: fonts.heading,
        color : colors.body,
        fontSize: 17,
    },
    textbody:{
        fontFamily: fonts.text,
        color : colors.body_light,
        fontSize: 13,
    },
    textquantidade:{
        fontFamily: fonts.heading,
        color : colors.body,
        fontSize: 13,
    }
});
