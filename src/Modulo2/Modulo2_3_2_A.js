/*
=== Continuação de exemplo de useEffects ===
Neste próximo exemplo, o useEffects será executado sempre que o valor de contador mudar, na fase de atualização do componente, o que é semelhante ao componentDidUpdate em componentes de classe. 
*/ 

import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function App() {
      const [contador, setContador] = useState(0);
      useEffect(() => {
        console.log("O contador foi atualizado! Valor atual:", contador);
      }, [contador]); // O efeito é executado toda vez que o contador muda
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Contador: {contador}</Text>
          <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        </View>
      );
}
const styles = StyleSheet.create({
      container: {
        padding: 20,
        alignItems: "center",
      },
      text: {
        fontSize: 24,
        marginBottom: 10,
      },
});
export default App;

/* 
neste exemplo:
useEffect(() => { ... }, [contador]): O efeito é executado toda vez que o valor de contador muda. O console.log registra a atualização do contador.
O componente renderiza um contador com um botão para incrementá-lo.

*/