import React, { useState } from "react";

const initialState = {
  appState: { isOpenModal: false },
  transactions: [],
  setTransactions: () => {},
  addTransaction: () => {},
  setAppState: () => {},
};

export const AppContext = React.createContext(initialState);

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [appState, setAppState] = useState({
    isOpenModal: false,
  });

  //add transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return <AppContext.Provider value={{ appState, setAppState, transactions, addTransaction, setTransactions }}>{children}</AppContext.Provider>;
};
