import { StyleSheet, View, Text,Image } from 'react-native';
import React from 'react';

export default function headler() {
    return (
      <View style={styles.container}>
        <View style={styles.primeiraLinha}>
          <Image style={styles.seta} source={require("../assets/seta.png")}></Image>
          <Text style={styles.texto}>Acesse sua conta</Text>
        </View>  
          <View style={styles.caixaLogo}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          </View>      
      <View style={styles.linha}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
  container:{
    marginTop:8,
    flex:4,
    backgroundColor:'#121212',
  },

  primeiraLinha:{
    flex:1,
    flexDirection:'row',

  },
  seta:{
    width:15,
    height:15,
    marginLeft:15,
    marginTop:20,
  },

  texto:{
    flex:1,
    color:'#fff',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    fontSize:14,
    fontWeight:'bold',
    marginLeft:135,
  },

  caixaLogo:{
    flex:2.94,
    justifyContent:'center',
    alignItems:'center',
  },

  logo:{
    width:70,
    height:70,
  },

  linha:{
    flex:0.06,
    backgroundColor:'#ffba00',
    width:'100%',
  },

  });