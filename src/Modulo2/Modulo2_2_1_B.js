//mesclagem de estado com o setState
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
class Perfil extends Component {
      constructor(props) {
        super(props);
        this.state = {
          nome: 'Maria',
          idade: 25,
          cidade: 'São Paulo',
        };
      }
      atualizarIdade = () => {
        // Atualiza apenas a idade, mantendo as outras propriedades do estado
        this.setState({
          idade: 26,
        });
      };
      render() {
        return (
          <View style={{ padding: 20 }}>
            <Text>Nome: {this.state.nome}</Text>
            <Text>Idade: {this.state.idade}</Text>
            <Text>Cidade: {this.state.cidade}</Text>
            <Button title="Atualizar Idade" onPress={this.atualizarIdade} />
          </View>
        );
      }
}

export default Perfil;  