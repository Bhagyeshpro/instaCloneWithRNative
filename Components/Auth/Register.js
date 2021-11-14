import React, { Component } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import firebase from "firebase";
export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.ononSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, name, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((results) => {
        conso;

        le.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    0;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignUp()} title="onSignUp" />
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
