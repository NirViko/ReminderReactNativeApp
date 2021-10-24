import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
export default function ViewReminder(props) {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.styleOneReminder}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  styleOneReminder: {
    backgroundColor: "#DCDCDC",
    padding: 10,
    marginVertical: 10,
  },
});
