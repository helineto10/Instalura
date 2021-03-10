import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, ScrollView, SafeAreaView, Dimensions, View, StatusBar } from 'react-native';
import { Cabecalho } from '../../Components/Cabecalho/';
import { Comentarios } from '../../Components/Comentarios';
import { Foto } from '../../Components/Foto';
import lerFotos from '../../api/feed';
import { curtirFoto, imgLike } from '../../api/curtidas';
import adicionarComentario from '../../api/comentario'

const Feed = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    lerFotos(setFotos);
  }, [])


  return (
      <SafeAreaView>
        <ScrollView>
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
                  imgLike={imgLike}
                  curtirFoto={curtirFoto}
                />
                <Comentarios
                  comentarios={item.comentarios}
                  adicionarComentario={adicionarComentario}
                />
              </View>
            } />
        </ScrollView>
      </SafeAreaView>
  );
};

export default Feed;