import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Modulo1_8_fw() {
    return (
        <View style={styles.container}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
    );
}

const styles = StyleSheet.create({
      container: {
        flex: 1, // Expande o contêiner para ocupar a tela inteira
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // Alinha os elementos no início
      },
      box: {
        width: 80,
        height: 80,
        backgroundColor: 'skyblue',
        margin: 5, // Adiciona espaçamento entre os elementos
      },
});