/*
=== Gerenciamento de eventos no React Native === 
O gerenciamento de eventos no React Native é um aspecto fundamental para tornar interfaces interativas e responsivas. Ele envolve a captura e tratamento de ações do usuário, como toques em botões, digitação em campos de texto, deslizamento entre outros.
No React Native, um evento é uma interação do usu´rio com o aplicativo que dispara uma resposta específica como uma função de callback. esses eventos são tratados através de propriedades (props) passadas aos componentes e podem ser configurados para responder a diferentes tipos de interação.

=== Eventos comuns em componentes:
--- onPress: Utilizado para capturar toques em botões ou áreas clicáveis. É um dos eventos mais comuns e é usado em componentes como Button.

--- onChangeText: Associado ao componente TextInput, captura as mudanças de texto conforme o usuário digita.

--- onSubmitEditing:  Também usado com TextInput, é acionado quando o usuário pressiona o botão de envio no teclado.

--- onScroll: Utilizado em componentes como ScrollView, captura os eventos de rolagem e pode ser usado para monitorar a posição da rolagem ou disparar ações quando a rolagem atinge um determinado ponto.

--onLongPress: Uma variação do onPress que é acionada quando o usuário mantém o toque pressionado por mais tempo, permitindo a execução de funções diferentes.
*/

import React from "react";
import { View, Button, Alert } from "react-native";

const App = () => {
      const handlePress = () => {
        console.log("Botão pressionado!");
      };
      return (
        <View>
          <Button title="Pressione-me" onPress={handlePress} />
        </View>
      );
};
export default App;

/*
Esse código começa importando o React e alguns componentes da biblioteca react-native, como View, Button e Alert. Em seguida, define o componente funcional App, que é a estrutura principal do aplicativo. Dentro do componente App, uma função handlePress é declarada para lidar com o evento de pressionar o botão, exibindo a mensagem "Botão pressionado!" no console quando o botão é acionado. O método return retorna uma estrutura JSX, onde um componente View atua como contêiner, e dentro dele há um componente Button com a propriedade title para exibir o texto "Pressione-me" e a propriedade onPress, que atribui a função handlePress para ser executada ao clicar no botão.
 */