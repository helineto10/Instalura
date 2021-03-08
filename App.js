import React, { Fragment } from 'react';
import { FlatList, ScrollView, SafeAreaView, Dimensions, View } from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho/';
import { Foto } from './src/Components/Foto';

const info = [
  {usuario: 'Ricardo'},
  {usuario: 'Heli'},
  {usuario: 'Belle'}
]
const largura = Dimensions.get("screen").width;
const App: () => React$Node = () => {
  return (
    <>
    <SafeAreaView/>
    <ScrollView>
      <FlatList
      data={info}
      keyExtractor={(item,index) => index.toString()}
      renderItem={({ item }) =>
        <View>
        <Cabecalho nomeUsuario={item.usuario}/>
        <Foto/>
        </View>
      }/>
    </ScrollView>
    </>
  );
};

export default App;