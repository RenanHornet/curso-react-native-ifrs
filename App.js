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