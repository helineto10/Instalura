import React, { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View } from 'react-native';
import estilo from './estilo';

const Login = () => {
  return (
      //<SafeAreaView/>
        <Fragment>
          <View style={estilo.container}>
            <TextInput
            style={estilo.inputs}
            placeholder="Usuario"
            />
            <TextInput
            style={estilo.inputs}
            placeholder="Senha"
            secureTextEntry={true}
            />
          </View>
          <Button
          title="Entrar"
          />
       </Fragment>
  );
};

export default Login;