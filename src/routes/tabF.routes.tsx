import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Financeiro } from '../screens/Financeiro';
import { Receita } from '../screens/Receita';
import { Despesa } from '../screens/Despesa';


const AppTab = createBottomTabNavigator();

const TabRoutesF = () => {
    return(
        <AppTab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: colors.heading,
            tabBarActiveTintColor: colors.green,
            tabBarLabelPosition: 'beside-icon'
          }} >
                
                 <AppTab.Screen
                    name='Financeiro'
                    component={Financeiro}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="home"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />
                 <AppTab.Screen
                    name="Despesa"
                    component={Despesa}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="remove-circle-outline"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Receita"
                    component={Receita}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons
                                name="add-circle-outline"
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />
            </AppTab.Navigator>
    )
}

export default TabRoutesF;