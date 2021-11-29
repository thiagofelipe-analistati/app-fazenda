import React, { useEffect, useState } from 'react'
import { View, Text} from 'react-native'
import {styles} from './styles'



export function Labels(): JSX.Element{

  return (
    <View style={styles.container}>
      <View style={styles.ali}> 
        <View style={styles.matrizes}></View>
        <Text style={styles.text}>Matrizes</Text>
      </View>
      <View style={styles.ali}> 
        <View style={styles.reprodutores}></View>
        <Text style={styles.text}>reprodutores</Text>
      </View>
      <View style={styles.ali}> 
        <View style={styles.bezerros}></View>
        <Text style={styles.text} >Bezerros</Text>
      </View>
      <View style={styles.ali}> 
        <View style={styles.bezerras}></View>
        <Text style={styles.text}>Bezerras</Text>
      </View>
    </View>
  )
}
