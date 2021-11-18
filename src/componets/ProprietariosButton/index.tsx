import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View} from 'react-native'

import {styles} from './styles'

export type ProprietariosButtonProps = {
    id: string;
    name: string;
    onPress: () => void;
}

export function ProprietariosButton({id, name, ...rest}: ProprietariosButtonProps): JSX.Element{
    return (
        <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
          <Text style={styles.textid}>{id}</Text>
          <View style={styles.alinhar}>
            <Text style={styles.texttitle}> {name} </Text>
          </View>
        </TouchableOpacity>
    );
}