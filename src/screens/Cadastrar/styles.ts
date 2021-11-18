import React from "react";

import { StyleSheet } from "react-native";
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
    button: {
        width: '90%',
        height: 80,
        backgroundColor: colors.shape,
        marginTop: 8,
        borderRadius: 20,         
        alignItems: 'center',
        justifyContent: 'center'
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
    }
});
