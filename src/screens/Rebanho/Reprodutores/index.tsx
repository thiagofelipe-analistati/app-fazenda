import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, TouchableOpacity, FlatList} from 'react-native'
import VacaPng from '../../../assets/vaca.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import api from '../../../service/api';
import { RebanhoButton } from '../../../componets/RebanhoButton';


interface ReprodutorProps {
  key : number;
  dataNascimento : string;
    proprietarios : {
    key: number;
    name: string;
   };
  identificacao : string;
}
export function Reprodutores(): JSX.Element{
  const[matrizes, setMatrizes] = useState<ReprodutorProps[]>([]);
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('');
    }

    useEffect (()=> {

      async function fetchDados() {
        const {data} = await api.get('Reprodutores');
        setMatrizes(data);
        console.log(data);
      }

      fetchDados();
    },[])

    return (
        <View style={styles.container}>
              <View style={styles.header}>
                <Image source={VacaPng} style={styles.rebanho} />
                <Text style={styles.title}>
                Reprodutores
                </Text>
              </View>
                <FlatList 
                  data={matrizes}
                  style={styles.button}
                  renderItem={({item})=>(
                   <RebanhoButton 

                   identificacao={item.identificacao} 
                   title="Reprodutor" 
                   dataNascimento={item.dataNascimento}
                   proprietarios={item.proprietarios}
                  />
                  )}
                  showsVerticalScrollIndicator={false}
                
                />   
        </View>
    );
}