import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class App extends Component {
      // Inicialização do estado
      state = {
        contador: 0,
      };
    
    
      // Método para atualizar o estado sem usar prevState
      incrementarContador = () => {
        this.setState({
          contador: this.state.contador + 1,
        });
      };
    
    
      render() {
        return (
          <View>
            <Text>Contador: {this.state.contador}</Text>
            <Button title="Incrementar" onPress={this.incrementarContador} />
          </View>
        );
      }
}

export default App;