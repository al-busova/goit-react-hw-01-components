import PropTypes from 'prop-types';
// import css from "./Transaction.module.css";

import { TransactionItem } from "./TransactionItem";

export const TransactionHistory = ({transactions }) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            <tbody>
                {transactions.map(transaction => (
        <tr className="item" key ={transaction.id}>
      <TransactionItem type= {transaction.type} amount ={transaction.amount} currency ={transaction.currency}/>
    </tr>
    ))}
 
  </tbody>
</table>
  );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
PropTypes.shape({
        id: PropTypes.string.isRequired,
 type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    }),
    ), 
}