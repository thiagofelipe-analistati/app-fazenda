import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native'
import RebanhoPng from '../../assets/rebanho.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';

export function Rebanho(): JSX.Element{
    const navigation = useNavigation();
    function handleMatrizes (){
        navigation.navigate('Matrizes');
    }
    function handleReprodutores (){
      navigation.navigate('Reprodutores');
  }
  function handleBezerros (){
    navigation.navigate('Bezerros');
}
    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <Image source={RebanhoPng} style={styles.rebanho} />
                <Text style={styles.title}>
                  Rebanho
                </Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleMatrizes}>
                <Text style={styles.texttitle}> Matrizes </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleBezerros}>
                <Text style={styles.texttitle}> Novilhas </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
                </TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.texttitle}> Bezerras </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
              </View>
              <View style={styles.button}>
                <Text style={styles.texttitle}> Bezerros </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleReprodutores}>
                <Text style={styles.texttitle}> Reprodutores </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
              </TouchableOpacity>
        </SafeAreaView>
    );
}