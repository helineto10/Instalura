import React, { Fragment } from 'react';
import { Image} from 'react-native';
import estilo from './estilo';

const Foto: () => React$Node = () => {
  return (
    <>
        <Image
        source={require("../../../res/img/alura.jpg")}
        style={estilo.imagem}
        />
    </>
  );
};

export default Foto;