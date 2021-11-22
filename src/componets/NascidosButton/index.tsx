import React, { useEffect, useState } from 'react'
import { Text, View} from 'react-native'
import {styles} from './styles'

import { RectButton, RectButtonProps} from  'react-native-gesture-handler'


 export interface NascidosButtonProps extends RectButtonProps {
   
  title: string;
  dataNascimento : string;
  matrizes: {
    key: number;
    identificacao: string;
  }
  identificacao: string;
  sexo: string;
  proprietario : {
    name : string;
  };
}

export function NascidoButton({identificacao,title, dataNascimento, proprietario, sexo, matrizes, ...rest}: NascidosButtonProps): JSX.Element{
    return (
        <RectButton style={styles.container} {...rest}>
          <Text style={styles.textid}>{identificacao}</Text>
          <View style={styles.alinhar}>
          <Text style={styles.texttitle}> Sexo </Text>
          <Text style={styles.textPropritario}> {sexo} </Text>
          </View>
          <View style={styles.alinhar}>
            <Text style={styles.texttitle} > Proprietário </Text>
            <Text style={styles.textPropritario} > {proprietario.name} </Text>
          </View>
          <View style={styles.alinhar}>
            <Text style={styles.texttitle} > Matriz </Text>
            <Text style={styles.textPropritario} > {matrizes.identificacao} </Text>
            
          </View>
        </RectButton>
    );
}