/*
--- Ciclo de vida dos componentes de classe --- 
Nos componentes de classe do React Ntive, os métodos de ciclo de vida são chamados automaticamente durante as fases do ciclo do componente. Essas fases podem ser classificadas em 3 etepas.
--- Montagem: Quando o componente é crido na árvoe de componentes.
--- Atualização: Quando o componente é re-renderizado devido à mudança de estado ou porps recebidas.
--- Desmontagem: Quando o componente é removido da árvore de componentes.
*/ 

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class App extends Component {
      constructor(props) {
        super(props);
        // Estado inicial com o valor do contador
        this.state = {
          contador: 0,
        };
      }
    
    
      // Executado uma vez após o componente ser montado
      componentDidMount() {
        console.log('Componente montado! Contador inicial:', this.state.contador);
      }
    
    
      // Executado sempre que o componente é atualizado
      componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
          console.log('Componente atualizado! Novo valor do contador:', this.state.contador);
        }
      }
    
    
      // Executado imediatamente antes de o componente ser desmontado
      componentWillUnmount() {
        console.log('Componente será desmontado!');
      }
    
    
      // Método para incrementar o valor do contador
      incrementar = () => {
        this.setState({ contador: this.state.contador + 1 });
      };
    
    
      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.text}>Contador: {this.state.contador}</Text>
            <Button title="Incrementar" onPress={this.incrementar} />
          </View>
        );
      }
}
const styles = StyleSheet.create({
      container: {
        padding: 20,
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        marginBottom: 15,
      },
});
   
export default App;

/*
neste exemplo:
--- constructor(props): iniciliza o estado do componente com o contador em 0.
--- componentDidMount(): Esse método é chamado apenas ma vez, logo após o componente ser inserido na árvore de componentes. É um ótimo lugar para inicializar comportamentos, como fazer chamas de API.

--- componenteDidUpate(prevProps, prevState): Esse método é chamado toda vez que o componente é atualizado, ou seja, quando as props ou o estado mudam. O componentDidUpdate receve como parâmetro o estado anterior (prevState) e as props anteriores (prevProps).
Aqui, ele verifica se o valor do contatdor foi alerado e , se fo, registra uma mensagem no console com o novo valor do contador. 

--- componentWillUnmount(): Esse método é chamdo imediatamente antes do componente ser removido da árvore de componentes. É usado principalmente para evitar vazamento de memória. Aqui, ele apenas registra uma mensagem no consloe quando o componente estiver presres a ser desomontado. 

-- Método incrementar(): Este é o método responsável por incrementar o contador. Quando o botão incrementar é clicado, ele chama this.setState() para atualizar o valor do contador no estado, o que acuona uma nova renderização e o método componentDidUpdate().
*/ 