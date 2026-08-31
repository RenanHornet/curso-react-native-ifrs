/*
Estado Complexo
O useState também pode gerenciar objetos e arrays como estado. No entanto, ao atualizar estados complexos, você deve garantir que apenas as partes necessárias sejam atualizadas, sem sobrescrever as demais propriedades.
*/ 

//Estado com objetos
/*
Se o estado for um objeto contendo várias propriedades, voce precisa garantir que apenas a propriedade alterada seja atualizada, enquanto as demasi são mantidas. Para fazer isso, utilizamos o spread operator(...) para mesclar o novo valor com o estado anterior. 
*/ 
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function App() {
      const [usuario, setUsuario] = useState({
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo',
      });
      const atualizarCidade = () => {
        setUsuario((prevUsuario) => ({
          ...prevUsuario, // Preserva as outras propriedades do estado
          cidade: 'Rio de Janeiro', // Atualiza apenas a cidade
        }));
      };
    
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Nome: {usuario.nome}</Text>
          <Text style={styles.text}>Idade: {usuario.idade}</Text>
          <Text style={styles.text}>Cidade: {usuario.cidade}</Text>
          <Button title="Mudar Cidade" onPress={atualizarCidade} color="#841584" />
        </View>
      );
}
    
const styles = StyleSheet.create({
      container: {
        padding: 20,
        alignItems: 'flex-start',
      },
      text: {
        fontSize: 16,
        marginBottom: 5,
      },
});
export default App;
    
/*
Neste exemplo:

O estado inicial é um objeto com as propriedades nome, idade e cidade.
O Hook useState retorna dois valores:
usuario: O valor atual do estado (um objeto com nome, idade e cidade).
setUsuario: A função que é usada para atualizar o estado.
Para atualizar a cidade, utilizamos o spread operator (...). Isso mantém as propriedades nome e idade inalteradas enquanto atualiza apenas cidade.
A função setUsuario recebe o estado anterior (prevUsuario) como argumento e retorna um novo objeto que contém todas as propriedades do estado anterior (...prevUsuario), mas com a propriedade cidade alterada para 'Rio de Janeiro'.
Veja abaixo o resultado no navegador quando clicamos no botão “Mudar Cidade”
*/ 