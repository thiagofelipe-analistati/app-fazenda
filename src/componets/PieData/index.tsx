import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity, Image} from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/core';
import { NascidosButtonProps } from '../NascidosButton';
import api from '../../service/api';
import { MatrizesProps } from '../../screens/Rebanho/Matrizes';
import { ReprodutorProps } from '../../screens/Rebanho/Reprodutores';
import {PieChart} from 'react-native-svg-charts'
import { Text } from 'react-native-svg';


export function PieData(): JSX.Element{
    const navigation = useNavigation();
    const[bezerros, setBezerros] = useState<NascidosButtonProps[]>([]);
    const[bezerras, setBezerras] = useState<NascidosButtonProps[]>([]);
    const[matrizes, setMatrizes] = useState<MatrizesProps[]>([]);
    const[reprodutores, setReprodutores] = useState<ReprodutorProps[]>([]);
  
  useEffect (()=> {
    async function fetchDados() {
      const {data} = await api.get('bezerros');
      setBezerros(data);
    }
    fetchDados();
  },[])
  useEffect (()=> {
    async function fetchDados() {
      const {data} = await api.get('bezerras');
      setBezerras(data);
    }
    fetchDados();
  },[])
    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('matrizes');
        setMatrizes(data);
      }
      fetchDados();
    },[])
    useEffect (()=> {
      async function fetchDados() {
        const {data} = await api.get('reprodutores');
        setReprodutores(data);
      }
      fetchDados();
    },[])

    const data = [
      {
          key: 1,
          amount: reprodutores.length,
          svg: { fill: '#00EC93' },
      },
      {
          key: 2,
          amount: bezerras.length,
          svg: { fill: '#9900cc' }
      },
      {
          key: 3,
          amount:  bezerros.length,
          svg: { fill: '#FFB000' }
      },
      {
          key: 4,
          amount: matrizes.length,
          svg: { fill: '#FF1752' }
      }
  ]

  const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
          const { labelCentroid, pieCentroid, data } = slice;
          return (
              <Text
                  key={index}
                  x={pieCentroid[ 0 ]}
                  y={pieCentroid[ 1 ]}
                  fill={'white'}
                  textAnchor={'middle'}
                  alignmentBaseline={'middle'}
                  fontSize={24}
                  stroke={'black'}
                  strokeWidth={0.2}
              >
                  {data.amount}
              </Text>
          )
      })
  }

  return (
    
      <PieChart
          style={{ height: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          spacing={10}
          outerRadius={'95%'}
      >
          <Labels/>
      </PieChart>
      
  )
}
