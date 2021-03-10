import React, { Fragment, useState } from 'react';
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from 'react-native';
import estilo from './estilos';

const Comentarios = ({ comentarios, adicionarComentario }) => {

  const [estComentarios, setComentarios] = useState(comentarios)

  const comentar = () => {
    campoInput.clear();
    const novoComentario = adicionarComentario(
      conteudoCampoInput,
      "helineto10")
    setComentarios([...estComentarios, novoComentario]);
  }

  let campoInput;
  let conteudoCampoInput = "";
  return (
    <Fragment>
      <FlatList
        data={estComentarios}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) =>
          <View style={estilo.inline}>
            <Text style={estilo.espaçamento}>{item.userName}:</Text>
            <Text>{item.text}</Text>
          </View>
        } />
      <View style={estilo.inline}>
        <TextInput
          ref={textInput => campoInput = textInput}
          onChangeText={texto => conteudoCampoInput = texto}
          placeholder={"Deixe seu comentário..."}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={comentar}>
          <Image
            source={require('../../../res/img/send.png')}
            style={estilo.imgSend}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default Comentarios;