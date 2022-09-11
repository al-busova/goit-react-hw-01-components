import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.bodyTableCell}>{type}</td>
      <td className={css.bodyTableCell}>{amount}</td>
      <td className={css.bodyTableCell}>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
