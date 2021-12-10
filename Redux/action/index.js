import firebase from "firebase";
import { USER_STATE_CHANGE, USER_POST_STATE_CHANGE } from "../constants";

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("Does not exist!");
        }
      });
  };
}

// Fetching current users posts
export function fetchUserPosts() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      // Ordering post base on ascending order
      .orderBy("creation", "asc")
      .get()
      .then((snapshot) => {
        // Maping through all then post of current user and making doc for eact posts
        let posts = snapshot.docs.map((doc) => {
          const data = doc.data();
          // Gettin id/currentUser from firebase
          const id = doc.id;
          return { id, ...data };
        });
        // console.log(posts);
        dispatch({ type: USER_POST_STATE_CHANGE, posts });
      });
  };
}
