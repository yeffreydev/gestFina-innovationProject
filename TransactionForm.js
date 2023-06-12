import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { validateAmount, validateDescription } from "./helpers";
const categories = {
  food: "Comida",
};

function TransactionForm({ isEdit, transaction }) {
  const [transactionState, setTransactionState] = useState({ amount: "", description: "" });
  const handlerAmountChange = (textNumber) => {
    const isNumberValid = validateAmount(textNumber);
    if (!isNumberValid) return;
    setTransactionState((prev) => ({ ...prev, amount: textNumber }));
  };
  const handlerDescriptionChange = (descriptionText) => {
    const isValidDescription = validateDescription(descriptionText);
    if (!isValidDescription) return;
    setTransactionState((prev) => ({ ...prev, description: descriptionText }));
  };
  useEffect(() => {
    if (isEdit && transaction) setTransactionState(transaction);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.text}>Monto</Text>
        <TextInput style={styles.input} value={transactionState.amount} onChangeText={handlerAmountChange} keyboardType="numeric" placeholderTextColor={"#ACBAB5"} placeholder="Monto" />
      </View>
      <View style={styles.group}>
        <Text style={styles.text}>Descripción</Text>
        <TextInput
          style={[styles.input, { textAlignVertical: "top", height: 100 }]}
          value={transactionState.description}
          onChangeText={handlerDescriptionChange}
          multiline
          placeholderTextColor={"#ACBAB5"}
          placeholder="Descripción"
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.text}>Categoria</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholderTextColor={"#ACBAB5"} placeholder="Monto" />
      </View>
      <View style={styles.group}>
        <Text style={styles.text}>Fecha</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholderTextColor={"#ACBAB5"} placeholder="Monto" />
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>{isEdit ? "Actualizar" : "Crear"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    gap: 20,
    marginTop: 25,
  },
  group: {
    gap: 5,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#CEDCD7",
    width: "100%",
    fontSize: 13,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1d2321",
    width: "100%",
    color: "#CEDCD7",
  },
  button: {
    backgroundColor: "#83B7C2",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 10,
  },
  btnTxt: {
    fontWeight: "900",
    color: "#1d2321",
    textTransform: "uppercase",
  },
});

export default TransactionForm;
