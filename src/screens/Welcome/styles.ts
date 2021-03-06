import React from "react";

import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 80,
    },
    title: {
        fontSize: 28,
        color: colors.heading,
        textAlign: 'center',
        fontFamily: fonts.heading,
        lineHeight:34,
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal:20,
        color: colors.heading,
        textAlign: 'center',
        marginTop:40,
        fontFamily: fonts.text
    }, 
    image : {
        height: Dimensions.get('window').width*0.7,
        width:370,
    },
    button :{
        width: '75%',
        marginTop: 20,
    }, 
    textbutton: {
        color: colors.white,
        fontSize: 24,
        justifyContent: 'center'
    }
})