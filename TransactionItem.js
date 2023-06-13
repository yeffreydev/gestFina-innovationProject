import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "./AppState";
import { categories } from "./categories";

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
      <View style={styles.top}>
        <Text style={styles.topText}>{categories[item.category]}</Text>
        <Text style={styles.topText}>{item.date}</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.amountText, !(item.amount < 0) ? {} : styles.negativeAmountText]}>S/. {item.amount}</Text>
        <Text style={styles.descriptionText}>{!(item.description.length > 80) ? item.description : `${item.description.slice(0, 80)}...`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3E4543",
    marginVertical: 7,
    borderRadius: 10,
    padding: 5,
    gap: 7,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
  },
  topText: {
    color: "#dbe3e5",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 12,
  },
  amountText: {
    color: "#78FBD3",
    fontWeight: "bold",
    fontSize: 22,
  },
  negativeAmountText: {
    color: "#FF8585",
  },
  descriptionText: {
    color: "#dbe3e5",
  },
});
