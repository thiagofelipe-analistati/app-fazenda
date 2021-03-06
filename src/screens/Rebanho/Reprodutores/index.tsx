import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, TouchableOpacity, FlatList} from 'react-native'
import BoiPng from '../../../assets/boi.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import api from '../../../service/api';
import { RebanhoButton } from '../../../componets/RebanhoButton';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../../styles/colors';


export interface ReprodutorProps {
  key : number;
  dataNascimento : string;
    proprietarios : {
    key: number;
    name: string;
   };
  identificacao : string;
}
export function Reprodutores(): JSX.Element{
  const[reprodutores, setReprodutores] = useState<ReprodutorProps[]>([]);
    const navigation = useNavigation();
    function handleback(){
      navigation.navigate('Rebanho');
  }

    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('reprodutores');
        setReprodutores(data);
      }
      fetchDados();
    },[])

    return (
        <View style={styles.container}>
           <View style={styles.back}> 
                <TouchableOpacity onPress={handleback}>
                  <AntDesign name="arrowleft" size={24} color={colors.green} />
                </TouchableOpacity>
              </View>
              <View style={styles.header}>
              <Image source={BoiPng} style={styles.rebanho} />
                <Text style={styles.title}>
                Reprodutores
                </Text>
              </View>
                <FlatList 
                  data={reprodutores}
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