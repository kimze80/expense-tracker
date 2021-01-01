/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default (state: any, action: any) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: typeof state) => transaction.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
