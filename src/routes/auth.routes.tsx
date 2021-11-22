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
import { CadastrarBezerras } from '../screens/Cadastrar/CadastrarBezerras';
import { CadastrarReprodutor } from '../screens/Cadastrar/CadastrarReprodutor';
import { Bezzeros } from '../screens/Rebanho/Bezerros';
import { Bezzeras } from '../screens/Rebanho/Bezerras';
import { CadastrarBezerros } from '../screens/Cadastrar/CadastrarBezerros';

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
          <Screen name="Bezerras"
            component={Bezzeras} 
          />
            <Screen name="Reprodutores"
            component={Reprodutores} 
          />
           <Screen name="CadastrarMatriz"
            component={CadastrarMatriz} 
          />
          <Screen name="CadastrarBezerras"
            component={CadastrarBezerras} 
          />
          <Screen name="CadastrarBezerros"
            component={CadastrarBezerros} 
          />
          <Screen name="CadastrarReprodutor"
            component={CadastrarReprodutor} 
          />
      </Navigator>
    )

}