import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../Redux/action/index";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { currentUser } = this.props;
    console.log(currentUser);

    if (currentUser == undefined) {
      return <View></View>;
    }
    return (
      <div>
        <Text>
          {currentUser.name} is logged In with {currentUser.email}
        </Text>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
