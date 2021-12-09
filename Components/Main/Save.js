import React, { useState } from "react";
import { View, Button, TextInput, Text, Image } from "react-native";
import firebase from "firebase";
require("firebase/firestore");
require("firebase/firebase-storage");

export default function Save(props, { navigation }) {
  const [caption, setCaption] = useState("");

  // Getting img uri from props send by Add.js
  const uri = props.route.params.image;

  // Providing path to image in firebase using random func
  const childPath = `post/${
    firebase.auth().currentUser.uid
  }${Math.random().toString(36)}}`;

  // Uploading img uri to firestore storage
  const uploadImage = async () => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    // Knowing How many bytes are uploaded
    const taskProgress = (snapshot) => {
      console.log(`transferred : ${snapshot.bytesTransferred}`);
    };

    //Getting the url of img so we can use it in feed.js to display image
    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        savePostData(snapshot);
        console.log(snapshot);
      });
    };

    // Error message
    const taskError = (snapshot) => {
      console.log(snapshot);
    };

    // Putting all of above func together with task
    task.on("state_changed", taskProgress, taskError, taskCompleted);
  };

  // Uploading img in firestore database after taskCompleted()
  const savePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .add({
        downloadURL,
        caption,
        // When the post is created is using server side timestamp the correct way
        creation: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        props.navigation.popToTop();
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>SaveScreen</Text>
      <Image style={{ flex: 1, width: "20%", height: "20%" }} source={uri} />
      <View>
        <Text>Caption :</Text>
        <TextInput
          placeholder="Write a Caption"
          onChangeText={(caption) => setCaption(caption)}
        />
      </View>
      <Button title="Save" onPress={() => uploadImage()} />
    </View>
  );
}
