import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import { AppContext } from "./AppState";

import { AntDesign } from "@expo/vector-icons";

import { categories } from "./categories";

export function ViewModal({ navigation }) {
  const { setAppState, transactionSelected } = useContext(AppContext);
  const closeModal = () => {
    setAppState({ isOpenModal: false });
  };
  const goToEdit = () => {
    closeModal();
    navigation.navigate("EditTransaction");
  };

  if (!transactionSelected) return null;
  const { amount, description, category, date } = transactionSelected;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.lightText}>{"Fecha: " + date}</Text>
          <TouchableOpacity onPress={closeModal}>
            <FontAwesome name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <TouchableOpacity onPress={goToEdit} style={{ flexDirection: "row", justifyContent: "flex-start", gap: 10 }}>
            <AntDesign name="edit" size={24} color="#657274" />
            <Text style={{ color: "#657274" }}>Editar Transacción</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.amountContent}>
          <Text style={[styles.amount, styles.amount, !(amount > 0) && styles.negativeAmount]}>S/. {amount}</Text>
          <Text style={[styles.darkText, { fontStyle: "italic", fontWeight: "300" }]}>{categories[category]}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Eliminar Transacción</Text>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lightText: {
    color: "#B9C1C3",
    fontWeight: "bold",
  },
  amountContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    paddingHorizontal: "5%",
    paddingBottom: 10,
  },
  descriptionText: {
    color: "#505A5B",
    fontSize: 15,
    textAlign: "justify",
    fontWeight: "500",
  },
  amount: {
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#00aa99",
  },
  negativeAmount: {
    color: "#FF8585",
  },
  darkText: {
    color: "#373F40",
    fontWeight: "bold",
  },
  container: {
    position: "absolute",
    backgroundColor: "#B9C1C3",
    top: "50%",
    transform: [{ translateY: -175 }],
    marginHorizontal: "5%",
    width: "90%",
    zIndex: 2,
    height: 350,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    gap: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#657274",
    height: 30,
    alignItems: "center",
  },
  footer: {
    gap: 5,
    marginHorizontal: "5%",
  },
  footerText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#d77",
    fontStyle: "italic",
    fontVariant: "small-caps",
  },
  deleteButton: {
    width: "100%",
    backgroundColor: "#ff000055",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
});
