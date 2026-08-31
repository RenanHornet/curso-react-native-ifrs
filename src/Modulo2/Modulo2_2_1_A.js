//exemplo de passagem de estado com callback
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class App extends Component {
      // Inicialização do estado
      state = {
        contador: 0,
      };
    
    
      // Método para atualizar o estado
      incrementar = () => {
        console.log ("1. Clicou no botão!", this.state.contador)
        // Atualiza o estado com setState
        this.setState({ contador: this.state.contador + 1 }, () => {
          console.log("3. Estado atualizado:", this.state.contador);
        });

        console.log("2. Linha após o setState rodou imediatamente.")
      }
    
    
      render() {
        return (
          <View>
            <Text>Contador: {this.state.contador}</Text>
            <Button title="Incrementar" onPress={this.incrementar} />
          </View>
        );
      }
}

export default App;

