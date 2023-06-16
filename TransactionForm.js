import { useEffect, useState, useRef, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { validateAmount, validateDescription } from "./helpers";
import { Entypo } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import db from "./db";
import { categories } from "./categories";
import { AppContext } from "./AppState";

function TransactionForm({ isEdit, navigation }) {
  const { addTransaction, transactionSelected, updateTransaction } = useContext(AppContext);
  const [transactionState, setTransactionState] = useState({ id: "", amount: "", description: "", category: "others", date: "" });
  const [formError, setFormError] = useState("");
  const handlerAmountChange = (textNumber) => {
    setFormError("");
    const isNumberValid = validateAmount(textNumber);
    if (!isNumberValid) return;
    setTransactionState((prev) => ({ ...prev, amount: textNumber }));
  };
  const handlerDescriptionChange = (descriptionText) => {
    setFormError("");

    const isValidDescription = validateDescription(descriptionText);
    if (!isValidDescription) return;
    setTransactionState((prev) => ({ ...prev, description: descriptionText }));
  };
  const handlerCategoryChange = (value) => {
    setTransactionState((prev) => ({ ...prev, category: value }));
  };
  const handlerDateChange = (text = "") => {
    setFormError("");
    // Verifica si el usuario está borrando
    if (text.length < transactionState.date.length) {
      return setTransactionState({
        ...transactionState,
        date: text,
      });
    }
    //si el caracter / esta en la posicion correcta, entonces esta bien
    if ((text.length === 3 || text.length === 6) && text[text.length - 1] == "/") {
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

  const handlerSave = () => {
    if (!transactionState.amount) {
      return setFormError("el monto esta vacío");
    }
    if (!transactionState.description.trim()) {
      return setFormError("la descripción esta vacía");
    }
    if (!transactionState.date) {
      return setFormError("la fecha esta vacía");
    }
    if (transactionState.date.length !== 10) {
      return setFormError("fecha incorrecta");
    }

    //if all is correct, so save data
    if (!isEdit) return createNewTransaction(); //new transaction
    putTransaction(); //put transaction
  };
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  useEffect(() => {
    if (isEdit) setTransactionState({ ...transactionSelected, amount: transactionSelected.amount.toString(), id: transactionSelected.id.toString() });
  }, []);

  const putTransaction = () => {
    db.transaction(
      (tx) => {
        tx.executeSql("update transactions set amount = ?, description = ?, category = ?, date = ? where id = ?", [
          transactionState.amount,
          transactionState.description,
          transactionState.category,
          transactionState.date,
          transactionState.id,
        ]);
        updateTransaction(transactionState);
        navigation.navigate("Home");
      },
      null,
      () => {}
    );
  };
  const createNewTransaction = () => {
    const amount = parseFloat(transactionState.amount).toFixed(2);
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into transactions (amount, description, category, date) values(?, ?, ?, ?)",
          [amount, transactionState.description, transactionState.category, transactionState.date],
          (tx, results) => {
            const insertedId = results.insertId;
            tx.executeSql("select * from transactions where id = ?", [insertedId], (_, { rows }) => {
              const transaction = rows._array[0];
              addTransaction(transaction);
              setTransactionState({ amount: "", description: "", category: "others", date: "" });
              navigation.navigate("Home");
            });
          }
        );
      },
      null,
      () => {}
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.text}>Monto</Text>
        <TextInput
          style={[styles.input, styles.inputAmount, transactionState.amount < 0 || transactionState.amount.startsWith("-") ? styles.inputNegativeAmount : {}]}
          value={transactionState.amount}
          onChangeText={handlerAmountChange}
          keyboardType="numeric"
          placeholderTextColor={"#ACBAB5"}
          placeholder="Monto"
        />
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
        <TextInput style={[styles.input, styles.inputDate]} value={transactionState.date} placeholderTextColor={"#ACBAB5"} onChangeText={handlerDateChange} placeholder="10/06/2023" />
      </View>
      <View style={styles.group}>
        <Text style={[styles.text, { color: "#FF8585" }]}>{formError}</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.button} onPress={handlerSave}>
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
    fontSize: 17,
    color: "#CEDCD7",
  },
  inputAmount: {
    fontSize: 20,
    color: "#78FBD3",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  inputNegativeAmount: {
    color: "#FF8585",
  },
  inputDate: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 5,
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
