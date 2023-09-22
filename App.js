import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./Components/ButtonComponent";
import Form from "./Components/Form";
import { useState } from "react";
export default function App() {
  const [inputValue, setInputValue] = useState({
    "Student ID": "",
    "Student Name": "",
    "Student Email": "",
  });
  const onChangeHandler = (text, name) => {
    setInputValue({ ...inputValue, [name]: text });
  };
  return (
    <View style={styles.container}>
      <Form inputValue={inputValue} onChangeHandler={onChangeHandler}></Form>
      <ButtonComponent inputValue={inputValue}></ButtonComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 45,
    paddingRight: 45,
    justifyContent: "center",
  },
});
