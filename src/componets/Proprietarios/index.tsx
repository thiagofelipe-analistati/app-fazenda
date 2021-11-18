import React, { useEffect, useState } from 'react'
import { FlatList, Text, View} from 'react-native'
import RebanhoPng from '../../assets/rebanho.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';

import { RectButton, RectButtonProps} from  'react-native-gesture-handler'
import { ProprietariosButton, ProprietariosButtonProps } from '../ProprietariosButton';
import api from '../../service/api';

type Props = {
    handleGuildSelect: (proprietario: ProprietariosButtonProps) => void;
}


export function Proprietarios({handleGuildSelect} : Props){
    const[proprietarios, setProprietarios] = useState<ProprietariosButtonProps[]>([]);
    useEffect (()=> {
        async function fetchDados() {
          const {data} = await api.get('proprietarios');
          setProprietarios(data);
          console.log(data)

        }
        fetchDados();
      },[])
    return (
        <View style={styles.container}>
            <FlatList 
            data={proprietarios}
            style={styles.buttonModal}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
            <ProprietariosButton
                id={item.id}
                name={item.name}
            onPress={() => handleGuildSelect(item)}
            />
            )}
            showsVerticalScrollIndicator={false}
           
        />   
      </View>
    );
}