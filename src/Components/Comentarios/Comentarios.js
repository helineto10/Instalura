import React, { Fragment, useState } from 'react';
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from 'react-native';
import estilo from './estilos';

const Comentarios = ({ comentarios }) => {
  const [estComentarios, setComentarios] = useState(comentarios)

  const adicionarComentario = () => {
    console.warn(conteudoCampoInput);
    campoInput.clear();
    const novoComentario = {
      date: Date.now(),
      text: conteudoCampoInput,
      userName: "helineto10"
    }

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
        <TouchableOpacity onPress={adicionarComentario}>
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