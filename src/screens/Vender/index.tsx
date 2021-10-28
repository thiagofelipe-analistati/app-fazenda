import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View} from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import RebanhoPng from '../../assets/rebanho.png';
export function Vender (): JSX.Element{
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('');
    }

    return (
        <SafeAreaView style={styles.container}>
              <Text>
                  Vender
              </Text>
        </SafeAreaView>
    );
}