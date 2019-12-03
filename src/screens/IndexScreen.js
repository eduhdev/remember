import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/RememberContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addRemember, deleteRemember } = useContext(Context);

  return (
    <View>
      <Button onPress={addRemember} title="click me" />
      <FlatList
        data={state}
        keyExtractor={todo => todo.title}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteRemember(item.id)}>
              <Feather name="trash" style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    color: "gray",
    marginBottom: 2
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;
