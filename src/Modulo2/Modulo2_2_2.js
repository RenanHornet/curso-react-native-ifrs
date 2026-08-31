//gerenciamento de estado em componentes funcionais
/*Sua sintaxe:
const[estado, setEstado] = useState(valorInicial); onde:
estado: O valor do estado atual. 
setEstado: Função para atualizar o valor de estado
valorInicial: O valor inicial que o estado terá quando o componente for montado. 
*/
//contador usando o Hook useState
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Contador() {
      // Declaramos uma variável de estado chamada 'contador' com valor inicial 0
      const [contador, setContador] = useState(0);
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            Contador: {contador}
          </Text>
          <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        </View>
      );
}
const styles = StyleSheet.create({
      container: {
        padding: 20,
      },
      text: {
        fontSize: 18,
        marginBottom: 10,
      },
});
export default Contador;

/*-Importação do useState: Importamos o Hook useState de react, que permite gerenciar o estado em um componente funcional

- Declaração do estado: Dentro do componente const[contador, setContador] = useState(0), define uma variável de estado chamada contador com valor inicial 0, e a função setContador para atualizar esse valor

- Atualizando o estado: a função setContador é usada para atualizar o valor de contador. Assim, quando o botão é clicado, chamamos setContador(contador + 1), o que atualiza o estado de contador. 

- Renderização automática:  O React detecta a mudança de estado renderiza o componente para exibir o novo valor do contador, garantindo que a interface reflita as alterações no estado.

*/




