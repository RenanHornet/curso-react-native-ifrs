import React from "react";
import { View, StyleSheet } from "react-native";

export default function Modulo1_8_dms() {
      return (
        <View style={styles.container}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </View>
      );
}

const styles = StyleSheet.create({
      container: {
        flex: 1, // O contêiner ocupa todo o espaço da tela
        flexDirection: "row", // Disposição horizontal dos elementos
      },
      box1: {
        flex: 1, // Ocupa proporcionalmente 1 parte do espaço disponível
        backgroundColor: "red",
      },
      box2: {
        flex: 2, // Ocupa proporcionalmente 2 partes do espaço disponível
        backgroundColor: "green",
      },
      box3: {
        flex: 1, // Ocupa proporcionalmente 1 parte do espaço disponível
        backgroundColor: "blue",
      },
});
    