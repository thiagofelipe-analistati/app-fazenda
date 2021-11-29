import React from "react";
import {  StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
    
    },
    reprodutores: { 
        width: 15,
        height: 15,
        backgroundColor: '#00EC93'
    },
    bezerras: { 
        width: 15,
        height: 15,
        backgroundColor: '#9900cc' 
    },
    bezerros: { 
        width: 15,
        height: 15,
        backgroundColor: '#FFB000' 
    },
   matrizes: { 
    width: 15,
    height: 15,
    backgroundColor: '#FF1752' 
    },
    ali : {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    text:{
        fontFamily : fonts.text,
        fontSize: 15,
        color: colors.body,
        marginLeft: 8
    }
});
