import React from 'react'
import { Text, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import Bemvindo from '../../assets/bemvindo.png'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

export function Home (){
    const navigation = useNavigation();
    function handleStart (){
        
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}sua fazenda de{'\n'} forma fácil
            </Text>
            <Image source={Bemvindo} style={styles.image} />
            <Text style={styles.subtitle}>
            Gestão pecuária e financeira  {'\n'} em um único lugar.
            </Text >
            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            onPress={handleStart}
            >
                <Feather style={styles.textbutton} name="chevron-right" /> 
            </TouchableOpacity>
        </SafeAreaView>
    );
}