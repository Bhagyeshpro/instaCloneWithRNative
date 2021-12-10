import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, fetchUserPosts } from "../Redux/action/index";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Screens Imports
import FeedScreen from "./Main/Feed";
import ProfileScreen from "./Main/Profile";
import ExploreScreen from "./Main/Explore";

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return null;
};

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchUserPosts();
  }
  render() {
    return (
      <Tab.Navigator initialRouteName="Feed" labeled={false}>
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="mdiCompass"
                color={color}
                size={26}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AddComponent"
          component={EmptyScreen}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Add");
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={26}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser, fetchUserPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
