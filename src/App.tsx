import React from 'react';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import GlobalStyle from './styles/global';

import { GlobalProvider } from './context/GlobalState';

const App: React.FC = () => (
  <GlobalProvider>
    <h2>Expense Tracker</h2>
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    <GlobalStyle />
  </GlobalProvider>
);

export default App;
