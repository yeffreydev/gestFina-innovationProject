import { StyleSheet, FlatList } from "react-native";
import { TransactionItem } from "./TransactionItem";
import { useEffect, useContext } from "react";
import { AppContext } from "./AppState";
import { readAllTransactions } from "./sqlite/transactions";
export function TransactionsList() {
  const { transactions, setTransactions } = useContext(AppContext);
  useEffect(() => {
    readAllTransactions((data) => {
      setTransactions(data);
    });
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
