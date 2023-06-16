import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { NavBar } from "./../NavBar";
import { Balance } from "./../Balance";
import { TransactionsList } from "./../TransactionsList";
import { ModalContainer } from "./../ModalContainer";
import { ViewModal } from "./../ViewModal";
function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2E3432" barStyle={"light-content"} />
      {/* view modal  */}
      <ModalContainer>
        <ViewModal navigation={navigation} />
      </ModalContainer>
      {/* app  */}
      <NavBar navigation={navigation} />
      <Balance />
      <TransactionsList />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3432",
    gap: 5,
  },
});
