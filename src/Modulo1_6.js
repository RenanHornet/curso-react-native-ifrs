import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert} from 'react-native';
import { Image } from 'react-native';


export default function Modulo1_6() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Text style={{ fontSize: 20, color: 'blue'}}>
        Este é um exemplo de componente de texto
      </Text>
      <Image
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 100, height:100}}
      />
      <ScrollView style={{ marginTop: 50 }}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <Text>Item 3</Text>
            <Text>Item 4</Text>
            <Text>Item 5</Text>
            <Text>Item 6</Text>
        </ScrollView>
         <TextInput
              style={styles.input}
              placeholder="Digite aqui..."
          />
           <Button
            title="Pressione-me"
            onPress={() => Alert.alert('Botão pressionado!')}
        />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },

   input: {
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          borderRadius: 5,
      },
});
