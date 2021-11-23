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
     bodyrebanho:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 36,
        paddingHorizontal:40,
        alignItems: 'center'
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
    ali: {
        alignItems: 'center'
    }
});
