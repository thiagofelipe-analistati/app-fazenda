import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput} from 'react-native'
import RebanhoPng from '../../assets/rebanho.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../componets/Button';

export function Rebanho(): JSX.Element{
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('');
    }
    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <Image source={RebanhoPng} style={styles.rebanho} />
                <Text style={styles.title}>
                  Rebanho
                </Text>
              </View>
              <View style={styles.button}>
                <Text style={styles.texttitle}> Matrizes </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
              </View>
              <View style={styles.button}>
                <Text style={styles.texttitle}> Novilhas </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
              </View>
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
              <View style={styles.button}>
                <Text style={styles.texttitle}> Reprodutor </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>32</Text>
                </View>
              </View>

              
            
        </SafeAreaView>
    );
}