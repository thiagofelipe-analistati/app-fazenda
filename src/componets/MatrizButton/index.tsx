import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View} from 'react-native'

import {styles} from './styles'

export type MatrizButtonProps = {
    id : string,
    identificacao: string;
    dataNasciemento: string;
    proprietarios : {
      id: string;
     name: string;
    }
    onPress: () => void;
}
export function MatrizesButton({identificacao,proprietarios, ...rest}: MatrizButtonProps): JSX.Element{
    return (
        <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
          <Text style={styles.textid}>{identificacao}</Text>
          <Text style={styles.texttitle1}> Matriz </Text>
          <View style={styles.alinhar}>
            <Text style={styles.texttitle}> Proprietário </Text>
            <Text style={styles.texttitle1}> {proprietarios.name} </Text>
          </View>
        </TouchableOpacity>
    );
}