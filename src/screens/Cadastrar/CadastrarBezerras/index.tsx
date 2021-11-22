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
import VacaPng from '../../../assets/bezerro.png';
import { Matriz } from '../../../componets/Matriz';
import { MatrizButtonProps } from '../../../componets/MatrizButton';

export function CadastrarBezerras(): JSX.Element{
    const navigation = useNavigation();
    const [identificacao, setIdentificacao] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [proprietario, setProprietario] = useState<ProprietariosButtonProps>({} as ProprietariosButtonProps);
    const [matriz, setMatriz] = useState<MatrizButtonProps>({} as MatrizButtonProps);
    const [opemModal, setOpemModal] = useState(false);
    const [opemModal1, setOpemModal1] = useState(false);

    function handleOpenModal(){
      setOpemModal(true)
    }
    function handleOpenModal1(){
      setOpemModal1(true)
    }
    function handleSelect1(selectmatriz: MatrizButtonProps){
      setMatriz(selectmatriz)
      setOpemModal1(false)
    }
    function handleSelect(selectproprietairo: ProprietariosButtonProps){
      setProprietario(selectproprietairo)
      setOpemModal(false)
    }
  
    function handleStart (){
        navigation.navigate('Bezerras');
    }
  
      async function fetchDados() {
        await api.post('bezerras', {
         "id": null,
         "dataNascimento": dataNascimento,
         "matrizes": {
             "id": matriz.id,
             "dataNascimento": matriz.dataNasciemento,
             "proprietarios": {
                 "id": matriz.proprietarios.id,
                 "name": matriz.proprietarios.name
             },
             "identificacao": matriz.identificacao
         },
         "identificacao": identificacao,
         "proprietario": {
             "id": proprietario.id,
             "name": proprietario.name
         }
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
                 Cadastrar Bezerra
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
                 style={[styles.imput]}
                  placeholder="Data de nascimento dd/mm/aaaa"
                  
                  onChangeText={(text) => setDataNascimento(text)}
                  value={dataNascimento}
                />
                 <RectButton style={styles.select} onPress={handleOpenModal1}> 
                <View style={styles.contanierselect1}>
                  <Text style={styles.selectText}> { matriz.identificacao ? `Matriz: ${matriz.identificacao} ${matriz.proprietarios.name} ` : ' Selecionar Matriz'}</Text>               
                </View>
                  <AntDesign name="caretright" size={35} color={colors.green}/>
                </RectButton>
                <RectButton style={styles.select} onPress={handleOpenModal}>
                <View style={styles.contanierselect1}>
                <Text style={styles.selectText}> { proprietario.id ? ` ${proprietario.id}  ${proprietario.name}` : 'Selecionar Proprietário'}</Text>
                </View>
                  <AntDesign name="caretright" size={35} color={colors.green}/>
                </RectButton>
               
               </View>
                <View style={styles.button}>
                  {
                    dataNascimento === "" || identificacao === "" || proprietario.name == "" || matriz.identificacao ===""
                    ?
                    <Button title="Confirma"  disabled={true}/>
                    :
                    <Button title="Confirma"  onPress={fetchDados}/>
                  }
                </View>
                <Modalview visible={opemModal}>
                  <Proprietarios handleGuildSelect={handleSelect} />
                </Modalview>
                <Modalview visible={opemModal1}>
                  <Matriz handleGuildSelect={handleSelect1} />
                </Modalview>
        </SafeAreaView>
    );
}