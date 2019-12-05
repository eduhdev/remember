import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Context } from "../context/RememberContext";
import RememberForm from "../components/RememberForm";

const CreateScreen = ({ navigation }) => {
  const { addRemember } = useContext(Context);

  return (
    <View style={styles.container}>
      <RememberForm
        onSubmit={post => addRemember(post, () => navigation.navigate("Index"))}
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

export default CreateScreen;
