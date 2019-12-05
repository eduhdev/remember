import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";

const RememberForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSubmit({ title, content })}
      >
        <Text style={styles.buttonText}>Save Remember</Text>
      </TouchableOpacity>
    </View>
  );
};

RememberForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
    color: "#fff",
    fontWeight: "bold"
  },
  input: {
    borderColor: "#0288D1",
    marginBottom: 15,
    padding: 5,
    margin: 5,
    backgroundColor: "#fff"
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#0288D1",
    borderWidth: 1
  },
  buttonText: {
    color: "#0288D1",
    textTransform: "uppercase",
    padding: 8,
    fontWeight: "bold"
  }
});

export default RememberForm;
