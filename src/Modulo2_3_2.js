/*
=== Ciclo de vida em componentes funcionais ===
Em componentes funcionais no React Native, o gerenciamento do ciclo de vida dos componentes (montagem, atulização e desmontagem) é feito principalmente por meio do Hook useEffect. Enquanto nos componentes de classe em React fornece métodos de ciclo de vida como componentDidMount, componentDidUpdate, e componentWillUnmount, nos componentes funcionais, o useEffect lida com esses mesmos ciclos, proporcionando uma forma mais flexível e simples de gerenciar efeitos colaterais. 

OBS: No contexto do React Native, um efeito colateral refere-se a qualquer operação que afete algo fora do escopo de uma função ou componente puro. Isso inclui ações como:

Fazer requisições de dados (API calls)
Manipular diretamente o DOM (fora do React)
Configurar timers ou intervalos (setInterval, setTimeout)
Assinar ou cancelar eventos globais (como eventos de redimensionamento da janela)
Acessar ou alterar o estado ou o ambiente do navegador (localStorage, cookies, etc.)

sintaxe básica do useEffect:
useEffect(() => {
    // Efeito colateral (como buscar dados, manipular o DOM, etc.)


    return () => {
      // Função de limpeza (para desmontagem ou reset)
    };
}, [dependencias]);

Onde:

Primeiro argumento: Uma função que define o efeito colateral a ser executado (pode ser buscar dados de uma API, manipular o DOM, etc.).
Segundo argumento: Um array de dependências que controla quando o efeito será executado. O React compara os valores das dependências com a renderização anterior para decidir se o efeito deve ser executado novamente.
*/ 

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
function App() {
      useEffect(() => {
        console.log('O componente foi montado!');
        // Aqui você poderia fazer uma chamada de API ou configurar algo
    
    
        // Se necessário, retorne uma função de limpeza para quando o componente for desmontado
        return () => {
          console.log('O componente será desmontado!');
        };
      }, []); // O array vazio garante que o efeito seja executado apenas uma vez
    
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Exemplo de Montagem</Text>
        </View>
      );
    }
    const styles = StyleSheet.create({
      container: {
        padding: 20,
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
      },
});
export default App;