import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={() => navigation.navigate("Login")} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
