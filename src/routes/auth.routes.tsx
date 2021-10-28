import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  Welcome } from '../screens/Welcome';
import TabRoutes from './tab.routes';
import { UserIdentification } from '../screens/UserIdentification';
import { Home } from '../screens/Home';
import { Cadastrar } from '../screens/Cadastrar';


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
          <Screen name="Cadastrar"
            component={Cadastrar} 
          />

      </Navigator>
    )

}