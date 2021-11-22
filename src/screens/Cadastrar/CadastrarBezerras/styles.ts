import React from "react";

import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

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
    },
    imputform :{
        marginTop: 40,
        width: '85%'
    },
    imput: {
        height: 60,
        textAlign: 'center',
        fontSize: 17,  
        backgroundColor: colors.shape,
        color: colors.body,
    },
    select:{
        height: 60,
        backgroundColor: colors.shape,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:20,
        
    },
    selectText:{
        fontSize: 17,
        color: colors.green,
        marginLeft:65
    },
    button :{
        width: '85%',
        marginTop: 55,
    },
    buttonModal: {
        width: '90%',
        marginTop: 10,
        borderRadius: 20,
    },
    header: {
        marginTop: 40,
        alignItems: 'center',
    },
    rebanho:{
        width: 110,
        height: 87,
    }
});
