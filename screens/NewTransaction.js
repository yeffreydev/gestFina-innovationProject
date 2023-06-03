import { View, StyleSheet } from "react-native";
import TransactionForm from "../TransactionForm";
function NewTransaction() {
  return (
    <View style={styles.container}>
      <TransactionForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3432",
  },
});

export default NewTransaction;
