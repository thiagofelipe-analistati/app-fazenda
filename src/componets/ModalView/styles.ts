import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
    },
    overlay : {
        backgroundColor: colors.gray,
        flex: 1
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius:2,
        backgroundColor: colors.body,
        alignSelf: 'center',
        marginTop: 13
    }
})