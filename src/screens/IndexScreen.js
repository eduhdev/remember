import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Context } from "../context/RememberContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteRemember, fetchRemembers } = useContext(Context);
  const { remembers, loading } = state;

  useEffect(() => {
    fetchRemembers();

    const listener = navigation.addListener("didFocus", () => {
      fetchRemembers();
    });

    return () => listener.remove();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.indexContainer}>
      <FlatList
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
        data={remembers}
        keyExtractor={todo => `${todo.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteRemember(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => navigation.navigate("Create")}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  indexContainer: {
    backgroundColor: "#03A9F4",
    flex: 1
  },
  container: {
    backgroundColor: "#03A9F4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 2,
    backgroundColor: "#fff",
    borderColor: "#0288D1"
  },
  title: {
    fontSize: 18,
    color: "#03A9F4"
  },
  icon: {
    fontSize: 24,
    color: "#d50000"
  },
  headerButton: {
    marginRight: 10
  }
});

export default IndexScreen;
