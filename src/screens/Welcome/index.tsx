import React from 'react'
import { Text, Image, SafeAreaView, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'
import Bemvindo from '../../assets/bemvindo.png'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { Button } from '../../componets/Button'

export function Welcome (){
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('UserIdentification');
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
            <View style={styles.button}>
                    <Button title="Avançar" onPress={handleStart}/>
            </View>
        </SafeAreaView>
    );
}