import React from "react";
import { StyleSheet, FlatList, Image, Dimensions, Linking } from "react-native";
import dados from "../data/flatListData";

import { View, Text } from "../components/Themed";

export default function CompetenciasScreen() {
  return (
    <View style={estilos.container}>
      <View style={estilos.caixa_imagem}>
        <Image
          style={estilos.imagem_git}
          source={require("../img/github.png")}
        />
        <Text
          style={estilos.texto_git}
          onPress={() => Linking.openURL("https://github.com/FelipeGalvao1")}
        >
          GitHub - <Text style={{ color: "#4086ff" }}>FelipeGalvao1</Text>
        </Text>
      </View>

      <FlatList
        style={{ margin: 12 }}
        data={dados}
        renderItem={({ item, index }) => (
          <View>
            <View style={{ margin: 10 }}>
              <Text style={estilos.titulo}>{dados[index].competencia}</Text>
              <Text style={estilos.lista}>{dados[index].descricao} </Text>
              <View
                style={estilos.separator}
                lightColor="#000000"
                darkColor="#5c5c5c"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  caixa_imagem: {
    paddingTop: 7,
    width: Dimensions.get("window").width,
    paddingLeft: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imagem_git: {
    width: 50,
    height: 50,
  },
  texto_git: {
    paddingLeft: 10,
    fontSize: 20,
  },
  titulo: { fontWeight: "bold", fontSize: 25 },
  lista: {
    fontSize: 20,
    paddingBottom: 15,
    textAlign: "left",
  },
  separator: {
    borderBottomWidth: 2,
    height: 3,
  },
});
