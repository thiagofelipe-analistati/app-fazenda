import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View} from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';

export function Financeiro (): JSX.Element{
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('');
    }
    const [userName, setUserName] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text> Em fase de codificaçõa do backend</Text>
            </View>
            <View style={styles.resumo}>
            </View>
            <View style={styles.historico}>
            </View>
        </SafeAreaView>
    );
}