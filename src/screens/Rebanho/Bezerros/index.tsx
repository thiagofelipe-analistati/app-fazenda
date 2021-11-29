import React, { useEffect, useState } from 'react'
import { Text, Image, View, FlatList, TouchableOpacity} from 'react-native'
import BezerroPng from '../../../assets/bezerro.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import api from '../../../service/api';
import {Load} from '../../../componets/Load'
import {NascidoButton, NascidosButtonProps} from '../../../componets/NascidosButton';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../../styles/colors';

export function Bezzeros(): JSX.Element{
  const[bezerros, setBezerros] = useState<NascidosButtonProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  function handleback (){
      navigation.navigate('Rebanho');
  }
    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('bezerros');
        setBezerros(data);
        setLoading(false);
      }
      fetchDados();
    },[])
    if(loading){
      return <Load />
    }
    return (
        <View style={styles.container}>
           <View style={styles.back}> 
                <TouchableOpacity onPress={handleback}>
                  <AntDesign name="arrowleft" size={24} color={colors.green} />
                </TouchableOpacity>
              </View>
              <View style={styles.header}>
                <Image source={BezerroPng} style={styles.rebanho} />
                <Text style={styles.title}>
                  Bezerros
                </Text>
              </View>
                <FlatList 
                  data={bezerros}
                  style={styles.button}
                  renderItem={({item : repository})=>(
                   <NascidoButton
                      dataNascimento={repository.dataNascimento}
                      identificacao={repository.identificacao}

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