import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Saudacao from './src/Modulo2/Modulo2_1_2';

function Caixa({ children }) {
      return (
        <View style={{ padding: 10, borderWidth: 1, borderColor: 'black' }}>
          {children}
        </View>
      );
    }
    // Uso do componente Caixa
    function App() {
      return (
        <Caixa>
          <Text>Este é um conteúdo dentro da caixa.</Text>
        </Caixa>
      );
    }
    export default App;