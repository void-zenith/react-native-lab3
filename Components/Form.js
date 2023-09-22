import { StyleSheet, Text, View, TextInput } from "react-native";
export default function Form({ inputValue, onChangeHandler }) {
  return (
    <View>
      <Text style={styles.headerText}>Register Student</Text>
      <View style={styles.formView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Student ID:"
          name="studentID"
          value={inputValue["Student ID"]}
          onChangeText={(text) => onChangeHandler(text, "Student ID")}
        ></TextInput>
        <TextInput
          style={styles.inputText}
          value={inputValue["Student Name"]}
          onChangeText={(text) => onChangeHandler(text, "Student Name")}
          placeholder="Enter your Name:"
          name="studentName"
        ></TextInput>
        <TextInput
          style={styles.inputText}
          value={inputValue["Student Email"]}
          onChangeText={(text) => onChangeHandler(text, "Student Email")}
          placeholder="Enter your Email:"
          name="studentEmail"
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: 800,
  },
  formView: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputText: {
    padding: 14,
    borderBottomWidth: 1,
  },
});
