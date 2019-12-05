import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Context } from "../context/RememberContext";
import RememberForm from "../components/RememberForm";

const EditScreen = ({ navigation }) => {
  const { state, editRemember } = useContext(Context);
  const id = navigation.getParam("id");
  const remember = state.remembers.find(item => item.id === id);

  return (
    <View style={styles.container}>
      <RememberForm
        onSubmit={post => editRemember({ id, ...post }, () => navigation.pop())}
        initialValues={remember}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#03A9F4",
    flex: 1
  }
});

export default EditScreen;
