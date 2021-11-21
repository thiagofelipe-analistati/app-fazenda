import React, { useEffect, useState } from 'react'
import { FlatList, Text, View} from 'react-native'
import {styles} from './styles'
import {MatrizButtonProps, MatrizesButton} from '../MatrizButton'

import api from '../../service/api';

type Props = {
    handleGuildSelect: (matriz: MatrizButtonProps) => void;
}


export function Matriz({handleGuildSelect} : Props){
    const[matriz, setMatriz] = useState<MatrizButtonProps[]>([]);
    useEffect (()=> {
        async function fetchDados() {
          const {data} = await api.get('matrizes');
          setMatriz(data);
          console.log(data)

        }
        fetchDados();
      },[])
    return (
        <View style={styles.container}>
            <FlatList 
            data={matriz}
            style={styles.buttonModal}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
            <MatrizesButton
            id={item.id}
                identificacao={item.identificacao}
                proprietarios={item.proprietarios}
                dataNasciemento={item.dataNasciemento}
            onPress={() => handleGuildSelect(item)}
            />
            )}
            showsVerticalScrollIndicator={false}
           
        />   
      </View>
    );
}