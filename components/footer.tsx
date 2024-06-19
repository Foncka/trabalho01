import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function footer() {
  return (
    <View style={styles.container}>
      <View style={styles.textoSeta}>
        <Text style={styles.texto}>Esqueci minha conta</Text>
        <Image
          style={styles.seta}
          source={require("../assets/setalogin.png")}
        ></Image>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textoButton}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  textoSeta: {
    flexDirection: "row",
  },

  texto: {
    marginBottom: 35,
    fontWeight: "bold",
  },

  seta: {
    height: 23,
    width: 23,
  },

  button: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "95%",
    backgroundColor: "#ffba00",
  },

  textoButton: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
