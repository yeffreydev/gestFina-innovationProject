import React, { useState } from "react";

const initialState = {
  appState: { isOpenModal: false },
  transactions: [],
  transactionSelected: null,
  setTransactions: () => {},
  addTransaction: () => {},
  updateTransaction: () => {},
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

  //update transaction
  const updateTransaction = (transaction) => {
    const newTransactions = transactions.map((t) => (parseInt(t.id) === parseInt(transaction.id) ? transaction : t));
    setTransactions(newTransactions);
    setTransactionSelected(null);
  };

  //remove transaction
  const removeTransaction = (id) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(newTransactions);
    setTransactionSelected(null);
  };

  return (
    <AppContext.Provider value={{ appState, transactionSelected, setTransactionSelected, setAppState, transactions, addTransaction, updateTransaction, removeTransaction, setTransactions }}>
      {children}
    </AppContext.Provider>
  );
};
