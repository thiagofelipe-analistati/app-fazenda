import React, { useEffect, useState } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, FlatList} from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../../componets/Button';
import api from '../../../service/api';
import colors from '../../../styles/colors';
import { AntDesign } from '@expo/vector-icons'; 
import {RectButton} from 'react-native-gesture-handler';
import { Modalview } from '../../../componets/ModalView';
import {  ProprietariosButtonProps } from '../../../componets/ProprietariosButton';
import { Proprietarios } from '../../../componets/Proprietarios';
import VacaPng from '../../../assets/vaca.png';

export function CadastrarMatriz(): JSX.Element{
    const navigation = useNavigation();
    const [identificacao, setIdentificacao] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [proprietario, setProprietario] = useState<ProprietariosButtonProps>({} as ProprietariosButtonProps);
    const [opemModal, setOpemModal] = useState(false);

    function handleOpenModal(){
      setOpemModal(true)
    }
    function handleSelect(selectproprietairo: ProprietariosButtonProps){
      setProprietario(selectproprietairo)
      setOpemModal(false)
    }
    function handleStart (){
        navigation.navigate('Matrizes');
    }
      async function fetchDados() {
       await api.post('matrizes',{
            "id": null,
            "dataNascimento": dataNascimento,
            "proprietarios": {
                "id": proprietario.id,
                "name": proprietario.name
            },
            "identificacao": identificacao
        }).then(function (response){
          console.log(response);
          handleStart ();
        }).catch(function (error){
          console.log(error);
        });
      }   
    return (
        <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <Image source={VacaPng} style={styles.rebanho} />
                <Text style={styles.title}>
                 Nova  Matrizes
                </Text>
              </View>
              <View style={styles.imputform}> 
                <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Identificação"
                  keyboardType="numeric"
                  value={identificacao}
                  onChangeText={(text) => setIdentificacao(text)}
                />
                  <TextInput 
                 style={[styles.imput, {marginBottom: 12}]}
                  placeholder="Data de nascimento dd/mm/aaaa"
                  onChangeText={(text) => setDataNascimento(text)}
                  value={dataNascimento}
                />

                <RectButton style={styles.select} onPress={handleOpenModal}>
                  <Text style={styles.selectText}> { proprietario.name ? proprietario.name : 'Selecionar Proprietário'}</Text>
                  <AntDesign name="caretright" size={35} color={colors.green}/>
                </RectButton>
               </View>
                <View style={styles.button}>
                  {
                    dataNascimento === "" || identificacao === "" || proprietario.name == ""
                    ?
                    <Button title="Confirma"  disabled={true}/>
                    :
                    <Button title="Confirma" onPress={fetchDados}/>
                  }
        
                </View>
                <Modalview visible={opemModal}>
                  <Proprietarios handleGuildSelect={handleSelect} />
                </Modalview>
        </SafeAreaView>
    );
}