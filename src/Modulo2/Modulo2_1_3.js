import React from 'react';
import { View, Text } from 'react-native';
function Saudacao({ name }) {
      return (
        <View>
          <Text>Olá, {name}!</Text>
        </View>
      );
}

// Uso do componente Saudacao
function App() {
      return (
        <Saudacao name="João" />
      );
}

export default App;