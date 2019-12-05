import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/RememberContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");

  const remember = state.remembers.find(item => item.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{remember.title}</Text>
        <Text style={styles.content}>{remember.content}</Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03A9F4"
  },
  card: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    minHeight: 80,
    backgroundColor: "#fff",
    borderColor: "#0288D1",
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#03A9F4",
    color: "#0288D1"
  },
  content: {
    fontSize: 16
  },
  headerButton: {
    marginRight: 10
  }
});

export default ShowScreen;
