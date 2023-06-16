import db from "../db";
export const readAllTransactions = (cb) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`SELECT * FROM transactions ORDER BY STRFTIME('%Y-%m-%d', SUBSTR(date, 7, 4) || '-' || SUBSTR(date, 4, 2) || '-' || SUBSTR(date, 1, 2)) DESC, id desc;`, [], (_, { rows }) =>
        cb(rows._array)
      );
    },
    null,
    () => {}
  );
};

export const readTransactionsByCategory = (category, cb) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        `SELECT * FROM transactions where category = ? ORDER BY STRFTIME('%Y-%m-%d', SUBSTR(date, 7, 4) || '-' || SUBSTR(date, 4, 2) || '-' || SUBSTR(date, 1, 2)) DESC, id DESC;`,
        [category],
        (_, { rows }) => cb(rows._array)
      );
    },
    null,
    () => {}
  );
};
export const readTransactionById = (id, cb) => {};

export const insertTransaction = (transaction) => {
  const amount = parseFloat(transaction.amount).toFixed(2);
  db.transaction(
    (tx) => {
      tx.executeSql("insert into transactions (amount, description, category, date) values(?, ?, ?, ?)", [amount, transaction.description, transaction.category, transaction.date], () => {});
    },
    null,
    () => {}
  );
};

export const updateTransaction = (transaction) => {
  const amount = parseFloat(transaction.amount).toFixed(2);
  db.transaction(
    (tx) => {
      tx.executeSql("update transactions set amount = ?, description = ?, category = ?, date = ? where id = ?", [
        amount,
        transaction.description,
        transaction.category,
        transaction.date,
        transaction.id,
      ]);
    },
    null,
    () => {}
  );
};
