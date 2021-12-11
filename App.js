import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Redux/reducer";
import thunk from "redux-thunk";

// Screens
import HomeScreen from "./Components/Main";
import Register from "./Components/Auth/Register";
import AddScreen from "./Components/Main/Add";
import Landing from "./Components/Auth/Landing";
import MainScreen from "./Components/Main";
import Login from "./Components/Auth/Login";
import SaveScreen from "./Components/Main/Save";
import FeedScreen from "./Components/Main/Feed";

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyD1WYUBi5WDuUmO8iayk3CSx3H1tfKY9d0",
  authDomain: "instaclone-by-mihir.firebaseapp.com",
  projectId: "instaclone-by-mihir",
  storageBucket: "instaclone-by-mihir.appspot.com",
  appId: "1:242207743788:web:dc5731e451e2c44d9c9689",
  messagingSenderId: "242207743788",
  measurementId: "G-05QHX0FMVK",
};

// let app;
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createNativeStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading...</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Save" component={SaveScreen} />
              <Stack.Screen
                name="Add"
                component={AddScreen}
                navigation={this.props.navigation}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="Feed"
                component={FeedScreen}
                navigation={this.props.navigation}
                options={{ headerShown: true }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
