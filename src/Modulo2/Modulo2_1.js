import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Saudacao extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, {this.props.name}!</Text>
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
  },
});


export default Saudacao;
