import React, { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import efetuarLogin from '../../api/login';
import estilo from './estilo';

const Login = ({ navigation }) => {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const tentarLogar = async () => {
    try{
      const token = await efetuarLogin(usuario, senha)
      await AsyncStorage.setItem("instalura_token", token);
      //Ir para a tela de feed
      navigation.replace("Feed", {nome: usuario});


    }catch(erro){
      setMensagemErro(erro.message);
    }
  }

  return (
    //<SafeAreaView/>
    <Fragment>
      <View style={estilo.container}>
        <TextInput
          maxLength= {30}
          style={estilo.inputs}
          placeholder="Usuario"
          onChangeText={texto => setUsuario(texto)}
        />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={texto => setSenha(texto)}
        />
        <Text>{mensagemErro}</Text>
      </View>
      <View style={estilo.botao}>
        <Button
          title="Entrar"
          onPress={tentarLogar}
        />
      </View>
    </Fragment>
  );
};

Login.navigationOptions = () => {
  const opcoes = {
    title: "Login"
  }
  if(Platform.OS === "Android"){
    opcoes.header = null;
  }

  return opcoes;
}
export default Login;