import { StyleSheet, StatusBar, SafeAreaView, View, ScrollView } from "react-native";
import { NavBar } from "./NavBar";
import { Balance } from "./Balance";
import { TransactionsList } from "./TransactionsList";
import { ModalContainer } from "./ModalContainer";
import { AppProvider } from "./AppState";
import { ViewModal } from "./ViewModal";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2E3432" barStyle={"light-content"} />
      <AppProvider>
        {/* modal container  */}
        <ModalContainer />
        {/* app  */}
        <NavBar />
        <Balance />
        <TransactionsList />
        {/* modal  */}
        <ViewModal />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3432",
    gap: 5,
  },
});
