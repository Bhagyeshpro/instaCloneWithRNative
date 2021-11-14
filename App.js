import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import Landing from "./Components/Auth/Landing";
import Register from "./Components/Auth/Register";

const firebaseConfig = {
  apiKey: "AIzaSyD1WYUBi5WDuUmO8iayk3CSx3H1tfKY9d0",
  authDomain: "instaclone-by-mihir.firebaseapp.com",
  projectId: "instaclone-by-mihir",
  storageBucket: "instaclone-by-mihir.appspot.com",
  messagingSenderId: "242207743788",
  appId: "1:242207743788:web:dc5731e451e2c44d9c9689",
  measurementId: "G-05QHX0FMVK",
};

if (firebase.apps.length === 0) {
  firebase.intializeApp(firebaseConfig);
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
