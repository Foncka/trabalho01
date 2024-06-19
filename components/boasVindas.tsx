import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function boasVindas() {
  return (
    <View style={styles.container}>
      <Text style={styles.principal}>Boas-Vindas!</Text>
      <Text style={styles.sub}>Faça o login para acessar sua conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  principal: {
    fontSize: 30,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 16,
  },
});
