import React, { useState } from "react";

const initialState = {
  appState: { isOpenModal: false },
  transactions: [],
  transactionSelected: null,
  setTransactions: () => {},
  addTransaction: () => {},
  removeTransaction: () => {},
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

  //remove transaction

  const removeTransaction = (id) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(newTransactions);
  };

  return (
    <AppContext.Provider value={{ appState, transactionSelected, setTransactionSelected, setAppState, transactions, addTransaction, removeTransaction, setTransactions }}>
      {children}
    </AppContext.Provider>
  );
};
