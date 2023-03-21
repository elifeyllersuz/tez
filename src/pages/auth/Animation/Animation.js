import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from './AnimationStyle.js'


const Animation = ({ navigation }) => {
  const loginHandler = () => {
    navigation.navigate("AuthStack",{screen:'LoginScreen'});
  };

  const registerHandler = () => {
    navigation.navigate("AuthStack",{screen:'SignScreen'});
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          //justifyContent: "flex-start",
          alignSelf: "center",
          alignItems: "center",
         // marginTop: 100,
         // ...StyleSheet.absoluteFill,
         // zIndex: 1,
        }}
      >
        <Text style={styles.text}>BILLER</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.bottomContainer}>
            <View>
          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>GİRİŞ YAP</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>KAYIT OL</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Animation;