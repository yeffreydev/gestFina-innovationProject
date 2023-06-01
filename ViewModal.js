import { View, StyleSheet, Text } from "react-native";
import { AppContext } from "./AppState";
import { useContext } from "react";
export function ViewModal() {
  const {
    appState: { isOpenModal },
  } = useContext(AppContext);
  return (
    <>
      {isOpenModal ? (
        <View style={styles.container}>
          <View>
            <Text>01 de junio del 2023</Text>
          </View>
        </View>
      ) : null}
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
    zIndex: 20,
    height: 400,
  },
});
