import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState, useRef, useContext } from "react";
import { Picker } from "@react-native-picker/picker";
import { Entypo } from "@expo/vector-icons";
import { AppContext } from "./AppState";
import { categories } from "./categories";
import db from "./db";
const balanceCategories = { all: "Todos", ...categories };
export function Balance() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { transactions, setTransactions } = useContext(AppContext);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const getExpenses = () => {
    let expenses = 0;
    transactions.forEach((element) => {
      if (element.amount < 0) expenses += parseInt(element.amount);
    });
    return expenses.toString();
  };

  const getIncomes = () => {
    let incomes = 0;
    transactions.forEach((element) => {
      if (element.amount > 0) incomes += parseInt(element.amount);
    });
    return incomes.toString();
  };
  const getBalance = () => {
    let balance = 0;
    transactions.forEach((element) => {
      balance += parseInt(element.amount);
    });
    return balance.toString();
  };

  const changeCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      return db.transaction(
        (tx) => {
          tx.executeSql("select * from transactions", [], (_, { rows }) => setTransactions(rows._array.reverse()));
        },
        null,
        () => {}
      );
    }
    db.transaction(
      (tx) => {
        tx.executeSql("select * from transactions where category = ?", [category], (_, { rows }) => setTransactions(rows._array.reverse()));
      },
      null,
      () => {}
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <Text style={styles.text}>Balance</Text>
        <Text style={[styles.balanceText, getBalance() < 0 && styles.negativeBalanceText]}>S/. {getBalance()}</Text>
      </View>
      <TouchableOpacity style={styles.select} onPress={open}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>{balanceCategories[selectedCategory]}</Text>
        <Entypo name="chevron-down" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.pickerContainer}>
        <Picker ref={pickerRef} selectedValue={selectedCategory} onValueChange={(itemValue, itemIndex) => changeCategory(itemValue)}>
          {Object.keys(balanceCategories).map((key, index) => {
            return <Picker.Item key={index} label={balanceCategories[key]} value={key} />;
          })}
        </Picker>
      </View>

      <View style={styles.resumen}>
        <View style={styles.gastos}>
          <Text style={styles.text}>Gastos</Text>
          <Text style={{ color: "#FF8585", fontWeight: "bold" }}>S/ {getExpenses()}</Text>
        </View>
        <View style={styles.ingresos}>
          <Text style={styles.text}>Ingresos</Text>
          <Text style={{ color: "#78FBD3", fontWeight: "bold" }}>S/ {getIncomes()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3E4543",
    gap: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  pickerContainer: {
    backgroundColor: "#000",
    display: "none",
  },
  select: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  text: {
    color: "#CEDCD7",
    fontWeight: "bold",
    fontSize: 20,
  },
  balanceText: {
    color: "#78FBD3",
    fontSize: 30,
    fontWeight: "bold",
  },
  negativeBalanceText: {
    color: "#FF8585",
  },
  balance: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resumen: {
    flexDirection: "row",
  },
  gastos: {
    flex: 1,
  },
  ingresos: {
    flex: 1,
  },
});
