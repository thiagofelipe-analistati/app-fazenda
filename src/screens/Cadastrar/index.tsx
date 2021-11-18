import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';

export function Cadastrar(): JSX.Element{
    const navigation = useNavigation();
    function handleMatrizes (){
        navigation.navigate('CadastrarMatriz');
    }
    function handleReprodutores (){
      navigation.navigate('CadastrarReprodutor');
    }
    function handleNascimenoto(){
      navigation.navigate('CadastrarNascimento');
    }
    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>
                  Cadastrar Rebanho
                </Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleMatrizes}>
                <Text style={styles.texttitle}> Matrizes </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNascimenoto} >
                <Text style={styles.texttitle}>Nascimento</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleReprodutores}>
                <Text style={styles.texttitle}> Reprodutores </Text>
              </TouchableOpacity>
        </SafeAreaView>
    );
}