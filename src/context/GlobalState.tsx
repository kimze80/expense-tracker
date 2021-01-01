import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

interface Transaction {
  transactions: {
    id: number;
    text: string;
    amount: number;
  }[];
}

const initialState: Transaction = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

export const GlobalContext = createContext<{
  state: Transaction;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // function deleteTransaction(id: number) {
  //   dispatch({
  //     type: 'DELETE_TRANSACTION',
  //     payload: id,
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
