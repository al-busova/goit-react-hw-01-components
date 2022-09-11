import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import css from './Transaction.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headTable}>
          <th className={css.headTableItem}>Type</th>
          <th className={css.headTableItem}>Amount</th>
          <th className={css.headTableItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.bodyTable}>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TransactionItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
