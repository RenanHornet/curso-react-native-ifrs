import React from 'react'
import { View, StyleSheet } from 'react-native';

export default function Modulo1_8 (){
    return(
       <View style={styles.container}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },

    box: {
        width: 80,
        height: 80,
        backgroundColor: 'skyblue',
        margin: 5, // Adiciona espaçamento entre os elementos
    },

    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },

    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },

    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
});