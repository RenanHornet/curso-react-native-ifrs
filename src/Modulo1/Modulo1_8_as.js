import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Modulo1_8_as() {
    return (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.text}>Box 1</Text>
          </View>
          <View style={[styles.box, styles.alignSelfCenter]}>
            <Text style={styles.text}>Box 2 (alignSelf: 'center')</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Box 3</Text>
          </View>
          <View style={[styles.box, styles.alignSelfFlexEnd]}>
            <Text style={styles.text}>Box 4 (alignSelf: 'flex-end')</Text>
          </View>
        </View>
    );
}
   
const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start', // Alinhamento padrão dos elementos no eixo secundário
        padding: 20,
      },
      box: {
        width: 100,
        height: 50,
        backgroundColor: 'lightblue',
        marginBottom: 10,
        justifyContent: 'center',
      },
      text: {
        textAlign: 'center',
      },
      alignSelfCenter: {
        alignSelf: 'center', // Alinha este elemento no centro do eixo secundário
      },
      alignSelfFlexEnd: {
        alignSelf: 'flex-end', // Alinha este elemento no final do eixo secundário
      },
});