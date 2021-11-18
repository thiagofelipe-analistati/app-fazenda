import React, { ReactNode } from 'react'
import { Text, View, Modal, ModalProps} from 'react-native'
import {styles} from './styles'

type Props = ModalProps & {
    children: ReactNode;
}
export function Modalview ( {children, ...rest}: Props){
    return (
        <Modal 
            transparent 
            animationType="slide"
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.bar} />
                    {children}
                </View>
            </View>
        </Modal>
    );
}