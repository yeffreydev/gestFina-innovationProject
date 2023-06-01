import { ScrollView, View, StyleSheet, Text, FlatList } from "react-native";
import { TransactionItem } from "./TransactionItem";
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
  return <FlatList style={styles.container} data={data} renderItem={({ item }) => <TransactionItem item={item} />} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingBottom: 20,
  },
});
