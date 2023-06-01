import { View, StyleSheet, TouchableWithoutFeedback, Modal } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "./AppState";

import { FontAwesome } from "@expo/vector-icons";
export const ModalContainer = ({ children }) => {
  const {
    appState: { isOpenModal },
    setAppState,
  } = useContext(AppContext);
  const pressOut = () => {
    setAppState({ isOpenModal: false });
  };
  return (
    <Modal animationType="none" transparent={true} onRequestClose={pressOut} visible={isOpenModal}>
      {isOpenModal && (
        <TouchableWithoutFeedback onPress={pressOut}>
          <View style={styles.touchable}></View>
        </TouchableWithoutFeedback>
      )}
      {children}
      {/* <View style={styles.close}>
        <FontAwesome name="close" size={50} color="#f2f2f2e6" />
      </View> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
  touchable: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    height: "100%",
  },
  content: {
    position: "absolute",
    width: "90%",
    height: 400,
    zIndex: 2,
    marginHorizontal: "5%",
    backgroundColor: "#fff",
  },
  close: {
    position: "absolute",
    bottom: "5%",
    width: "100%",
    alignItems: "center",
  },
});
