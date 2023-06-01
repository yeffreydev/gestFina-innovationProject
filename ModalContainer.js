import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import React, { useContext, useState } from "react";
import { AppContext } from "./AppState";

export const ModalContainer = ({ children }) => {
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });
  const {
    appState: { isOpenModal },
    setAppState,
  } = useContext(AppContext);
  const pressOut = () => {
    setAppState({ isOpenModal: false });
  };
  return (
    <View style={styles.container} onLayout={() => setSize(Dimensions.get("screen"))}>
      {isOpenModal && (
        <TouchableWithoutFeedback onPress={pressOut}>
          <View style={{ zIndex: 10, backgroundColor: "#0008", width, height, position: "absolute", left: 0, top: 0 }}></View>
        </TouchableWithoutFeedback>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    zIndex: 9,
    position: "absolute",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
  },
});
