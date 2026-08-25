import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Saudacao(props) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Olá, {props.name}!</Text>
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
   
export default Saudacao;
    