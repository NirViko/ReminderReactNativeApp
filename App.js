import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import AddReminder from "./components/addRemider";
import ViewReminder from "./components/viewReminder";

export default function App() {
  const [arrayOfReminder, setArrayOfReminder] = useState([]);
  const [showAndHideAdd, setShowAndHideAdd] = useState(false);

  const addReminderToArray = (oneReminder) => {
    if (oneReminder.length === 0) {
      return;
    }
    setArrayOfReminder((arrayOfReminder) => [
      ...arrayOfReminder,
      { key: Math.random().toString(), value: oneReminder },
    ]);
    setShowAndHideAdd(false);
  };
  const onDelete = (idOfOneObj) => {
    setArrayOfReminder(
      arrayOfReminder.filter((reminder) => reminder.key !== idOfOneObj)
    );
  };

  const cancelAddReminder = () => {
    setShowAndHideAdd(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        title="Add New Reminder"
        onPress={() => setShowAndHideAdd(true)}
      />
      <AddReminder
        showAndHideAdd={showAndHideAdd}
        addReminderToArray={addReminderToArray}
        cancelAddReminder={cancelAddReminder}
      />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={arrayOfReminder}
        renderItem={(reminder) => (
          <ViewReminder
            onDelete={onDelete}
            id={reminder.item.key}
            title={reminder.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
  },
});
