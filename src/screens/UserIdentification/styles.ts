import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";



export const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content :{
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
       alignItems: 'center',
       paddingHorizontal: 54,
       justifyContent: 'center',
    },
    emoji :{
        fontSize: 44,
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        textAlign: 'center',
        lineHeight:34,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    imput: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center",
        fontFamily: fonts.text,
    },
    button :{
        width: '100%',
        marginTop: 20,
    },
    avatar :{
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 40,
        marginTop: 40
    },
    buttoImage :{
        width: '80%',
        height: 60,
        marginTop: 20
    },
    buttoText : {
        fontSize: 18,
        textAlign: 'center',
        lineHeight:34,
        color: colors.white,
        fontFamily: fonts.text,
    }
    
})