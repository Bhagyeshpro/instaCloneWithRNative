import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>WELCOME TO INSTAGRAM By Me</Text>
      <Image
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRP5DzZgTLz3rtU2PgabPYawok_tw_0BO03bljed246ps_bDbi--7ucC-uUUu4dj_Q2tQ&usqp=CAU"
        }
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
  },
});
