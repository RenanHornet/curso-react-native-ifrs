/*
=== Continuação exemplo de eventos ===

Cabe ressaltar que os formulários em React Native combinam eventos de mudança de estado e envio. Use o estado local para armazenar os valores dos campos e funções de callback para tratar a submissão de dados.
*/

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const App = () => {
      const [name, setName] = useState('');
      const handleSubmit = () => {
        if (name.trim() !== '') {
          console.log('Formulário enviado', `Nome: ${name}`);
        } else {
          console.log('Erro', 'O campo de nome não pode estar vazio');
        }
      };
      return (
        <View>
          <TextInput
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
            style={{ borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 10 }}
          />
          <Button title="Enviar" onPress={handleSubmit} />
        </View>
      );
};
export default App;

/*
Neste exemplo, o TextInput atualiza o estado name, e a função handleSubmit trata a validação e envio do formulário. 
*/