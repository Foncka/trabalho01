import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Switch } from 'react-native-elements';

export default function inputs() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={styles.container}>
      <View >
        <TextInput
        style={styles.caixaTexto}
        placeholder="Número de conta ou CPF" 
        />
        
      </View>

      <View style={styles.lembrardados}>
        <Text>Lembrar dados</Text>
        <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "black" }}
        thumbColor={true ? "#fff" : "#767577"}
        onValueChange={toggleSwitch}

        value={isEnabled}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  dados:{
    flex:1,
    flexDirection:'row',
  },

  caixaTexto:{
    backgroundColor:'#f0f0f0',
    fontSize:16,
    width:'90%',
    height:60,
    marginLeft:20,
    padding:20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  switch:{
    marginRight:18,
    marginTop:-30,
  },

  lembrardados: {
    marginLeft:20,
    marginTop:20,
  },
});
