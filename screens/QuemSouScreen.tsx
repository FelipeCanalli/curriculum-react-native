import React from "react";
import { StyleSheet, Image, Linking } from "react-native";
import { Text, View } from "../components/Themed";

export default function QuemSouScreen() {
  return (
    <View style={estilos.container}>
      <View style={estilos.caixa_imagem}>
        <Image source={require("../img/icone.png")} />
      </View>
      <View style={estilos.caixa_nome}>
        <Text style={estilos.nome}>Felipe Galvão Canalli de Souza</Text>
      </View>
      <View style={estilos.caixa_info}>
        <Text></Text>

        {/* Linha 1 */}
        <Text style={estilos.info}>Brasileiro | Solteiro | 17 anos </Text>

        {/* Linha 2 */}
        <Text style={estilos.info}>
          R. Honório Emiliano Bueno, nº 900 - Ponte Rasa
        </Text>

        {/* Linha 3 */}
        <Text style={estilos.info}> 03884-100 | São Paulo / SP</Text>

        {/* Linha 4 */}
        <Text style={estilos.info}>
          <Text
            onPress={() => {
              Linking.openURL("tel:(11) 99489-3833");
            }}
          >
            (11) 99489-3833 |{" "}
          </Text>
          <Text
            style={estilos.email}
            onPress={() =>
              Linking.openURL("mailto:felipecanalli.dev@gmail.com")
            }
          >
            felipecanalli.dev@gmail.com
          </Text>
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  caixa_imagem: {
    marginBottom: 50,
  },
  caixa_nome: {
    borderWidth: 1,
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 100,
    borderColor: "#ADD8E6",
  },
  nome: { fontSize: 25 },
  caixa_info: {
    margin: 30,
  },
  info: {
    fontSize: 18,
  },
  email: {
    color: "#4086ff",
  },
});
