import { View, StyleSheet, Text } from "react-native";
export function ViewModal() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text>01 de junio del 2023</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#8F9593",
    top: "50%",
    transform: [{ translateY: -200 }],
    marginHorizontal: "5%",
    width: "90%",
    zIndex: 2,
    height: 400,
  },
});
