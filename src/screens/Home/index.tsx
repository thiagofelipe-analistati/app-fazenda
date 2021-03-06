import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, View} from 'react-native'
import {styles} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../styles/colors';
import { SomaTotal } from '../../componets/SomaTotal';
import { PieData } from '../../componets/PieData';
import { Labels } from '../../componets/Labels';

export function Home (): JSX.Element{
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('TabF');
    }
    function handleRebanho (){
        navigation.navigate('Rebanho');
    }
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }
        loadStorageUserName();
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View >
                    <Text style={styles.greeting}> Olá,</Text>
                    <Text style={styles.usernaem}>{userName} </Text>
                </View>
                <View style={styles.ali}>
                    <Text style={styles.saldo}> Saldo atual</Text>
                    <Text style={styles.saldo}>R$ 0,00</Text>
                </View>
            </View>
            <Text style={styles.fazenda}> Bem vindo a Fazenda São José </Text>
            <TouchableOpacity style={styles.body} onPress={handleRebanho}>
                <SomaTotal />
                <View style={styles.flew}> 
                <View style={styles.pie}> 
                    <PieData />
                </View>
                    <Labels />
              </View>
            </TouchableOpacity>
            <View style={styles.gestao}>
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={handleStart}
                    style={styles.gestaobutton}
                >
                    <Text style={styles.textbutton} > Gestão finaceira </Text>
                    <AntDesign name="caretright" size={35} color={colors.green}/>
                </TouchableOpacity>      
            </View>

        </View>
    );
}