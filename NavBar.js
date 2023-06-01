import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
export function NavBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GestFina</Text>
      <TouchableOpacity>
        <Entypo name="plus" size={40} color="#CEDCD7" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 20,
    height: 50,
  },
  text: {
    color: "#CEDCD7",
  },
});
