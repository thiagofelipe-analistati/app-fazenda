import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Vender } from '../screens/Vender';
import { Cadastrar } from '../screens/Cadastrar';
import { Home } from '../screens/Home';


const AppTab = createBottomTabNavigator();

const TabRoutes = () => {
    return(
        <AppTab.Navigator
        screenOptions={{
            headerShown: false,
          }}   
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                },
            }}>
                
                 <AppTab.Screen
                    name='Home'
                    component={Home}
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
                    name="Vender"
                    component={Vender}
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
                    name="Cadastrar"
                    component={Cadastrar}
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

export default TabRoutes;