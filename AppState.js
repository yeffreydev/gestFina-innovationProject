import React, { useState } from "react";

const initialState = {
  appState: { isOpenModal: false },
  setAppState: () => {},
};

export const AppContext = React.createContext(initialState);

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    isOpenModal: false,
  });

  return <AppContext.Provider value={{ appState, setAppState }}>{children}</AppContext.Provider>;
};
