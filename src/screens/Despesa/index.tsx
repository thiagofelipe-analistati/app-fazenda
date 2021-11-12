import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../componets/Button';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../styles/colors';

export function Despesa(): JSX.Element{
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('');
    }
    return (
        <SafeAreaView style={styles.container}>
              
              <Text style={styles.title}>
                Nova Despesa
              </Text>
              <View style={styles.imputform}> 
                  <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Data"
                />
                  <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Valor"
                />
                  <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Descrição"
                />
                </View>
                <View style={styles.button}>
                    <Button title="Confirma" onPress={handleStart}/>
                </View>

            
        </SafeAreaView>
    );
}