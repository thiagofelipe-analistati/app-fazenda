import React from 'react'
import { Text, View} from 'react-native'
import {styles} from './styles'
import LottieView from 'lottie-react-native'
import LoadAnimation from '../../assets/load1.json';

export function Load (){
    return (
            <View  style={styles.container}>
                <LottieView 
                source={LoadAnimation}
                autoPlay
                loop
                style={styles.animation}
                />
            </View>
    );
}