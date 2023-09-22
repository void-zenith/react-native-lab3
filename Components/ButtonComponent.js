import { StyleSheet, View, Button, Alert } from "react-native";
export default function ButtonComponent({ inputValue }) {
  const handleClick = () => {
    Alert.alert(
      "Student Details:",
      `Student ID: ${inputValue["Student ID"]}
    Student Name: ${inputValue["Student Name"]}
    Student Email: ${inputValue["Student Email"]}`
    );
  };

  return (
    <View>
      <Button
        style={styles.button}
        title="Click here"
        onPress={handleClick}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: red,
  },
});
