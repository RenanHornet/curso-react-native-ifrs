//Atualizando Estado com base no Valor Anterior
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function App() {
      const [contador, setContador] = useState(0);
    
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Contador: {contador}</Text>
          <Button
            title="Incrementar"
            onPress={() => setContador((prevContador) => prevContador + 1)}
          />
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
     
 export default App;

 /*
 Neste exemplo, setContador recebe uma função que usa o valor anterior (prevContador). Isso garante que a atualização seja sempre baseada no estado mais recente, evitando problemas quando várias atualizações ocorrem rapidamente.
 */