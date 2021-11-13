import React from "react";

import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        height: 85,
        backgroundColor: colors.shape,
        marginTop: 8,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    texttitle :{
        fontFamily: fonts.heading,
        color : colors.body,
        fontSize: 17,
    },
    textid:{
        fontFamily: fonts.heading,
        color :colors.body,
        fontSize: 20,
    },
 
});
