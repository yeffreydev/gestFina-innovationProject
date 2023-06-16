import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
export function NavBar({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 49, height: 49 }} source={require("./assets/icon.png")} />
      <TouchableOpacity onPress={() => navigation.navigate("NewTransaction")}>
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
