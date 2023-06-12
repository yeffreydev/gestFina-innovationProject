import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { validateAmount, validateDescription } from "./helpers";
import { Entypo } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const categories = {
  salary: "Salario",
  investmentIncome: "Ingresos por Inversiones",
  pensions: "Pensiones",
  rentals: "Alquileres",
  occasionalIncome: "Ingresos Eventuales",
  housing: "Vivienda",
  utilities: "Servicios Básicos",
  food: "Alimentación",
  transportation: "Transporte",
  health: "Salud",
  entertainment: "Entretenimiento",
  clothing: "Ropa",
  education: "Educación",
  savingsAndInvestments: "Ahorros e Inversiones",
  debts: "Deudas",
  others: "Otros",
};

function TransactionForm({ isEdit, transaction }) {
  const [transactionState, setTransactionState] = useState({ amount: "", description: "", category: "others", date: "" });
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
  const handlerCategoryChange = (value) => {
    setTransactionState((prev) => ({ ...prev, category: value }));
  };
  const handleDateChange = (text = "") => {
    // Verifica si el usuario está borrando
    if (text.length < transactionState.date.length) {
      return setTransactionState({
        ...transactionState,
        date: text,
      });
    }

    // Permite solo números y un máximo de 2 para el día y mes y 4 para el año
    const textWithOnlyNumbers = text.replace(/[^0-9]/g, "");
    if (textWithOnlyNumbers.length > 8) return;

    let formattedDate = "";

    // Aplica el formato con el "/" automáticamente
    if (textWithOnlyNumbers.length <= 2) {
      formattedDate = textWithOnlyNumbers;
    } else if (textWithOnlyNumbers.length <= 4) {
      formattedDate = textWithOnlyNumbers.slice(0, 2) + "/" + textWithOnlyNumbers.slice(2, 4);
    } else {
      formattedDate = textWithOnlyNumbers.slice(0, 2) + "/" + textWithOnlyNumbers.slice(2, 4) + "/" + textWithOnlyNumbers.slice(4);
    }

    // Setea el nuevo valor formateado
    setTransactionState({
      ...transactionState,
      date: formattedDate,
    });
  };

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
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
        <TouchableOpacity style={styles.select} onPress={open}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>{categories[transactionState.category]}</Text>
          <Entypo name="chevron-down" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.pickerContainer}>
          <Picker ref={pickerRef} selectedValue={transactionState.category} onValueChange={(itemValue, itemIndex) => handlerCategoryChange(itemValue)}>
            {Object.keys(categories).map((key, index) => {
              return <Picker.Item key={index} label={categories[key]} value={key} />;
            })}
          </Picker>
        </View>
      </View>

      <View style={styles.group}>
        <Text style={styles.text}>Fecha</Text>
        <TextInput style={styles.input} value={transactionState.date} placeholderTextColor={"#ACBAB5"} onChangeText={handleDateChange} placeholder="10/06/2023" />
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
    flexDirection: "column",
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
  //picker
  pickerContainer: {
    backgroundColor: "#000",
    display: "none",
  },
  select: {
    width: "100%",
    flexDirection: "row",
    gap: 3,
  },
});

export default TransactionForm;
