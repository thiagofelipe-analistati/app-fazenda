import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  Welcome } from '../screens/Welcome';
import TabRoutes from './tab.routes';
import { UserIdentification } from '../screens/UserIdentification';
import { Financeiro } from '../screens/Financeiro';
import TabRoutesF from './tabF.routes';
import { Rebanho } from '../screens/Rebanho';
import { Matrizes } from '../screens/Rebanho/Matrizes';
import { Reprodutores } from '../screens/Rebanho/Reprodutores';
import { CadastrarMatriz } from '../screens/Cadastrar/CadastrarMatriz';
import { CadastrarNascimento } from '../screens/Cadastrar/CadastrarNascimento';
import { CadastrarReprodutor } from '../screens/Cadastrar/CadastrarReprodutor';
import { Bezzeros } from '../screens/Rebanho/Bezerros';
import { CadastrarBezerras } from '../screens/Cadastrar/CadastrarBezerras';
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
           <Screen name="Matrizes"
            component={Matrizes} 
          />
           <Screen name="Bezerros"
            component={Bezzeros} 
          />
            <Screen name="Reprodutores"
            component={Reprodutores} 
          />
           <Screen name="CadastrarMatriz"
            component={CadastrarMatriz} 
          />
          <Screen name="CadastrarNascimento"
            component={CadastrarNascimento} 
          />
          <Screen name="CadastrarReprodutor"
            component={CadastrarReprodutor} 
          />
           <Screen name="CadastrarBezerras"
            component={CadastrarBezerras} 
          />
      </Navigator>
    )

}