import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, ScrollView, SafeAreaView, Dimensions, View } from 'react-native';
import lerFotos from './src/api/feed';
import { Cabecalho } from './src/Components/Cabecalho/';
import { Comentarios } from './src/Components/Comentarios';
import { Foto } from './src/Components/Foto';

const info = [
  { usuario: 'Ricardo' },
  { usuario: 'Heli' },
  { usuario: 'Belle' }
]

const App = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    lerFotos(setFotos);
  }, [])

  return (
    <>
      <SafeAreaView />
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <View>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL}
            />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qntLikes={item.likes}
            />
            <Comentarios
              comentarios={item.comentarios}
            />
          </View>
        } />
    </>
  );
};

export default App;