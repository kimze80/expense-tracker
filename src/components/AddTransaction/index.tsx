import React, { useState } from 'react';
import { Form, BtnAdd } from './styles';

const AddTransaction: React.FC = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <Form action="">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          />
        </div>
        <BtnAdd type="button">Add transaction</BtnAdd>
      </Form>
    </>
  );
};

export default AddTransaction;
