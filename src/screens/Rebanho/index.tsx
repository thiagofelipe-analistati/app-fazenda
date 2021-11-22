import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native'
import RebanhoPng from '../../assets/rebanho.png';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import { NascidosButtonProps } from '../../componets/NascidosButton';
import { Load } from '../../componets/Load';
import api from '../../service/api';
import { MatrizesProps } from './Matrizes';
import { ReprodutorProps } from './Reprodutores';

export function Rebanho(): JSX.Element{
    const navigation = useNavigation();
    const[bezerros, setBezerros] = useState<NascidosButtonProps[]>([]);
    const[bezerras, setBezerras] = useState<NascidosButtonProps[]>([]);
    const[matrizes, setMatrizes] = useState<MatrizesProps[]>([]);
    const[reprodutores, setReprodutores] = useState<ReprodutorProps[]>([]);
    const [loading, setLoading] = useState(true);
        
    function handleMatrizes (){
        navigation.navigate('Matrizes');
    }
    function handleReprodutores (){
      navigation.navigate('Reprodutores');
  }
  function handleBezerros (){
    navigation.navigate('Bezerros');
}
function handleBezerras (){
  navigation.navigate('Bezerras');
}
  useEffect (()=> {
    async function fetchDados() {
      const {data} = await api.get('bezerros');
      setBezerros(data);
      setLoading(false);
    }
    fetchDados();
  },[])
  useEffect (()=> {
    async function fetchDados() {
      const {data} = await api.get('bezerras');
      setBezerras(data);
      setLoading(false);
    }
    fetchDados();
  },[])
    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('matrizes');
        setMatrizes(data);
        setLoading(false);
      }
      fetchDados();
    },[])
    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('reprodutores');
        setReprodutores(data);
        console.log(data);
      }
      fetchDados();
    },[])
  if(loading){
    return <Load />
  }
    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <Image source={RebanhoPng} style={styles.rebanho} />
                <Text style={styles.title}>
                  Rebanho
                </Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleMatrizes}>
                <Text style={styles.texttitle}> Matrizes </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>{matrizes.length}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleBezerros}>
                <Text style={styles.texttitle}> Bezerros </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>{bezerros.length}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleBezerras}>
                <Text style={styles.texttitle}> Bezerras </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>{bezerras.length}</Text>
                </View>
                </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleReprodutores}>
                <Text style={styles.texttitle}> Reprodutores </Text>
                <View style={styles.alitext}>
                  <Text style={styles.textbody}>Quantidade</Text>
                  <Text style={styles.textquantidade}>{reprodutores.length}</Text>
                </View>
              </TouchableOpacity>
        </SafeAreaView>
    );
}