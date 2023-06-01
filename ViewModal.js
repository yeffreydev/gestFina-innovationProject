import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
<AntDesign name="edit" size={24} color="black" />;
export function ViewModal() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.lightText}>01 de junio del 2023 13:00PM</Text>
          <TouchableOpacity>
            <AntDesign name="edit" size={24} color="#B9C1C3" />
          </TouchableOpacity>
        </View>
        <View style={styles.amountContent}>
          <Text style={[styles.amount, styles.amount, styles.positiveAmount]}>100</Text>
          <Text style={[styles.darkText, { fontStyle: "italic", fontWeight: "300" }]}>Comida</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lightText: {
    color: "#B9C1C3",
    fontWeight: "bold",
  },
  amountContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  descriptionText: {
    color: "#373F40",
    fontSize: 15,
    textAlign: "justify",
    fontWeight: "500",
  },
  amount: {
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  positiveAmount: {
    color: "#00aa99",
  },
  darkText: {
    color: "#373F40",
    fontWeight: "bold",
  },
  container: {
    position: "absolute",
    backgroundColor: "#B9C1C3",
    top: "50%",
    transform: [{ translateY: -150 }],
    marginHorizontal: "5%",
    width: "90%",
    zIndex: 2,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#657274",
    height: 30,
    alignItems: "center",
  },
});
