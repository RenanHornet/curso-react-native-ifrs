/*
=== Continuação exemplos de eventos em React Native, dessa vez através de um input
*/

import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const App = () => {
      const [inputValue, setInputValue] = useState('');
    
      return (
        <View>
          <TextInput
            placeholder="Digite algo"
            onChangeText={(text) => setInputValue(text)}
            style={{ borderColor: 'gray', borderWidth: 1, padding: 10 }}
          />
          <Text>Você digitou: {inputValue}</Text>
        </View>
      );
    };
    
export default App;

/*
Este código React Native cria um componente funcional chamado App, que permite ao usuário inserir texto e ver o que digitou exibido em tempo real na tela. O useState do React é usado para criar um estado chamado inputValue, que inicialmente é uma string vazia. Quando o usuário digita algo no campo de texto (TextInput), a função setInputValue é chamada para atualizar o estado inputValue com o texto digitado.

O componente TextInput possui um estilo simples, com borda cinza e preenchimento interno, e usa a propriedade onChangeText para capturar e atualizar o estado. Abaixo do campo de entrada, um componente Text exibe o valor atual de inputValue, mostrando ao usuário o texto digitado. O componente App é exportado para ser reutilizado em outras partes do projeto.
*/