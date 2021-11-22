import React, { useEffect, useState } from 'react'
import { Text, Image, View, FlatList} from 'react-native'
import BezerroPng from '../../../assets/bezerro.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import api from '../../../service/api';
import {Load} from '../../../componets/Load'
import {NascidoButton, NascidosButtonProps} from '../../../componets/NascidosButton';



export function Bezzeros(): JSX.Element{
  const[matrizes, setMatrizes] = useState<NascidosButtonProps[]>([]);
  
  const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    function handleStart (){
        navigation.navigate('');
    }

    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('nascidos');
        setMatrizes(data);
        console.log(data);
        setLoading(false);
      }
      fetchDados();
    },[])
    if(loading){
      return <Load />
    }
    return (
        <View style={styles.container}>
              <View style={styles.header}>
                <Image source={BezerroPng} style={styles.rebanho} />
                <Text style={styles.title}>
                  Bezerros
                </Text>
              </View>
                <FlatList 
                  data={matrizes}
                  style={styles.button}
                  renderItem={({item : repository})=>(
                   <NascidoButton
                      dataNascimento={repository.dataNascimento}
                      identificacao={repository.identificacao}
                      sexo={repository.sexo}
                      title="Bezerros" matrizes={{
                        key: 0,
                        identificacao: repository.matrizes.identificacao
                      }} 
                      proprietario={{
                        name: repository.proprietario.name
                      }}                      
                      />
                  )}
                  showsVerticalScrollIndicator={false}
                
                />   
        </View>
    );
}