import React, { useState } from "react";
import { readAllTransactions, readTransactionsByCategory } from "./sqlite/transactions";

const initialState = {
  appState: { isOpenModal: false },
  transactions: [],
  transactionSelected: null,
  filterCategory: "",
  setTransactions: () => {},
  addTransaction: () => {},
  updateTransaction: () => {},
  removeTransaction: () => {},
  setTransactionSelected: () => {},
  setFilterCategory: () => {},
  setAppState: () => {},
};

export const AppContext = React.createContext(initialState);

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionSelected, setTransactionSelected] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [appState, setAppState] = useState({
    isOpenModal: false,
  });

  //add transaction
  const addTransaction = (category) => {
    setFilterCategory(category);
    readTransactionsByCategory(category, (data) => {
      setTransactions(data);
    });
  };

  //remove transaction
  const removeTransaction = (id) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(newTransactions);
    setTransactionSelected(null);
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        transactionSelected,
        setTransactionSelected,
        setAppState,
        transactions,
        addTransaction,
        removeTransaction,
        setTransactions,
        filterCategory,
        setFilterCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
