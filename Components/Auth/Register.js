import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

import firebase from "firebase";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, name, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // handleKeyPress = (event) => {
  //   // if (event.key === "Enter") {
  //   //   this.onSignUp();
  //   // }
  //   console.log("Enter Pressed!");
  // };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
        />
        <Button onPress={() => this.onSignUp()} title="Sign Up" />
        <View>
          <Text>Have An Account? </Text>
          <Button
            title="Sign In"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </View>
    );
  }
}

export default Register;
