import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  Welcome } from '../screens/Welcome';
import TabRoutes from './tab.routes';
import { UserIdentification } from '../screens/UserIdentification';
import { Financeiro } from '../screens/Financeiro';
import TabRoutesF from './tabF.routes';
import { Rebanho } from '../screens/Rebanho';
const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerShown: false
          }}    
        >   
          <Screen name="Welcome"
            component={Welcome } 
          />
           <Screen name="UserIdentification"
            component={UserIdentification } 
          />
          <Screen name="Tab"
            component={TabRoutes} 
          />
           <Screen name="TabF"
            component={TabRoutesF} 
          />
          <Screen name="Financeiro"
            component={Financeiro} 
          />
          <Screen name="Rebanho"
            component={Rebanho} 
          />

      </Navigator>
    )

}