import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { UlContainer } from './styles';

const TransactionList: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <UlContainer id="list">
        {state.transactions.map((t) => (
          <li className={t.amount < 0 ? 'minus' : 'plus'} key={t.id}>
            {t.text}
            <span>
              {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}
            </span>
            <button
              type="button"
              className="delete-btn"
              onClick={() =>
                dispatch({
                  type: 'DELETE_TRANSACTION',
                  payload: t.id,
                })
              }
            >
              x
            </button>
          </li>
        ))}
      </UlContainer>
    </>
  );
};

export default TransactionList;
