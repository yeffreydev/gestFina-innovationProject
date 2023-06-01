import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";
import { Entypo } from "@expo/vector-icons";
const times = { today: "Hoy", week: "Semana", month: "Mes", year: "Año", all: "Todos" };
export function Balance() {
  const [selectedTime, setSelectedTime] = useState("month");
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <Text style={styles.text}>Balance</Text>
        <Text style={styles.text}>S/. 0.00</Text>
      </View>
      <TouchableOpacity style={styles.select} onPress={open}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>{times[selectedTime]}</Text>
        <Entypo name="chevron-down" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.pickerContainer}>
        <Picker ref={pickerRef} selectedValue={selectedTime} onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}>
          <Picker.Item label={times.today} value="today" />
          <Picker.Item label={times.week} value="week" />
          <Picker.Item label={times.month} value="month" />
          <Picker.Item label={times.year} value="year" />
          <Picker.Item label={times.all} value="all" />
        </Picker>
      </View>

      <View style={styles.resumen}>
        <View style={styles.gastos}>
          <Text style={styles.text}>Gastos</Text>
          <Text style={{ color: "#d77", fontWeight: "bold" }}>S/ -100.00</Text>
        </View>
        <View style={styles.ingresos}>
          <Text style={styles.text}>Ingresos</Text>
          <Text style={{ color: "#00aa99", fontWeight: "bold" }}>S/ 100.00</Text>
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
    fontSize: 20,
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
