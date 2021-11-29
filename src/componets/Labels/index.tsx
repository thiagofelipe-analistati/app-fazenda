import React, { useEffect, useState } from 'react'
import { View, Text} from 'react-native'
import {styles} from './styles'



export function Labels(): JSX.Element{

  return (
    <View style={styles.container}>
      <View style={styles.ali}> 
        <View style={styles.matrizes}></View>
        <Text>Matrizes</Text>
      </View>
      <View style={styles.ali}> 
        <View style={styles.reprodutores}></View>
        <Text>reprodutores</Text>
      </View>
      <View style={styles.ali}> 
        <View style={styles.bezerros}></View>
        <Text >Bezerros</Text>
      </View>
      <View style={styles.ali}> 
        <View style={styles.bezerras}></View>
        <Text >Bezerras</Text>
      </View>
    </View>
  )
}
