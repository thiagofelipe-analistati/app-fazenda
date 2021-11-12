import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput} from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../componets/Button';

export function Cadastrar(): JSX.Element{
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('');
    }
    return (
        <SafeAreaView style={styles.container}>
              
              <Text style={styles.title}>
                Novo Animal
              </Text>
              <View style={styles.imputform}> 
                <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Identificação"
                />
                  <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Sexo"
                />
                  <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Data de nascimento"
                />
                  <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Proprietário"
                />
                 <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Identificação da matriz"
                />
                </View>
                <View style={styles.button}>
                    <Button title="Confirma" onPress={handleStart}/>
                </View>

            
        </SafeAreaView>
    );
}