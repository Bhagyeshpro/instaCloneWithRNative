import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
        />
        <Button onPress={() => this.onSignUp()} title="Sign In" />

        <View>
          <Text>Don't Have An Account? </Text>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </View>
    );
  }
}

export default Login;
