import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useContext } from "react";
import { AppContext } from "./AppState";
export function TransactionItem({ item }) {
  const { setAppState, appState } = useContext(AppContext);

  const openModal = () => {
    setAppState({
      ...appState,
      isOpenModal: true,
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={openModal}>
      <Text style={styles.text}>{item.amount}</Text>
      <Text style={styles.text}>{item.date}</Text>
      <Text style={styles.text}>{item.category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 20,
    backgroundColor: "#3E4543",
    marginVertical: 7,
    borderRadius: 10,
    padding: 5,
  },
  text: {
    color: "#fff",
  },
});
