import React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function FormacaoScreen() {
  return (
    <View style={estilos.container}>
      <View style={estilos.escolaridade}>
        <Text style={estilos.titulo}>Ensino Médio</Text>
        <Text>Cursando terceiro ano</Text>
        <Text>Instituição: E.E. Gabriel Ortiz</Text>
      </View>
      <View style={estilos.escolaridade}>
        <Text style={estilos.titulo}>Curso Técnico em Informática</Text>
        <Text>Cursando (2019-2020)</Text>
        <Text>Instituição: Senac Tatuapé</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  escolaridade: {
    borderWidth: 1,
    borderColor: "silver",
    width: "98%",
    padding: 10,
    margin: 20,
  },
  titulo: {
    fontSize: 25,
  },
  separador: {},
});
