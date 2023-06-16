import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "./AppState";
import { categories } from "./categories";

export function TransactionItem({ item }) {
  const { setAppState, appState, setTransactionSelected } = useContext(AppContext);

  const amount = parseFloat(item.amount).toFixed(2).toString();
  const openModal = () => {
    setAppState({
      ...appState,
      isOpenModal: true,
    });
  };

  const handlerPressTransaction = () => {
    openModal();
    setTransactionSelected(item);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlerPressTransaction}>
      <View style={styles.top}>
        <Text style={styles.topText}>{categories[item.category]}</Text>
        <Text style={styles.topText}>{item.date}</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.amountText, !(item.amount < 0) ? {} : styles.negativeAmountText]}>S/. {amount}</Text>
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
    maxWidth: "40%",
    minWidth: "20%",
    fontSize: 16,
  },
  negativeAmountText: {
    color: "#FF8585",
  },
  descriptionText: {
    flex: 1,
    color: "#dbe3e5",
  },
});
