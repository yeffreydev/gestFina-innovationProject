import { useEffect } from "react";
import Router from "./router/Router";
import db from "./db";
import { AppProvider } from "./AppState";

export default function App() {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("create table if not exists transactions (id integer primary key not null, amount real, description text, category text, date text)");
    });
  }, []);
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
