import React from "react";

import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: getStatusBarHeight(),
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    greeting : {
        fontSize: 32,
        color: colors.heading, 
        fontFamily: fonts.text
    },
    usernaem :{
        fontSize: 32,
        color: colors.green, 
        fontFamily: fonts.heading,
        lineHeight: 40,
    },
    saldo: {
        fontSize: 23,
        color: colors.green, 
        fontFamily: fonts.text,
    },
    ali: {
        alignItems: 'center'
    },
    fazenda: {
        fontSize: 17,
        color: colors.body, 
        fontFamily: fonts.heading,
        marginTop: 20,
        marginLeft: -110
    },
    body: {
        width: '90%',
        height: 415,
        backgroundColor: colors.shape,
        marginTop: 40,
        borderRadius: 20,
    },
    bodyrebanho:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 36,
        paddingHorizontal:40,
        alignItems: 'center'
    },
    gestao: {
        width: '90%',
        height: 65,
        backgroundColor: colors.shape,
        marginTop: 20,
        borderRadius: 20,
    },
    gestaobutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50,
        flex: 1
    },
    rebanho:{
        width: 110,
        height: 87,
    },
    titlerebanho: {
        fontFamily: fonts.heading,
        color: colors.green,
        fontSize: 32
    },
    textbutton: {
        fontFamily: fonts.heading,
        color: colors.green,
        fontSize: 20
    }
})