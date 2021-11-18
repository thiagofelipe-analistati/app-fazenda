import React, { useEffect, useState } from 'react'
import { Text, View} from 'react-native'
import RebanhoPng from '../../assets/rebanho.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';

import { RectButton, RectButtonProps} from  'react-native-gesture-handler'

interface RebanhoButtonProps extends RectButtonProps {
   identificacao: string;
   title: string;
   dataNascimento : string;
   proprietarios : {
    key: number;
    name: string;
   }
}
export function RebanhoButton({identificacao,title, dataNascimento, proprietarios, ...rest}: RebanhoButtonProps){
    return (
        <RectButton style={styles.container} {...rest}>
          <Text style={styles.textid}>{identificacao}</Text>
          <Text style={styles.texttitle}> {title} </Text>
          <View style={styles.alinhar}>
            <Text style={styles.textPropritario} > Proprietário </Text>
            <Text style={styles.texttitle}> {proprietarios.name} </Text>
          </View>
        </RectButton>
    );
}