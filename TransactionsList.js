import { StyleSheet, FlatList } from "react-native";
import { TransactionItem } from "./TransactionItem";
import db from "./db";
import { useEffect, useContext } from "react";
import { AppContext } from "./AppState";
export function TransactionsList() {
  const { transactions, setTransactions } = useContext(AppContext);
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql("select * from transactions", [], (_, { rows }) => setTransactions(rows._array.reverse()));
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
