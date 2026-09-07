/*
=== Continuação exemplos de eventos em React Native, dessa vez através de clique no botão 
*/
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
const App = () => {
      const handleLongPress = () => {
        console.log('Pressionado por um tempo longo');
      };
      const handlePress = () => {
        console.log('Pressionado rapidamente');
      };
      return (
        <View>
          <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress}>
            <Text style={{ padding: 20, backgroundColor: '#ddd' }}>Pressione-me</Text>
          </TouchableOpacity>
        </View>
      );
};
export default App;

/*
Este código cria um componente funcional chamado App, que inclui um botão personalizado com duas funcionalidades de toque: um toque rápido e um toque longo. O componente TouchableOpacity é usado para criar uma área de toque que responde a diferentes tipos de interação do usuário.

A função handlePress é chamada quando o botão é pressionado rapidamente, enquanto a função handleLongPress é acionada quando o botão é pressionado por um período prolongado. Ambas as funções exibem mensagens no console indicando o tipo de toque realizado. Dentro do componente TouchableOpacity, há um elemento Text que serve como o botão visível e contém o texto "Pressione-me", com estilo simples de preenchimento e fundo cinza claro.
*/