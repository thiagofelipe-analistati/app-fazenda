import React from "react";

import {  StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        width:"100%",
        alignItems: 'center',
        justifyContent:"space-between",
        height: 70,
        backgroundColor: colors.shape,
        marginTop: 8,
        borderRadius: 20,
        flexDirection: 'row',
        paddingHorizontal: 50
    },
    texttitle :{
        fontFamily: fonts.heading,
        color : colors.body,
        fontSize: 16,
    },
    texttitle1: {
        fontFamily: fonts.heading,
        color : colors.green,
        fontSize: 16,
    },
    textid:{
        fontFamily: fonts.heading,
        color :colors.body,
        fontSize: 20,
    },
    alinhar:{
       alignItems: 'center'
    }
});
