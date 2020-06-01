import React from 'react';

// Se puede trabajar la destructuracion directamente en los parentesis de la función:
//const Location = ( { city } ) => {
const Location = ( props ) => {
  // O se puede trabajar mediante constante, creo es mejor por constantes dentro de la función
  const { city } = props;
  return <h1>{ city }</h1>;
}

export default Location;