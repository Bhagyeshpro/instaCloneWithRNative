import React from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";

function Profile(props) {
  const { currentUser, posts } = props;
  console.log({ currentUser, posts });

  return (
    <View>
      <Text>{currentUser.name}</Text>
      {/* <Image source={{ uri: currentUser.posts.downloadURL }} /> */}
    </View>
  );
}

// Mapping currentuser id and users current post state
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
});

// Connection props/userData to profile
export default connect(mapStateToProps, null)(Profile);
