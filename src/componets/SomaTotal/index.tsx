import React, { useEffect, useState } from 'react'
import { Text,View, TextInput, TouchableOpacity, Image} from 'react-native'
import RebanhoPng from '../../assets/rebanho.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import { NascidosButtonProps } from '../NascidosButton';
import api from '../../service/api';
import { MatrizesProps } from '../../screens/Rebanho/Matrizes';
import { ReprodutorProps } from '../../screens/Rebanho/Reprodutores';

export function SomaTotal(): JSX.Element{
    const navigation = useNavigation();
    const[bezerros, setBezerros] = useState<NascidosButtonProps[]>([]);
    const[bezerras, setBezerras] = useState<NascidosButtonProps[]>([]);
    const[matrizes, setMatrizes] = useState<MatrizesProps[]>([]);
    const[reprodutores, setReprodutores] = useState<ReprodutorProps[]>([]);
    
    function handleRebanho (){
      navigation.navigate('Rebanho');
    }

  useEffect (()=> {
    async function fetchDados() {
      const {data} = await api.get('bezerros');
      setBezerros(data);
    }
    fetchDados();
  },[])
  useEffect (()=> {
    async function fetchDados() {
      const {data} = await api.get('bezerras');
      setBezerras(data);
    }
    fetchDados();
  },[])
    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('matrizes');
        setMatrizes(data);
      }
      fetchDados();
    },[])
    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('reprodutores');
        setReprodutores(data);
      }
      fetchDados();
    },[])
  
    return (
      <TouchableOpacity 
      activeOpacity={0.7}
      onPress={handleRebanho}
      >
        <View style={styles.bodyrebanho}> 
          <Image source={RebanhoPng} style={styles.rebanho} />
          <View style={styles.ali} >
              <Text style={styles.titlerebanho} > Rebanho </Text>
              <Text style={styles.titlerebanho}> 
                {reprodutores.length+matrizes.length+bezerras.length+bezerros.length} 
              </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

