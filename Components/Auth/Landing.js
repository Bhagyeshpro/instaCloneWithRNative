import React from "react";
import { Button, View } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register yours"
        onPress={() => navigation.navigte("Register")}
      />
      <Button title="Login" onPress={() => navigation.navigte("Login")} />
    </View>
  );
}
