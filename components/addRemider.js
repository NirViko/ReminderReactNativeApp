import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
export default function AddReminder(props) {
  const [oneReminder, setOneReminder] = useState("");

  const setNewReminder = (newInfo) => {
    setOneReminder(newInfo);
  };

  const addNewReminder = () => {
    props.addReminderToArray(oneReminder);
    setNewReminder("");
  };
  return (
    <Modal visible={props.showAndHideAdd} animationType="slide">
      <View style={styles.headerContainer}>
        <TextInput
          placeholder="High-tech concepts"
          style={styles.inputReminder}
          onChangeText={setNewReminder}
          value={oneReminder}
        />
        <View style={styles.containerAddAndCancel}>
          <Button title="ADD" onPress={addNewReminder} />
          <Button
            title="CANCEL"
            color="red"
            onPress={props.cancelAddReminder}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputReminder: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "75%",
    marginBottom: 10,
  },
  containerAddAndCancel: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
});
