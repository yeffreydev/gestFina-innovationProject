import React, { useState } from "react";

const initialState = {
  appState: { isOpenModal: false },
  transactions: [],
  transactionSelected: null,
  setTransactions: () => {},
  addTransaction: () => {},
  setTransactionSelected: () => {},
  setAppState: () => {},
};

export const AppContext = React.createContext(initialState);

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionSelected, setTransactionSelected] = useState(null);
  const [appState, setAppState] = useState({
    isOpenModal: false,
  });

  //add transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return <AppContext.Provider value={{ appState, transactionSelected, setTransactionSelected, setAppState, transactions, addTransaction, setTransactions }}>{children}</AppContext.Provider>;
};
