import { StyleSheet, FlatList } from "react-native";
import { TransactionItem } from "./TransactionItem";
import db from "./db";
import { useState, useEffect } from "react";

const data = [
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
  {
    amount: 100,
    date: "2021-01-01",
    description: "Pago de la cuenta de luz",
    category: "Casa",
  },
];

export function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql("select * from transactions", [], (_, { rows }) => setTransactions(rows._array));
      },
      null,
      () => {}
    );
  }, []);
  return <FlatList style={styles.container} data={transactions} renderItem={({ item }) => <TransactionItem item={item} />} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingBottom: 20,
  },
});
