import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabecalho from './src/cabecalho/Cabecalho'
import Corpo from './src/corpo/Corpo'
import Disciplina from './src/disciplina/Disciplina'

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho
        nome = 'Adnny'
        curso = 'Design Digital' />
      <Corpo />
      <Disciplina
        disciplina = 'Desenho 1' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
